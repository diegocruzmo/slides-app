import { auth, currentUser } from "@clerk/nextjs/server";

export async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Usuario no autenticado");

  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== "Admin") {
    throw new Error("Usuario no autorizado");
  }

  return user;
}
