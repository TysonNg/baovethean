"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "@/lib/project-data";

type Filter = "Tất cả" | ProjectCategory;

export default function ProjectGallery({ projects }: { projects: Project[] }) {
    const [active, setActive] = useState<Filter>("Tất cả");
    const visible = active === "Tất cả"
        ? projects
        : projects.filter((project) => project.category === active);

    return (
        <>
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="eyebrow">Lĩnh vực triển khai</p>
                    <h2 id="project-list-title" className="heading-1 mt-3 text-navy-900">
                        Một tiêu chuẩn, nhiều môi trường
                    </h2>
                </div>
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lọc dự án theo lĩnh vực">
                    {PROJECT_CATEGORIES.map((label) => (
                        <button
                            key={label}
                            type="button"
                            role="tab"
                            aria-selected={active === label}
                            onClick={() => setActive(label)}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                                active === label
                                    ? "border-navy-900 bg-navy-900 text-white"
                                    : "border-line text-ink-3 hover:border-navy-900 hover:text-navy-900"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-x-7 gap-y-12 md:grid-cols-2" aria-live="polite">
                {visible.map((project, index) => (
                    <article key={project.slug} className={index % 2 === 1 ? "md:mt-16" : ""}>
                        <Link
                            href={`/du-an/${project.slug}`}
                            className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt">
                                <Image
                                    src={project.image}
                                    alt={project.imageAlt}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/55 to-transparent" />
                                <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                                    {project.category}
                                </span>
                                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 opacity-0 transition-all group-hover:opacity-100">
                                    <ArrowUpRight size={18} aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-5 flex items-start justify-between gap-5 border-b border-line pb-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[.14em] text-gold-deep">
                                        {project.location}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-navy-900 transition-colors group-hover:text-gold-deep md:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-ink-3">{project.summary}</p>
                                    <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                                        <div>
                                            <dt className="sr-only">Thời gian</dt>
                                            <dd className="font-medium text-ink">{project.duration}</dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Mô hình nhân sự</dt>
                                            <dd className="text-ink-3">{project.staffing}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <span className="shrink-0 font-serif text-2xl text-line">{project.number}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    );
}
