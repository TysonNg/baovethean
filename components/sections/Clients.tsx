"use client";

import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star } from "lucide-react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import { TESTIMONIAL } from "@/lib/data";

const PARTNER_LOGOS = [
    "SAMSUNG",
    "VINHOMES",
    "BIDV",
    "TOYOTA",
    "VIETCOMBANK",
    "VIETTEL",
];

const CLIENT_STORIES = [
    {
        partner: "SAMSUNG",
        label: "Tòa nhà văn phòng",
        quote: TESTIMONIAL.quote,
        name: TESTIMONIAL.name,
        title: TESTIMONIAL.title,
        initials: TESTIMONIAL.initials,
    },
    {
        partner: "VINHOMES",
        label: "Khu đô thị & dân cư",
        quote: "Thế An luôn chủ động trong công tác an ninh, nhân viên thân thiện, hỗ trợ cư dân nhiệt tình và phối hợp tốt với ban quản lý.",
        name: "Đại diện Ban Quản lý",
        title: "Khu đô thị — TP. Hồ Chí Minh",
        initials: "BQL",
    },
    {
        partner: "BIDV",
        label: "Ngân hàng & tài chính",
        quote: "Báo cáo nhanh chóng, chính xác. Mọi sự cố đều được phản hồi và xử lý kịp thời, giúp đơn vị yên tâm trong vận hành hằng ngày.",
        name: "Đại diện đơn vị",
        title: "Khối vận hành — Hà Nội",
        initials: "ĐV",
    },
    {
        partner: "TOYOTA",
        label: "Nhà máy sản xuất",
        quote: "Phương án bố trí nhân sự rõ ràng, quy trình bàn giao ca chặt chẽ và đội ngũ phối hợp tốt với bộ phận vận hành.",
        name: "Đại diện nhà máy",
        title: "Bộ phận vận hành — Bình Dương",
        initials: "NM",
    },
    {
        partner: "VIETCOMBANK",
        label: "Ngân hàng & tài chính",
        quote: "Tác phong chuyên nghiệp, phản hồi nhanh và báo cáo minh bạch giúp công tác an ninh tại đơn vị luôn được kiểm soát tốt.",
        name: "Đại diện chi nhánh",
        title: "Khối vận hành — TP. Hồ Chí Minh",
        initials: "CN",
    },
    {
        partner: "VIETTEL",
        label: "Văn phòng & hạ tầng",
        quote: "Đội ngũ chủ động, kỷ luật và luôn tuân thủ điều lệnh. Các tình huống phát sinh được tiếp nhận và xử lý đúng quy trình.",
        name: "Đại diện doanh nghiệp",
        title: "Ban quản lý cơ sở — Hà Nội",
        initials: "DN",
    },
];

const STORY_GROUPS = Array.from(
    { length: Math.ceil(CLIENT_STORIES.length / 3) },
    (_, index) => CLIENT_STORIES.slice(index * 3, index * 3 + 3),
);

export default function Clients() {
    const carouselRef = useRef<CarouselRef>(null);

    return (
        <section id="clients" className="marketing-section bg-bg-alt">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className=" heading-1 text-gold-soft text-2xl eyebrow">
                        Khách hàng tin tưởng Thế An
                    </h1>

                    <p className="text-ink-3 leading-relaxed mt-4">
                        Thế An đồng hành cùng hàng trăm doanh nghiệp và tòa nhà,
                        mang đến giải pháp an ninh chuyên nghiệp, vận hành chuẩn
                        mực và dịch vụ tận tâm.
                    </p>
                </div>

                <div className="clients-carousel relative mt-8 px-0 sm:px-10">
                    <button type="button" aria-label="Khách hàng trước" onClick={() => carouselRef.current?.prev()} className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-gold-deep shadow-md transition hover:bg-gold hover:text-white sm:flex">
                        <ChevronLeft size={20} />
                    </button>
                    <button type="button" aria-label="Khách hàng tiếp theo" onClick={() => carouselRef.current?.next()} className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-gold-deep shadow-md transition hover:bg-gold hover:text-white sm:flex">
                        <ChevronRight size={20} />
                    </button>
                    <Carousel ref={carouselRef} autoplay autoplaySpeed={4800} dots={{ className: "!static mt-5" }}>
                        {STORY_GROUPS.map((group, groupIndex) => (
                            <div key={groupIndex} className="px-0.5 pb-1">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                    {group.map((story) => <article key={story.partner} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(7,23,46,0.07)]">
                                    <div className="relative aspect-[16/7] bg-navy-800 p-5 flex items-end">
                                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_20%,rgba(224,193,129,0.35),transparent_40%),linear-gradient(135deg,#13284E,#07172E)]" />
                                        <span className="relative text-xl font-bold tracking-wider text-white/80">{story.partner}</span>
                                        <span className="absolute right-4 top-4 text-[10px] uppercase tracking-wider text-white/50">{story.label}</span>
                                        <span className="absolute bottom-4 right-4 rounded bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-navy-900">{story.partner}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex gap-0.5 text-gold" aria-label="5 sao">
                                                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}
                                            </div>
                                            <Quote size={23} className="text-gold/80" />
                                        </div>
                                        <blockquote className="text-sm leading-relaxed text-ink">“{story.quote}”</blockquote>
                                        <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] font-bold text-gold-soft">{story.initials}</div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-ink">{story.name}</p>
                                                <p className="mt-0.5 text-xs text-ink-3 line-clamp-2">{story.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </article>)}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm text-ink-3 sm:flex-row">
                    <ShieldCheck size={22} className="text-gold" />
                    <span>Hơn <strong className="text-gold-deep">100+</strong> khách hàng doanh nghiệp tin tưởng</span>
                </div>

                <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-lg border border-line bg-white sm:grid-cols-3 lg:grid-cols-6">
                    {PARTNER_LOGOS.map((name) => (
                        <div key={name} className="flex h-16 items-center justify-center border-b border-line px-3 text-xs font-bold tracking-wider text-ink-3/70 last:border-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
                            {name}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
