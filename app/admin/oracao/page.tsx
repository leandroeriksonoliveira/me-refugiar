import { logoutOrganization, setPrayerStatus } from "@/app/admin/actions";
import { Logo } from "@/components/logo";
import { isOrganization } from "@/lib/admin-auth";
import { listPrayerRequests } from "@/lib/prayer-store";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(value));
}

export default async function AdminPrayerPage() {
  if (!(await isOrganization())) {
    redirect("/admin");
  }

  const requests = await listPrayerRequests();
  const openCount = requests.filter((row) => row.status === "new").length;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-10 sm:py-14">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <form action={logoutOrganization}>
          <button type="submit" className="text-sm text-velvet hover:text-gold">
            Sair
          </button>
        </form>
      </div>

      <p className="mt-10 text-xs tracking-[0.28em] text-gold uppercase">Organização</p>
      <h1 className="mt-3 font-serif text-4xl text-earth">Pedidos de oração</h1>
      <p className="mt-3 text-sm text-muted">
        {requests.length === 0
          ? "Nenhum pedido ainda."
          : `${openCount} aguardando · ${requests.length} no total`}
      </p>

      <ul className="mt-10 space-y-4">
        {requests.map((request) => (
          <li
            key={request.id}
            className="rounded-[1.5rem] border border-gold/15 bg-cream p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-serif text-xl text-earth">
                {request.name || "Anônima"}
              </p>
              <p className="text-xs text-muted">{formatDate(request.createdAt)}</p>
            </div>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-earth/90">
              {request.message}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span
                className={`text-xs tracking-wide uppercase ${
                  request.status === "prayed" ? "text-gold" : "text-velvet"
                }`}
              >
                {request.status === "prayed" ? "Em oração / acolhido" : "Novo"}
              </span>
              {request.status === "new" ? (
                <form action={setPrayerStatus.bind(null, request.id, "prayed")}>
                  <button
                    type="submit"
                    className="rounded-full bg-velvet px-4 py-2 text-xs font-medium tracking-wide text-cream uppercase hover:bg-burgundy"
                  >
                    Marcar como acolhido
                  </button>
                </form>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
