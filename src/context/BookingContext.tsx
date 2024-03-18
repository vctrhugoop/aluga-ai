import { ReactNode, createContext } from "react";

interface BookingCarContextProviderProps {
  children: ReactNode;
}

export const BookingCarContext = createContext({});

export function BookingCarContextProvider({
  children,
}: BookingCarContextProviderProps) {
  return (
    <BookingCarContext.Provider value={{}}>
      {children}
    </BookingCarContext.Provider>
  );
}
