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
        Esta política descreve como o Congresso {siteConfig.name} coleta e utiliza
        dados pessoais para realizar inscrições, pagamentos e comunicação com as
        participantes, em conformidade com a Lei Geral de Proteção de Dados
        (LGPD).
      </p>
      <h2 className="font-serif text-2xl text-earth">1. Dados coletados</h2>
      <p>
        Nome completo, CPF, e-mail, telefone/WhatsApp, cidade, estado e, quando
        o pagamento for no cartão, dados necessários à autorização da transação
        (incluindo CEP e número do endereço do titular).
      </p>
      <h2 className="font-serif text-2xl text-earth">2. Pagamentos</h2>
      <p>
        Os pagamentos são processados pelo Asaas. Os dados de cartão são
        transmitidos de forma segura para a API do Asaas e não ficam armazenados
        neste site. O PIX utiliza QR Code dinâmico e código copia e cola gerados
        na hora.
      </p>
      <h2 className="font-serif text-2xl text-earth">3. Finalidade</h2>
      <p>
        Usamos seus dados para emitir a cobrança, confirmar a inscrição, enviar
        informações do evento e prestar suporte. Não vendemos dados a terceiros.
      </p>
      <h2 className="font-serif text-2xl text-earth">4. Direitos da titular</h2>
      <p>
        Você pode solicitar acesso, correção ou exclusão dos seus dados pelo
        WhatsApp de suporte, ressalvadas as obrigações legais de guarda de
        registros financeiros.
      </p>
      <h2 className="font-serif text-2xl text-earth">5. Contato</h2>
      <p>
        Para exercer direitos previstos na LGPD, fale com a organização do
        {` ${siteConfig.name}`} pelos canais oficiais do site.
      </p>
    </LegalPage>
  );
}
