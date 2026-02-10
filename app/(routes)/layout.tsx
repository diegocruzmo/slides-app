import { getCurrentUserWithRole } from "@/lib/auth/roles";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer, Navbar } from "@/components/shared";
import { AppSidebar } from "./(home)/components";
import { Toaster } from "sonner";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getCurrentUserWithRole();
  const role = data?.role ?? "user";
  return (
    <>
      <SidebarProvider>
        <AppSidebar role={role} />
        <div className="w-full bg-slate-50 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </SidebarProvider>
    </>
  );
}
