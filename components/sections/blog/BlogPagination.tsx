import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function pageClassName(isActive: boolean) {
    const base = "w-10 h-10 rounded text-sm font-medium transition-colors";

    if (isActive) {
        return `${base} bg-navy-900 text-white`;
    }

    return `${base} border border-line text-ink-3 hover:border-ink hover:text-ink`;
}

export default function BlogPagination({
    currentPage,
    totalPages,
    onPageChange,
}: BlogPaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav
            aria-label="Phân trang bài viết"
            className="flex items-center justify-center gap-2 mt-12"
        >
            <button
                type="button"
                aria-label="Trang trước"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded border border-line text-ink-3 hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 transition-colors inline-flex items-center justify-center"
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    aria-current={page === currentPage ? "page" : undefined}
                    onClick={() => onPageChange(page)}
                    className={pageClassName(page === currentPage)}
                >
                    {page}
                </button>
            ))}

            <button
                type="button"
                aria-label="Trang sau"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded border border-line text-ink-3 hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 transition-colors inline-flex items-center justify-center"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
}
