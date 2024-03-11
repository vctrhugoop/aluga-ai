import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  children: ReactNode;
}

const button = tv({
  base: "flex items-center gap-2 rounded-lg p-4 bg-teal-600 text-zinc-50 font-semibold hover:bg-teal-600/80 hover:transition-colors",
});

export function Button({ children }: ButtonProps) {
  return <button className={button({})}>{children}</button>;
}
