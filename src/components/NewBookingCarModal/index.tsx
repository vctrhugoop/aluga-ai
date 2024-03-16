import { FormReservation } from "../FormReservation";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export function NewBookingCarModel() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirmar reserva</DialogTitle>
        <DialogDescription>
          Preenchar os campos abaixo para completar sua reserva
        </DialogDescription>
      </DialogHeader>

      <FormReservation />
    </DialogContent>
  );
}
