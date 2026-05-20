import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { CLIENTS, TESTIMONIAL } from "@/lib/data";

export default function Clients() {
    return (
        <section id="clients" className="py-20 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div className="max-w-xl">
                        <Eyebrow text="Khách hàng tiêu biểu" />
                        <h2 className="heading-1 text-ink mt-4 mb-4">
                            Đối tác đồng hành cùng Bảo vệ Thế An.
                        </h2>
                        <p className="text-ink-3 leading-relaxed">
                            Hơn 200 doanh nghiệp đang sử dụng dịch vụ bảo vệ
                            và giám sát của chúng tôi tại 18 tỉnh thành trên cả
                            nước.
                        </p>
                    </div>
                    <span className="px-3 py-1.5 border border-line rounded text-xs font-medium text-ink-3 uppercase tracking-wider whitespace-nowrap">
                        Cập nhật Q1 · 2026
                    </span>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 border border-line rounded overflow-hidden mb-14">
                    {CLIENTS.map((name) => (
                        <div
                            key={name}
                            className="flex items-center justify-center h-16 border border-line text-xs font-semibold text-ink-3 tracking-wider uppercase"
                        >
                            {name}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start">
                    <div>
                        <Quote size={32} className="text-gold mb-4" />
                        <blockquote className="text-lg text-ink leading-relaxed mb-6">
                            {TESTIMONIAL.quote}
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-sm font-bold text-gold-soft">
                                {TESTIMONIAL.initials}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-ink">
                                    {TESTIMONIAL.name}
                                </div>
                                <div className="text-xs text-ink-3">
                                    {TESTIMONIAL.title}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-line rounded p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-6 h-px bg-gold" />
                            <span className="text-[10px] uppercase tracking-wider text-gold-deep font-semibold">
                                Tóm tắt hợp tác
                            </span>
                        </div>
                        <div className="space-y-0">
                            {TESTIMONIAL.summary.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between py-3 border-b border-line last:border-0"
                                >
                                    <span className="text-sm text-ink-3">
                                        {item.label}
                                    </span>
                                    <span className="text-sm font-semibold text-ink">
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
