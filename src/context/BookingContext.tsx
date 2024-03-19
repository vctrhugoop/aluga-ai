import { Car } from "@/components/CarsList";
import { ReactNode, createContext, useState } from "react";

interface BookingCarContextProps {
  addNewBookingCar: (newCar: Car) => void;
}

interface BookingCarContextProviderProps {
  children: ReactNode;
}

export const BookingCarContext = createContext({} as BookingCarContextProps);

export function BookingCarContextProvider({
  children,
}: BookingCarContextProviderProps) {
  const [bookingsCars, setBookingsCars] = useState<Car[]>([]);

  function addNewBookingCar(newCar: Car) {
    setBookingsCars([newCar, ...bookingsCars]);
  }
  console.log(bookingsCars);

  return (
    <BookingCarContext.Provider value={{ addNewBookingCar }}>
      {children}
    </BookingCarContext.Provider>
  );
}
