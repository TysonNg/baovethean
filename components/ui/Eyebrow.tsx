interface EyebrowProps {
    text: string;
    light?: boolean;
}

export default function Eyebrow({ text, light }: EyebrowProps) {
    return (
        <div className="flex items-center gap-3">
            <span className={`w-8 h-px ${light ? "bg-gold-soft" : "bg-gold"}`} />
            <span className={`eyebrow ${light ? "text-gold-soft" : ""}`}>
                {text}
            </span>
        </div>
    );
}
