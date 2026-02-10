export type UserRole = "admin" | "user";

export type InviteUserData = {
  email: string;
  role?: UserRole;
};
