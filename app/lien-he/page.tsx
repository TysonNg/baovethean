import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactOffices from "@/components/sections/contact/ContactOffices";
import ContactEmergency from "@/components/sections/contact/ContactEmergency";
import ContactCoverage from "@/components/sections/contact/ContactCoverage";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export const metadata: Metadata = {
    title: "Liên hệ tư vấn",
    description:
        "Liên hệ Bảo vệ Thế An để được tư vấn dịch vụ bảo vệ chuyên nghiệp. Hotline 24/7: 1900 8688. Khảo sát miễn phí, báo giá trong 48 giờ.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactOffices />
            <ContactEmergency />
            <ContactCoverage />
            <ContactFAQ />
        </>
    );
}
