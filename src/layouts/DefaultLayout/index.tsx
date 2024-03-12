import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
