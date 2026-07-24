import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import WhyChoose from "@/components/sections/WhyChoose";
import CtaBand from "@/components/sections/CtaBand";
import News from "@/components/sections/News";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <WhyChoose />
            <News />
            <Clients />
            <CtaBand />
        </>
    );
}
