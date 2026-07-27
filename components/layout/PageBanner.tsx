import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    compact?: boolean;
    parent?: {
        label: string;
        href: string;
    };
}

export default function PageBanner({
    title,
    subtitle,
    compact = false,
    parent,
}: PageBannerProps) {
    return (
        <section
            data-page-banner
            className={`relative isolate flex items-center overflow-hidden bg-navy-900 pt-20 text-white ${
                compact
                    ? "min-h-[280px] md:min-h-[340px]"
                    : "min-h-[340px] md:min-h-[420px]"
            }`}
        >
            <Image
                src="/hero-banner1.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-[62%_35%]"
            />
            <div
                className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/72 to-navy-900/35"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-transparent to-black/10"
                aria-hidden="true"
            />

            <Container className="relative z-10 w-full py-14 text-center md:py-20">
                <h1 className="mx-auto max-w-4xl text-[clamp(2rem,4.4vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white drop-shadow-sm">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                        {subtitle}
                    </p>
                )}
                <nav
                    aria-label="Breadcrumb"
                    className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-white/75"
                >
                    <Link href="/" className="transition-colors hover:text-white">
                        Trang chủ
                    </Link>
                    <span className="text-gold-soft" aria-hidden="true">›</span>
                    {parent && (
                        <>
                            <Link
                                href={parent.href}
                                className="transition-colors hover:text-white"
                            >
                                {parent.label}
                            </Link>
                            <span className="text-gold-soft" aria-hidden="true">›</span>
                        </>
                    )}
                    <span className="font-semibold text-white" aria-current="page">
                        {title}
                    </span>
                </nav>
            </Container>
        </section>
    );
}
