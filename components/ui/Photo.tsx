import Image from "next/image";

interface PhotoProps {
    label?: string;
    className?: string;
    overlay?: React.ReactNode;
    src?: string;
    alt?: string;
    sizes?: string;
}

export default function Photo({
    label,
    className = "",
    overlay,
    src,
    alt = "",
    sizes = "(max-width: 1023px) 100vw, 50vw",
}: PhotoProps) {
    return (
        <div
            className={`relative bg-navy-700 rounded overflow-hidden ${className}`}
        >
            {src && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    className="object-cover"
                />
            )}
            {label && (
                <span className="absolute top-3 right-3 text-xs text-white/70 font-mono drop-shadow">
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
