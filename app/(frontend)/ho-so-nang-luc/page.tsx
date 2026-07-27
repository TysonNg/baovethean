import type { Metadata } from "next";
import { Check, FileText } from "lucide-react";
import Link from "next/link";
import AboutPageHero from "@/components/sections/about/AboutPageHero";
import Container from "@/components/ui/Container";
import { CAPABILITY_PROFILE_GROUPS } from "@/lib/about-content";

const DESCRIPTION =
    "Trang giới thiệu hồ sơ năng lực của Bảo vệ Thế An và các nhóm thông tin chính trong tài liệu doanh nghiệp.";

export const metadata: Metadata = {
    title: "Hồ sơ năng lực",
    description: DESCRIPTION,
    alternates: { canonical: "/ho-so-nang-luc" },
    openGraph: {
        title: "Hồ sơ năng lực Bảo vệ Thế An",
        description: DESCRIPTION,
        url: "/ho-so-nang-luc",
        type: "website",
    },
};

export default function HoSoNangLucPage() {
    return (
        <>
            <AboutPageHero
                eyebrow="Tài liệu doanh nghiệp"
                title="Hồ sơ năng lực Bảo vệ Thế An"
                description="Tổng hợp thông tin doanh nghiệp, phạm vi dịch vụ và khả năng tổ chức triển khai trong một tài liệu thống nhất."
                current="Hồ sơ năng lực"
            />
            <section id="noi-dung-ho-so" className="marketing-section bg-bg-alt" aria-labelledby="profile-content-title">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
                        <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-8 text-white shadow-xl">
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[26px] border-white/5" aria-hidden="true" />
                            <FileText size={38} className="relative text-gold" strokeWidth={1.4} aria-hidden="true" />
                            <div className="relative">
                                <p className="eyebrow text-gold">Hồ sơ năng lực</p>
                                <p className="mt-4 text-3xl font-semibold leading-tight">Thế An Security</p>
                                <p className="mt-3 text-sm text-white/65">Bản xem trước đang chờ tài liệu chính thức.</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
                            <h2 id="profile-content-title" className="heading-2 text-ink">Nội dung chính của hồ sơ</h2>
                            <p className="mt-4 leading-7 text-ink-3">
                                Trang chỉ giới thiệu cấu trúc tài liệu, không lặp lại toàn bộ nội dung năng lực đã trình bày tại trang chủ.
                            </p>
                            <ul className="mt-7 space-y-4">
                                {CAPABILITY_PROFILE_GROUPS.map((group) => (
                                    <li key={group} className="flex gap-3 text-sm leading-6 text-ink">
                                        <Check size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                                        {group}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link href="#noi-dung-ho-so" className="inline-flex min-h-12 items-center justify-center rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep">
                                    Xem hồ sơ
                                </Link>
                                <span
                                    aria-disabled="true"
                                    className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded border border-line px-6 text-center text-sm font-semibold text-ink-3 opacity-70"
                                    title="Chưa có file PDF chính thức"
                                >
                                    Tải hồ sơ năng lực PDF — đang cập nhật
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
