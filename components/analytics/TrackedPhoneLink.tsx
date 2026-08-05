"use client";

import type { ComponentProps, ReactNode } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

interface TrackedPhoneLinkProps extends ComponentProps<"a"> {
    children: ReactNode;
    placement: string;
}

export default function TrackedPhoneLink({
    children,
    placement,
    onClick,
    ...props
}: TrackedPhoneLinkProps) {
    return (
        <a
            {...props}
            onClick={(event) => {
                trackAnalyticsEvent("click_phone", { placement });
                onClick?.(event);
            }}
        >
            {children}
        </a>
    );
}
