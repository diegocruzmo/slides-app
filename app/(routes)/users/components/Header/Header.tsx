"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormCreateUser } from "./FormCreateUser";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 mx-6 border rounded-md bg-slate-100">
      <div className="flex justify-between items-center py-4 px-6">
        <h2 className="text-lg">Usuarios</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button>
              <Plus />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Enviar invitación</DialogTitle>
              <FormCreateUser onSuccess={() => setOpen(false)} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
