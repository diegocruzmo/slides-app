import { z } from "zod";

export const formSchema = z.object({
  slideName: z
    .string()
    .min(5, "El título debe tener al menos 5 caracteres.")
    .max(32, "El título debe tener menos de 32 caracteres."),
  slug: z
    .string()
    .min(5, "El slug debe tener al menos 5 caracteres.")
    .max(32, "El slug debe tener menos de 32 caracteres."),
});
