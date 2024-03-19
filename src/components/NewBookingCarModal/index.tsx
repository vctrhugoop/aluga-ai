import { FormBookings } from "../FormBookings";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export function NewBookingCarModel() {
  return (
    <DialogContent>
      <DialogHeader className="mb-4">
        <DialogTitle>Confirmar reserva</DialogTitle>
        <DialogDescription>
          Preenchar os campos abaixo para completar sua reserva
        </DialogDescription>
      </DialogHeader>

      <FormBookings />
    </DialogContent>
  );
}
