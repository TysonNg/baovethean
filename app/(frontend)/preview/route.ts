import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");

    if (!secret || secret !== process.env.PAYLOAD_PREVIEW_SECRET || !slug) {
        return new Response("Token preview không hợp lệ.", { status: 401 });
    }

    const dm = await draftMode();
    dm.enable();

    redirect(`/bai-viet/${slug}`);
}
