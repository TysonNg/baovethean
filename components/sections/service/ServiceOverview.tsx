import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_HIGHLIGHTS } from "@/lib/service-data";

export default function ServiceOverview() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-12">
                    <div>
                        <Eyebrow text="Tổng quan" />
                        <h2 className="heading-1 text-ink mt-4">
                            Giải pháp bảo vệ linh hoạt — chuẩn hóa từ khảo sát
                            đến vận hành.
                        </h2>
                    </div>
                    <p className="text-ink-3 leading-relaxed lg:pt-10">
                        Bảo vệ Thế An cung cấp dịch vụ bảo vệ linh hoạt theo
                        từng mô hình doanh nghiệp — kích thước địa điểm, mức
                        độ rủi ro và yêu cầu vận hành đều được khảo sát trước
                        khi đề xuất phương án.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SERVICE_HIGHLIGHTS.map((item) => (
                        <div
                            key={item.code}
                            className="border-t border-line pt-6"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                                {item.code}
                            </span>
                            <h3 className="heading-3 text-ink mt-3 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-ink-3 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
