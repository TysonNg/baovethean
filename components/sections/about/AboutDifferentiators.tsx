import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import {
    ABOUT_DIFFERENTIATORS,
    ABOUT_CERTIFICATIONS,
} from "@/lib/about-data";

export default function AboutDifferentiators() {
    return (
        <section className="marketing-section bg-bg-alt">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <Eyebrow text="Vì sao khách hàng tin tưởng" />
                        <h2 className="heading-1 text-ink mt-4 mb-4">
                            Điều tạo nên sự khác biệt.
                        </h2>
                        <p className="text-ink-3 leading-relaxed max-w-md mb-8">
                            Bốn yếu tố cốt lõi tạo nên dịch vụ bảo vệ chuẩn
                            mực — được hơn 200 doanh nghiệp tin tưởng lựa chọn
                            cho hợp tác dài hạn.
                        </p>

                        <ul className="flex flex-wrap gap-3">
                            {ABOUT_CERTIFICATIONS.map((cert) => (
                                <li
                                    key={cert}
                                    className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 text-xs font-semibold text-ink"
                                >
                                    <Check
                                        size={14}
                                        className="text-gold"
                                        aria-hidden="true"
                                    />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {ABOUT_DIFFERENTIATORS.map((item) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center shrink-0">
                                    <Check
                                        size={14}
                                        className="text-gold"
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-ink mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-ink-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
