import { currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

import { Header, UsersList } from "./components";

export default async function UserPage() {
  const user = await currentUser();

  if (!user) return <p>Usuario no autenticado</p>;

  const client = await clerkClient();
  const users = await client.users.getUserList();

  return (
    <div>
      <Header />
      <UsersList users={users} />
    </div>
  );
}
