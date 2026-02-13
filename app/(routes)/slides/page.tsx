import { requireAdmin } from "@/lib/auth/roles";

export default async function SlidesPage() {
  await requireAdmin();
  return <div>SlidesPage</div>;
}
