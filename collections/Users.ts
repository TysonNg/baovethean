import type {
    CollectionConfig,
    CollectionBeforeChangeHook,
    CollectionBeforeLoginHook,
    CollectionAfterLoginHook,
} from "payload";
import { APIError } from "payload";
import { ROLE_OPTIONS } from "@/lib/permissions/roles";
import {
    isAdmin,
    isAdminOrSelf,
    isSuperAdmin,
    isSuperAdminField,
} from "@/lib/permissions/access";

const setFirstUserAsSuperAdmin: CollectionBeforeChangeHook = async ({
    data,
    operation,
    req,
}) => {
    if (operation !== "create") return data;
    const { totalDocs } = await req.payload.count({ collection: "users" });
    if (totalDocs === 0) {
        return { ...data, role: "super-admin", isActive: true };
    }
    return data;
};

const blockInactiveLogin: CollectionBeforeLoginHook = ({ user }) => {
    if (user.isActive === false) {
        throw new APIError("Tài khoản đã bị khóa.", 403);
    }
};

const recordLastLogin: CollectionAfterLoginHook = async ({ req, user }) => {
    await req.payload.update({
        collection: "users",
        id: user.id,
        data: { lastLoginAt: new Date().toISOString() },
        overrideAccess: true,
        req,
    });
};

export const Users: CollectionConfig = {
    slug: "users",
    auth: true,
    access: {
        create: isAdmin,
        read: isAdminOrSelf,
        update: isAdminOrSelf,
        delete: isSuperAdmin,
    },
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "email", "role", "isActive"],
    },
    hooks: {
        beforeChange: [setFirstUserAsSuperAdmin],
        beforeLogin: [blockInactiveLogin],
        afterLogin: [recordLastLogin],
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "role",
            type: "select",
            required: true,
            defaultValue: "viewer",
            options: ROLE_OPTIONS,
            access: {
                create: isSuperAdminField,
                update: isSuperAdminField,
            },
        },
        {
            name: "avatar",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "isActive",
            type: "checkbox",
            defaultValue: true,
            access: {
                update: isSuperAdminField,
            },
        },
        {
            name: "lastLoginAt",
            type: "date",
            admin: {
                readOnly: true,
                position: "sidebar",
            },
        },
    ],
};
