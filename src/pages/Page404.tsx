import image404 from "../assets/image404.svg";

export function Page404() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-center">
      <section className="mx-auto flex max-w-6xl items-center justify-center gap-8 text-center">
        <img src={image404} className="hidden w-96 md:block" />
        <div>
          <span className="text-8xl font-bold">404...</span>
          <p className="text-xl text-muted-foreground">
            Ops...Página não encontrada
          </p>
        </div>
      </section>
    </div>
  );
}
