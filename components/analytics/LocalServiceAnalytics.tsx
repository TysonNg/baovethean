"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function LocalServiceAnalytics({ city }: { city: string }) {
    useEffect(() => {
        trackAnalyticsEvent("local_service_view", { city });
    }, [city]);

    return null;
}
