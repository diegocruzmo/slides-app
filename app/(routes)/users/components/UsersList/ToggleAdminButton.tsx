"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toggleUserAdmin } from "@/lib/actions/users";

export function ToggleAdminButton({
  userId,
  isAdmin,
}: {
  userId: string;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await toggleUserAdmin(userId);
      router.refresh();
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`px-3 py-1 text-xs font-medium rounded-md text-white transition ${
        isAdmin
          ? "bg-slate-600 hover:bg-slate-700"
          : "bg-red-900 hover:red-indigo-800"
      } ${isPending && "opacity-50 cursor-not-allowed"}`}
    >
      {isPending ? "Actualizando..." : isAdmin ? "Quitar admin" : "Hacer admin"}
    </button>
  );
}
