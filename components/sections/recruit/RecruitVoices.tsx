import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { RECRUIT_TESTIMONIALS } from "@/lib/recruit-data";

export default function RecruitVoices() {
    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <Eyebrow text="Tiếng nói nội bộ" />
                <h2 className="heading-1 text-ink mt-4 mb-12 max-w-2xl">
                    Đồng nghiệp nói về công việc tại Bảo vệ Thế An.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {RECRUIT_TESTIMONIALS.map((item) => (
                        <figure
                            key={item.name}
                            className="bg-white border border-line rounded p-8 md:p-10 flex flex-col"
                        >
                            <Quote
                                size={24}
                                className="text-gold mb-6"
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            <blockquote className="text-ink leading-relaxed mb-8">
                                {item.quote}
                            </blockquote>
                            <figcaption className="border-t border-line pt-5 flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-xs font-semibold text-gold">
                                        {item.initials}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-ink">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-ink-3 mt-0.5">
                                        {item.role}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}
