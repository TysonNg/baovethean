import { PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/data";

export default function ContactEmergency() {
    return (
        <section className="bg-navy-900 text-white py-16 md:py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                                Tổng đài đang hoạt động · 24/7
                            </span>
                        </div>
                        <h2 className="heading-1 mb-4">
                            Có sự cố an ninh cần xử lý ngay? Gọi hotline khẩn
                            cấp.
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-lg">
                            Đường dây nóng dành riêng cho khách hàng đang sử
                            dụng dịch vụ và các tình huống cần tổ phản ứng nhanh
                            — thời gian phản hồi trung bình dưới 15 phút trong
                            nội thành.
                        </p>
                    </div>

                    <div className="bg-navy-800 rounded p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Hotline khẩn cấp
                        </span>
                        <p className="text-4xl font-bold text-gold font-serif mt-2 mb-4">
                            {COMPANY.hotline}
                        </p>
                        <a
                            href={`tel:${COMPANY.hotline.replace(/\s/g, "")}`}
                            className="flex items-center justify-center gap-2 w-full h-12 bg-gold text-white rounded text-sm font-semibold hover:bg-gold-deep transition-colors"
                        >
                            <PhoneCall size={16} />
                            Gọi ngay
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-navy-700">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                            Tổng đài CSKH
                        </span>
                        <p className="text-sm font-semibold text-white/80 mt-1">
                            (028) 3823 8688
                        </p>
                    </div>
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                            Email khẩn
                        </span>
                        <p className="text-sm font-semibold text-white/80 mt-1">
                            sos@baovethean.vn
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
