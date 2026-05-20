import { ArrowRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline";
    href?: string;
    arrow?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
}

const variants = {
    primary:
        "bg-gold text-white hover:bg-gold-deep",
    outline:
        "border border-line text-ink hover:border-ink",
};

export default function Button({
    children,
    variant = "primary",
    href,
    arrow,
    type,
    className = "",
}: ButtonProps) {
    const base = `inline-flex items-center justify-center gap-1 px-6 h-12 rounded text-sm font-semibold transition-colors cursor-pointer ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={base}>
                {children}
                {arrow && <ArrowRight size={16} className="ml-1" />}
            </a>
        );
    }

    return (
        <button type={type} className={base}>
            {children}
            {arrow && <ArrowRight size={16} className="ml-1" />}
        </button>
    );
}
