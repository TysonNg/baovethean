import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getProject, PROJECTS } from "@/lib/project-data";

interface ProjectDetailPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};

    return {
        title: project.title,
        description: project.summary,
        alternates: { canonical: `/du-an/${project.slug}` },
        openGraph: {
            title: project.title,
            description: project.summary,
            url: `/du-an/${project.slug}`,
            type: "article",
            images: [{ url: project.image, alt: project.imageAlt }],
        },
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const related = PROJECTS.filter((item) => item.slug !== project.slug).slice(0, 2);

    return (
        <>
            <section data-page-banner className="bg-navy-900 pb-14 pt-32 text-white md:pb-20 md:pt-40">
                <Container>
                    <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-white/55">
                        <Link href="/" className="hover:text-white">Trang chủ</Link>
                        <span>/</span>
                        <Link href="/du-an" className="hover:text-white">Dự án</Link>
                        <span>/</span>
                        <span className="text-gold-soft" aria-current="page">{project.title}</span>
                    </nav>
                    <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
                        <div>
                            <p className="eyebrow text-gold-soft">{project.category} · {project.number}</p>
                            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[1.02] tracking-[-.03em]">
                                {project.title}
                            </h1>
                        </div>
                        <div className="border-l border-white/15 pl-6">
                            <p className="text-xs font-semibold uppercase tracking-[.14em] text-gold-soft">Địa điểm</p>
                            <p className="mt-3 text-sm text-white/75">{project.location}</p>
                            <p className="mt-6 text-sm leading-7 text-white/65">{project.scope}</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-[#f7f7f4] py-8 md:py-12">
                <Container>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] md:rounded-[32px]">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-white">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                        <div>
                            <p className="eyebrow">Hồ sơ triển khai</p>
                            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy-900 md:text-4xl">
                                Phương án bắt đầu từ bối cảnh vận hành thực tế.
                            </h2>
                        </div>
                        <div>
                            <p className="lead text-ink-3">{project.summary}</p>
                            <dl className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
                                {[
                                    ["Khách hàng", project.client],
                                    ["Phạm vi", project.scale],
                                    ["Thời gian", project.duration],
                                    ["Mô hình nhân sự", project.staffing],
                                ].map(([label, value]) => (
                                    <div key={label} className="border-b border-r border-line p-5">
                                        <dt className="text-[10px] font-semibold uppercase tracking-[.14em] text-gold-deep">{label}</dt>
                                        <dd className="mt-2 text-sm leading-6 text-ink">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                                <div className="border-t border-line pt-5">
                                    <h3 className="font-semibold text-navy-900">Yêu cầu đặt ra</h3>
                                    <ul className="mt-5 space-y-4">
                                        {project.challenges.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-6 text-ink-3">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-line pt-5">
                                    <h3 className="font-semibold text-navy-900">Giải pháp triển khai</h3>
                                    <ul className="mt-5 space-y-4">
                                        {project.solutions.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-6 text-ink-3">
                                                <Check size={16} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 rounded-2xl bg-navy-900 p-6 text-white md:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[.16em] text-gold-soft">Kết quả vận hành</p>
                                <ul className="mt-6 grid gap-4">
                                    {project.outcomes.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                                            <Check size={17} className="mt-1 shrink-0 text-gold-soft" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-white/45">
                                    Thông tin nhận diện và số liệu nội bộ không được công bố nhằm bảo đảm cam kết bảo mật với khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-bg-alt" aria-labelledby="related-projects-title">
                <Container>
                    <div className="mb-8 flex items-end justify-between gap-5">
                        <div>
                            <p className="eyebrow">Khám phá thêm</p>
                            <h2 id="related-projects-title" className="heading-2 mt-3 text-navy-900">Dự án liên quan</h2>
                        </div>
                        <Link href="/du-an" className="hidden items-center gap-2 text-sm font-semibold text-navy-900 sm:flex">
                            Xem tất cả <ArrowUpRight size={17} />
                        </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {related.map((item) => (
                            <Link key={item.slug} href={`/du-an/${item.slug}`} className="group block">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                                    <Image src={item.image} alt={item.imageAlt} fill sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                                </div>
                                <p className="mt-4 text-xs font-semibold uppercase tracking-[.14em] text-gold-deep">{item.category}</p>
                                <h3 className="mt-2 text-xl font-semibold text-navy-900 group-hover:text-gold-deep">{item.title}</h3>
                            </Link>
                        ))}
                    </div>
                    <Link href="/du-an" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                        <ArrowLeft size={17} /> Quay lại tất cả dự án
                    </Link>
                </Container>
            </section>
        </>
    );
}
