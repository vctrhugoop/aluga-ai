import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Toaster } from "./components/ui/sonner";
import { BookingCarContextProvider } from "./context/BookingContext";

export function App() {
  return (
    <BrowserRouter>
      <BookingCarContextProvider>
        <Router />
        <Toaster />
      </BookingCarContextProvider>
    </BrowserRouter>
  );
}
