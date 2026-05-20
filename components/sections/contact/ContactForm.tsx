"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import {
    FORM_BUSINESS_OPTIONS,
    FORM_SERVICE_OPTIONS,
    FORM_REGION_OPTIONS,
    COMMITMENT_STATS,
} from "@/lib/contact-data";
import { COMPANY } from "@/lib/data";

const inputClass =
    "w-full bg-navy-800 border border-navy-700 rounded px-4 h-12 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors";
const selectClass = `${inputClass} appearance-none`;
const labelClass = "block text-xs font-medium text-white/60 mb-1.5";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("Form submitted:", data);
        setSubmitted(true);
    }

    return (
        <section className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">
                    <div>
                        <Eyebrow text="Form tư vấn" light />
                        <h2 className="heading-1 mt-4 mb-2">
                            Để lại thông tin — đội ngũ tư vấn sẽ liên hệ trong
                            4 giờ làm việc.
                        </h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Vui lòng cung cấp thông tin cơ bản dưới đây. Càng
                            chi tiết, chúng tôi càng đề xuất được giải pháp kỹ
                            thuật tốt hơn cho doanh nghiệp của bạn.
                        </p>

                        {submitted ? (
                            <div className="bg-navy-800 rounded p-6 text-center">
                                <p className="text-lg font-semibold text-gold mb-2">
                                    Gửi yêu cầu thành công!
                                </p>
                                <p className="text-sm text-white/60">
                                    Đội ngũ tư vấn sẽ liên hệ bạn trong vòng 4
                                    giờ làm việc.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className={labelClass}>Họ và tên *</label>
                                        <input name="name" required placeholder="Nguyễn Văn A" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Số điện thoại *</label>
                                        <input name="phone" required placeholder="0901 234 567" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Email</label>
                                        <input name="email" type="email" placeholder="email@company.com" className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClass}>Loại doanh nghiệp</label>
                                        <select name="business" className={selectClass} defaultValue="">
                                            <option value="" disabled>— Chọn loại hình —</option>
                                            {FORM_BUSINESS_OPTIONS.map((o) => (
                                                <option key={o} value={o}>{o}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Dịch vụ cần tư vấn</label>
                                        <select name="service" className={selectClass} defaultValue="">
                                            <option value="" disabled>— Chọn dịch vụ —</option>
                                            {FORM_SERVICE_OPTIONS.map((o) => (
                                                <option key={o} value={o}>{o}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className={labelClass}>Diện tích / quy mô</label>
                                        <input name="area" placeholder="VD: 5000m² / 200 người" className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Khu vực</label>
                                        <select name="region" className={selectClass} defaultValue="">
                                            <option value="" disabled>— Chọn khu vực —</option>
                                            {FORM_REGION_OPTIONS.map((o) => (
                                                <option key={o} value={o}>{o}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Tỉnh / thành phố</label>
                                        <input name="province" placeholder="— Chọn tỉnh / thành phố —" className={inputClass} />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>Mô tả yêu cầu</label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        placeholder="Mô tả ngắn gọn yêu cầu dịch vụ, đặc thù vận hành, thời gian triển khai mong muốn..."
                                        className="w-full bg-navy-800 border border-navy-700 rounded px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors resize-none"
                                    />
                                </div>

                                <label className="flex items-start gap-2 text-xs text-white/50 cursor-pointer">
                                    <input type="checkbox" name="agree" required className="mt-0.5 accent-gold" />
                                    Tôi đồng ý cung cấp thông tin trên để Bảo vệ Thế An liên hệ tư
                                    vấn. Thông tin được bảo mật theo chính sách bảo mật của công ty.
                                </label>

                                <Button type="submit" className="w-full md:w-auto">
                                    Yêu cầu tư vấn
                                </Button>
                            </form>
                        )}
                    </div>

                    <div className="lg:mt-16">
                        <div className="bg-navy-800 rounded p-6">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                                Hỗ trợ trực tiếp
                            </span>
                            <p className="text-sm text-white/60 mt-2 mb-4">
                                Cần phản hồi nhanh? Liên hệ trực tiếp bên dưới
                                đây.
                            </p>
                            <div className="flex items-center gap-3 bg-navy-700 rounded p-4 mb-6">
                                <Phone size={18} className="text-gold shrink-0" />
                                <div>
                                    <p className="text-lg font-bold text-gold font-serif">
                                        {COMPANY.hotline}
                                    </p>
                                </div>
                            </div>

                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                                Cam kết phục vụ doanh nghiệp
                            </span>
                            <div className="mt-3 space-y-0">
                                {COMMITMENT_STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex items-center justify-between py-3 border-b border-navy-700 last:border-0"
                                    >
                                        <span className="text-sm text-white/50">
                                            {stat.label}
                                        </span>
                                        <span className="text-sm font-semibold">
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
