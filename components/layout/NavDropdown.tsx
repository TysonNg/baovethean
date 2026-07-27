"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavDropdownItem {
    title: string;
    href: string;
}

interface NavDropdownProps {
    label: string;
    items: readonly NavDropdownItem[];
    active: boolean;
    panelId: string;
    overlay?: boolean;
}

export default function NavDropdown({
    label,
    items,
    active,
    panelId,
    overlay = false,
}: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

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
            rootRef.current
                ?.querySelector<HTMLAnchorElement>("[data-nav-dropdown-link]")
                ?.focus();
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
                aria-controls={panelId}
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
                        : active
                          ? "text-[#1D528F]"
                          : "text-slate-700 hover:text-[#1D528F]"
                }`}
            >
                {label}
                <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <nav
                    id={panelId}
                    aria-label={label}
                    className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
                >
                    <div className="rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg">
                        {items.map((item) => {
                            const itemIsActive = pathname === item.href;
                            return (
                                <Link
                                    data-nav-dropdown-link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={itemIsActive ? "page" : undefined}
                                    className={`block rounded-md px-4 py-3 text-sm font-medium tracking-normal outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold ${
                                        itemIsActive
                                            ? "bg-slate-50 text-[#1D528F]"
                                            : "text-slate-700 hover:bg-slate-50 hover:text-[#1D528F]"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </div>
    );
}
