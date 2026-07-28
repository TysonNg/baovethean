import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Check,
    Flame,
    HeartPulse,
    PhoneCall,
    ShieldCheck,
    TriangleAlert,
    UsersRound,
    type LucideIcon,
} from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/data";
import {
    TRAINING_GALLERY_SLOTS,
    TRAINING_MODULES,
    TRAINING_STEPS,
    type TrainingModule,
} from "@/lib/recruit-training";

const PAGE_URL = "https://baovethean.vn/tuyen-dung/dao-tao";

export const metadata: Metadata = {
    title: "Đào tạo nghiệp vụ — Bảo vệ Thế An",
    description:
        "Chương trình đào tạo nghiệp vụ 120 giờ, thực hành PCCC, sơ cấp cứu, xử lý tình huống và đánh giá đầu ra dành cho ứng viên Bảo vệ Thế An.",
    alternates: { canonical: PAGE_URL },
};

const ICONS: Record<TrainingModule["icon"], LucideIcon> = {
    shield: ShieldCheck,
    flame: Flame,
    heart: HeartPulse,
    alert: TriangleAlert,
    users: UsersRound,
};

export default function RecruitmentTrainingPage() {
    return (
        <>
            <PageBanner
                title="Đào tạo nghiệp vụ"
                subtitle="Nền tảng kiến thức, kỹ năng và tác phong giúp mỗi nhân viên sẵn sàng làm việc an toàn, kỷ luật và chuyên nghiệp."
                parent={{ label: "Tuyển dụng", href: "/tuyen-dung" }}
                compact
            />

            <main className="overflow-hidden bg-white">
                <section
                    className="bg-bg-alt py-16 md:py-24"
                    aria-labelledby="training-program-title"
                >
                    <Container>
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                            <div>
                                <p className="eyebrow">Chương trình huấn luyện</p>
                                <h2
                                    id="training-program-title"
                                    className="heading-1 mt-4 max-w-2xl text-navy-900"
                                >
                                    Được chuẩn bị kỹ trước mỗi ca trực.
                                </h2>
                            </div>
                            <div className="max-w-2xl lg:justify-self-end">
                                <p className="text-base leading-8 text-ink-3">
                                    Ứng viên tham gia chương trình đào tạo nhập
                                    cuộc 120 giờ trước khi nhận việc. Sau khi
                                    được phân công, nhân viên tiếp tục cập nhật
                                    nghiệp vụ hàng quý để duy trì phản xạ và
                                    tác phong theo tiêu chuẩn Thế An.
                                </p>
                            </div>
                        </div>

                        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {TRAINING_MODULES.map((module) => {
                                const Icon = ICONS[module.icon];

                                return (
                                    <li
                                        key={module.number}
                                        className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[0_14px_36px_rgba(7,23,46,0.06)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_44px_rgba(7,23,46,0.1)] md:p-7"
                                    >
                                        <div className="flex items-start justify-between gap-5">
                                            <span className="font-serif text-4xl leading-none text-gold/55">
                                                {module.number}
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="flex size-12 items-center justify-center rounded-full bg-navy-900 text-gold-soft"
                                            >
                                                <Icon
                                                    className="size-5"
                                                    strokeWidth={1.8}
                                                />
                                            </span>
                                        </div>

                                        <h3 className="mt-8 text-xl font-bold text-navy-900">
                                            {module.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-ink-3">
                                            {module.description}
                                        </p>

                                        <ul className="mt-6 space-y-3 border-t border-line pt-5">
                                            {module.topics.map((topic) => (
                                                <li
                                                    key={topic}
                                                    className="flex gap-3 text-sm leading-6 text-ink-3"
                                                >
                                                    <Check
                                                        aria-hidden="true"
                                                        className="mt-1 size-4 shrink-0 text-gold-deep"
                                                        strokeWidth={2.4}
                                                    />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ol>
                    </Container>
                </section>

                <section
                    className="py-16 md:py-24"
                    aria-labelledby="training-process-title"
                >
                    <Container>
                        <header className="max-w-2xl">
                            <p className="eyebrow">Lộ trình huấn luyện</p>
                            <h2
                                id="training-process-title"
                                className="heading-1 mt-4 text-navy-900"
                            >
                                Từ lớp học đến vị trí làm việc
                            </h2>
                            <p className="mt-5 text-base leading-8 text-ink-3">
                                Mỗi giai đoạn đều có mục tiêu rõ ràng, kết hợp
                                kiến thức nền với thực hành có giám sát trước
                                khi ứng viên được phân công.
                            </p>
                        </header>

                        <ol className="mt-12 grid gap-0 border-t border-line lg:grid-cols-4">
                            {TRAINING_STEPS.map((step, index) => (
                                <li
                                    key={step.number}
                                    className="relative border-b border-line py-8 lg:border-r lg:px-6 lg:last:border-r-0"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold tracking-wider text-white">
                                            {step.number}
                                        </span>
                                        <span className="text-xs font-semibold tracking-[0.12em] text-gold-deep uppercase">
                                            {step.timing}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 text-lg font-bold text-navy-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-ink-3">
                                        {step.description}
                                    </p>
                                    {index < TRAINING_STEPS.length - 1 && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-1/2 -right-1 hidden size-2 rounded-full bg-gold lg:block"
                                        />
                                    )}
                                </li>
                            ))}
                        </ol>
                    </Container>
                </section>

                <section
                    className="bg-navy-900 py-16 text-white md:py-24"
                    aria-labelledby="training-gallery-title"
                >
                    <Container>
                        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                            <div>
                                <p className="eyebrow text-gold-soft">
                                    Thư viện đào tạo
                                </p>
                                <h2
                                    id="training-gallery-title"
                                    className="heading-1 mt-4 text-white"
                                >
                                    Hình ảnh huấn luyện thực tế
                                </h2>
                            </div>
                            <p className="max-w-2xl text-sm leading-7 text-white/65 lg:justify-self-end">
                                Những khoảnh khắc thực tế trong hoạt động huấn
                                luyện, diễn tập và rèn luyện tác phong của đội
                                ngũ Bảo vệ Thế An.
                            </p>
                        </div>

                        <div className="mt-12 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {TRAINING_GALLERY_SLOTS.map((slot) => (
                                <div
                                    key={slot.number}
                                    className={`group relative overflow-hidden rounded-2xl bg-white/[0.04] ${
                                        slot.aspect === "landscape"
                                            ? "aspect-[4/3]"
                                            : "aspect-[3/4]"
                                    }`}
                                >
                                    <Image
                                        src={slot.image}
                                        alt={slot.alt}
                                        fill
                                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-5 pt-16 pb-5">
                                        <span className="text-sm font-semibold text-white">
                                            {slot.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className="bg-bg-alt py-16 md:py-20">
                    <Container>
                        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(7,23,46,0.08)] sm:px-10 md:px-14 md:py-14">
                            <div
                                aria-hidden="true"
                                className="absolute -top-28 -right-24 size-72 rounded-full border border-gold/20"
                            />
                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="eyebrow">
                                        Gia nhập Bảo vệ Thế An
                                    </p>
                                    <h2 className="mt-4 text-3xl leading-tight font-bold text-navy-900 md:text-4xl">
                                        Sẵn sàng bắt đầu chương trình đào tạo?
                                    </h2>
                                    <p className="mt-4 text-sm leading-7 text-ink-3">
                                        Xem tiêu chuẩn ứng viên hoặc trao đổi
                                        trực tiếp với bộ phận tuyển dụng để được
                                        hướng dẫn hồ sơ.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="/tuyen-dung/yeu-cau"
                                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
                                    >
                                        Xem yêu cầu ứng viên
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="size-4"
                                        />
                                    </Link>
                                    <a
                                        href={`tel:${COMPANY.hotline}`}
                                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-navy-900/15 px-6 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/30 hover:bg-navy-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
                                    >
                                        <PhoneCall
                                            aria-hidden="true"
                                            className="size-4"
                                        />
                                        Gọi tư vấn
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
