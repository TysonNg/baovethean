import Link from "next/link";
import { slugifyVi } from "@/lib/slug";

interface ArticleTagsProps {
    tags: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
    if (tags.length === 0) {
        return null;
    }

    return (
        <div className="max-w-2xl mt-12 border-t border-line pt-8">
            <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-ink-3 mr-2">Thẻ bài viết</span>
                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/tin-tuc?tag=${slugifyVi(tag)}`}
                        className="text-sm text-ink border border-line rounded px-4 py-2 hover:border-gold hover:text-gold-deep transition-colors"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}
