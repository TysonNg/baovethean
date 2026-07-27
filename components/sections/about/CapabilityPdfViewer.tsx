"use client";

import dynamic from "next/dynamic";

const CapabilityPdfDocument = dynamic(
    () => import("./CapabilityPdfDocument"),
    {
        ssr: false,
        loading: () => (
            <div className="flex min-h-[520px] items-center justify-center bg-bg-alt px-6 text-center text-sm text-ink-3">
                Đang tải trình xem hồ sơ năng lực…
            </div>
        ),
    },
);

interface CapabilityPdfViewerProps {
    pdfUrl: string;
}

export default function CapabilityPdfViewer({ pdfUrl }: CapabilityPdfViewerProps) {
    return <CapabilityPdfDocument pdfUrl={pdfUrl} />;
}
