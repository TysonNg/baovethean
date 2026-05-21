import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_PROCESS_STEPS } from "@/lib/service-data";

export default function ServiceProcess() {
    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-12">
                    <div>
                        <Eyebrow text="Quy trình" />
                        <h2 className="heading-1 text-ink mt-4">
                            Sáu bước để bắt đầu hợp tác.
                        </h2>
                    </div>
                    <p className="text-ink-3 leading-relaxed lg:pt-10">
                        Quy trình áp dụng cho mọi nhóm dịch vụ — minh bạch từ
                        lúc tiếp nhận đến vận hành thực tế.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {SERVICE_PROCESS_STEPS.map((step, i) => (
                        <div key={step.number} className="flex items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-14 h-14 border border-line rounded flex items-center justify-center shrink-0 bg-white">
                                        <span className="text-lg font-semibold text-ink">
                                            {step.number}
                                        </span>
                                    </div>
                                    {i < SERVICE_PROCESS_STEPS.length - 1 && (
                                        <ArrowRight
                                            size={16}
                                            className="text-ink-3/40 hidden lg:block shrink-0"
                                        />
                                    )}
                                </div>
                                <h3 className="text-sm font-semibold text-ink mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-ink-3 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
