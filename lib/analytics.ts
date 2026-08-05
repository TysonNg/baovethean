export type AnalyticsEventName = "generate_lead" | "click_phone" | "local_service_view";

export function trackAnalyticsEvent(
    eventName: AnalyticsEventName,
    params: Record<string, string> = {},
) {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
        return;
    }

    window.gtag("event", eventName, params);
}

declare global {
    interface Window {
        gtag?: (
            command: "config" | "event" | "js",
            target: string | Date,
            params?: Record<string, string>,
        ) => void;
        dataLayer?: unknown[];
    }
}
