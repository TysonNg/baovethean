"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { CONTACT_FAQS } from "@/lib/contact-data";

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-10">
                    <div>
                        <Eyebrow text="Câu hỏi thường gặp" />
                        <h2 className="heading-1 text-ink mt-4">
                            Giải đáp nhanh về dịch vụ bảo vệ.
                        </h2>
                    </div>
                    <div className="lg:text-right lg:self-end">
                        <p className="text-sm text-ink-3 mb-4">
                            Bạn chưa tìm thấy câu trả lời? Vui lòng gọi
                            hotline hoặc gửi yêu cầu tư vấn — đội ngũ của chúng
                            tôi sẵn sàng giải đáp chi tiết.
                        </p>
                        <Button href="/lien-he#form" variant="outline" arrow>
                            Gửi câu hỏi
                        </Button>
                    </div>
                </div>

                <div className="space-y-3">
                    {CONTACT_FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        const number = String(i + 1).padStart(2, "0");
                        return (
                            <div
                                key={i}
                                className="bg-white rounded border border-line"
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : i)
                                    }
                                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                                >
                                    <span className="text-sm font-semibold text-gold-deep font-serif">
                                        {number}
                                    </span>
                                    <span className="flex-1 text-sm font-semibold text-ink">
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <Minus size={16} className="text-ink-3 shrink-0" />
                                    ) : (
                                        <Plus size={16} className="text-ink-3 shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-200 ${
                                        isOpen ? "max-h-60 pb-4" : "max-h-0"
                                    }`}
                                >
                                    <p className="px-5 pl-14 text-sm text-ink-3 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
