export interface NavLink {
    label: string;
    href: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface TrustItem {
    label: string;
}

export interface CoreValue {
    title: string;
    description: string;
}

export interface Service {
    code: string;
    name: string;
    description: string;
    location: string;
}

export interface WhyReason {
    number: string;
    title: string;
    description: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface Standard {
    code: string;
    name: string;
    frequency: string;
}

export interface Article {
    category: string;
    date: string;
    title: string;
    excerpt: string;
    imageLabel: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    initials: string;
    summary: {
        label: string;
        value: string;
    }[];
}

export interface CompanyInfo {
    name: string;
    fullName: string;
    description: string;
    address: string;
    hotline: string;
    email: string;
    hours: string;
    mst: string;
}

export interface ContactBenefit {
    title: string;
    description: string;
}

export interface ContactInfoCard {
    category: string;
    label: string;
    primary: string;
    details: string[];
}

export interface Office {
    id: string;
    name: string;
    label: string;
    address: string;
    phone: string;
}

export interface CoverageRegion {
    code: string;
    name: string;
    provinces: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export type ArticleBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string };

export interface BlogArticle {
    slug: string;
    code: string;
    category: string;
    categorySlug: string;
    date: string;
    isoDate: string;
    title: string;
    excerpt: string;
    content: string;
    body: ArticleBlock[];
    tags: string[];
    heroLabel: string;
    heroCaption: string;
    imageLabel: string;
    author: string;
    authorRole: string;
    authorInitials: string;
    authorBio: string;
    readTime: number;
    featured?: boolean;
    image?: string;
    imageAlt?: string;
}

export interface BlogCategory {
    label: string;
    slug: string;
}

export interface ServiceHighlight {
    code: string;
    title: string;
    description: string;
}

export interface ServiceDetail {
    code: string;
    name: string;
    tags: string[];
    description: string;
    features: string[];
    location: string;
}

export interface ServiceStrength {
    code: string;
    title: string;
    description: string;
}

export interface ServiceSector {
    name: string;
    subtitle: string;
}

export interface ProcessHeroMeta {
    label: string;
    value: string;
}

export interface ProcessStepNav {
    number: string;
    label: string;
}

export interface ProcessMetaCell {
    label: string;
    value: string;
}

export interface ProcessChecklist {
    label: string;
    value: string;
}

export interface ProcessOverlay {
    caption: string;
    text: string;
}

export interface ProcessStepDetail {
    code: string;
    number: string;
    eyebrow: string;
    label: string;
    title: string;
    description: string;
    meta: ProcessMetaCell[];
    checklist: ProcessChecklist[];
    photoLabel: string;
    overlay: ProcessOverlay;
    photoVariant?: "navy" | "light";
}

export interface AboutHeroMeta {
    label: string;
    value: string;
}

export type AboutPillarIcon = "shield" | "eye" | "star";

export interface AboutPillar {
    code: string;
    icon: AboutPillarIcon;
    title: string;
    description: string;
    footnote: string;
}

export interface AboutDifferentiator {
    title: string;
    description: string;
}

export interface AboutStat {
    value: string;
    eyebrow: string;
    label: string;
}

export interface RecruitSummaryItem {
    label: string;
    value: string;
}

export type RecruitBenefitIcon =
    | "wallet"
    | "shield"
    | "book"
    | "discipline"
    | "growth"
    | "team";

export interface RecruitBenefit {
    code: string;
    icon: RecruitBenefitIcon;
    title: string;
    description: string;
}

export interface RecruitRequirement {
    title: string;
    description: string;
}

export interface RecruitStep {
    number: string;
    title: string;
    description: string;
    timing: string;
}

export interface RecruitTestimonial {
    quote: string;
    name: string;
    role: string;
    initials: string;
}
