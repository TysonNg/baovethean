import type { Metadata } from "next";
import { BadgeCheck, FileSearch } from "lucide-react";
import Link from "next/link";
import AboutPageHero from "@/components/sections/about/AboutPageHero";
import Container from "@/components/ui/Container";
import { LEGAL_DOCUMENTS } from "@/lib/about-content";

const DESCRIPTION =
    "Khu vực công khai hồ sơ pháp lý, giấy phép và chứng nhận thực tế của Bảo vệ Thế An khi tài liệu đã được xác minh.";

export const metadata: Metadata = {
    title: "Pháp lý & Chứng nhận",
    description: DESCRIPTION,
    alternates: { canonical: "/phap-ly-chung-nhan" },
    openGraph: {
        title: "Pháp lý & Chứng nhận Bảo vệ Thế An",
        description: DESCRIPTION,
        url: "/phap-ly-chung-nhan",
        type: "website",
    },
};

export default function PhapLyChungNhanPage() {
    return (
        <>
            <AboutPageHero
                eyebrow="Minh bạch doanh nghiệp"
                title="Pháp lý & Chứng nhận"
                description="Các tài liệu trong khu vực này chỉ được hiển thị sau khi có dữ liệu thực tế và bản xem trước được phép công khai."
                current="Pháp lý & Chứng nhận"
            />
            <section className="marketing-section bg-bg-alt" aria-labelledby="legal-documents-title">
                <Container>
                    <div className="flex items-start gap-4">
                        <BadgeCheck className="mt-1 shrink-0 text-gold-deep" size={30} strokeWidth={1.5} aria-hidden="true" />
                        <div>
                            <h2 id="legal-documents-title" className="heading-2 text-ink">Danh mục tài liệu</h2>
                            <p className="mt-3 max-w-2xl leading-7 text-ink-3">
                                Giấy đăng ký doanh nghiệp, điều kiện an ninh trật tự, hồ sơ PCCC, ISO và chứng chỉ liên quan sẽ xuất hiện tại đây khi có bản thực tế.
                            </p>
                        </div>
                    </div>

                    {LEGAL_DOCUMENTS.length > 0 ? (
                        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {LEGAL_DOCUMENTS.map((document) => (
                                <article key={document.title} className="rounded-xl border border-line bg-white p-5">
                                    <div className="aspect-[4/3] rounded-lg bg-slate-100" aria-label={`Bản xem trước ${document.title}`} />
                                    <h3 className="mt-5 text-lg font-semibold text-ink">{document.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-ink-3">{document.description}</p>
                                    <Link href={document.detailHref} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep hover:text-gold">
                                        Xem chi tiết
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-9 flex min-h-52 flex-col items-center justify-center rounded-xl border border-dashed border-line bg-white px-6 text-center">
                            <FileSearch size={34} className="text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                            <p className="mt-4 font-semibold text-ink">Chưa có tài liệu thực tế để công khai</p>
                            <p className="mt-2 max-w-lg text-sm leading-6 text-ink-3">
                                Vui lòng bổ sung file, ảnh xem trước và thông tin đã được xác minh trước khi hiển thị tài liệu.
                            </p>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
}
