import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getArticles } from "@/lib/blog/source";
import type { BlogArticle } from "@/types";

const FALLBACK_IMAGES = [
    {
        src: "/images/home-solutions/factory-security.webp",
        alt: "Nhân viên bảo vệ kiểm soát an ninh tại nhà máy",
    },
    {
        src: "/images/home-solutions/office-security.webp",
        alt: "Nhân viên bảo vệ vận hành an ninh tại tòa nhà",
    },
    {
        src: "/images/home-solutions/event-security.webp",
        alt: "Nhân viên bảo vệ kiểm soát khách tại sự kiện doanh nghiệp",
    },
];

const articleImage = (article: BlogArticle, index: number) => ({
    src: article.image || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length].src,
    alt:
        article.imageAlt ||
        FALLBACK_IMAGES[index % FALLBACK_IMAGES.length].alt,
});

function InsightMeta({ article }: { article: BlogArticle }) {
    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">
            <span>{article.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
            <span className="normal-case tracking-normal text-ink-3">
                {article.readTime} phút đọc
            </span>
        </div>
    );
}

function FeaturedInsight({ article }: { article: BlogArticle }) {
    const image = articleImage(article, 0);

    return (
        <article className="group grid overflow-hidden rounded-2xl bg-navy-900 text-white shadow-[0_24px_60px_rgba(7,23,46,0.14)] md:grid-cols-[1.08fr_0.92fr] lg:grid-cols-1">
            <Link
                href={`/bai-viet/${article.slug}`}
                aria-label={`Đọc bài viết: ${article.title}`}
                className="relative block min-h-64 overflow-hidden lg:aspect-[16/9]"
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-navy-900/10" aria-hidden="true" />
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
                <InsightMeta article={article} />
                <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-snug sm:text-[28px]">
                    <Link
                        href={`/bai-viet/${article.slug}`}
                        className="transition-colors hover:text-gold-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                        {article.title}
                    </Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-white/70">
                    {article.excerpt}
                </p>
                <Link
                    href={`/bai-viet/${article.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                    Tìm hiểu quy trình
                    <ArrowRight aria-hidden="true" size={17} />
                </Link>
            </div>
        </article>
    );
}

function InsightCard({
    article,
    index,
}: {
    article: BlogArticle;
    index: number;
}) {
    const image = articleImage(article, index);

    return (
        <article className="group grid grid-cols-[132px_1fr] gap-5 border-b border-line pb-6 last:border-0 last:pb-0 sm:grid-cols-[190px_1fr] lg:grid-cols-[172px_1fr]">
            <Link
                href={`/bai-viet/${article.slug}`}
                aria-label={`Đọc bài viết: ${article.title}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-800"
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 639px) 132px, 190px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none"
                />
            </Link>
            <div className="flex min-w-0 flex-col justify-center">
                <InsightMeta article={article} />
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-navy-900 sm:text-xl">
                    <Link
                        href={`/bai-viet/${article.slug}`}
                        className="transition-colors hover:text-gold-deep focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                        {article.title}
                    </Link>
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-3 transition-colors group-hover:text-gold-deep">
                    Đọc kinh nghiệm triển khai
                    <ArrowRight aria-hidden="true" size={16} />
                </span>
            </div>
        </article>
    );
}

export default async function KnowledgeInsights() {
    const articles = (await getArticles()).slice(0, 3);

    if (articles.length === 0) return null;

    return (
        <section
            id="knowledge"
            aria-labelledby="knowledge-heading"
            className="bg-white py-16 md:py-20 lg:py-24"
        >
            <Container>
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-3xl">
                        <p className="eyebrow">Kiến thức &amp; kinh nghiệm</p>
                        <h2
                            id="knowledge-heading"
                            className="heading-1 mt-4 text-navy-900"
                        >
                            Giải pháp an ninh từ kinh nghiệm vận hành thực tế
                        </h2>
                        <p className="mt-5 max-w-2xl text-[16px] leading-7 text-ink-3">
                            Những kiến thức, quy trình và kinh nghiệm được đúc
                            kết từ quá trình triển khai dịch vụ bảo vệ cho doanh
                            nghiệp, nhà máy và khu dân cư.
                        </p>
                    </div>
                    <Link
                        href="/bai-viet"
                        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-deep focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                        Xem thư viện kiến thức
                        <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
                    <FeaturedInsight article={articles[0]} />
                    {articles.length > 1 && (
                        <div className="flex flex-col justify-center gap-6">
                            {articles.slice(1).map((article, index) => (
                                <InsightCard
                                    key={article.slug}
                                    article={article}
                                    index={index + 1}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-9 flex justify-end">
                    <Link
                        href="/bai-viet"
                        className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-gold hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                        Xem tất cả bài viết chuyên môn
                        <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
