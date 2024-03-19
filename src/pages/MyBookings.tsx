import { useBookingCar } from "@/hooks/useBooking";

export function MyBookings() {
  const { bookingsCars } = useBookingCar();

  return <div>{bookingsCars.length >= 0 ? <>oi</> : <>oi</>}</div>;
}
