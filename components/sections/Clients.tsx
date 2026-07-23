import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { TESTIMONIAL } from "@/lib/data";

const PARTNER_LOGOS = [
    "SAMSUNG",
    "VINHOMES",
    "BIDV",
    "TOYOTA",
    "Vietcombank",
    "Viettel",
];

export default function Clients() {
    return (
        <section id="clients" className="bg-[#F8FAFC] py-16 md:py-20 border-t border-slate-200/60">
            <Container>
                {/* Section Title Centered */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1E3F] tracking-tight uppercase">
                        Đối Tác & Khách Hàng
                    </h2>
                </div>

                {/* Partner Logos Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center mb-16 px-4">
                    {PARTNER_LOGOS.map((name) => (
                        <div
                            key={name}
                            className="w-full h-16 flex items-center justify-center bg-white rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow"
                        >
                            <span className="text-sm font-extrabold text-[#1D528F] tracking-wider uppercase">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Testimonial Quote */}
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs">
                    <div>
                        <Quote size={32} className="text-[#1D528F] mb-4 opacity-80" />
                        <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 italic">
                            &ldquo;{TESTIMONIAL.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-[#0B1E3F] rounded-full flex items-center justify-center text-sm font-bold text-white shadow-xs">
                                {TESTIMONIAL.initials}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#0B1E3F]">
                                    {TESTIMONIAL.name}
                                </div>
                                <div className="text-xs text-slate-500">
                                    {TESTIMONIAL.title}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200/60">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-5 h-0.5 bg-[#1D528F]" />
                            <span className="text-xs uppercase tracking-wider text-[#1D528F] font-bold">
                                Tóm tắt hợp tác
                            </span>
                        </div>
                        <div className="space-y-0">
                            {TESTIMONIAL.summary.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between py-2.5 border-b border-slate-200/80 last:border-0"
                                >
                                    <span className="text-xs text-slate-500 font-medium">
                                        {item.label}
                                    </span>
                                    <span className="text-xs font-bold text-[#0B1E3F]">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
