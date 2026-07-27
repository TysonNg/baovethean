"use client";

import { Fragment, useEffect, useState } from "react";
import { ChevronDown, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { ABOUT_MENU_ITEMS, ABOUT_MENU_PATHS } from "@/lib/about-menu";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RECRUIT_MENU_ITEMS, isRecruitPath } from "@/lib/recruit-menu";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    const pathname = usePathname();
    const aboutIsActive = ABOUT_MENU_PATHS.some((path) => pathname === path);
    const recruitIsActive = isRecruitPath(pathname);
    const [aboutOpen, setAboutOpen] = useState(aboutIsActive);
    const [recruitOpen, setRecruitOpen] = useState(recruitIsActive);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    useEffect(() => {
        if (!isOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            <div
                id="mobile-navigation-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Menu điều hướng"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-line">
                    <span className="font-semibold text-ink">Menu</span>
                    <button
                        onClick={onClose}
                        className="flex h-11 w-11 items-center justify-center"
                        aria-label="Đóng menu"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="flex flex-col p-6 gap-1">
                    {NAV_LINKS.map((link) =>
                        link.href === "/gioi-thieu" ? (
                            <div key={link.href}>
                                <button
                                    type="button"
                                    aria-expanded={aboutOpen}
                                    aria-controls="about-mobile-links"
                                    onClick={() => setAboutOpen((current) => !current)}
                                    className={`flex min-h-11 w-full items-center justify-between text-left text-sm font-medium transition-colors ${
                                        aboutIsActive ? "text-gold-deep" : "text-ink hover:text-gold-deep"
                                    }`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={17}
                                        aria-hidden="true"
                                        className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {aboutOpen && (
                                    <div id="about-mobile-links" className="mb-2 border-l border-line pl-3">
                                        {ABOUT_MENU_ITEMS.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={onClose}
                                                aria-current={pathname === item.href ? "page" : undefined}
                                                className={`flex min-h-11 flex-col justify-center py-2 text-sm transition-colors ${
                                                    pathname === item.href
                                                        ? "text-gold-deep"
                                                        : "text-ink hover:text-gold-deep"
                                                }`}
                                            >
                                                <span className="font-medium">{item.title}</span>
                                                <span className="mt-0.5 text-xs leading-4 text-ink-3">
                                                    {item.description}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Fragment key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    className={`flex min-h-11 items-center text-sm font-medium transition-colors ${
                                        pathname === link.href
                                            ? "text-gold-deep"
                                            : "text-ink hover:text-gold-deep"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                                {link.href === "/du-an" && (
                                    <div>
                                        <button
                                            type="button"
                                            aria-expanded={recruitOpen}
                                            aria-controls="recruit-mobile-links"
                                            onClick={() => setRecruitOpen((current) => !current)}
                                            className={`flex min-h-11 w-full items-center justify-between text-left text-sm font-medium transition-colors ${
                                                recruitIsActive
                                                    ? "text-gold-deep"
                                                    : "text-ink hover:text-gold-deep"
                                            }`}
                                        >
                                            TUYỂN DỤNG
                                            <ChevronDown
                                                size={17}
                                                aria-hidden="true"
                                                className={`transition-transform ${
                                                    recruitOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
                                        {recruitOpen && (
                                            <div
                                                id="recruit-mobile-links"
                                                className="mb-2 border-l border-line pl-3"
                                            >
                                                {RECRUIT_MENU_ITEMS.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={onClose}
                                                        aria-current={
                                                            pathname === item.href
                                                                ? "page"
                                                                : undefined
                                                        }
                                                        className={`flex min-h-11 items-center py-2 text-sm transition-colors ${
                                                            pathname === item.href
                                                                ? "text-gold-deep"
                                                                : "text-ink hover:text-gold-deep"
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </Fragment>
                        )
                    )}
                </nav>
                <div className="px-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-ink-3">
                        <Phone size={16} />
                        <span>{COMPANY.hotline}</span>
                    </div>
                    <Button href="#contact" arrow className="w-full">
                        Nhận báo giá
                    </Button>
                </div>
            </div>
        </>
    );
}
