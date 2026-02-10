import { clerkClient } from "@clerk/nextjs/server";

import { requireAdmin } from "@/lib/auth/roles";
import { Header, UsersList } from "./components";

export default async function UserPage() {
  await requireAdmin();

  const client = await clerkClient();
  const users = await client.users.getUserList();

  return (
    <div>
      <Header />
      <UsersList users={users} />
    </div>
  );
}
