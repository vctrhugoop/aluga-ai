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
import { cn } from "@/lib/utils";
import { Car, User } from "@phosphor-icons/react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const DATE_REQUIRED_ERROR = "Por favor, selecione um intervalo de datas";

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
  date: z
    .object(
      {
        from: z.date().optional(),
        to: z.date().optional(),
      },
      { required_error: DATE_REQUIRED_ERROR },
    )
    .refine((date) => {
      return !!date.from;
    }, DATE_REQUIRED_ERROR),
});

export function FormReservation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      date: {
        from: undefined,
        to: undefined,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <User size={22} />
            Dados pessoais
          </h3>

          <div className="space-y-2">
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
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold ">
            <Car size={22} />
            Retirada e Devolução
          </h3>

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value.from && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value.from ? (
                        field.value.to ? (
                          <>
                            {format(
                              field.value.from,
                              "dd 'de' MMMM 'de' yyyy",
                              { locale: ptBR },
                            )}{" "}
                            -{" "}
                            {format(field.value.to, "dd 'de' MMMM 'de' yyyy", {
                              locale: ptBR,
                            })}
                          </>
                        ) : (
                          format(field.value.from, "dd 'de' MMMM 'de' yyyy", {
                            locale: ptBR,
                          })
                        )
                      ) : (
                        <span>Selecione um intervalo de datas</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value.from}
                      selected={{ from: field.value.from!, to: field.value.to }}
                      onSelect={field.onChange}
                      numberOfMonths={1}
                      fromDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Reservar
        </Button>
      </form>
    </Form>
  );
}
