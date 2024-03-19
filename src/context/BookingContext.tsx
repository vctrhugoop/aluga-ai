import { Car } from "@/components/CarsList";
import { ReactNode, createContext, useState } from "react";

interface BookingCarContextProps {
  addNewBookingCar: (bookingData: BookingData) => void;
}

interface BookingCarContextProviderProps {
  children: ReactNode;
}

interface BookingData {
  car: Car;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    date: {
      from?: Date | undefined;
      to?: Date | undefined;
    };
  };
}

export const BookingCarContext = createContext({} as BookingCarContextProps);

export function BookingCarContextProvider({
  children,
}: BookingCarContextProviderProps) {
  const [bookings, setBookings] = useState<BookingData[]>([]);

  function addNewBookingCar(bookingData: BookingData) {
    setBookings([bookingData, ...bookings]);
  }
  console.log(bookings);

  return (
    <BookingCarContext.Provider value={{ addNewBookingCar }}>
      {children}
    </BookingCarContext.Provider>
  );
}
