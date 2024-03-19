import { Car } from "@/components/CarsList";
import { ReactNode, createContext, useEffect, useState } from "react";

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

interface BookingCarContextProps {
  bookingsCars: BookingData[];
  addNewBookingCar: (bookingData: BookingData) => void;
}

interface BookingCarContextProviderProps {
  children: ReactNode;
}

export const BookingCarContext = createContext({} as BookingCarContextProps);

const STOREGE = "@alugaai:bookings-state-1.0.0";

export function BookingCarContextProvider({
  children,
}: BookingCarContextProviderProps) {
  const [bookings, setBookings] = useState<BookingData[]>(() => {
    const storedBookings = localStorage.getItem(STOREGE);
    return storedBookings ? JSON.parse(storedBookings) : [];
  });

  useEffect(() => {
    const storedBookings = localStorage.getItem(STOREGE);

    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  function addNewBookingCar(bookingData: BookingData) {
    const newBookings = [bookingData, ...bookings];
    setBookings(newBookings);
    localStorage.setItem(STOREGE, JSON.stringify(newBookings));
  }

  return (
    <BookingCarContext.Provider
      value={{ bookingsCars: bookings, addNewBookingCar }}
    >
      {children}
    </BookingCarContext.Provider>
  );
}
