"use client";

import { useState } from "react";
import { Shield, Phone, Menu } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-20">
                {/* Brand Logo & Slogan */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-11 h-11">
                        <Image
                            src={'/logo.png'}
                            fill
                            alt="bao-ve-the-an-logo"
                        />
                    </div>
                    <div className="leading-tight">
                        <span className="text-xl font-extrabold text-[#0B1E3F] tracking-wide block">
                            {COMPANY.name.toUpperCase()}
                        </span>
                        <span className="block text-[11px] font-medium text-slate-500 mt-0.5">
                            Uy tín — Chuyên nghiệp — An toàn
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold tracking-wider text-slate-700 hover:text-[#1D528F] transition-colors py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Hotline Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href={`tel:${COMPANY.hotline.replace(/\s/g, "")}`}
                        className="bg-[#1D528F] hover:bg-[#164275] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow"
                    >
                        <Phone size={15} className="fill-white/20" />
                        <span>{COMPANY.hotline}</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-700"
                    onClick={() => setDrawerOpen(true)}
                    aria-label="Open navigation menu"
                >
                    <Menu size={22} />
                </button>
            </div>

            <MobileDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </header>
    );
}
