import { Car } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <header className="sticky top-0 mx-auto flex h-24 w-full max-w-6xl items-center justify-between bg-white px-4 py-6 lg:px-0">
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
