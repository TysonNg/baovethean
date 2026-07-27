import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import ProjectGallery from "@/components/sections/projects/ProjectGallery";
import { PROJECTS } from "@/lib/project-data";

const DESCRIPTION =
    "Các dự án bảo vệ tiêu biểu do Bảo vệ Thế An triển khai cho nhà máy, tòa nhà, sự kiện và lãnh đạo doanh nghiệp.";

export const metadata: Metadata = {
    title: "Dự án tiêu biểu",
    description: DESCRIPTION,
    alternates: { canonical: "/du-an" },
    openGraph: {
        title: "Dự án tiêu biểu | Bảo vệ Thế An",
        description: DESCRIPTION,
        url: "/du-an",
        type: "website",
    },
};

export default function DuAnPage() {
    const [featured] = PROJECTS;

    return (
        <>
            <section
                data-page-banner
                className="relative isolate overflow-hidden bg-navy-900 pb-16 pt-32 text-white md:pb-20 md:pt-40"
            >
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background:
                            "radial-gradient(circle at 82% 20%, rgba(201,161,74,.22), transparent 28%), linear-gradient(115deg, #07172e 0%, #0b1e3f 58%, #13284e 100%)",
                    }}
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px]"
                    aria-hidden="true"
                />
                <Container className="relative">
                    <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-white/55">
                        <Link href="/" className="transition-colors hover:text-white">Trang chủ</Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-gold-soft" aria-current="page">Dự án</span>
                    </nav>
                    <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
                        <div>
                            <p className="eyebrow text-gold-soft">Năng lực qua thực tế</p>
                            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.8rem,6.4vw,5.8rem)] leading-[.98] tracking-[-0.035em]">
                                An ninh vững vàng
                                <span className="block text-white/45">trong từng dự án.</span>
                            </h1>
                        </div>
                        <div className="border-l border-white/15 pl-6">
                            <p className="max-w-sm text-sm leading-7 text-white/65">
                                Mỗi phương án được thiết kế từ đặc thù vận hành thực tế, triển khai bởi đội ngũ được đào tạo và giám sát liên tục.
                            </p>
                            <a
                                href="#du-an-noi-bat"
                                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-gold-soft"
                            >
                                Khám phá dự án
                                <ArrowDownRight size={18} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="du-an-noi-bat" className="marketing-section bg-[#f7f7f4]" aria-labelledby="featured-title">
                <Container>
                    <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="eyebrow">Dự án nổi bật</p>
                            <h2 id="featured-title" className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                                Kinh nghiệm được chứng minh tại hiện trường
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-ink-3">
                            Các case study tập trung vào bối cảnh, cách tổ chức lực lượng và kết quả vận hành thay vì lặp lại danh mục dịch vụ.
                        </p>
                    </div>

                    <article className="group grid overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(7,23,46,.08)] lg:grid-cols-[1.45fr_.55fr]">
                        <div className="relative min-h-[360px] overflow-hidden md:min-h-[540px]">
                            <Image
                                src={featured.image}
                                alt="Nhân viên bảo vệ kiểm soát phương tiện tại cổng nhà máy"
                                fill
                                priority
                                sizes="(min-width: 1024px) 70vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                            />
                            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-navy-900 backdrop-blur">
                                {featured.category}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-7 md:p-10">
                            <span className="font-serif text-5xl text-gold/45">{featured.number}</span>
                            <div className="mt-14">
                                <p className="text-xs font-semibold uppercase tracking-[.16em] text-gold-deep">
                                    {featured.location}
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold leading-tight text-navy-900">
                                    {featured.title}
                                </h3>
                                <p className="mt-5 text-sm leading-7 text-ink-3">{featured.scope}</p>
                                <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-line pt-6">
                                    {[
                                        ["Khách hàng", featured.client],
                                        ["Quy mô", featured.scale],
                                        ["Thời gian", featured.duration],
                                        ["Nhân sự", featured.staffing],
                                    ].map(([label, value]) => (
                                        <div key={label}>
                                            <dt className="text-[10px] font-semibold uppercase tracking-[.14em] text-ink-3">{label}</dt>
                                            <dd className="mt-1 text-sm leading-5 text-ink">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <div className="mt-8 space-y-3 border-t border-line pt-6">
                                    {featured.outcomes.map((item) => (
                                        <p key={item} className="flex items-center gap-3 text-sm text-ink">
                                            <Check size={16} className="text-gold-deep" aria-hidden="true" />
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                <Link
                                    href={`/du-an/${featured.slug}`}
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-deep"
                                >
                                    Xem chi tiết dự án
                                    <ArrowUpRight size={17} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </Container>
            </section>

            <section className="marketing-section bg-white" aria-labelledby="project-list-title">
                <Container>
                    <ProjectGallery projects={PROJECTS} />
                </Container>
            </section>

            <section className="bg-navy-900 py-16 text-white md:py-20" aria-labelledby="project-cta-title">
                <Container>
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="eyebrow text-gold-soft">Bắt đầu từ một cuộc khảo sát</p>
                            <h2 id="project-cta-title" className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                                Cùng xây dựng phương án an ninh phù hợp cho doanh nghiệp của bạn.
                            </h2>
                        </div>
                        <Link
                            href="/lien-he"
                            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-gold px-7 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-soft"
                        >
                            Yêu cầu khảo sát
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
