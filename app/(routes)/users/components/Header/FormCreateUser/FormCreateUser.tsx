"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { formSchema } from "./FormCreateUser.form";
import { inviteUserByAdmin } from "@/lib/actions/users";
import { FormCreateUserProps } from "./FormCreateUser.types";

export function FormCreateUser({ onSuccess }: FormCreateUserProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await inviteUserByAdmin({
        email: data.email,
        role: "user",
      });

      form.reset();
      toast.success("Invitación enviada correctamente");

      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("No se ha podido enviar la invitación");
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-user" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-user-email">
                    Correo electronico
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-user-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            type="submit"
            variant="secondary"
            form="form-user"
            className="text-slate-50"
          >
            Enviar
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
