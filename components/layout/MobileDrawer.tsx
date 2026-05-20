"use client";

import { X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import Button from "@/components/ui/Button";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-line">
                    <span className="font-semibold text-ink">Menu</span>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="flex flex-col p-6 gap-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className="py-3 text-sm font-medium text-ink hover:text-gold-deep transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
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
