# Me Refugiar — Congresso para Mulheres

Site oficial do congresso idealizado e ministrado por **Renata Vitorino Coelho**: [merefugiar.com.br](https://merefugiar.com.br). Construído com Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion e integração de pagamentos via API do Asaas (PIX e cartão de crédito).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Lucide Icons + Framer Motion
- Asaas API (`/api/checkout` e `/api/webhooks/asaas`)
- Pronto para deploy na Vercel

## Primeiros passos

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `ASAAS_API_KEY` | Chave de API do Asaas (sandbox ou produção) |
| `ASAAS_API_URL` | `https://api-sandbox.asaas.com` ou `https://api.asaas.com` |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site, `https://merefugiar.com.br` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de suporte com DDI, ex: `5511999999999` |

Opcional: `ASAAS_WEBHOOK_TOKEN` (validado no header `asaas-access-token`).

## Pagamentos Asaas

1. Crie uma conta no [sandbox](https://sandbox.asaas.com/) e gere a API Key.
2. Configure o webhook para `https://merefugiar.com.br/api/webhooks/asaas` com os eventos de cobrança.
3. O checkout cria/reutiliza o cliente, gera a cobrança e, no PIX, devolve QR Code + copia e cola.
4. O cartão é processado imediatamente no servidor. Os dados do cartão **não são persistidos**.

## Conteúdo editável

Textos, lotes, programação, FAQ, vídeos e endereço ficam em `lib/event.ts`. Os IDs de YouTube da galeria são placeholders — troque pelos vídeos oficiais do congresso.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Cadastre as variáveis de ambiente.
3. Faça o deploy. O projeto já usa as convenções do App Router e não precisa de configuração extra de servidor.
