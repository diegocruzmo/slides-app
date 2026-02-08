import { PublicMetadata, UsersListProps } from "./UserLIst.type";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleAdminButton } from "./ToggleAdminButton";

export async function UsersList({ users }: UsersListProps) {
  return (
    <div className="m-6 rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h2 className="text-lg font-semibold">Usuarios registrados</h2>
        <span className="text-sm text-muted-foreground">
          Total: {users.data.length}
        </span>
      </div>

      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%] hidden sm:table-cell">
                Correo
              </TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead className="text-center">Rol</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.data.map((user) => {
              const role =
                (user.publicMetadata as PublicMetadata)?.role ?? "Usuario";

              const isAdmin = role === "admin";

              return (
                <TableRow
                  key={user.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <TableCell className="font-medium hidden sm:table-cell">
                    {user.emailAddresses[0]?.emailAddress}
                  </TableCell>

                  <TableCell>{user?.firstName}</TableCell>

                  <TableCell className="text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isAdmin
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {isAdmin ? "Administrador" : "Usuario"}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    <ToggleAdminButton userId={user.id} isAdmin={isAdmin} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
