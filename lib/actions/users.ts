"use server";

import type { InviteUserData } from "./users.types";

import { clerkClient } from "@clerk/nextjs/server";
import { requireAdmin } from "@/lib/auth/roles";
import { getBaseUrl } from "../baseUrl";

export async function toggleUserAdmin(targetUserId: string) {
  await requireAdmin();

  const client = await clerkClient();
  const targetUser = await client.users.getUser(targetUserId);

  const targetRole = (targetUser.publicMetadata?.role as string) ?? "user";
  const newRole = targetRole === "admin" ? "user" : "admin";

  await client.users.updateUserMetadata(targetUserId, {
    publicMetadata: { role: newRole },
  });
}

export async function inviteUserByAdmin(data: InviteUserData) {
  await requireAdmin();

  const client = await clerkClient();

  const baseUrl = getBaseUrl();
  const redirectUrl = new URL("/sign-up", baseUrl).toString();

  try {
    await client.invitations.createInvitation({
      emailAddress: data.email,
      redirectUrl,
      publicMetadata: {
        role: data.role ?? "user",
      },
    });
  } catch (error) {
    console.error("Error creando la invitación:", error);
    throw new Error("No se pudo enviar la invitación");
  }
}
