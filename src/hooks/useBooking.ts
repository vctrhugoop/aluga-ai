import { BookingCarContext } from "@/context/BookingContext";
import { useContext } from "react";

export function useBookingCar() {
  return useContext(BookingCarContext);
}
