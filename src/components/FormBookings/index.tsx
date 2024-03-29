import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Car as CarProps } from "../CarsList";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Car, Shield, User } from "@phosphor-icons/react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Por favor, insira seu Primeiro nome.",
  }),
  lastName: z.string().min(2, {
    message: "Por favor, insira seu Sobrenome.",
  }),
  email: z.string().min(2, {
    message:
      "Por favor, insira um endereço de e-mail válido. Exemplo: exemplo@email.com.",
  }),
  protection: z.enum(["basic", "premium", "super"], {
    required_error: "Selecione uma proteção",
  }),

  date: z
    .object(
      {
        from: z.date().optional(),
        to: z.date().optional(),
      },
      {
        required_error: "Por favor, selecione a data de retirada e devolução.",
      },
    )
    .refine((date) => {
      return !!date.from;
    }, "Por favor, selecione a data de retirada e devolução."),
});

interface FormBookingsProps {
  car: CarProps;
  onSubmit: (formData: any) => void;
}

export function FormBookings({ onSubmit }: FormBookingsProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      protection: "basic",
      date: {
        from: undefined,
        to: undefined,
      },
    },
  });

  const navigate = useNavigate();

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values);

    toast.success("Reserva realizada com sucesso!");

    navigate("/reservas");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-10">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <User size={22} />
            Dados pessoais
          </h3>

          <div className="space-y-2">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        id="firstName"
                        placeholder="Nome"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        id="lastName"
                        placeholder="Sobrenome"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 font-semibold ">
            <Shield size={22} />
            Proteções
          </h3>
          <FormField
            control={form.control}
            name="protection"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <>
                      <FormItem className="flex items-center space-x-1">
                        <FormControl>
                          <RadioGroupItem value="basic" />
                        </FormControl>
                        <FormLabel>Básico</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1">
                        <FormControl>
                          <RadioGroupItem value="premium" />
                        </FormControl>
                        <FormLabel>Premium</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1">
                        <FormControl>
                          <RadioGroupItem value="super" />
                        </FormControl>
                        <FormLabel>Super</FormLabel>
                      </FormItem>
                    </>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                        <span>Selecione a data de retirada e devolução</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value.from}
                      locale={ptBR}
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
