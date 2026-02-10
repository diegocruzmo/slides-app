export type UserRole = "admin" | "user";

export type InviteUserData = {
  name: string;
  email: string;
  role?: UserRole;
};
