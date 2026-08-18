import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-6 text-center">
      <div>
        <Logo variant="full" />
        <h1 className="mt-10 font-serif text-5xl text-earth">Página não encontrada</h1>
        <p className="mt-4 text-muted">Este caminho não existe neste refúgio.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-velvet px-6 py-3 text-sm text-cream"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
