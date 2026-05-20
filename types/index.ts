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

export interface BlogArticle {
    slug: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    content: string;
    imageLabel: string;
    author: string;
    authorInitials: string;
    readTime: number;
    featured?: boolean;
}

export interface BlogCategory {
    label: string;
    slug: string;
}
