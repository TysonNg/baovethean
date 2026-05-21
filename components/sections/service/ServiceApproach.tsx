import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { SERVICE_APPROACH_STEPS } from "@/lib/service-data";

export default function ServiceApproach() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <Eyebrow text="Cách làm việc" />
                <h2 className="heading-1 text-ink mt-4 mb-4 max-w-lg">
                    Giải pháp bảo vệ theo từng mô hình doanh nghiệp.
                </h2>
                <p className="lead text-ink-3 max-w-xl mb-12">
                    Mỗi khách hàng có nhu cầu khác nhau — vì vậy, thay vì áp
                    dụng một giải pháp chung cho tất cả, chúng tôi khảo sát
                    thực địa, phân tích rủi ro và đề xuất phương án phù hợp với
                    từng mô hình.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <Photo
                        label="THAM KHẢO"
                        className="aspect-[4/5] rounded"
                        overlay={
                            <div className="p-5">
                                <div className="bg-navy-800 rounded p-4">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                                        Thời gian triển khai
                                    </span>
                                    <p className="text-sm font-semibold text-white mt-1">
                                        Tầng 3 – 5 ngày làm việc
                                    </p>
                                </div>
                            </div>
                        }
                    />

                    <div className="space-y-8">
                        {SERVICE_APPROACH_STEPS.map((step) => (
                            <div key={step.number}>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="heading-2 font-serif text-gold">
                                        {step.number}
                                    </span>
                                    <span className="flex-1 h-px bg-line" />
                                </div>
                                <h3 className="heading-3 text-ink mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-ink-3 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
