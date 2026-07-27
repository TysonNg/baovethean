import type { Metadata } from "next";
import {
    BadgeCheck,
    Check,
    Clock3,
    FileText,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { COMPANY } from "@/lib/data";
import {
    RECRUIT_REQUIREMENT_MODULES,
    type RecruitRequirementIcon,
} from "@/lib/recruit-requirements";

const PAGE_URL = "https://baovethean.vn/tuyen-dung/yeu-cau";

export const metadata: Metadata = {
    title: "Yêu cầu ứng viên — Bảo vệ Thế An",
    description:
        "Tiêu chuẩn tuyển dụng và hồ sơ cần chuẩn bị khi ứng tuyển nhân viên bảo vệ tại Bảo vệ Thế An.",
    alternates: { canonical: PAGE_URL },
};

const ICONS: Record<RecruitRequirementIcon, LucideIcon> = {
    skills: Sparkles,
    standards: ShieldCheck,
    documents: FileText,
    start: BadgeCheck,
};

export default function RecruitmentRequirementsPage() {
    return (
        <>
            <PageBanner
                title="Yêu cầu ứng viên"
                subtitle="Xem trước các tiêu chuẩn và chuẩn bị hồ sơ để quá trình ứng tuyển diễn ra nhanh chóng, thuận tiện."
                parent={{ label: "Tuyển dụng", href: "/tuyen-dung" }}
                compact
            />

            <main className="overflow-hidden bg-white">
                <section className="py-16 md:py-24">
                    <Container>
                        <header className="max-w-2xl">
                            <Eyebrow text="Tiêu chuẩn tuyển dụng" />
                            <h2 className="heading-1 mt-4 text-ink">
                                Bạn đã sẵn sàng gia nhập Thế An?
                            </h2>
                            <p className="mt-5 leading-7 text-ink-3">
                                Yêu cầu ứng tuyển đơn giản, minh bạch. Ứng viên
                                chưa có kinh nghiệm bảo vệ vẫn có thể đăng ký và
                                sẽ được hướng dẫn nghiệp vụ trước khi nhận việc.
                            </p>
                        </header>

                        <ol className="mt-14 grid grid-cols-1 gap-x-14 gap-y-14 md:mt-20 md:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
                            {RECRUIT_REQUIREMENT_MODULES.map((module) => {
                                const Icon = ICONS[module.icon];

                                return (
                                    <li
                                        key={module.number}
                                        className="grid grid-cols-[72px_1fr] items-start gap-5 sm:grid-cols-[88px_1fr] sm:gap-7"
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="relative flex size-[72px] items-center justify-center rounded-full bg-bg-alt ring-1 ring-gold/25 sm:size-[88px]"
                                        >
                                            <span className="absolute -top-1 -right-1 size-5 rounded-full bg-gold/25" />
                                            <span className="absolute -bottom-1 left-2 size-3 rounded-full bg-navy-700/15" />
                                            <Icon
                                                className="size-7 text-navy-800 sm:size-8"
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold tracking-[0.16em] text-gold-deep uppercase">
                                                Yêu cầu · {module.number}
                                            </p>
                                            <h3 className="mt-2 text-xl font-bold text-ink">
                                                {module.title}
                                            </h3>
                                            <ul className="mt-4 space-y-3">
                                                {module.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm leading-6 text-ink-3"
                                                    >
                                                        <Check
                                                            aria-hidden="true"
                                                            className="mt-1 size-4 shrink-0 text-gold-deep"
                                                            strokeWidth={2.4}
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </Container>
                </section>

                <section className="pb-16 md:pb-24">
                    <Container>
                        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
                            <div
                                aria-hidden="true"
                                className="absolute -top-24 -right-20 size-72 rounded-full border border-white/10"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute -right-2 -bottom-28 size-56 rounded-full bg-gold/10 blur-2xl"
                            />

                            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                                <div>
                                    <p className="eyebrow text-gold-soft">
                                        Liên hệ tuyển dụng
                                    </p>
                                    <h2 className="mt-4 max-w-xl text-3xl leading-tight font-bold md:text-4xl">
                                        Trao đổi trực tiếp với bộ phận tuyển
                                        dụng Thế An
                                    </h2>
                                    <p className="mt-4 text-sm leading-6 text-white/65">
                                        {COMPANY.fullName}
                                    </p>

                                    <div className="mt-7 grid gap-4 text-sm text-white/75 sm:grid-cols-2">
                                        <p className="flex gap-3">
                                            <Phone
                                                aria-hidden="true"
                                                className="size-5 shrink-0 text-gold-soft"
                                            />
                                            <span>{COMPANY.hotline}</span>
                                        </p>
                                        <p className="flex gap-3">
                                            <Mail
                                                aria-hidden="true"
                                                className="size-5 shrink-0 text-gold-soft"
                                            />
                                            <span>{COMPANY.email}</span>
                                        </p>
                                        <p className="flex gap-3 sm:col-span-2">
                                            <MapPin
                                                aria-hidden="true"
                                                className="size-5 shrink-0 text-gold-soft"
                                            />
                                            <span>{COMPANY.address}</span>
                                        </p>
                                        <p className="flex gap-3 sm:col-span-2">
                                            <Clock3
                                                aria-hidden="true"
                                                className="size-5 shrink-0 text-gold-soft"
                                            />
                                            <span>{COMPANY.hours}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                                    <a
                                        href={`tel:${COMPANY.hotline}`}
                                        className="inline-flex min-h-12 items-center justify-center rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
                                    >
                                        Gọi ứng tuyển
                                    </a>
                                    <a
                                        href={`mailto:${COMPANY.email}`}
                                        className="inline-flex min-h-12 items-center justify-center rounded border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Gửi email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
