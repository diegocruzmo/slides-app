import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormCreateSlide } from "./FormCreateSlide";

export function Header() {
  return (
    <div className="my-4 mx-6 border rounded-md bg-slate-100">
      <div className="flex justify-between items-center py-4 px-6">
        <h2 className="text-lg">Mis Presentaciones</h2>

        <Dialog>
          <DialogTrigger>
            <Plus />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Crea tu Presentación</DialogTitle>
              <FormCreateSlide />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
