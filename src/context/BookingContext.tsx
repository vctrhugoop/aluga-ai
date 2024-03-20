import { Car } from "@/components/CarsList";
import { differenceInDays } from "date-fns";
import { ReactNode, createContext, useEffect, useState } from "react";

interface BookingData {
  car: Car;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    protection: string;
    date: {
      from?: Date | undefined;
      to?: Date | undefined;
    };
  };
}

interface BookingCarContextProps {
  bookingsCars: BookingData[];
  addNewBookingCar: (bookingData: BookingData) => void;
  calculateBookingTotal: (booking: BookingData) => number;
  calculateProcection: (booking: BookingData) => number;
  calculateTax: (booking: BookingData) => number;
  calculateTotal: (booking: BookingData) => number;
  calculateDateDifference: (from: Date, to: Date) => number;
  calculateProtectionTotal: (booking: BookingData) => number;
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

  function calculateBookingTotal(booking: BookingData): number {
    const fromDate = booking.formData.date.from;
    const toDate = booking.formData.date.to;
    if (fromDate && toDate) {
      const daysDifference = differenceInDays(toDate, fromDate);
      return daysDifference * booking.car.price;
    }
    return 0;
  }

  function calculateProcection(booking: BookingData): number {
    switch (booking.formData.protection) {
      case "basic":
        return 9.0;
      case "premium":
        return 12.0;
      case "super":
        return 15.0;

      default:
        return 9.0;
    }
  }

  function calculateProtectionTotal(booking: BookingData): number {
    const fromDate = booking.formData.date.from;
    const toDate = booking.formData.date.to;
    if (fromDate && toDate) {
      const daysDifference = differenceInDays(toDate, fromDate);
      return daysDifference * calculateProcection(booking);
    }
    return 0;
  }

  function calculateTax(bookingData: BookingData): number {
    return calculateBookingTotal(bookingData) * 0.12;
  }

  function calculateDateDifference(from: Date, to: Date): number {
    return differenceInDays(to, from);
  }

  function calculateTotal(bookingData: BookingData): number {
    return (
      calculateBookingTotal(bookingData) +
      calculateTax(bookingData) +
      calculateProtectionTotal(bookingData)
    );
  }

  return (
    <BookingCarContext.Provider
      value={{
        bookingsCars: bookings,
        addNewBookingCar,
        calculateBookingTotal,
        calculateProcection,
        calculateTax,
        calculateTotal,
        calculateDateDifference,
        calculateProtectionTotal,
      }}
    >
      {children}
    </BookingCarContext.Provider>
  );
}
