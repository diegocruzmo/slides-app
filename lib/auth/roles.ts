import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getCurrentUserWithRole() {
  const { userId } = await auth();
  if (!userId) return null;

  const user = await currentUser();
  if (!user) return null;

  const role = (user.publicMetadata?.role as string) ?? "user";

  return { user, role };
}

export async function requireAuth() {
  const data = await getCurrentUserWithRole();
  if (!data) redirect("/not-authorized");
  return data.user;
}

export async function requireRole(allowedRoles: string[]) {
  const data = await getCurrentUserWithRole();

  if (!data) redirect("/not-authorized");

  if (!allowedRoles.includes(data.role)) {
    redirect("/not-authorized");
  }

  return data.user;
}

export async function requireAdmin() {
  return requireRole(["admin"]);
}
