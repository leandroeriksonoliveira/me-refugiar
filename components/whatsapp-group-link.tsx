import { siteConfig } from "@/lib/event";

export function WhatsAppGroupLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={siteConfig.whatsappGroupUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-[#1ebe5a] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3c0-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a9.6 9.6 0 0 0 3.6 3.3 12 12 0 0 0 1.2.5 2.9 2.9 0 0 0 1.3.1 2.2 2.2 0 0 0 1.4-1c.2-.3.6-1 .7-1.3s.1-.3 0-.4 0-.2-.2-.3Z" />
      </svg>
      Entrar no grupo
    </a>
  );
}
