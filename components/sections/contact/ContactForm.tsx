"use client";

import { useRef, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

const inputClass =
    "w-full rounded border border-line bg-[#f7f7f5] px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-3/55 focus:border-gold focus:ring-2 focus:ring-gold/15";
const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-3";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<SubmitState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const payload = Object.fromEntries(new FormData(form));

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(
                    result.message || "Không thể gửi yêu cầu lúc này.",
                );
            }

            formRef.current?.reset();
            setStatus("success");
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Đã có lỗi xảy ra. Vui lòng thử lại.",
            );
            setStatus("error");
        }
    }

    return (
        <div className="rounded-lg bg-white p-6 shadow-[0_20px_55px_rgba(7,23,46,0.10)] ring-1 ring-black/[0.04] sm:p-8 lg:p-10">
            <h2 className="heading-2 text-ink">Gửi tin nhắn cho chúng tôi</h2>
            <p className="mt-3 text-sm leading-6 text-ink-3">
                Điền thông tin bên dưới, đội ngũ tư vấn sẽ phản hồi bạn trong
                thời gian sớm nhất.
            </p>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
            >
                <div className="sr-only" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                        id="contact-website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="contact-name" className={labelClass}>
                            Họ và tên *
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            required
                            minLength={2}
                            maxLength={100}
                            autoComplete="name"
                            placeholder="Nguyễn Văn A"
                            className={`${inputClass} h-12`}
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-phone" className={labelClass}>
                            Số điện thoại *
                        </label>
                        <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            required
                            minLength={8}
                            maxLength={20}
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="0901 234 567"
                            className={`${inputClass} h-12`}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="contact-email" className={labelClass}>
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        maxLength={254}
                        autoComplete="email"
                        placeholder="email@company.com"
                        className={`${inputClass} h-12`}
                    />
                </div>

                <div>
                    <label htmlFor="contact-message" className={labelClass}>
                        Lời nhắn *
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={3000}
                        rows={6}
                        placeholder="Bạn cần chúng tôi hỗ trợ điều gì?"
                        className={`${inputClass} resize-y py-3`}
                    />
                </div>

                <div aria-live="polite">
                    {status === "success" && (
                        <p className="flex items-center gap-2 rounded bg-green-50 px-4 py-3 text-sm text-green-700">
                            <CheckCircle2 size={18} aria-hidden="true" />
                            Tin nhắn đã được gửi. Chúng tôi sẽ sớm liên hệ với
                            bạn.
                        </p>
                    )}
                    {status === "error" && (
                        <p
                            role="alert"
                            className="rounded bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                            {errorMessage}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
                >
                    {status === "submitting" ? (
                        <>
                            <LoaderCircle
                                size={17}
                                className="animate-spin"
                                aria-hidden="true"
                            />
                            Đang gửi...
                        </>
                    ) : (
                        <>
                            <Send size={16} aria-hidden="true" />
                            Gửi tin nhắn
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
