import { loginOrganization } from "@/app/admin/actions";
import { Logo } from "@/components/logo";
import { isAdminPasswordConfigured, isOrganization } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  if (await isOrganization()) {
    redirect("/admin/oracao");
  }

  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : "";

  return (
    <main className="grid min-h-screen place-items-center px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-gold/20 bg-cream p-8 shadow-[0_20px_50px_-32px_rgba(92,42,53,0.45)]">
        <Logo />
        <p className="mt-8 text-xs tracking-[0.28em] text-gold uppercase">Área da organização</p>
        <h1 className="mt-3 font-serif text-3xl text-earth">Pedidos de oração</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Esta página é exclusiva da equipe do Me Refugiar.
        </p>

        {!isAdminPasswordConfigured() ? (
          <p className="mt-8 rounded-2xl bg-sand/80 p-4 text-sm text-velvet">
            Configure a variável <code>PRAYER_ADMIN_PASSWORD</code> no ambiente do site
            para liberar o acesso da organização.
          </p>
        ) : (
          <form action={loginOrganization} className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs tracking-wide text-muted uppercase">Senha</span>
              <input
                required
                type="password"
                name="password"
                className="w-full rounded-2xl border border-gold/20 bg-white px-4 py-3 text-sm text-earth outline-none focus:border-velvet"
                autoComplete="current-password"
              />
            </label>
            {error === "auth" ? (
              <p className="text-sm text-velvet">Senha incorreta.</p>
            ) : null}
            {error === "limit" ? (
              <p className="text-sm text-velvet">Muitas tentativas. Aguarde alguns minutos.</p>
            ) : null}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-velvet px-6 py-3 text-sm font-semibold tracking-wide text-cream uppercase hover:bg-burgundy"
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
