import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { MyBookings } from "./pages/MyBookings";
import { Page404 } from "./pages/Page404";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<MyBookings />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
