"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { OFFICES } from "@/lib/contact-data";

export default function ContactOffices() {
    const [active, setActive] = useState(0);
    const office = OFFICES[active];

    return (
        <section className="py-20 md:py-24">
            <Container>
                <div className="max-w-xl mb-10">
                    <Eyebrow text="Hệ thống văn phòng" />
                    <h2 className="heading-1 text-ink mt-4 mb-4">
                        Bốn văn phòng — phục vụ khách hàng trên toàn quốc.
                    </h2>
                    <p className="text-ink-3 leading-relaxed">
                        Trụ sở chính tại TP. Hồ Chí Minh, văn phòng vùng tại
                        Hà Nội, Đà Nẵng và Bình Dương — đảm bảo thời gian bố
                        trí và hỗ trợ nhanh nhất tại mọi khu vực.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-3 mb-3 block">
                            Chọn văn phòng
                        </span>
                        <div className="space-y-0">
                            {OFFICES.map((o, i) => (
                                <button
                                    key={o.id}
                                    onClick={() => setActive(i)}
                                    className={`w-full text-left px-4 py-4 border-l-2 transition-colors ${
                                        i === active
                                            ? "border-gold bg-bg-alt"
                                            : "border-transparent hover:bg-bg-alt/50"
                                    }`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <MapPin
                                            size={14}
                                            className="text-gold"
                                        />
                                        <span className="text-sm font-semibold text-ink">
                                            {o.name}
                                        </span>
                                    </div>
                                    <p className="text-xs text-ink-3 ml-[22px]">
                                        {o.address}
                                    </p>
                                    <p className="text-xs font-semibold text-gold-deep ml-[22px] mt-1">
                                        {o.phone}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <Photo
                        label={`MAP · ${office.label}`}
                        className="aspect-[4/3] lg:aspect-auto lg:h-full"
                        overlay={
                            <div className="p-4">
                                <div className="bg-white rounded p-3 inline-block">
                                    <p className="text-xs font-semibold text-ink">
                                        {office.name}
                                    </p>
                                    <p className="text-[11px] text-ink-3 mt-0.5">
                                        {office.address}
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </Container>
        </section>
    );
}
