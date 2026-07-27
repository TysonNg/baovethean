import { MessageCircle, Link as LinkIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/layout/PageBanner";
import type { BlogArticle } from "@/types";

function FacebookIcon({ size = 14 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V13h2.8v8h3.4z" />
        </svg>
    );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" />
        </svg>
    );
}

interface ArticleHeroProps {
    article: BlogArticle;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
    return (
        <>
            <PageBanner
                title={article.title}
                parent={{ label: "Tin tức", href: "/bai-viet" }}
            />
        <section className="bg-white pb-12 pt-12 md:pt-16">
            <Container>
                <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider mb-4">
                        <span className="font-semibold text-gold-deep">
                            {article.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-line" />
                        <span className="text-ink-3">{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-line" />
                        <span className="text-ink-3">
                            {article.readTime} phút đọc
                        </span>
                    </div>

                    <p className="lead text-ink-3 mb-10">{article.excerpt}</p>
                </div>

                <div className="border-t border-line pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-xs font-semibold text-gold">
                                {article.authorInitials}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-ink">
                                {article.author}
                            </p>
                            <p className="text-xs text-ink-3 mt-0.5">
                                {article.authorRole}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="eyebrow text-ink-3 mr-1">Chia sẻ</span>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://baovethean.vn/bai-viet/${article.slug}`}
                            aria-label="Chia sẻ qua Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 border border-line rounded flex items-center justify-center text-ink-3 hover:border-gold hover:text-ink transition-colors"
                        >
                            <FacebookIcon size={14} />
                        </a>
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://baovethean.vn/bai-viet/${article.slug}`}
                            aria-label="Chia sẻ qua LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 border border-line rounded flex items-center justify-center text-ink-3 hover:border-gold hover:text-ink transition-colors"
                        >
                            <LinkedinIcon size={14} />
                        </a>
                        <a
                            href={`sms:?body=https://baovethean.vn/bai-viet/${article.slug}`}
                            aria-label="Chia sẻ qua tin nhắn"
                            className="w-9 h-9 border border-line rounded flex items-center justify-center text-ink-3 hover:border-gold hover:text-ink transition-colors"
                        >
                            <MessageCircle size={14} strokeWidth={1.75} />
                        </a>
                        <button
                            type="button"
                            aria-label="Sao chép đường dẫn bài viết"
                            className="w-9 h-9 border border-line rounded flex items-center justify-center text-ink-3 hover:border-gold hover:text-ink transition-colors"
                        >
                            <LinkIcon size={14} strokeWidth={1.75} />
                        </button>
                    </div>
                </div>

                <figure className="relative aspect-[16/9] rounded overflow-hidden bg-navy-800 mt-10">
                    <span className="absolute top-4 right-4 text-xs font-mono text-white/50 uppercase tracking-wider">
                        {article.heroLabel}
                    </span>

                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)",
                        }}
                        aria-hidden="true"
                    />

                    <figcaption className="absolute bottom-4 left-6 text-xs font-mono uppercase tracking-wider text-white/50">
                        <span aria-hidden="true">▢ </span>
                        {article.heroCaption}
                    </figcaption>
                </figure>
            </Container>
        </section>
        </>
    );
}
