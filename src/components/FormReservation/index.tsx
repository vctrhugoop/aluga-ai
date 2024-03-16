import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Car, User } from "@phosphor-icons/react";
import { DatePicker } from "../DatePicker";
import { SelectHours } from "../SectectHours";
import { Label } from "../ui/label";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Por favor, insira seu nome completo",
  }),
  email: z.string().min(2, {
    message:
      "Por favor, insira um endereço de e-mail válido. Exemplo: exemplo@email.com",
  }),
  phoneNumber: z.string().refine((value) => /^\d{9,11}$/.test(value), {
    message:
      "Por favor, insira um número de celular válido contendo apenas dígitos.",
  }),
});

export function FormReservation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <User size={22} />
          Dados pessoais
        </h3>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="name"
                  placeholder="Nome completo"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Celular" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h3 className="flex items-center gap-2 font-semibold ">
          <Car size={22} />
          Retirada e Devoluçãso
        </h3>
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col space-y-3">
            <Label htmlFor="withdrawal">Data de retirada</Label>
            <DatePicker />
            <SelectHours />
          </div>
          <div className="flex flex-1 flex-col space-y-3">
            <Label htmlFor="devolution">Data de devolução</Label>
            <DatePicker />
            <SelectHours />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Reservar
        </Button>
      </form>
    </Form>
  );
}
