interface PhotoProps {
    label?: string;
    className?: string;
    overlay?: React.ReactNode;
}

export default function Photo({ label, className = "", overlay }: PhotoProps) {
    return (
        <div
            className={`relative bg-navy-700 rounded overflow-hidden ${className}`}
        >
            {label && (
                <span className="absolute top-3 right-3 text-xs text-white/50 font-mono">
                    {label}
                </span>
            )}
            {overlay && (
                <div className="absolute inset-0 flex items-end">
                    {overlay}
                </div>
            )}
        </div>
    );
}
