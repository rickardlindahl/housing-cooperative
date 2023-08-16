export const AUTH_ADMIN_ROLE_REQUIRED = "AUTH_ADMIN_ROLE_REQUIRED";

export const code = [AUTH_ADMIN_ROLE_REQUIRED] as const;

export type Code = (typeof code)[number];
