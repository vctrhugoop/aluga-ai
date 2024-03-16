import { Car } from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react/dist/ssr";
import { DatePicker } from "../DatePicker";
import { SelectHours } from "../SectectHours";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function NewBookingCarModel() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirmar reserva</DialogTitle>
        <DialogDescription>
          Preenchar os campos abaixo para completar sua reserva
        </DialogDescription>
      </DialogHeader>

      <form action="" className="mt-4">
        <h3 className="mb-2 flex items-center gap-2 font-semibold">
          <User size={22} />
          Dados pessoais
        </h3>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="name" className="sr-only">
            Nome complete
          </Label>
          <Input id="name" placeholder="Nome completo" type="text" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email" className="sr-only">
            E-mail
          </Label>
          <Input id="email" placeholder="E-mail" type="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="phoneNumber" className="sr-only">
            E-mail
          </Label>
          <Input id="phoneNumber" placeholder="Celular" type="number" />
        </div>

        <h3 className="mb-4 mt-6 flex items-center gap-2 font-semibold ">
          <Car size={22} />
          Retirada e Devoluçãso
        </h3>

        <div className="flex gap-2">
          <div className="flex flex-1 flex-col space-y-2">
            <Label htmlFor="withdrawal">Data de retirada</Label>
            <DatePicker />
            <SelectHours />
          </div>
          <div className="flex flex-1 flex-col space-y-2 ">
            <Label htmlFor="devolution">Data de devolução</Label>
            <DatePicker />
            <SelectHours />
          </div>
        </div>

        <Button type="submit" className="mt-8 w-full">
          Reservar
        </Button>
      </form>
    </DialogContent>
  );
}
