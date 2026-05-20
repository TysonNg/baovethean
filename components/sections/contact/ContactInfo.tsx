import { Phone, Mail, MapPin, Clock, LayoutGrid } from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT_INFO_CARDS } from "@/lib/contact-data";

const ICONS = [Phone, Mail, MapPin, Clock, LayoutGrid];

export default function ContactInfo() {
    return (
        <section className="py-16 border-y border-line">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {CONTACT_INFO_CARDS.map((card, i) => {
                        const Icon = ICONS[i];
                        return (
                            <div key={card.category}>
                                <div className="w-10 h-10 border border-gold/30 rounded flex items-center justify-center mb-4">
                                    <Icon
                                        size={20}
                                        className="text-gold"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">
                                    {card.category}
                                </span>
                                <h3 className="text-base font-semibold text-ink mt-1 mb-2">
                                    {card.label}
                                </h3>
                                <p className="text-sm font-semibold text-ink mb-2">
                                    {card.primary}
                                </p>
                                {card.details.map((detail) => (
                                    <p
                                        key={detail}
                                        className="text-xs text-ink-3 leading-relaxed"
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
