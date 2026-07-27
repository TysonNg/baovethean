"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

interface CapabilityPdfDocumentProps {
    pdfUrl: string;
}

export default function CapabilityPdfDocument({ pdfUrl }: CapabilityPdfDocumentProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfData, setPdfData] = useState<Uint8Array | null>(null);
    const [loadError, setLoadError] = useState(false);
    const pdfFile = useMemo(() => (pdfData ? { data: pdfData } : null), [pdfData]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadPdf() {
            try {
                setLoadError(false);
                const response = await fetch(pdfUrl, { cache: "no-store", signal: controller.signal });
                if (!response.ok || response.status === 204) {
                    throw new Error(`Unexpected PDF response: ${response.status}`);
                }
                const data = await response.arrayBuffer();
                setPdfData(new Uint8Array(data));
            } catch (error) {
                if (!(error instanceof DOMException && error.name === "AbortError")) {
                    setLoadError(true);
                }
            }
        }

        void loadPdf();
        return () => controller.abort();
    }, [pdfUrl]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateWidth = () => setContainerWidth(container.clientWidth);
        updateWidth();

        const observer = new ResizeObserver(updateWidth);
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const goToPreviousPage = () => setPageNumber((page) => Math.max(1, page - 1));
    const goToNextPage = () => setPageNumber((page) => Math.min(numPages, page + 1));

    return (
        <div ref={containerRef} className="bg-bg-alt">
            {loadError ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 px-6 text-center">
                    <p className="font-semibold text-ink">Không thể hiển thị tài liệu.</p>
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-gold-deep underline underline-offset-4"
                    >
                        Mở hồ sơ năng lực trong tab mới
                    </a>
                </div>
            ) : pdfFile ? (
                <Document
                file={pdfFile}
                onLoadSuccess={({ numPages: loadedPages }) => {
                    setNumPages(loadedPages);
                    setPageNumber(1);
                }}
                loading={
                    <div className="flex min-h-[520px] items-center justify-center px-6 text-center text-sm text-ink-3">
                        Đang tải tài liệu…
                    </div>
                }
                error={
                    <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 px-6 text-center">
                        <p className="font-semibold text-ink">Không thể hiển thị tài liệu.</p>
                        <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-gold-deep underline underline-offset-4"
                        >
                            Mở hồ sơ năng lực trong tab mới
                        </a>
                    </div>
                }
                className="flex justify-center overflow-auto p-3 md:p-6"
            >
                {containerWidth > 0 && (
                    <Page
                        pageNumber={pageNumber}
                        width={Math.min(containerWidth - 24, 1100)}
                        renderAnnotationLayer
                        renderTextLayer
                    />
                )}
                </Document>
            ) : (
                <div className="flex min-h-[520px] items-center justify-center px-6 text-center text-sm text-ink-3">
                    Đang tải tài liệu…
                </div>
            )}

            {numPages > 0 && (
                <div className="flex items-center justify-center gap-4 border-t border-line bg-white px-4 py-4">
                    <button
                        type="button"
                        onClick={goToPreviousPage}
                        disabled={pageNumber <= 1}
                        className="inline-flex h-10 items-center gap-1 rounded border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft size={17} aria-hidden="true" />
                        Trang trước
                    </button>
                    <span className="min-w-24 text-center text-sm font-medium text-ink-3">
                        Trang {pageNumber} / {numPages}
                    </span>
                    <button
                        type="button"
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                        className="inline-flex h-10 items-center gap-1 rounded border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Trang sau
                        <ChevronRight size={17} aria-hidden="true" />
                    </button>
                </div>
            )}
        </div>
    );
}
