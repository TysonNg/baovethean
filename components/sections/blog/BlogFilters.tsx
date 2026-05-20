import type { BlogCategory } from "@/types";

interface BlogFiltersProps {
    categories: BlogCategory[];
    activeCategory: string | null;
    onCategoryChange: (slug: string | null) => void;
}

function filterClassName(isActive: boolean) {
    const base = "px-4 py-2 rounded text-sm font-medium transition-colors";

    if (isActive) {
        return `${base} bg-navy-900 text-white`;
    }

    return `${base} border border-line text-ink-3 hover:border-ink hover:text-ink`;
}

export default function BlogFilters({
    categories,
    activeCategory,
    onCategoryChange,
}: BlogFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2">
            <button
                type="button"
                onClick={() => onCategoryChange(null)}
                className={filterClassName(activeCategory === null)}
            >
                Tất cả
            </button>
            {categories.map((category) => (
                <button
                    key={category.slug}
                    type="button"
                    onClick={() => onCategoryChange(category.slug)}
                    className={filterClassName(activeCategory === category.slug)}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
