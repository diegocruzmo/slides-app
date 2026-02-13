import { BookHeart, BookText, House, Settings2, User2 } from "lucide-react";

export const routes = [
  { title: "Inicio", path: "/", Icon: House },
  {
    title: "Presentaciones",
    path: "/slides",
    Icon: BookText,
    roles: ["admin"],
  },
  { title: "Mis Presentaciones", path: "/my-slides", Icon: BookHeart },
  { title: "Usuarios", path: "/users", Icon: User2, roles: ["admin"] },
  { title: "Ajustes", path: "/settings", Icon: Settings2 },
];
