"use server";

import type { InviteUserData } from "./users.types";

import { clerkClient } from "@clerk/nextjs/server";
import { requireAdmin } from "@/lib/auth/roles";

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

  try {
    await client.invitations.createInvitation({
      emailAddress: data.email,
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/sign-up`,
      publicMetadata: {
        role: data.role ?? "user",
      },
    });
  } catch (err: any) {
    console.error("FULL ERROR OBJECT:");
    console.error(err);

    if (err.errors) {
      console.error("CLERK ERRORS ARRAY:");
      for (const e of err.errors) {
        console.error(JSON.stringify(e, null, 2));
      }
    }

    throw new Error("INVITATION_FAILED");
  }
}
