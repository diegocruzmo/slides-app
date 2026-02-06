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
import { formSchema } from "./FormCreateSlide.form";

export function FormCreateSlide() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      slideName: "",
      slug: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-slide" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="slideName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-slide-title">
                    Titulo de la presentación
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-slide-title"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-slide-slug">
                    Slug de la presentación
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-slide-slug"
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
            variant={"secondary"}
            form="form-slide"
            className="text-slate-50"
          >
            Guardar
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
