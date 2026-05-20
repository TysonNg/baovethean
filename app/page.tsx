import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Standards from "@/components/sections/Standards";
import Clients from "@/components/sections/Clients";
import CtaBand from "@/components/sections/CtaBand";
import News from "@/components/sections/News";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <About />
            <Services />
            <WhyChoose />
            <Process />
            <Standards />
            <Clients />
            <CtaBand />
            <News />
        </>
    );
}
