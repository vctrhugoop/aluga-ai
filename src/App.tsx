import { Header } from "./components/Header";

import HeroIllustration from "./assets/hero-illustration.svg";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="relativa mx-auto min-h-screen max-w-6xl">
      <Header />
      <section className="mx-auto my-9 flex max-w-6xl items-center justify-between px-4 py-6 lg:px-0">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-900 lg:text-4xl">
            Desbrave o Caminho da Liberdade
          </h1>
          <p className="text-zinc-600 lg:text-xl">
            Descubra a experiência única de locação de carros feita sob medida
            para você.
          </p>
        </div>
        <div className="hidden min-w-[500px] md:block">
          <img src={HeroIllustration} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
