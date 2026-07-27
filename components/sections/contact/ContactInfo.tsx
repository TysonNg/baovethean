import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "./ContactForm";

export interface ContactDetails {
    address: string;
    hotline: string;
    email: string;
    hours: string;
}

interface ContactInfoProps {
    details: ContactDetails;
}

export default function ContactInfo({ details }: ContactInfoProps) {
    const phoneHref = `tel:${details.hotline.replace(/[^\d+]/g, "")}`;
    const items = [
        {
            label: "Địa chỉ",
            value: details.address,
            icon: MapPin,
        },
        {
            label: "Hotline",
            value: details.hotline,
            href: phoneHref,
            icon: Phone,
        },
        {
            label: "Email",
            value: details.email,
            href: `mailto:${details.email}`,
            icon: Mail,
        },
        {
            label: "Giờ làm việc",
            value: details.hours,
            icon: Clock,
        },
    ];

    return (
        <section className="marketing-section bg-bg-alt">
            <Container>
                <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="py-2 lg:py-6">
                        <Eyebrow text="Thông tin liên hệ" />
                        <h2 className="heading-1 mt-4 text-ink">
                            Hãy bắt đầu cuộc trò chuyện.
                        </h2>
                        <p className="mt-4 max-w-md leading-7 text-ink-3">
                            Liên hệ với đội ngũ Bảo vệ Thế An để được tư vấn,
                            khảo sát và đề xuất phương án phù hợp.
                        </p>

                        <div className="mt-8 border-t border-line">
                            {items.map(({ label, value, href, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="flex gap-4 border-b border-line py-5"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-white text-gold-deep">
                                        <Icon size={19} aria-hidden="true" />
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-ink">
                                            {label}
                                        </h3>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="mt-1 block break-words text-sm leading-6 text-ink-3 transition-colors hover:text-gold-deep"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="mt-1 text-sm leading-6 text-ink-3">
                                                {value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </Container>
        </section>
    );
}
