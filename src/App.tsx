import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BookingCarContextProvider } from "./context/BookingContext";

export function App() {
  return (
    <BrowserRouter>
      <BookingCarContextProvider>
        <Router />
      </BookingCarContextProvider>
    </BrowserRouter>
  );
}
