export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#inicio" className={`group inline-flex items-center gap-3 ${className}`}>
      <span
        className={`grid h-10 w-10 place-items-center rounded-full border ${
          light ? "border-gold-soft/50 text-gold-soft" : "border-gold/60 text-velvet"
        }`}
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M16 5c4 4.2 7 8.2 7 12.2A7 7 0 1 1 9 17.2C9 13.2 12 9.2 16 5Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="16" cy="18" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-serif text-xl tracking-wide ${light ? "text-cream" : "text-earth"}`}>
          Me Refugiar
        </span>
        <span className={`block text-[10px] tracking-[0.22em] uppercase ${light ? "text-gold-soft" : "text-gold"}`}>
          Congresso para Mulheres
        </span>
      </span>
    </a>
  );
}
