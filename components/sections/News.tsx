import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { NEWS_ARTICLES } from "@/lib/data";

export default function News() {
    return (
        <section id="news" className="py-20 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <Eyebrow text="Tin tức & Kiến thức" />
                        <h2 className="heading-1 text-ink mt-4">
                            Cập nhật từ nội bộ — kinh nghiệm vận hành thực tế.
                        </h2>
                    </div>
                    <Button href="/tin-tuc" variant="outline" arrow>
                        Xem tất cả bài viết
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {NEWS_ARTICLES.map((article) => (
                        <article key={article.imageLabel}>
                            <Photo
                                label={article.imageLabel}
                                className="aspect-[16/10] mb-4"
                                overlay={
                                    <div className="p-4">
                                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                            Bài viết · {article.category}
                                        </span>
                                    </div>
                                }
                            />
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-gold-deep uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span className="text-xs text-ink-3">
                                    {article.date}
                                </span>
                            </div>
                            <h3 className="heading-3 text-ink mb-2">
                                {article.title}
                            </h3>
                            <p className="text-sm text-ink-3 leading-relaxed mb-3">
                                {article.excerpt}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:text-gold transition-colors"
                            >
                                Đọc bài viết
                                <ArrowRight size={14} />
                            </a>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
