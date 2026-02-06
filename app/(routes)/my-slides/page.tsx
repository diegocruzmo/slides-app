import { currentUser } from "@clerk/nextjs/server";

import { Header } from "./components";

export default async function MySlidesPage() {
  const user = await currentUser();

  if (!user) return <p>Usuario no autenticado</p>;

  return (
    <div>
      <Header />
    </div>
  );
}
