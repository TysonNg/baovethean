"use client";

import { useState } from "react";
import { Shield, Phone, Menu } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import Button from "@/components/ui/Button";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-line">
            <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-16">
                <a href="#" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center">
                        <Shield size={16} className="text-gold" fill="#C9A14A" strokeWidth={0} />
                    </div>
                    <div className="leading-tight">
                        <span className="text-sm font-bold text-ink">
                            {COMPANY.name}
                        </span>
                        <span className="block text-[9px] tracking-[0.15em] uppercase text-ink-3">
                            Vietnam Security Services
                        </span>
                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-ink-3 hover:text-ink transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-ink-3">
                        <Phone size={14} />
                        <span className="font-semibold text-ink">
                            {COMPANY.hotline}
                        </span>
                    </div>
                    <Button href="#contact" arrow>
                        Nhận báo giá
                    </Button>
                </div>

                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center"
                    onClick={() => setDrawerOpen(true)}
                >
                    <Menu size={20} />
                </button>
            </div>

            <MobileDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </header>
    );
}
