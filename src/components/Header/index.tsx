import { Car } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0  border-b bg-background  py-6 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <a href="/" className="w-28">
          <img src={Logo} />
        </a>
        <NavLink to="/reservas">
          <Button className="flex items-center gap-2">
            <Car size={22} />
            Minhas Reservas
          </Button>
        </NavLink>
      </div>
    </header>
  );
}
