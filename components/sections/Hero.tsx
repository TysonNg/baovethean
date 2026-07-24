import Image from "next/image";
import { ShieldCheck, UserCheck, Users, Clock } from "lucide-react";
import { STATS } from "@/lib/data";

const STAT_ICONS = [ShieldCheck, UserCheck, Users, Clock];

export default function Hero() {
    return (
        <section className="relative bg-[#0F264A] text-white pb-16 md:pb-24">
            {/* Background Image with Dark Blue Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner1.png"
                    alt="Bảo Vệ Thế An - Đội ngũ bảo vệ chuyên nghiệp"
                    fill
                    priority
                    className="object-cover object-top"
                />
                {/* Gradient overlay from left to right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#142e5e] via-[#142e5e]/80 to-[#142e5e]/30 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142e5e] via-transparent to-transparent opacity-80" />
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-16 pb-28 md:pt-24 md:pb-36">
                <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
                        An toàn của bạn <br />
                        <span className="text-white">là trách nhiệm của chúng tôi</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
                        Cung cấp dịch vụ bảo vệ chuyên nghiệp, uy tín và hiệu quả trên toàn quốc.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="/lien-he"
                            className="bg-[#1D528F] hover:bg-[#164275] text-white px-7 py-3.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-400/30"
                        >
                            Nhận phương án bảo vệ
                        </a>
                        <a
                            href="#services"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold text-sm backdrop-blur-sm transition-all duration-200"
                        >
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Stats Card Bar */}
            <div className="absolute bottom-[-4rem] bg-white rounded-xl shadow place-self-center z-20 max-w-[1200px] mx-auto">
                <div className="p-6 md:p-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divider-y lg:divider-y-0 lg:divider-x">
                        {STATS.map((stat, index) => {
                            const IconComponent = STAT_ICONS[index] || ShieldCheck;
                            return (
                                <div
                                    key={stat.label}
                                    className="flex items-center gap-4 py-2 lg:py-0 px-2 first:pl-0"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1D528F] flex items-center justify-center shrink-0">
                                        <IconComponent size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-extrabold text-[#0B1E3F] tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
