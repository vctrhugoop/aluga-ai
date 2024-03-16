import { cars } from "../../database/cars";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function CarsList() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-48 pt-6 lg:px-0">
      <h2 className="text-xl font-semibold lg:px-4">Escolha seu veículo</h2>
      <div className="grid place-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
        {cars.map((car) => (
          <Card
            key={car.id}
            className="flex h-96 w-80 flex-col justify-between rounded-lg border border-zinc-300 p-6 shadow-md"
          >
            <CardHeader className="flex flex-col">
              <CardTitle>{car.name}</CardTitle>
              <CardDescription className="text-sm text-zinc-500">
                {car.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src={car.imageURL} alt={car.name} className="w-72" />
            </CardContent>

            <CardFooter className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500">A partir de</p>
                <strong className="text-2xl">
                  R${car.price}{" "}
                  <span className="text-xs font-normal">/dia</span>
                </strong>
              </div>
              <Button>Quero esse</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
