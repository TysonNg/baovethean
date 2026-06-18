import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { RECRUIT_STEPS } from "@/lib/recruit-data";

export default function RecruitProcess() {
    return (
        <section className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <Eyebrow text="Quy trình ứng tuyển" light />
                <h2 className="heading-1 mt-4 mb-4 max-w-2xl">
                    Bốn bước để bắt đầu công việc tại Bảo vệ Thế An.
                </h2>
                <p className="text-white/60 leading-relaxed max-w-2xl mb-12">
                    Quy trình minh bạch, không phí ứng tuyển. Mọi thông tin được
                    phản hồi qua email hoặc Zalo trong vòng 7 ngày.
                </p>

                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-10 lg:gap-x-2 border-t border-navy-700 pt-10">
                    {RECRUIT_STEPS.map((step, i) => (
                        <Fragment key={step.number}>
                            <li className="flex flex-col">
                                <span className="w-12 h-12 bg-white text-navy-900 font-serif text-xl font-semibold rounded flex items-center justify-center mb-6">
                                    {step.number}
                                </span>
                                <h3 className="text-base font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed mb-6">
                                    {step.description}
                                </p>
                                <p className="eyebrow text-gold-soft mt-auto">
                                    {step.timing}
                                </p>
                            </li>
                            {i < RECRUIT_STEPS.length - 1 && (
                                <div
                                    className="hidden lg:flex items-start pt-4 text-gold/40"
                                    aria-hidden="true"
                                >
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </Fragment>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
