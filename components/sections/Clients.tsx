"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star } from "lucide-react";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import { TESTIMONIAL } from "@/lib/data";

const PARTNER_LOGOS = [
    { name: "SAMSUNG", src: "/images/logo_business/samsung.png" },
    { name: "VINHOMES", src: "/images/logo_business/vinhome.png" },
    { name: "BIDV", src: "/images/logo_business/bidv.png" },
    { name: "TOYOTA", src: "/images/logo_business/toyota.png" },
    { name: "VIETCOMBANK", src: "/images/logo_business/vietcombank.png" },
    { name: "VIETTEL", src: "/images/logo_business/vietel.png" },
] as const;

const PARTNER_LOGO_BY_NAME = Object.fromEntries(
    PARTNER_LOGOS.map((partner) => [partner.name, partner.src]),
) as Record<string, string>;

const CLIENT_STORIES = [
    {
        partner: "SAMSUNG",
        label: "Tòa nhà văn phòng",
        quote: TESTIMONIAL.quote,
        name: TESTIMONIAL.name,
        title: TESTIMONIAL.title,
        initials: TESTIMONIAL.initials,
        avatar: "/images/logo_business/samsung-representative-avatar.png",
    },
    {
        partner: "VINHOMES",
        label: "Khu đô thị & dân cư",
        quote: "Thế An luôn chủ động trong công tác an ninh, nhân viên thân thiện, hỗ trợ cư dân nhiệt tình và phối hợp tốt với ban quản lý.",
        name: "Đại diện Ban Quản lý",
        title: "Khu đô thị — TP. Hồ Chí Minh",
        initials: "BQL",
        avatar: "/images/logo_business/vinhomes-representative-avatar.png",
    },
    {
        partner: "BIDV",
        label: "Ngân hàng & tài chính",
        quote: "Báo cáo nhanh chóng, chính xác. Mọi sự cố đều được phản hồi và xử lý kịp thời, giúp đơn vị yên tâm trong vận hành hằng ngày.",
        name: "Đại diện đơn vị",
        title: "Khối vận hành — Hà Nội",
        initials: "ĐV",
        avatar: "/images/logo_business/bidv-representative-avatar.png",
    },
    {
        partner: "TOYOTA",
        label: "Nhà máy sản xuất",
        quote: "Phương án bố trí nhân sự rõ ràng, quy trình bàn giao ca chặt chẽ và đội ngũ phối hợp tốt với bộ phận vận hành.",
        name: "Đại diện nhà máy",
        title: "Bộ phận vận hành — Bình Dương",
        initials: "NM",
        avatar: "/images/logo_business/factory-manager-avatar.png",
    },
    {
        partner: "VIETCOMBANK",
        label: "Ngân hàng & tài chính",
        quote: "Tác phong chuyên nghiệp, phản hồi nhanh và báo cáo minh bạch giúp công tác an ninh tại đơn vị luôn được kiểm soát tốt.",
        name: "Đại diện chi nhánh",
        title: "Khối vận hành — TP. Hồ Chí Minh",
        initials: "CN",
        avatar: "/images/logo_business/vietcombank-representative-avatar.png",
    },
    {
        partner: "VIETTEL",
        label: "Văn phòng & hạ tầng",
        quote: "Đội ngũ chủ động, kỷ luật và luôn tuân thủ điều lệnh. Các tình huống phát sinh được tiếp nhận và xử lý đúng quy trình.",
        name: "Đại diện doanh nghiệp",
        title: "Ban quản lý cơ sở — Hà Nội",
        initials: "DN",
        avatar: "/images/logo_business/viettel-representative-avatar.png",
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
                                    <div className="relative aspect-[16/7] overflow-hidden bg-white">
                                        <Image
                                            src={PARTNER_LOGO_BY_NAME[story.partner]}
                                            alt={`Logo ${story.partner}`}
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-contain"
                                        />
                                        <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-[10px] uppercase tracking-wider text-white">{story.label}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex gap-0.5 text-gold" aria-label="5 sao">
                                                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}
                                            </div>
                                            <Quote size={23} className="text-gold/80" />
                                        </div>
                                        <blockquote className="flex-1 text-sm leading-relaxed text-ink">“{story.quote}”</blockquote>
                                        <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy-900 text-[11px] font-bold text-gold-soft">
                                                {story.avatar ? (
                                                    <Image
                                                        src={story.avatar}
                                                        alt={`Ảnh ${story.name}`}
                                                        fill
                                                        sizes="40px"
                                                        className="object-cover"
                                                    />
                                                ) : story.initials}
                                            </div>
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
                    {PARTNER_LOGOS.map((partner) => (
                        <div key={partner.name} className="relative flex h-20 items-center justify-center border-b border-line px-4 last:border-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
                            <Image
                                src={partner.src}
                                alt={`Logo ${partner.name}`}
                                fill
                                sizes="(min-width: 1024px) 180px, (min-width: 640px) 33vw, 50vw"
                                className="object-contain p-4"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
