"use client";

import { useState } from "react";
import Image from "next/image";
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
const SERVICE_IMAGES = [
    "/images/anh_nhan_vien/1784735915183_1512254896023574579_413629033841281138_282f410cfec55c3f3d9d27940f880c7a.jpg",
    "/images/anh_nhan_vien/1784738532973_1512254896023574579_413629033841281138_a04b6f33b35679568f5a5f8c49eb2b3a.jpg",
    "/images/anh_nhan_vien/1784737520772_1512254896023574579_413629033841281138_31b535d4193c6820cb174cd61ce63332.jpg",
    "/images/anh_nhan_vien/1784736767820_1512254896023574579_413629033841281138_043b1f2d9ed77e4fb74f4a2bd275440c.jpg",
    "/images/anh_nhan_vien/1784734717643_1512254896023574579_413629033841281138_47cfea147014387ad152d61510e2782d.jpg",
    "/images/anh_nhan_vien/1784737057238_1512254896023574579_413629033841281138_2ba72e6e240361059d8b0968e57b836e.jpg",
];

export default function ServiceExplorer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = SERVICE_DETAILS[activeIndex];

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
                            <span className="uppercase">
                                {service.name.replace("Bảo vệ ", "")}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div id="service-detail" role="tabpanel" className="grid lg:grid-cols-[.82fr_1.18fr]">
                <div className="relative flex min-h-[310px] flex-col justify-between overflow-hidden bg-navy-900 p-7 text-white md:p-10">
                    <Image
                        key={SERVICE_IMAGES[activeIndex]}
                        src={SERVICE_IMAGES[activeIndex]}
                        alt={`Đội ngũ Bảo vệ Thế An — ${active.name}`}
                        fill
                        sizes="(max-width: 1023px) 100vw, 42vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/5" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="relative mt-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
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
