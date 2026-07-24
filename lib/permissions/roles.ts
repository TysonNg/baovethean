export const ROLES = [
    "super-admin",
    "admin",
    "editor",
    "content-writer",
    "sales",
    "viewer",
] as const;

export type Role = (typeof ROLES)[number];

export const ROLE_OPTIONS: { label: string; value: Role }[] = [
    { label: "Super Admin", value: "super-admin" },
    { label: "Admin", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Content Writer", value: "content-writer" },
    { label: "Sales", value: "sales" },
    { label: "Viewer", value: "viewer" },
];
