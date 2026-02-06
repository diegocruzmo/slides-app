import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer, Navbar } from "@/components/shared";
import { AppSidebar } from "./(home)/components";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full bg-slate-50 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
