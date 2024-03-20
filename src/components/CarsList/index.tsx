import { useBookingCar } from "@/hooks/useBooking";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";
import { NewBookingCarModel } from "../NewBookingCarModal";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";

export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  imageURL: string;
}

export interface CarListProps {
  cars: Car[];
}

export function CarsList({ cars }: CarListProps) {
  const { addNewBookingCar } = useBookingCar();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  function handleAddNewBookingCar(formData: any) {
    if (selectedCar) {
      addNewBookingCar({ car: selectedCar, formData });
    }
  }

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 pb-48 pt-6 lg:px-0">
      <h2 className="text-xl font-semibold lg:px-4">Escolha seu veículo</h2>
      <div className="grid place-items-center gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
        {cars.map((car) => (
          <Card
            key={car.id}
            className="flex h-96 w-80 flex-col justify-between rounded-lg border p-6 shadow-md"
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

            <CardFooter className="flex items-end justify-between">
              <div>
                <p className="text-xs text-zinc-500">A partir de</p>
                <strong className="text-2xl">
                  R${formatPrice(car.price.toFixed(2))}{" "}
                  <span className="text-xs font-normal">/dia</span>
                </strong>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedCar(car)}>
                    Quero esse
                  </Button>
                </DialogTrigger>

                {selectedCar && (
                  <NewBookingCarModel
                    car={selectedCar}
                    onSubmit={handleAddNewBookingCar}
                  />
                )}
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
