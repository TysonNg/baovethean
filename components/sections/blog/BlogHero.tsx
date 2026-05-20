import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BlogHero() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <nav className="flex items-center gap-2 text-sm text-ink-3 mb-10">
                    <Link href="/" className="hover:text-ink transition-colors">
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <span className="font-semibold text-ink">Tin tức</span>
                </nav>

                <div className="max-w-3xl">
                    <Eyebrow text="Tin tức & Kiến thức" />
                    <h1 className="heading-1 text-ink mt-4 mb-4">
                        Tin tức & Kiến thức an ninh
                    </h1>
                    <p className="lead text-ink-3">
                        Cập nhật kiến thức, kinh nghiệm và giải pháp bảo vệ
                        chuyên nghiệp cho doanh nghiệp.
                    </p>
                </div>
            </Container>
        </section>
    );
}
