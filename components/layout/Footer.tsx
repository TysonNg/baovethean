import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, FOOTER_LINKS, FOOTER_SERVICES } from "@/lib/data";
import { getPayloadClient } from "@/lib/payload/getPayload";

async function getSiteSettings() {
    try {
        const payload = await getPayloadClient();
        return await payload.findGlobal({ slug: "site-settings" });
    } catch {
        return null;
    }
}

function getMapEmbedUrl(mapUrl: string | null | undefined, address: string) {
    const configuredUrl = mapUrl?.trim();

    if (configuredUrl) {
        return configuredUrl;
    }

    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

const SOCIAL_LINKS = [
    {
        label: "Facebook",
        href: "#",
        text: "f",
    },
    {
        label: "YouTube",
        href: "#",
        text: "▶",
    },
    {
        label: "LinkedIn",
        href: "#",
        text: "in",
    },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-base font-bold text-white sm:text-lg">
            {children}
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
        <nav aria-label={label} className="mt-5">
            <ul className="space-y-3">
                {links.slice(0, 5).map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                        <Link
                            href={link.href}
                            className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors hover:text-gold-soft focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                        >
                            <span
                                className="h-1 w-1 rounded-full bg-white/35 transition-colors group-hover:bg-gold"
                                aria-hidden="true"
                            />
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default async function Footer() {
    const phoneHref = `tel:${COMPANY.hotline.replaceAll(" ", "")}`;
    const settings = await getSiteSettings();
    const mapAddress = settings?.address?.trim() || COMPANY.address;
    const mapEmbedUrl = getMapEmbedUrl(settings?.googleMapsUrl, mapAddress);

    return (
        <footer className="border-t border-white/10 bg-navy-900 text-white">
            <div className="border-b border-white/12 bg-white/[0.035]">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid gap-6 py-9 md:grid-cols-[0.55fr_1.15fr] md:items-center lg:grid-cols-[0.45fr_1fr_1.2fr] lg:gap-10">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Đăng ký nhận tin
                        </h2>

                        <p className="max-w-xl text-sm leading-6 text-white/60">
                            Nhận thông tin mới nhất về giải pháp an ninh, kinh
                            nghiệm quản lý và các dịch vụ bảo vệ chuyên nghiệp.
                        </p>

                        <form
                            action="/lien-he"
                            method="get"
                            className="flex overflow-hidden rounded-sm bg-white/10 ring-1 ring-white/15 focus-within:ring-2 focus-within:ring-gold"
                        >
                            <label htmlFor="footer-email" className="sr-only">
                                Email của bạn
                            </label>
                            <input
                                id="footer-email"
                                name="email"
                                type="email"
                                required
                                placeholder="Nhập địa chỉ email"
                                className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/35"
                            />
                            <button
                                type="submit"
                                aria-label="Gửi email"
                                className="m-1.5 flex aspect-square w-10 cursor-pointer items-center justify-center bg-gold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <ArrowRight aria-hidden="true" size={19} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="grid gap-x-8 gap-y-12 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-[1.35fr_0.7fr_0.8fr_0.95fr_1.2fr]">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link
                            href="/"
                            aria-label="Bảo vệ Thế An — Trang chủ"
                            className="inline-flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                        >
                            <Image
                                src="/logo1.png"
                                alt=""
                                width={58}
                                height={68}
                                className="h-16 w-auto object-contain"
                            />
                            <span>
                                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                                    Bảo vệ
                                </span>
                                <span className="block text-2xl font-extrabold uppercase tracking-[-0.03em]">
                                    Thế An
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-gold-deep">
                                    Uy tín · Chuyên nghiệp · Tận tâm
                                </span>
                            </span>
                        </Link>

                        <div className="mt-8 h-px w-full max-w-[230px] bg-gold/70" />
                        <p className="mt-5 max-w-[260px] text-sm leading-6 text-white/60">
                            {COMPANY.description}
                        </p>

                        <div className="mt-6 flex gap-3">
                            {SOCIAL_LINKS.map(({ label, href, text }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-xs font-bold text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                                >
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <FooterHeading>Thông tin</FooterHeading>
                        <FooterNav
                            links={FOOTER_LINKS}
                            label="Thông tin doanh nghiệp"
                        />
                    </div>

                    <div>
                        <FooterHeading>Dịch vụ</FooterHeading>
                        <FooterNav
                            links={FOOTER_SERVICES}
                            label="Dịch vụ bảo vệ"
                        />
                    </div>

                    <div>
                        <FooterHeading>Liên hệ</FooterHeading>
                        <div className="mt-5 space-y-5 text-sm text-white/65">
                            <a
                                href={phoneHref}
                                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
                            >
                                <Phone
                                    aria-hidden="true"
                                    size={17}
                                    className="mt-0.5 shrink-0 text-gold-deep"
                                />
                                <span>
                                    <strong className="block text-white">
                                        Hotline
                                    </strong>
                                    {COMPANY.hotline}
                                </span>
                            </a>
                            <a
                                href={`mailto:${COMPANY.email}`}
                                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
                            >
                                <Mail
                                    aria-hidden="true"
                                    size={17}
                                    className="mt-0.5 shrink-0 text-gold-deep"
                                />
                                <span className="min-w-0 break-all">
                                    <strong className="block text-white">
                                        Email
                                    </strong>
                                    {COMPANY.email}
                                </span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin
                                    aria-hidden="true"
                                    size={17}
                                    className="mt-0.5 shrink-0 text-gold-deep"
                                />
                                <span className="leading-6">{mapAddress}</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="h-full min-h-[220px] overflow-hidden rounded-[18px] bg-slate-100 ring-1 ring-slate-200">
                            <iframe
                                src={mapEmbedUrl}
                                title={`Bản đồ vị trí ${mapAddress}`}
                                loading="lazy"
                                className="h-full min-h-[220px] w-full border-0 grayscale-[20%]"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* <Link
                        href="/lien-he"
                        className="group flex min-h-12 items-center justify-between gap-5 rounded border border-gold/70 px-5 text-sm font-semibold text-gold-soft transition-colors hover:bg-gold hover:text-white sm:col-span-2 lg:col-start-2 lg:col-end-5"
                    >
                        Nhận phương án bảo vệ phù hợp cho doanh nghiệp
                        <ArrowRight
                            aria-hidden="true"
                            size={18}
                            className="shrink-0 transition-transform group-hover:translate-x-1"
                        />
                    </Link> */}
                </div>
            </div>

            <div className="border-t border-white/10 bg-[#041024] text-white">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="flex flex-col gap-4 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
                        <nav aria-label="Chính sách">
                            <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-white"
                                    >
                                        Chính sách bảo mật
                                    </a>
                                </li>
                                <li className="text-gold" aria-hidden="true">
                                    |
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition-colors hover:text-white"
                                    >
                                        Điều khoản sử dụng
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <span>
                            &copy; 2026 {COMPANY.fullName} · MST {COMPANY.mst}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
