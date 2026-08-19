import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/event";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: `Condições de participação e uso do site do ${siteConfig.name}.`,
};

export default function TermosPage() {
  return (
    <LegalPage title="Termos de uso">
      <p>
        Ao acessar este site e concluir uma inscrição no Congresso {siteConfig.name},
        você concorda com as condições abaixo. O evento é idealizado e ministrado
        por {siteConfig.speaker}.
      </p>
      <h2 className="font-serif text-2xl text-earth">1. Inscrição e pagamento</h2>
      <p>
        A vaga só é considerada confirmada após a liquidação do pagamento via PIX
        ou a autorização da transação no cartão de crédito, processados pela API
        do Asaas. Valores, lotes e benefícios podem ser atualizados sem aviso
        prévio até a conclusão da compra.
      </p>
      <h2 className="font-serif text-2xl text-earth">2. Cancelamento</h2>
      <p>
        Cancelamentos com até 30 dias de antecedência têm reembolso de 50% do
        valor pago. Entre 14 e 7 dias, o crédito pode ser transferido para outra
        participante. Após esse prazo, não há reembolso, mas a vaga pode ser
        cedida mediante aviso.
      </p>
      <h2 className="font-serif text-2xl text-earth">3. Conduta</h2>
      <p>
        O congresso é um espaço exclusivo para mulheres, dedicado ao acolhimento
        espiritual. Reservamo-nos o direito de recusar ou interromper a
        participação em casos de conduta que comprometa a segurança ou o clima
        do encontro.
      </p>
      <h2 className="font-serif text-2xl text-earth">4. Imagem</h2>
      <p>
        Momentos do evento podem ser registrados para memória e comunicação
        institucional. Ao participar, você autoriza o uso de imagem em contextos
        relacionados ao {siteConfig.name}, salvo solicitação expressa em contrário.
      </p>
      <h2 className="font-serif text-2xl text-earth">5. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp de suporte
        disponível no site.
      </p>
    </LegalPage>
  );
}
