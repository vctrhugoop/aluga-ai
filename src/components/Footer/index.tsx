export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-teal-600 p-4 text-center text-xs text-zinc-50">
      <p>&copy; 2024 AlugaAí | Todos os direitos reservados.</p>
      <div className="mx-auto my-3 h-[1px] max-w-6xl bg-zinc-50"></div>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://github.com/vctrhugoop"
          target="_blank"
          className="font-bold"
        >
          Victor Oliveira
        </a>
      </p>
    </footer>
  );
}
