import image404 from "../assets/image404.svg";

export function Page404() {
  return (
    <div className="mx-auto flex max-w-6xl flex-1 items-center justify-center">
      <section className="mb-32 flex items-center space-x-6">
        <img src={image404} className="hidden w-96 md:block" />
        <div>
          <span className="text-9xl font-bold">404</span>
          <p className="text-lg text-muted-foreground">
            Ops...Página não encontrada.
          </p>
        </div>
      </section>
    </div>
  );
}
