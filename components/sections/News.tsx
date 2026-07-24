import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { HOME_CASE_STUDY } from "@/lib/home-story-data";

export default function News() {
    const study = HOME_CASE_STUDY;

    return (
        <section id="news" aria-labelledby="case-study-heading" className="bg-white py-16 md:py-24">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
                    <figure className="overflow-hidden rounded-xl border border-line bg-navy-800">
                        <div className="relative aspect-[4/3] lg:aspect-[6/5]">
                            <Image src={study.image} alt={study.imageAlt} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" />
                        </div>
                        <figcaption className="grid grid-cols-3 divide-x divide-line bg-bg-alt px-4 py-5 text-center">
                            {study.highlights.map((item) => (
                                <span key={item.label}>
                                    <strong className="block text-xl text-navy-800 md:text-2xl">{item.value}</strong>
                                    <small className="text-ink-3">{item.label}</small>
                                </span>
                            ))}
                        </figcaption>
                    </figure>

                    <article>
                        <p className="eyebrow">{study.eyebrow}</p>
                        <h2 id="case-study-heading" className="heading-1 mt-4 text-ink">{study.title}</h2>
                        <p className="mt-4 leading-relaxed text-ink-3">{study.description}</p>
                        <ol className="mt-7 border-t border-line">
                            {study.steps.map((step) => (
                                <li key={step.number} className="grid grid-cols-[42px_1fr] gap-4 border-b border-line py-5">
                                    <span className="text-lg font-semibold text-gold-deep">{step.number}</span>
                                    <div>
                                        <h3 className="font-semibold text-ink">{step.label}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-ink-3">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>

                <dl className="mt-10 grid grid-cols-2 border-y border-line md:grid-cols-4">
                    {study.stats.map((stat) => (
                        <div key={stat.label} className="border-line px-4 py-6 first:pl-0 even:border-l md:border-l md:first:border-l-0 md:last:pr-0">
                            <dt className="text-xs leading-relaxed text-ink-3">{stat.label}</dt>
                            <dd className="mt-1 text-xl font-semibold text-navy-800 md:text-2xl">{stat.value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-10 rounded-xl border border-line bg-bg-alt p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
                    <div className="max-w-2xl">
                        <h3 className="text-lg font-semibold text-ink">{study.cta.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-3">{study.cta.description}</p>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
                        <Link href={study.cta.primaryHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-gold px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                            Đăng ký khảo sát miễn phí
                            <ArrowRight aria-hidden="true" size={16} />
                        </Link>
                        <a href={study.cta.phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-line bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold" aria-label={`Gọi tư vấn ngay ${study.cta.phoneLabel}`}>
                            <Phone aria-hidden="true" size={16} />
                            Gọi tư vấn ngay
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
