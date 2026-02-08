"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function toggleUserAdmin(targetUserId: string) {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) redirect("/not-authorized");

  const client = await clerkClient();
  const currentUser = await client.users.getUser(currentUserId);

  const currentUserRole = currentUser.publicMetadata.role;

  if (currentUserRole !== "admin") redirect("/not-authorized");

  const targetUser = await client.users.getUser(targetUserId);
  const targetRole = targetUser.publicMetadata.role;

  if (targetRole === "admin") {
    await client.users.updateUserMetadata(targetUserId, {
      publicMetadata: { role: "user" },
    });
  } else {
    await client.users.updateUserMetadata(targetUserId, {
      publicMetadata: { role: "admin" },
    });
  }
}
