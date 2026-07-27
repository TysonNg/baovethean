"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/data";

const phoneHref = `tel:${COMPANY.hotline.replaceAll(" ", "")}`;

function FloatingLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium leading-none text-navy-900 shadow-sm">
            {children}
        </span>
    );
}

function FloatingCircle({ children }: { children: React.ReactNode }) {
    return (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#087cf5] text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none">
            {children}
        </span>
    );
}

export default function FloatingContact() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const updateVisibility = () => {
            const hero =
                document.querySelector<HTMLElement>("[data-home-hero]");
            const nextIsVisible = hero
                ? hero.getBoundingClientRect().bottom <= 0
                : true;

            setIsVisible((current) =>
                current === nextIsVisible ? current : nextIsVisible
            );
        };

        updateVisibility();
        window.addEventListener("scroll", updateVisibility, { passive: true });
        window.addEventListener("resize", updateVisibility);

        return () => {
            window.removeEventListener("scroll", updateVisibility);
            window.removeEventListener("resize", updateVisibility);
        };
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <aside
            aria-label="Kênh liên hệ nhanh"
            aria-hidden={!isVisible}
            className={`fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2 transition-[opacity,transform] duration-300 sm:bottom-6 sm:right-6 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
            }`}
        >
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Lên đầu trang"
                className="group cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
            >
                <ArrowUp aria-hidden="true" size={25} strokeWidth={1.8} />
            </button>

            <a
                href={phoneHref}
                aria-label="Gọi kinh doanh"
                className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
            >
                <FloatingLabel>SĐT: Kinh doanh</FloatingLabel>
                <FloatingCircle>
                    <PhoneCall aria-hidden="true" size={21} />
                </FloatingCircle>
            </a>

            <a
                href={`https://zalo.me/${COMPANY.hotline.replaceAll(" ", "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Zalo Kinh Doanh"
                className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
            >
                <FloatingLabel>Zalo Kinh Doanh</FloatingLabel>
                <FloatingCircle>
                    <span className="rounded-[5px] border border-white px-1 py-0.5 text-[9px] font-bold leading-none">
                        Zalo
                    </span>
                </FloatingCircle>
            </a>

            <a
                href="https://m.me/baovethean"
                target="_blank"
                rel="noreferrer"
                aria-label="Messenger Tuyển dụng"
                className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
            >
                <FloatingLabel>Mess Tuyển dụng</FloatingLabel>
                <FloatingCircle>
                    <MessageCircle aria-hidden="true" size={24} fill="currentColor" />
                </FloatingCircle>
            </a>
        </aside>
    );
}
