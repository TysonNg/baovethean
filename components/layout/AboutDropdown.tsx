"use client";

import {
    BadgeCheck,
    Building2,
    ChevronDown,
    FileText,
    ArrowUpRight,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
    ABOUT_MENU_ITEMS,
    ABOUT_MENU_PATHS,
    type AboutMenuIcon,
} from "@/lib/about-menu";

const ICONS: Record<AboutMenuIcon, LucideIcon> = {
    building: Building2,
    file: FileText,
    badge: BadgeCheck,
};

interface AboutDropdownProps {
    overlay?: boolean;
}

export default function AboutDropdown({ overlay = false }: AboutDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const isActive = ABOUT_MENU_PATHS.some((path) => pathname === path);

    useEffect(() => {
        if (!isOpen) return;

        const closeOnOutsideClick = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                triggerRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen]);

    const focusFirstLink = () => {
        requestAnimationFrame(() => {
            rootRef.current?.querySelector<HTMLAnchorElement>("[data-about-link]")?.focus();
        });
    };

    return (
        <div
            ref={rootRef}
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls="about-desktop-panel"
                aria-haspopup="true"
                onClick={() => setIsOpen((current) => !current)}
                onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setIsOpen(true);
                        focusFirstLink();
                    }
                }}
                className={`flex items-center gap-1 py-2 text-xs font-bold tracking-wider transition-colors ${
                    overlay
                        ? "text-white/90 hover:text-white"
                        : isActive
                          ? "text-[#1D528F]"
                          : "text-slate-700 hover:text-[#1D528F]"
                }`}
            >
                GIỚI THIỆU
                <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div
                    id="about-desktop-panel"
                    className="absolute left-1/2 top-full z-50 w-[min(700px,calc(100vw-3rem))] -translate-x-[36%] pt-3"
                >
                    <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(220px,0.9fr)] overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(7,23,46,0.16)]">
                        <nav aria-label="Các trang giới thiệu" className="p-2">
                            {ABOUT_MENU_ITEMS.map((item) => {
                                const Icon = ICONS[item.icon];
                                const active = pathname === item.href;
                                return (
                                    <Link
                                        data-about-link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`group flex gap-3 rounded-lg p-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold ${
                                            active
                                                ? "bg-slate-100 text-navy-900"
                                                : "hover:bg-slate-50"
                                        }`}
                                    >
                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-gold-deep transition-colors group-hover:border-gold/60">
                                            <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                                        </span>
                                        <span>
                                            <span className="block text-sm font-semibold text-navy-900">
                                                {item.title}
                                            </span>
                                            <span className="mt-1 block text-xs font-normal leading-5 tracking-normal text-ink-3">
                                                {item.description}
                                            </span>
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>

                        <aside className="flex flex-col justify-between rounded-lg bg-navy-900 p-5 text-white">
                            <div>
                                <FileText size={24} className="text-gold" strokeWidth={1.5} aria-hidden="true" />
                                <p className="mt-5 text-lg font-semibold">Hồ sơ năng lực Thế An</p>
                                <p className="mt-2 text-xs font-normal leading-5 tracking-normal text-white/70">
                                    Tổng hợp thông tin pháp lý, năng lực cung cấp dịch vụ và khả năng triển khai tại mục tiêu.
                                </p>
                            </div>
                            <Link
                                href="/ho-so-nang-luc"
                                className="mt-6 inline-flex min-h-11 items-center justify-between rounded-md border border-white/20 px-4 text-sm font-semibold tracking-normal text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                                Xem hồ sơ
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </Link>
                        </aside>
                    </div>
                </div>
            )}
        </div>
    );
}
