import Hero from "@/components/sections/Hero";
import HomeIntroduction from "@/components/sections/HomeIntroduction";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Clients from "@/components/sections/Clients";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import KnowledgeInsights from "@/components/sections/KnowledgeInsights";

export default function Home() {
    return (
        <>
            <Hero />
            <HomeIntroduction />
            <Services />
            <WhyChoose />
            {/* <KnowledgeInsights /> */}
            <Clients />
            <ConsultationCTA />
        </>
    );
}
