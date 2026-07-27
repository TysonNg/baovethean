"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";
import { ABOUT_MENU_ITEMS, ABOUT_MENU_PATHS } from "@/lib/about-menu";
import { RECRUIT_MENU_ITEMS, isRecruitPath } from "@/lib/recruit-menu";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hasPassedHero, setHasPassedHero] = useState(false);
    const [hasOverlayTarget, setHasOverlayTarget] = useState(true);
    const headerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const hasOverlay = hasOverlayTarget && !hasPassedHero;
    const closeDrawer = useCallback(() => setDrawerOpen(false), []);

    useEffect(() => {
        const updateHeader = () => {
            const hero = document.querySelector<HTMLElement>(
                isHomePage ? "[data-home-hero]" : "[data-page-banner]"
            );
            const headerHeight = headerRef.current?.offsetHeight ?? 80;
            const nextHasPassedHero = hero
                ? hero.getBoundingClientRect().bottom <= headerHeight
                : true;

            setHasOverlayTarget(Boolean(hero));
            setHasPassedHero((current) =>
                current === nextHasPassedHero ? current : nextHasPassedHero
            );
        };

        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
        window.addEventListener("resize", updateHeader);

        return () => {
            window.removeEventListener("scroll", updateHeader);
            window.removeEventListener("resize", updateHeader);
        };
    }, [isHomePage]);

    return (
        <header
            ref={headerRef}
            className={`top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${
                "fixed"
            } ${
                hasOverlay
                    ? "border-white/65 bg-[#07172E]/1 shadow-none"
                    : "border-slate-100 bg-white shadow-xs"
            }`}
        >
            <div className="mx-auto flex h-20 w-full max-w-[1760px] items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-14">
                {/* Brand Logo & Slogan */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-11 h-11">
                        <Image
                            src={'/logo1.png'}
                            fill
                            alt="bao-ve-the-an-logo"
                        />
                    </div>
                    <div className="leading-tight">
                        <span
                            className={`block text-base font-extrabold tracking-wide transition-colors duration-300 ${
                                hasOverlay ? "text-white" : "text-[#0B1E3F]"
                            }`}
                        >
                            {COMPANY.name.toUpperCase()}
                        </span>
                        <span
                            className={`mt-0.5 block text-[11px] font-medium transition-colors duration-300 ${
                                hasOverlay ? "text-white/70" : "text-slate-500"
                            }`}
                        >
                            Uy tín — Chuyên nghiệp — An toàn
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map((link) => {
                        if (link.href === "/gioi-thieu") {
                            return (
                                <NavDropdown
                                    key={`${link.href}-${pathname}`}
                                    label={link.label}
                                    items={ABOUT_MENU_ITEMS}
                                    active={ABOUT_MENU_PATHS.some((path) => pathname === path)}
                                    overlay={hasOverlay}
                                    panelId="about-desktop-panel"
                                />
                            );
                        }

                        return (
                            <Fragment key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    className={`py-2 text-xs font-bold tracking-wider transition-colors ${
                                        hasOverlay
                                            ? "text-white/90 hover:text-white"
                                            : pathname === link.href
                                              ? "text-[#1D528F]"
                                              : "text-slate-700 hover:text-[#1D528F]"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                                {link.href === "/du-an" && (
                                    <NavDropdown
                                        label="TUYỂN DỤNG"
                                        items={RECRUIT_MENU_ITEMS}
                                        active={isRecruitPath(pathname)}
                                        overlay={hasOverlay}
                                        panelId="recruit-desktop-panel"
                                    />
                                )}
                            </Fragment>
                        );
                    })}
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
                    className={`flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
                        hasOverlay ? "text-white" : "text-slate-700"
                    }`}
                    onClick={() => setDrawerOpen(true)}
                    aria-label="Mở menu điều hướng"
                    aria-expanded={drawerOpen}
                    aria-controls="mobile-navigation-drawer"
                >
                    <Menu size={22} />
                </button>
            </div>

            <MobileDrawer
                isOpen={drawerOpen}
                onClose={closeDrawer}
            />
        </header>
    );
}
