import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/event";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como o ${siteConfig.name} trata os dados pessoais das inscritas.`,
};

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de privacidade">
      <p>
        Esta política descreve como o {siteConfig.name} Mulheres coleta e utiliza
        dados pessoais para realizar inscrições e comunicação com as
        participantes, em conformidade com a Lei Geral de Proteção de Dados
        (LGPD).
      </p>
      <h2 className="font-serif text-2xl text-earth">1. Dados coletados</h2>
      <p>
        Os dados informados no formulário de inscrição, como nome completo,
        e-mail, telefone/WhatsApp, cidade e estado.
      </p>
      <h2 className="font-serif text-2xl text-earth">2. Finalidade</h2>
      <p>
        Usamos seus dados para confirmar a inscrição, enviar informações do
        evento e prestar suporte. Não vendemos dados a terceiros.
      </p>
      <h2 className="font-serif text-2xl text-earth">3. Direitos da titular</h2>
      <p>
        Você pode solicitar acesso, correção ou exclusão dos seus dados pelo
        WhatsApp de suporte, ressalvadas as obrigações legais de guarda de
        registros financeiros.
      </p>
      <h2 className="font-serif text-2xl text-earth">4. Pedidos de oração</h2>
      <p>
        Os pedidos enviados pelo formulário de oração são lidos apenas pela
        organização do {siteConfig.name}, para intercessão. Não são publicados,
        compartilhados ou usados para marketing. Você pode escrever de forma
        anônima, sem informar o nome.
      </p>
      <h2 className="font-serif text-2xl text-earth">5. Contato</h2>
      <p>
        Para exercer direitos previstos na LGPD, fale com a organização do
        {` ${siteConfig.name}`} pelos canais oficiais do site.
      </p>
    </LegalPage>
  );
}
