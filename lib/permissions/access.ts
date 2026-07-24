import type { Access, FieldAccess } from "payload";

export const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const isSuperAdmin: Access = ({ req: { user } }) =>
    user?.role === "super-admin";

export const isAdmin: Access = ({ req: { user } }) =>
    user?.role === "super-admin" || user?.role === "admin";

export const isAdminOrSelf: Access = ({ req: { user } }) => {
    if (!user) return false;
    if (user.role === "super-admin" || user.role === "admin") return true;
    return { id: { equals: user.id } };
};

export const publicRead: Access = () => true;

export const isSuperAdminField: FieldAccess = ({ req: { user } }) =>
    user?.role === "super-admin";
