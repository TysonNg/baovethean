import type { Metadata } from "next";
import { Be_Vietnam_Pro, Source_Serif_4 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/layout/JsonLd";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    variable: "--font-be-vietnam-pro",
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
    variable: "--font-source-serif-4",
    subsets: ["latin", "vietnamese"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: {
        default: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        template: "%s | Bảo vệ Thế An",
    },
    description:
        "Công ty Cổ phần Dịch vụ Bảo vệ Thế An — cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình vận hành chặt chẽ và giám sát 24/7 cho doanh nghiệp Việt Nam.",
    keywords: [
        "dịch vụ bảo vệ",
        "công ty bảo vệ",
        "bảo vệ chuyên nghiệp",
        "bảo vệ tòa nhà",
        "bảo vệ nhà máy",
        "bảo vệ kho bãi",
        "bảo vệ công trình",
        "bảo vệ sự kiện",
        "bảo vệ Thế An",
        "an ninh doanh nghiệp",
    ],
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "Bảo vệ Thế An",
        title: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        description:
            "Cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình vận hành chặt chẽ và giám sát 24/7 — giúp doanh nghiệp an tâm tập trung vào hoạt động kinh doanh.",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="vi"
            className={`${beVietnamPro.variable} ${sourceSerif4.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-sans">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <JsonLd />
            </body>
        </html>
    );
}
