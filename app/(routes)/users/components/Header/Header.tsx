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
  return (
    <div className="my-4 mx-6 border rounded-md bg-slate-100">
      <div className="flex justify-between items-center py-4 px-6">
        <h2 className="text-lg">Usuarios</h2>

        <Dialog>
          <DialogTrigger>
            <Plus />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Crea un Usuario</DialogTitle>
              <FormCreateUser />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
