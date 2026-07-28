import { Check } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import type { ProcessStepDetail } from "@/types";

interface ProcessStepProps {
    step: ProcessStepDetail;
    index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
    const processImages = [
        "/images/anh_nhan_vien/1784734717643_1512254896023574579_413629033841281138_47cfea147014387ad152d61510e2782d.jpg",
        "/images/anh_nhan_vien/1784735915183_1512254896023574579_413629033841281138_282f410cfec55c3f3d9d27940f880c7a.jpg",
        "/images/anh_nhan_vien/1784737520772_1512254896023574579_413629033841281138_31b535d4193c6820cb174cd61ce63332.jpg",
        "/images/anh_nhan_vien/1784736767820_1512254896023574579_413629033841281138_043b1f2d9ed77e4fb74f4a2bd275440c.jpg",
        "/images/anh_nhan_vien/1784737057238_1512254896023574579_413629033841281138_2ba72e6e240361059d8b0968e57b836e.jpg",
        "/images/anh_nhan_vien/1784737194833_1512254896023574579_413629033841281138_45c16b85a56d037a53421dae11d6ac7c.jpg",
    ];
    const photoOnRight = index % 2 === 0;
    const isLight = step.photoVariant === "light";

    const content = (
        <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-900 rounded flex items-center justify-center shrink-0">
                    <span className="text-white font-semibold">
                        {step.number}
                    </span>
                </div>
                <div>
                    <p className="eyebrow text-gold">{step.eyebrow}</p>
                    <p className="text-sm font-semibold text-ink uppercase tracking-wider mt-1">
                        {step.label}
                    </p>
                </div>
            </div>

            <h2 className="heading-2 text-ink mb-4">{step.title}</h2>
            <p className="text-ink-3 leading-relaxed mb-8">
                {step.description}
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-6 mb-8">
                {step.meta.map((cell) => (
                    <div key={cell.label}>
                        <dt className="eyebrow text-ink-3">{cell.label}</dt>
                        <dd className="text-sm font-semibold text-ink mt-2">
                            {cell.value}
                        </dd>
                    </div>
                ))}
            </dl>

            <ul className="space-y-3">
                {step.checklist.map((item) => (
                    <li
                        key={item.label}
                        className="flex items-start gap-3 text-sm text-ink-3"
                    >
                        <Check
                            size={16}
                            className="text-gold mt-1 shrink-0"
                            aria-hidden="true"
                        />
                        <span>
                            <strong className="font-semibold text-ink">
                                {item.label}:
                            </strong>{" "}
                            {item.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );

    const photo = (
        <figure
            className={`relative aspect-[5/4] rounded overflow-hidden ${
                isLight ? "bg-stone-300" : "bg-navy-800"
            }`}
        >
            <Image
                src={processImages[index]}
                alt={`Đội ngũ Bảo vệ Thế An — ${step.photoLabel}`}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/20" aria-hidden="true" />
            <span
                className={`absolute top-4 right-4 text-xs font-mono ${
                    isLight ? "text-ink-3" : "text-white/50"
                }`}
            >
                {step.code}
            </span>

            <div
                className={`absolute inset-0 opacity-30 ${
                    isLight ? "" : ""
                }`}
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)",
                }}
                aria-hidden="true"
            />

            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded shadow-md p-5 max-w-[220px]">
                <div className="flex items-start gap-3">
                    <span
                        className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold pt-1 shrink-0"
                        aria-hidden="true"
                    >
                        —
                    </span>
                    <div>
                        <span className="eyebrow text-gold block mb-2">
                            {step.overlay.caption}
                        </span>
                        <p className="text-xs text-ink leading-relaxed">
                            {step.overlay.text}
                        </p>
                    </div>
                </div>
            </div>

            <figcaption
                className={`absolute bottom-4 left-6 text-xs font-mono uppercase tracking-wider ${
                    isLight ? "text-ink-3" : "text-white/50"
                }`}
            >
                <span aria-hidden="true">▢ </span>
                {step.photoLabel}
            </figcaption>
        </figure>
    );

    return (
        <section
            id={`qt-${step.number}`}
            aria-labelledby={`qt-${step.number}-title`}
            className={`scroll-mt-24 py-20 md:py-24 ${
                index % 2 === 1 ? "bg-bg-alt" : "bg-white"
            }`}
        >
            <Container>
                <div className="sr-only" id={`qt-${step.number}-title`}>
                    Bước {step.number}: {step.title}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {photoOnRight ? (
                        <>
                            {content}
                            {photo}
                        </>
                    ) : (
                        <>
                            {photo}
                            {content}
                        </>
                    )}
                </div>
            </Container>
        </section>
    );
}
