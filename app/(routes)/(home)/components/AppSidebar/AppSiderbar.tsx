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

export function AppSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-slate-100">
        <SidebarHeader>
          <Link href={"/"} className="flex flex-row items-center">
            <Image
              src="/logo2.png"
              alt="logo"
              width={40}
              height={40}
              className="mr-2 rounded-xl"
            ></Image>
            {state === "expanded" && (
              <span className="text-xl font-semibold text-slate-800 tracking-wide">
                Slides
              </span>
            )}
          </Link>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            {routes.map(({ title, path, Icon }) => {
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
