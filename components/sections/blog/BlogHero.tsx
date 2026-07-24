import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BlogHero() {
    return (
        <section className="bg-white py-8 md:py-10">
            <Container>
                <nav className="flex items-center gap-2 text-xs text-ink-3 mb-5">
                    <Link href="/" className="hover:text-ink transition-colors">
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <span className="font-semibold text-ink">Tin tức</span>
                </nav>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <Eyebrow text="Tin tức & Kiến thức" />
                    <h1 className="heading-1 text-ink sm:ml-6">
                        Bài viết & Kiến thức an ninh
                    </h1>
                </div>
            </Container>
        </section>
    );
}
