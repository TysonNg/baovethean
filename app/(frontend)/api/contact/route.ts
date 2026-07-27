import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";
import { COMPANY } from "@/lib/data";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_SIZE_BYTES = 16 * 1024;

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const globalRateLimit = globalThis as typeof globalThis & {
    contactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimit =
    globalRateLimit.contactRateLimit ??
    (globalRateLimit.contactRateLimit = new Map<string, RateLimitEntry>());

type ContactPayload = {
    name?: unknown;
    phone?: unknown;
    email?: unknown;
    message?: unknown;
    website?: unknown;
};

function getClientIp(request: NextRequest) {
    return (
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip")?.trim() ||
        "unknown"
    );
}

function isRateLimited(ip: string) {
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (!entry || entry.resetAt <= now) {
        rateLimit.set(ip, {
            count: 1,
            resetAt: now + RATE_LIMIT_WINDOW_MS,
        });
        return false;
    }

    entry.count += 1;
    return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function cleanString(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(payload: ContactPayload) {
    const data = {
        name: cleanString(payload.name),
        phone: cleanString(payload.phone),
        email: cleanString(payload.email),
        message: cleanString(payload.message),
        website: cleanString(payload.website),
    };

    if (data.website) {
        return { data, error: "Yêu cầu không hợp lệ." };
    }
    if (data.name.length < 2 || data.name.length > 100) {
        return { data, error: "Vui lòng nhập họ tên hợp lệ." };
    }
    if (/[\r\n]/.test(data.name)) {
        return { data, error: "Vui lòng nhập họ tên hợp lệ." };
    }
    if (
        data.phone.length < 8 ||
        data.phone.length > 20 ||
        !/^[+\d\s().-]+$/.test(data.phone)
    ) {
        return { data, error: "Vui lòng nhập số điện thoại hợp lệ." };
    }
    if (data.email && (data.email.length > 254 || !isEmail(data.email))) {
        return { data, error: "Vui lòng nhập email hợp lệ." };
    }
    if (data.message.length < 10 || data.message.length > 3000) {
        return {
            data,
            error: "Lời nhắn cần có từ 10 đến 3.000 ký tự.",
        };
    }

    return { data, error: null };
}

function getSmtpConfig() {
    const port = Number.parseInt(process.env.SMTP_PORT || "587", 10);
    const host = process.env.SMTP_HOST?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM?.trim() || user;
    const to = process.env.CONTACT_TO?.trim() || COMPANY.email;

    if (!host || !user || !pass || !from || !Number.isFinite(port)) {
        return null;
    }

    return {
        transport: {
            host,
            port,
            secure: process.env.SMTP_SECURE === "true",
            auth: { user, pass },
        },
        from,
        to,
    };
}

export async function POST(request: NextRequest) {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return Response.json(
            { message: "Định dạng yêu cầu không được hỗ trợ." },
            { status: 415 },
        );
    }

    const contentLength = Number.parseInt(
        request.headers.get("content-length") || "0",
        10,
    );
    if (
        Number.isFinite(contentLength) &&
        contentLength > MAX_BODY_SIZE_BYTES
    ) {
        return Response.json(
            { message: "Nội dung gửi lên vượt quá giới hạn cho phép." },
            { status: 413 },
        );
    }

    if (isRateLimited(getClientIp(request))) {
        return Response.json(
            {
                message:
                    "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 15 phút.",
            },
            { status: 429 },
        );
    }

    let payload: ContactPayload;
    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        return Response.json(
            { message: "Dữ liệu gửi lên không hợp lệ." },
            { status: 400 },
        );
    }

    const { data, error } = validatePayload(payload);
    if (error) {
        return Response.json({ message: error }, { status: 400 });
    }

    const smtp = getSmtpConfig();
    if (!smtp) {
        return Response.json(
            {
                message:
                    "Hệ thống gửi email chưa được cấu hình. Vui lòng gọi hotline để được hỗ trợ.",
            },
            { status: 503 },
        );
    }

    const safe = {
        name: escapeHtml(data.name),
        phone: escapeHtml(data.phone),
        email: escapeHtml(data.email || "Không cung cấp"),
        message: escapeHtml(data.message).replaceAll("\n", "<br />"),
    };

    try {
        const transporter = nodemailer.createTransport(smtp.transport);
        await transporter.sendMail({
            from: smtp.from,
            to: smtp.to,
            replyTo: data.email || undefined,
            subject: `Liên hệ mới từ website — ${data.name}`,
            text: [
                `Họ và tên: ${data.name}`,
                `Số điện thoại: ${data.phone}`,
                `Email: ${data.email || "Không cung cấp"}`,
                "",
                "Lời nhắn:",
                data.message,
            ].join("\n"),
            html: `
                <h2>Liên hệ mới từ website Bảo vệ Thế An</h2>
                <p><strong>Họ và tên:</strong> ${safe.name}</p>
                <p><strong>Số điện thoại:</strong> ${safe.phone}</p>
                <p><strong>Email:</strong> ${safe.email}</p>
                <p><strong>Lời nhắn:</strong></p>
                <p>${safe.message}</p>
            `,
        });

        return Response.json({
            message: "Tin nhắn đã được gửi thành công.",
        });
    } catch {
        return Response.json(
            {
                message:
                    "Chưa thể gửi tin nhắn. Vui lòng thử lại hoặc gọi hotline.",
            },
            { status: 502 },
        );
    }
}
