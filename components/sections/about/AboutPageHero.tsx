import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

interface AboutPageHeroProps {
    eyebrow: string;
    title: string;
    description: string;
    current: string;
}

export default function AboutPageHero({
    eyebrow,
    title,
    description,
}: AboutPageHeroProps) {
    return (
        <>
            <PageBanner title={title} />
            <section className="marketing-section-compact bg-white">
                <Container>
                    <div className="max-w-3xl">
                        <Eyebrow text={eyebrow} />
                        <p className="lead mt-4 text-ink-3">{description}</p>
                    </div>
                </Container>
            </section>
        </>
    );
}
