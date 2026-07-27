import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Source_Serif_4 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
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
    metadataBase: new URL("https://baovethean.vn"),
    title: {
        default: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        template: "%s | Bảo vệ Thế An",
    },
    description:
        "Công ty Cổ phần Dịch vụ Bảo vệ Thế An — cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình vận hành chặt chẽ và giám sát 24/7 cho doanh nghiệp Việt Nam từ năm 2014. Hơn 500 nhân sự, 200+ khách hàng, hiện diện tại 18 tỉnh thành.",
    applicationName: "Bảo vệ Thế An",
    authors: [{ name: "Công ty Cổ phần Dịch vụ Bảo vệ Thế An" }],
    creator: "Bảo vệ Thế An",
    publisher: "Công ty Cổ phần Dịch vụ Bảo vệ Thế An",
    category: "Security Services",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
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
        "công ty bảo vệ TPHCM",
        "công ty bảo vệ Hà Nội",
        "dịch vụ an ninh",
    ],
    alternates: {
        canonical: "/",
        languages: { "vi-VN": "/" },
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "Bảo vệ Thế An",
        title: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        description:
            "Cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình vận hành chặt chẽ và giám sát 24/7 — giúp doanh nghiệp an tâm tập trung vào hoạt động kinh doanh.",
        url: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        description:
            "Đội ngũ bảo vệ được đào tạo bài bản, quy trình chặt chẽ và giám sát 24/7 cho doanh nghiệp Việt Nam.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
    themeColor: "#07172E",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
};

// Footer content comes from Payload and must stay current without a rebuild.
export const dynamic = "force-dynamic";

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
                <FloatingContact />
                <JsonLd />
            </body>
        </html>
    );
}
