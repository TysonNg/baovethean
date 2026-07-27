"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    rating: number;
    content: string;
    initials: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Anh Minh Quân",
        role: "Quản lý vận hành tòa nhà",
        rating: 5,
        content:
            "Đội ngũ làm việc chuyên nghiệp, phản ứng nhanh và phối hợp rất tốt với ban quản lý.",
        initials: "MQ",
    },
    {
        id: 2,
        name: "Chị Thanh Hương",
        role: "Đại diện doanh nghiệp",
        rating: 5,
        content:
            "Nhân sự có tác phong nghiêm túc, đúng giờ và xử lý tình huống rất chủ động.",
        initials: "TH",
    },
    {
        id: 3,
        name: "Anh Hoàng Nam",
        role: "Quản lý nhà máy",
        rating: 5,
        content:
            "Quy trình triển khai rõ ràng, đội ngũ ổn định và hỗ trợ rất nhanh khi có yêu cầu.",
        initials: "HN",
    },
];

const AUTOPLAY_DELAY = 5500;
const SWIPE_THRESHOLD = 42;

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const transitionTimeout = useRef<number | null>(null);

    const changeSlide = useCallback(
        (direction: -1 | 1) => {
            const updateIndex = () =>
                setActiveIndex((current) => {
                    const nextIndex =
                        (current + direction + testimonials.length) %
                        testimonials.length;
                    return nextIndex;
                });

            if (prefersReducedMotion) {
                updateIndex();
                return;
            }

            setIsVisible(false);
            if (transitionTimeout.current !== null) {
                window.clearTimeout(transitionTimeout.current);
            }
            transitionTimeout.current = window.setTimeout(() => {
                updateIndex();
                setIsVisible(true);
            }, 180);
        },
        [prefersReducedMotion]
    );

    const previousSlide = useCallback(
        () => changeSlide(-1),
        [changeSlide]
    );

    const nextSlide = useCallback(() => changeSlide(1), [changeSlide]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        const updateMotionPreference = () =>
            setPrefersReducedMotion(mediaQuery.matches);

        updateMotionPreference();
        mediaQuery.addEventListener("change", updateMotionPreference);

        return () =>
            mediaQuery.removeEventListener("change", updateMotionPreference);
    }, []);

    useEffect(
        () => () => {
            if (transitionTimeout.current !== null) {
                window.clearTimeout(transitionTimeout.current);
            }
        },
        []
    );

    useEffect(() => {
        if (isPaused || prefersReducedMotion) {
            return;
        }

        const interval = window.setInterval(nextSlide, AUTOPLAY_DELAY);
        return () => window.clearInterval(interval);
    }, [isPaused, nextSlide, prefersReducedMotion]);

    const testimonial = testimonials[activeIndex];

    return (
        <section
            aria-label="Đánh giá của khách hàng"
            aria-roledescription="carousel"
            className="w-full rounded-[18px] bg-white p-3.5 text-[#071A33] shadow-[0_14px_34px_rgba(15,23,42,0.14)] sm:p-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsPaused(false);
                }
            }}
            onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
                setIsPaused(true);
            }}
            onTouchEnd={(event) => {
                const startX = touchStartX.current;
                const endX = event.changedTouches[0]?.clientX;
                touchStartX.current = null;
                setIsPaused(false);

                if (startX === null || endX === undefined) {
                    return;
                }

                const distance = endX - startX;
                if (Math.abs(distance) < SWIPE_THRESHOLD) {
                    return;
                }

                if (distance > 0) {
                    previousSlide();
                } else {
                    nextSlide();
                }
            }}
            onTouchCancel={() => {
                touchStartX.current = null;
                setIsPaused(false);
            }}
        >
            <div
                key={testimonial.id}
                aria-live="polite"
                className={`grid grid-cols-[58px_1fr] gap-3 transition-opacity duration-300 sm:grid-cols-[68px_1fr] sm:gap-4 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <div
                    aria-hidden="true"
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#E8EEF7] text-sm font-bold text-[#2759A7] sm:h-[68px] sm:w-[68px]"
                >
                    {testimonial.initials}
                </div>

                <div className="min-w-0">
                    <div
                        className="flex gap-0.5 text-[#D5A63C]"
                        aria-label={`${testimonial.rating} trên 5 sao`}
                    >
                        {Array.from({ length: testimonial.rating }).map(
                            (_, index) => (
                                <Star
                                    key={index}
                                    aria-hidden="true"
                                    size={12}
                                    fill="currentColor"
                                    strokeWidth={1.5}
                                />
                            )
                        )}
                    </div>
                    <p className="mt-2 line-clamp-3 text-[11px] leading-[1.55] text-[#364152] sm:text-xs">
                        {testimonial.content}
                    </p>
                    <p className="mt-2 text-xs font-bold sm:text-[13px]">
                        {testimonial.name}
                    </p>
                    <p className="mt-0.5 truncate text-[10px] text-slate-500">
                        {testimonial.role}
                    </p>
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                <span className="text-[10px] font-semibold tabular-nums text-slate-400">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        aria-label="Đánh giá trước"
                        onClick={previousSlide}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#071A33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2759A7]"
                    >
                        <ChevronLeft size={15} aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        aria-label="Đánh giá tiếp theo"
                        onClick={nextSlide}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#071A33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2759A7]"
                    >
                        <ChevronRight size={15} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}
