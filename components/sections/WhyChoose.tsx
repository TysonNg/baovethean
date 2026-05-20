import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { WHY_REASONS, CERTIFICATIONS } from "@/lib/data";

export default function WhyChoose() {
    return (
        <section id="why" className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
                    <div>
                        <Eyebrow text="Năng lực" light />
                        <h2 className="heading-1 mt-4 mb-5">
                            Vì sao doanh nghiệp chọn chúng tôi?
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-8">
                            Sáu yếu tố cốt lõi tạo nên dịch vụ bảo vệ chuẩn
                            mực — được hơn 200 doanh nghiệp lựa chọn cho hợp
                            tác dài hạn.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {CERTIFICATIONS.map((cert) => (
                                <span
                                    key={cert}
                                    className="px-3 py-1.5 border border-navy-700 rounded text-xs font-medium text-white/60 uppercase tracking-wider"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy-700 rounded overflow-hidden">
                        {WHY_REASONS.map((reason) => (
                            <div
                                key={reason.number}
                                className="bg-navy-900 p-6"
                            >
                                <span className="text-sm font-semibold text-gold-soft">
                                    {reason.number}
                                </span>
                                <h3 className="text-base font-semibold mt-2 mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
