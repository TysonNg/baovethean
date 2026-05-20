import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-24">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div className="max-w-xl">
                        <Eyebrow text="Quy trình vận hành" />
                        <h2 className="heading-1 text-ink mt-4">
                            Sáu bước hợp tác — minh bạch từ khảo sát đến vận
                            hành.
                        </h2>
                    </div>
                    <p className="text-ink-3 max-w-sm leading-relaxed">
                        Quy trình áp dụng cho mọi hợp đồng — đảm bảo khách
                        hàng hiểu rõ phạm vi, trách nhiệm và phương án triển
                        khai trước khi ký kết.
                    </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-3">
                    {PROCESS_STEPS.map((step, i) => (
                        <div key={step.number} className="flex items-start gap-3">
                            <div className="flex flex-col items-center w-[140px] lg:w-auto">
                                <div className="w-16 h-16 border border-line rounded flex items-center justify-center mb-4">
                                    <span className="text-xl font-serif font-semibold text-ink">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold text-ink text-center mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-ink-3 text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {i < PROCESS_STEPS.length - 1 && (
                                <div className="mt-5 hidden lg:block">
                                    <ArrowRight size={20} className="text-gold" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
