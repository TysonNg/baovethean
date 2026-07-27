"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
    CalendarCheck,
    Factory,
    HardHat,
    ShieldCheck,
    ShoppingBag,
    Warehouse,
} from "lucide-react";
import { SERVICE_DETAILS } from "@/lib/service-data";

const ICONS = [Building2, Factory, Warehouse, HardHat, CalendarCheck, ShoppingBag];

export default function ServiceExplorer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = SERVICE_DETAILS[activeIndex];
    const ActiveIcon = ICONS[activeIndex] ?? ShieldCheck;

    return (
        <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_20px_60px_rgba(7,23,46,.07)]">
            <div
                className="flex gap-2 overflow-x-auto border-b border-line p-3 lg:grid lg:grid-cols-6 lg:overflow-visible"
                role="tablist"
                aria-label="Chọn nhóm dịch vụ"
            >
                {SERVICE_DETAILS.map((service, index) => {
                    const Icon = ICONS[index] ?? ShieldCheck;
                    const selected = index === activeIndex;
                    return (
                        <button
                            key={service.code}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            aria-controls="service-detail"
                            onClick={() => setActiveIndex(index)}
                            className={`flex min-w-[150px] items-center gap-3 rounded-2xl px-4 py-3 text-left text-xs font-semibold transition-colors lg:min-w-0 ${
                                selected
                                    ? "bg-navy-900 text-white"
                                    : "text-ink-3 hover:bg-bg-alt hover:text-navy-900"
                            }`}
                        >
                            <Icon size={18} className={selected ? "text-gold-soft" : "text-gold-deep"} aria-hidden="true" />
                            {service.name.replace("Bảo vệ ", "")}
                        </button>
                    );
                })}
            </div>

            <div id="service-detail" role="tabpanel" className="grid lg:grid-cols-[.82fr_1.18fr]">
                <div className="relative flex min-h-[310px] flex-col justify-between overflow-hidden bg-navy-900 p-7 text-white md:p-10">
                    <div
                        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[42px] border-white/[.035]"
                        aria-hidden="true"
                    />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-soft">
                        <ActiveIcon size={27} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div className="relative mt-16">
                        <p className="text-xs font-semibold uppercase tracking-[.16em] text-gold-soft">{active.code}</p>
                        <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{active.name}</h3>
                        <p className="mt-4 max-w-md text-sm leading-7 text-white/65">{active.description}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-between p-7 md:p-10">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[.16em] text-gold-deep">Phạm vi công việc</p>
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {active.features.map((feature) => (
                                <li key={feature} className="flex gap-3 rounded-xl bg-bg-alt p-4 text-sm leading-6 text-ink">
                                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-ink-3">Mô hình phù hợp</p>
                            <p className="mt-1 text-sm font-medium text-navy-900">{active.location}</p>
                        </div>
                        <Link
                            href="/lien-he"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-soft"
                        >
                            Nhận tư vấn
                            <ArrowUpRight size={17} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
