import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBookingCar } from "@/hooks/useBooking";
import { formatPrice } from "@/utils/formatPrice";
import { Calendar, Car, User } from "@phosphor-icons/react";
import { format } from "date-fns";
import { useEffect } from "react";

export function MyBookings() {
  const {
    bookingsCars,
    calculateBookingTotal,
    calculateProcection,
    calculateTax,
    calculateTotal,
    calculateDateDifference,
    calculateProtectionTotal,
  } = useBookingCar();

  useEffect(() => {
    document.title = "AlugaAí - Minhas Reservas";
  }, [bookingsCars]);

  return (
    <div className="mx-auto max-w-6xl">
      {bookingsCars.length <= 0 ? (
        <div>
          <p>Não há reservas de carros no momento.</p>
        </div>
      ) : (
        <section className="mx-auto max-w-6xl space-y-4 px-4 pb-48 pt-6">
          <h1 className="text-xl font-bold">Minhas Reservas</h1>
          {bookingsCars.map((bookingCar) => (
            <Card key={bookingCar.car.id} className="p-6">
              <CardHeader className="space-y-0 text-center">
                <CardTitle>Código da Reserva</CardTitle>
                <CardDescription>
                  {bookingCar.car.id.substring(0, 8).toUpperCase()}
                </CardDescription>
              </CardHeader>
              <Separator className="my-4" />
              <CardContent className="space-y-4 divide-y-[1px] lg:flex lg:space-x-4 lg:space-y-0 lg:divide-x-[1px] lg:divide-y-0">
                <div className="space-y-2">
                  <h3 className="flex gap-1 font-semibold leading-none tracking-tight">
                    <Car />
                    Veículo
                  </h3>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Modelo:{" "}
                      <span className="font-normal text-muted-foreground">
                        {bookingCar.car.name}
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      Categoria:{" "}
                      <span className="font-normal text-muted-foreground">
                        {bookingCar.car.category}
                      </span>
                    </p>
                    {/* <img
                      src={bookingCar.car.imageURL}
                      className="hidden w-48 lg:block"
                    /> */}
                  </div>
                </div>
                <div className="space-y-2 pt-4 lg:pl-4 lg:pt-0">
                  <h3 className="flex gap-1 font-semibold leading-none tracking-tight">
                    <User />
                    Dados do condutor
                  </h3>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Nome:{" "}
                      <span className="font-normal text-muted-foreground">
                        {bookingCar.formData.firstName}{" "}
                        {bookingCar.formData.lastName}
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      E-mail:{" "}
                      <span className="font-normal text-muted-foreground">
                        {bookingCar.formData.email}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="lg: flex justify-between gap-4 lg:flex-col lg:justify-normal">
                  <div className="space-y-2 pt-4 lg:pl-4 lg:pt-0">
                    <h3 className="flex gap-1 font-semibold leading-none tracking-tight">
                      <Calendar />
                      Retirada
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookingCar.formData.date.from && (
                        <span>
                          {format(bookingCar.formData.date.from, "dd/MM/yyyy")}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 lg:pl-4 lg:pt-0">
                    <h3 className="flex gap-1 font-semibold leading-none tracking-tight">
                      <Calendar />
                      Devolução
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {bookingCar.formData.date.to && (
                        <span>
                          {format(bookingCar.formData.date.to, "dd/MM/yyyy")}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-4 lg:flex-1 lg:pl-4 lg:pt-0">
                  <div>
                    <h3 className="font-semibold leading-none tracking-tight">
                      Diária
                    </h3>
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-muted-foreground">
                        {bookingCar.formData.date.from &&
                          bookingCar.formData.date.to &&
                          calculateDateDifference(
                            bookingCar.formData.date.from,
                            bookingCar.formData.date.to,
                          )}
                        x R${formatPrice(bookingCar.car.price.toFixed(2))}
                      </span>
                      <span>
                        R$
                        {formatPrice(
                          calculateBookingTotal(bookingCar).toFixed(2),
                        )}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-none tracking-tight ">
                      Proteção {bookingCar.formData.protection}
                    </h3>
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-muted-foreground">
                        {bookingCar.formData.date.from &&
                          bookingCar.formData.date.to &&
                          calculateDateDifference(
                            bookingCar.formData.date.from,
                            bookingCar.formData.date.to,
                          )}
                        x R$
                        {formatPrice(
                          calculateProcection(bookingCar).toFixed(2),
                        )}
                      </span>
                      <span>
                        R${" "}
                        {formatPrice(
                          calculateProtectionTotal(bookingCar).toFixed(2),
                        )}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-none tracking-tight">
                      Taxa administrativa
                    </h3>
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-muted-foreground">
                        Taxa Fixa de 12%
                      </span>
                      <span>
                        {" "}
                        R$ {formatPrice(calculateTax(bookingCar).toFixed(2))}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="flex gap-1 text-xl font-semibold leading-none tracking-tight">
                      Valor Total{" "}
                    </h3>
                    <p>
                      R$ {formatPrice(calculateTotal(bookingCar).toFixed(2))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </div>
  );
}
