import { cars } from "../../database/cars";
import { Button } from "../Button";

export function CarsList() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-48 pt-6 lg:px-0">
      <h2 className="text-xl font-semibold text-zinc-900">
        Escolha seu veículo
      </h2>
      <div className="grid place-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
        {cars.map((car) => (
          <div
            key={car.id}
            className="flex h-96 w-80 flex-col justify-between rounded-lg border border-zinc-300 p-6"
          >
            <div className="flex flex-col">
              <strong>{car.name}</strong>
              <span className="text-sm text-zinc-500">{car.category}</span>
            </div>
            <img src={car.imageURL} alt={car.name} className="w-72" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500">A partir de</p>
                <strong className="text-2xl">
                  R${car.price}{" "}
                  <span className="text-xs font-normal">/dia</span>
                </strong>
              </div>
              <Button>Quero esse</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
