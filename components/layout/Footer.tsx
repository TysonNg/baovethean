import {
    ArrowRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { COMPANY, FOOTER_LINKS, FOOTER_SERVICES } from "@/lib/data";

const SOCIAL_LINKS = [
    {
        label: "Facebook",
        href: "#",
        path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
        label: "YouTube",
        href: "#",
        path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z",
    },
    {
        label: "LinkedIn",
        href: "#",
        path: "M6.5 8.5H3.2V19h3.3zM4.85 3A1.9 1.9 0 1 0 4.85 6.8 1.9 1.9 0 0 0 4.85 3zM20.8 13c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.69V8.5h-3.3V19h3.3v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19h3.3z",
    },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-gold-soft">
            {children}
            <span className="mt-3 block h-px w-10 bg-gold" aria-hidden="true" />
        </h2>
    );
}

function FooterNav({
    links,
    label,
}: {
    links: { label: string; href: string }[];
    label: string;
}) {
    return (
        <nav aria-label={label} className="mt-6">
            <ul className="space-y-4">
                {links.slice(0, 4).map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                        <Link
                            href={link.href}
                            className="group flex items-center justify-between gap-4 text-sm text-white/72 transition-colors hover:text-gold-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                            <span>{link.label}</span>
                            <ArrowRight
                                aria-hidden="true"
                                size={15}
                                className="shrink-0 text-gold transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Footer() {
    const phoneHref = `tel:${COMPANY.hotline.replaceAll(" ", "")}`;

    return (
        <footer className="bg-navy-900 text-white">
            <Container>
                <div className="grid gap-12 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-[1.3fr_0.82fr_0.82fr_1.16fr] lg:gap-10">
                    <div className="lg:pr-5">
                        <Link
                            href="/"
                            aria-label="Bảo vệ Thế An — Trang chủ"
                            className="inline-flex items-center gap-4 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                            <Image
                                src="/logo1.png"
                                alt=""
                                width={68}
                                height={79}
                                className="h-[76px] w-auto object-contain"
                            />
                            <span>
                                <span className="block text-sm font-bold uppercase tracking-[0.12em] text-white/80">
                                    Bảo vệ
                                </span>
                                <span className="mt-1 block text-3xl font-bold uppercase tracking-[-0.03em] text-white">
                                    Thế An
                                </span>
                                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-gold-soft">
                                    Uy tín · Chuyên nghiệp · Tận tâm
                                </span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
                            {COMPANY.name} cung cấp giải pháp và dịch vụ bảo vệ
                            chuyên nghiệp, uy tín cho doanh nghiệp, tổ chức và cá
                            nhân.
                        </p>

                        <div className="mt-5 flex max-w-sm items-start gap-3 text-sm leading-6 text-white/72">
                            <MapPin
                                aria-hidden="true"
                                size={20}
                                className="mt-0.5 shrink-0 text-gold"
                            />
                            <span>{COMPANY.address}</span>
                        </div>

                        <div className="mt-6 flex gap-3">
                            {SOCIAL_LINKS.map(({ label, href, path }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:border-gold hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                                >
                                    <svg
                                        aria-hidden="true"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d={path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <FooterHeading>Dịch vụ</FooterHeading>
                        <FooterNav
                            links={FOOTER_SERVICES}
                            label="Dịch vụ bảo vệ"
                        />
                    </div>

                    <div>
                        <FooterHeading>Thông tin</FooterHeading>
                        <FooterNav
                            links={FOOTER_LINKS}
                            label="Thông tin doanh nghiệp"
                        />
                    </div>

                    <div className="border-white/18 lg:border-l lg:pl-10">
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                                <Phone aria-hidden="true" size={23} />
                            </span>
                            <div>
                                <span className="block text-xs uppercase tracking-[0.1em] text-white/55">
                                    Hotline tư vấn
                                </span>
                                <a
                                    href={phoneHref}
                                    className="mt-1 block text-xl font-bold text-gold-soft transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold lg:text-[28px]"
                                >
                                    {COMPANY.hotline}
                                </a>
                            </div>
                        </div>

                        <div className="mt-7 border-t border-gold/65 pt-6">
                            <a
                                href={`mailto:${COMPANY.email}`}
                                className="flex items-center gap-4 text-sm text-white/75 transition-colors hover:text-gold-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                            >
                                <Mail
                                    aria-hidden="true"
                                    size={21}
                                    className="shrink-0"
                                />
                                <span className="break-all">{COMPANY.email}</span>
                            </a>
                        </div>

                        <Link
                            href="/lien-he"
                            className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded border border-gold px-6 text-sm font-bold uppercase tracking-[0.06em] text-gold-soft transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                        >
                            Liên hệ ngay
                            <ArrowRight aria-hidden="true" size={17} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-gold/65 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <span>
                        &copy; 2026 {COMPANY.fullName} · MST {COMPANY.mst}
                    </span>
                    <nav aria-label="Chính sách">
                        <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li aria-hidden="true" className="text-gold">
                                •
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                                >
                                    Điều khoản sử dụng
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
