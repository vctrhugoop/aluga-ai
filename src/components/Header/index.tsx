import { Car } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 lg:px-0">
      <a href="/" className="w-36">
        <img src={Logo} />
      </a>
      <Button>
        <Car size={22} />
        Minhas Reservas
      </Button>
    </header>
  );
}
