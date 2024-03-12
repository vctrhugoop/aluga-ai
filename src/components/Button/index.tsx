import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex items-center gap-2 rounded-lg p-4 font-semibold text-sm px-4 py-3 outline-none shadow-sm",

  variants: {
    variant: {
      primary:
        "bg-teal-600 text-zinc-50 hover:bg-teal-600/80 hover:transition-colors",
      secundary:
        "border border-teal-600 text-teal-600 hover:bg-teal-600 hover:transition-colors hover:text-zinc-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant })} />;
}
