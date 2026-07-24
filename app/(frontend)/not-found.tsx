import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Không tìm thấy trang",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <section className="bg-white py-24 md:py-32">
            <Container>
                <div className="max-w-xl">
                    <p className="eyebrow text-gold-deep mb-4">Lỗi 404</p>
                    <h1 className="heading-display text-ink mb-5">
                        Không tìm thấy trang bạn yêu cầu
                    </h1>
                    <p className="lead text-ink-3 mb-8">
                        Trang có thể đã được di chuyển hoặc không còn tồn tại. Vui
                        lòng quay lại trang chủ hoặc xem các bài viết mới nhất.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="/" arrow>
                            Về trang chủ
                        </Button>
                        <Link
                            href="/bai-viet"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-line rounded px-5 h-11 hover:border-gold transition-colors"
                        >
                            Xem tin tức
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
