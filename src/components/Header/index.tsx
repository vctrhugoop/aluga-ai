import { Car } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 mx-auto flex h-24 w-full max-w-6xl items-center justify-between border-b bg-zinc-950 px-4 py-6 lg:px-4">
      <a href="/" className="w-36">
        <img src={Logo} />
      </a>
      <Button className="flex items-center gap-2">
        <Car size={22} />
        Minhas Reservas
      </Button>
    </header>
  );
}
