// Em NewBookingCarModal.tsx

import { Car } from "../CarsList";
import { FormBookings } from "../FormBookings";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface NewBookingCarModelProps {
  car: Car;
  onSubmit: (formData: any) => void;
}

export function NewBookingCarModel({ car, onSubmit }: NewBookingCarModelProps) {
  return (
    <DialogContent>
      <DialogHeader className="mb-4">
        <DialogTitle>Confirmar reserva</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para completar sua reserva
        </DialogDescription>
      </DialogHeader>

      <FormBookings car={car} onSubmit={onSubmit} />
    </DialogContent>
  );
}
