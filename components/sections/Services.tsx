"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { HOME_SOLUTIONS } from "@/lib/home-story-data";

export default function Services() {
    const [activeId, setActiveId] = useState(HOME_SOLUTIONS[0].id);
    const active = HOME_SOLUTIONS.find((item) => item.id === activeId) ?? HOME_SOLUTIONS[0];

    return (
        <section id="services" aria-labelledby="solutions-heading" className="bg-bg-alt py-16 md:py-24">
            <Container>
                <div className="mb-10 max-w-3xl md:mb-12">
                    <p className="eyebrow">Giải pháp theo từng mục tiêu</p>
                    <h2 id="solutions-heading" className="heading-1 mt-4 text-ink">
                        Một phương án đúng bắt đầu từ việc hiểu rõ mục tiêu
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-3">
                        Chúng tôi khảo sát thực tế, phân tích rủi ro và thiết kế phương án phù hợp với đặc thù vận hành của từng doanh nghiệp.
                    </p>
                </div>

                <div className="mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden" role="tablist" aria-label="Chọn loại hình bảo vệ">
                    {HOME_SOLUTIONS.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-selected={activeId === item.id}
                            aria-controls="solution-panel"
                            onClick={() => setActiveId(item.id)}
                            className={`min-h-11 shrink-0 rounded border px-4 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${activeId === item.id ? "border-gold bg-white text-ink" : "border-line bg-transparent text-ink-3"}`}
                        >
                            <span className="mr-2 text-xs text-gold-deep">{item.number}</span>
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-line bg-white lg:grid lg:grid-cols-[38%_62%]">
                    <div className="hidden border-r border-line lg:block" role="tablist" aria-label="Chọn loại hình bảo vệ">
                        {HOME_SOLUTIONS.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls="solution-panel"
                                    onClick={() => setActiveId(item.id)}
                                    className={`relative flex min-h-32 w-full gap-4 border-b border-line px-7 py-6 text-left transition-colors last:border-b-0 hover:bg-bg-alt/60 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold ${isActive ? "bg-bg-alt/70" : "bg-white"}`}
                                >
                                    <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 bg-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`} />
                                    <span className="pt-0.5 text-xs font-semibold text-gold-deep">{item.number}</span>
                                    <span>
                                        <span className="block font-semibold text-ink">{item.title}</span>
                                        <span className="mt-2 block text-sm leading-relaxed text-ink-3">{item.shortDescription}</span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <article id="solution-panel" role="tabpanel" className="grid min-h-full grid-rows-[auto_1fr]">
                        <div className="relative aspect-[16/10] overflow-hidden bg-navy-800 md:aspect-[16/8] lg:aspect-auto lg:min-h-[330px]">
                            <Image key={active.image} src={active.image} alt={active.imageAlt} fill sizes="(max-width: 1023px) 100vw, 62vw" className="object-cover motion-safe:animate-[solution-fade_250ms_ease-out]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/35 via-transparent to-transparent" />
                            <div className="absolute bottom-4 right-4 rounded bg-white/95 px-4 py-3 text-right shadow-sm">
                                <strong className="block text-lg text-navy-800">24/7</strong>
                                <span className="text-xs text-ink-3">Trung tâm điều hành</span>
                            </div>
                        </div>

                        <div className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
                            <div>
                                <h3 className="heading-3 text-ink">{active.title}</h3>
                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-3">{active.description}</p>
                            </div>
                            <div>
                                <ul className="space-y-2.5">
                                    {active.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-2 text-sm text-ink">
                                            <Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-gold-deep" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={active.href} className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-deep transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                                    Xem chi tiết giải pháp
                                    <ArrowRight aria-hidden="true" size={17} />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
}
