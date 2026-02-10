import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(5, "El nombre debe tener al menos 5 caracteres.")
    .max(32, "El nombre debe tener menos de 32 caracteres."),
  email: z
    .string()
    .min(5, "El correo debe tener al menos 5 caracteres.")
    .max(32, "El correo debe tener menos de 32 caracteres."),
});
