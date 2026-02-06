"use client";

import { BellRing, Search } from "lucide-react";

import { SignedIn, UserButton } from "@clerk/nextjs";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b bg-slate-100 h-16">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2" />
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex w-full max-w-sm item-center border-slate-200 rounded-md px-2.5 py-0.5">
          <div className="flex items-center mr-2">
            <Search className="w-full border-0" />
          </div>
          <Input
            type="search"
            placeholder="Buscar..."
            className="w-full border-0"
          ></Input>
        </div>

        <Button variant={"link"}>
          <BellRing />
        </Button>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
