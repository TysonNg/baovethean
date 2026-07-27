import Image from "next/image";
import { STATS } from "@/lib/data";

export default function Hero() {
    return (
        <section
            data-home-hero
            className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#07172E] px-4 pb-6 pt-26 text-white sm:px-6 sm:pb-8 sm:pt-28"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-banner1.png"
                    alt="Ngôi nhà được bảo vệ trong đêm"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#06101f]/45" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#06101f]/55 via-transparent to-[#06101f]/85" />
            </div>

            <div className="mx-auto flex w-full max-w-[1280px] flex-1 items-center justify-start py-10 text-start sm:py-14">
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
                        An toàn của bạn
                        <span className="block sm:text-3xl">là trách nhiệm của chúng tôi</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-100 drop-shadow-md sm:text-base">
                        Cung cấp dịch vụ bảo vệ chuyên nghiệp, uy tín và hiệu quả trên toàn quốc.
                    </p>

                    <div className="mt-8 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-start sm:gap-4">
                        <a
                            href="/lien-he"
                            className="rounded-lg border border-blue-300/30 bg-[#1D528F] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#164275] hover:shadow-xl"
                        >
                            Nhận phương án bảo vệ
                        </a>
                        <a
                            href="#services"
                            className="rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[960px] pb-2 sm:pb-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                    {STATS.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`min-w-0 border-white/25 px-3 py-2 text-center ${
                                index % 2 === 1 ? "border-l" : ""
                            } ${
                                index >= 2
                                    ? "border-t pt-6 sm:border-t-0 sm:pt-2"
                                    : ""
                            } sm:border-l sm:first:border-l-0`}
                        >
                            <div className="text-2xl font-bold leading-none tracking-tight text-white drop-shadow-lg sm:text-3xl lg:text-[34px]">
                                {stat.value}
                            </div>
                            <div className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-200 drop-shadow-md sm:text-xs">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
