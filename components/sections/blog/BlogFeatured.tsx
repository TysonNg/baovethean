import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import Link from "next/link";
import type { BlogArticle } from "@/types";

interface BlogFeaturedProps {
    article: BlogArticle;
}

export default function BlogFeatured({ article }: BlogFeaturedProps) {
    return (
        <section className="marketing-section bg-bg-alt">
            <Container>
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-xs text-ink-3 mb-6"
                >
                    <Link href="/" className="hover:text-ink transition-colors">
                        Trang chủ
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span className="font-semibold text-ink">Tin tức</span>
                </nav>
                <Eyebrow text="Bài viết nổi bật" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 items-center">
                    <Link
                        href={`/bai-viet/${article.slug}`}
                        className="block rounded overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        aria-label={`Đọc bài viết: ${article.title}`}
                    >
                        <Photo
                            label={article.imageLabel}
                            className="aspect-[16/10] transition-transform duration-300 hover:scale-[1.02]"
                            overlay={
                                <div className="p-4 flex flex-col justify-between h-full w-full">
                                    <span className="w-fit bg-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                                        Bài đọc nhiều
                                    </span>
                                    <span className="text-[11px] text-white/70 uppercase tracking-[0.16em]">
                                        {article.imageLabel} · Chuyên đề an ninh
                                    </span>
                                </div>
                            }
                        />
                    </Link>

                    <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-3 uppercase tracking-wider mb-3">
                            <span className="font-semibold text-gold-deep">
                                {article.category}
                            </span>
                            <span>·</span>
                            <span>{article.date}</span>
                            <span>·</span>
                            <span>{article.readTime} phút đọc</span>
                        </div>
                        <h2 className="heading-2 text-ink mb-4">
                            <Link
                                href={`/bai-viet/${article.slug}`}
                                className="hover:text-gold-deep transition-colors"
                            >
                                {article.title}
                            </Link>
                        </h2>
                        <p className="text-ink-3 leading-relaxed mb-6">
                            {article.content}
                        </p>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-sm font-bold text-gold-soft">
                                {article.authorInitials}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-ink">
                                    {article.author}
                                </div>
                                <div className="text-xs text-ink-3">
                                    Cập nhật ngày {article.date}
                                </div>
                            </div>
                        </div>
                        <Button href={`/bai-viet/${article.slug}`} arrow>
                            Đọc tiếp
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
