import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBookingCar } from "@/hooks/useBooking";
import { Calendar, Car, CurrencyDollar, User } from "@phosphor-icons/react";
import { format } from "date-fns";

export function MyBookings() {
  const { bookingsCars } = useBookingCar();

  return (
    <div className="mx-auto max-w-6xl ">
      {bookingsCars.length <= 0 ? (
        <div>
          <p>Não há reservas de carros no momento.</p>
          {/*adicionar um ícone ou imagem aqui*/}
        </div>
      ) : (
        <section className="mx-auto max-w-6xl space-y-4 px-4 pb-48 pt-6">
          <h1>Minhas Reservas</h1>
          {bookingsCars.map((bookingCar) => (
            <Card key={bookingCar.car.id} className="p-6">
              <CardHeader className="space-y-0 text-center">
                <CardTitle>Código da Reserva</CardTitle>
                <CardDescription>
                  {bookingCar.car.id.substring(0, 8).toUpperCase()}
                </CardDescription>
              </CardHeader>
              <Separator className="my-4" />
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="flex font-semibold leading-none tracking-tight ">
                    <Car />
                    Veículo
                  </h3>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Modelo: {bookingCar.car.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Categótia: {bookingCar.car.category}
                    </p>
                  </div>
                  <img
                    src={bookingCar.car.imageURL}
                    className="hidden w-48 lg:block"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="flex font-semibold leading-none tracking-tight">
                    <User />
                    Dados do condutor
                  </h3>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Nome: {bookingCar.formData.firstName}{" "}
                      {bookingCar.formData.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      E-mail: {bookingCar.formData.email}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h3 className="flex font-semibold leading-none tracking-tight">
                      <Calendar />
                      Data de retirada
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookingCar.formData.date.from && (
                        <p>
                          {format(bookingCar.formData.date.from, "dd/MM/yyyy")}
                        </p>
                      )}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="flex font-semibold leading-none tracking-tight">
                      <Calendar />
                      Data de devolução
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookingCar.formData.date.to && (
                        <p>
                          {format(bookingCar.formData.date.to, "dd/MM/yyyy")}
                        </p>
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="flex font-semibold leading-none tracking-tight">
                    <CurrencyDollar />
                    Valor
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {bookingCar.car.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
}
