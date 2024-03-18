import { cars } from "@/database/cars";
import HeroIllustration from "../assets/hero-illustration.svg";
import { CarsList } from "../components/CarsList";

export function Home() {
  return (
    <div className="relativa mx-auto max-w-6xl">
      <section className="mx-auto my-9 flex max-w-6xl items-center justify-between px-4 py-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold  lg:text-4xl">
            Desbrave o Caminho da Liberdade
          </h1>
          <p className="text-zinc-500 lg:text-xl">
            Descubra a experiência única de locação de carros feita sob medida
            para você.
          </p>
        </div>
        <div className="hidden min-w-[500px] lg:block">
          <img src={HeroIllustration} />
        </div>
      </section>
      <CarsList cars={cars} />
    </div>
  );
}
