import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { STATS } from "@/lib/data";
import TestimonialCarousel from "./hero/TestimonialCarousel";

export default function Hero() {
    return (
        <section
            data-home-hero
            className="relative isolate min-h-[860px] overflow-hidden bg-[#B9D0DA] text-white lg:min-h-[820px] lg:h-[100svh]"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-banner.png"
                    alt="Nhân viên bảo vệ Thế An tại tòa nhà hiện đại"
                    fill
                    preload
                    sizes="100vw"
                    className="object-cover object-[68%_center] brightness-[1.03] contrast-[1.02] saturate-[0.96] md:object-[64%_center] xl:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,35,51,0.56)_0%,rgba(22,35,51,0.34)_28%,rgba(22,35,51,0.09)_49%,rgba(22,35,51,0)_64%,rgba(22,35,51,0.04)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#071A33]/50 via-[#071A33]/10 to-transparent" />
            </div>

            <div className="mx-auto grid min-h-[860px] w-full max-w-[1760px] grid-cols-1 grid-rows-[1fr_auto] px-4 pb-5 pt-24 sm:px-8 sm:pb-7 md:min-h-[820px] md:pt-28 lg:h-[100svh] lg:min-h-[820px] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:px-10 lg:pb-8 xl:px-12 2xl:px-14">
                <div className="self-start pt-10 sm:pt-14 md:max-w-[680px] lg:col-span-6 lg:self-center lg:max-w-[760px] lg:pt-0">
                    <h1 className="max-w-[760px] text-[clamp(2.5rem,6.8vw,4.25rem)] font-extrabold uppercase leading-[1.3] tracking-[-0.04em] text-white [text-shadow:0_1px_12px_rgba(7,26,51,0.14)] lg:text-[clamp(3rem,3.7vw,4rem)]">
                        <span className="block lg:whitespace-nowrap">
                            An toàn của bạn
                        </span>
                        <span className="block lg:whitespace-nowrap">
                            là trách nhiệm
                        </span>
                        <span className="block lg:whitespace-nowrap">
                            của chúng tôi
                        </span>
                    </h1>

                    <p className="mt-6 max-w-[500px] text-sm leading-7 text-white/90 [text-shadow:0_1px_8px_rgba(7,26,51,0.16)] sm:text-base sm:leading-7">
                        Cung cấp giải pháp bảo vệ chuyên nghiệp cho doanh nghiệp,
                        tòa nhà, nhà máy, khu dân cư và sự kiện.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
                        <a
                            href="/lien-he"
                            aria-label="Nhận phương án bảo vệ từ Bảo Vệ Thế An"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#071A33] transition-colors hover:bg-[#F3F5F7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                        >
                            Nhận phương án bảo vệ
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                        <a
                            href="#services"
                            aria-label="Tìm hiểu thêm về dịch vụ bảo vệ"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-[4px] transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                        >
                            Tìm hiểu thêm
                            <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <aside className="hidden self-center lg:col-start-10 lg:col-span-3 lg:block xl:col-start-10">
                    <div className="flex max-w-[300px] items-start gap-4 text-[#071A33]">
                        <span className="mt-1 h-20 w-px shrink-0 bg-[#D5A63C]/80" />
                        <p className="text-sm bg-gray-500/35 rounded-2xl p-2 font-medium leading-[1.65] text-white [text-shadow:0_1px_12px_rgba(7,26,51,0.14)] xl:text-[15px]">
                            Đội ngũ được đào tạo bài bản, tác phong chuẩn mực và
                            luôn sẵn sàng bảo vệ an toàn cho khách hàng 24/7.
                        </p>
                    </div>
                </aside>

                <div className="col-span-full mt-8 grid items-end gap-5 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
                    <div
                        aria-label="Những con số tạo nên sự khác biệt"
                        className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
                    >
                        <div className="flex w-max items-center rounded-lg border border-white/20 bg-white/10 px-2 py-2.5 ">
                            {STATS.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`min-w-[112px] px-4 ${
                                        index > 0
                                            ? "border-l border-white/25"
                                            : ""
                                    }`}
                                >
                                    <div className="text-xl font-extrabold leading-none tracking-[-0.03em] text-white sm:text-2xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75 sm:text-[10px]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full justify-self-end lg:max-w-[380px]">
                        <TestimonialCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
}
