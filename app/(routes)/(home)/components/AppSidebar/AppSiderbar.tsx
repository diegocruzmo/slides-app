"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { routes } from "./AppSidebar.data";

type Props = {
  role: string;
};

export function AppSidebar({ role }: Props) {
  const { state } = useSidebar();
  const pathname = usePathname();

  const visibleRoutes = routes.filter((route) => {
    if (!route.roles) return true;
    return route.roles.includes(role);
  });

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-slate-100">
        <SidebarHeader>
          <Link href={"/"} className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-xl"
            ></Image>
          </Link>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            {visibleRoutes.map(({ title, path, Icon }) => {
              const isActive = pathname === path;

              return (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild>
                    <Link href={path} aria-label={title}>
                      <div
                        className={`p-1 rounded-md transition-colors ${
                          isActive
                            ? "bg-red-900 text-white"
                            : "bg-slate-800 text-slate-200 hover:bg-red-900"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      {state === "expanded" && <span>{title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
