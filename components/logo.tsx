import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  light?: boolean;
  variant?: "nav" | "full" | "mark";
};

export function Logo({ className = "", light = false, variant = "nav" }: LogoProps) {
  const alt = "Me Refugiar — Mulheres";

  if (variant === "full") {
    return (
      <Link href="/" className={`inline-flex flex-col items-start ${className}`}>
        <Image
          src={light ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
          alt=""
          width={72}
          height={100}
          className="h-16 w-auto max-h-16 object-contain sm:h-[4.5rem] sm:max-h-[4.5rem]"
          priority
        />
        <span
          className={`mt-3 font-serif text-3xl leading-none ${
            light ? "text-cream" : "text-earth"
          }`}
        >
          Me Refugiar
        </span>
        <span
          className={`mt-2 text-[11px] tracking-[0.28em] uppercase ${
            light ? "text-blush/90" : "text-muted"
          }`}
        >
          Mulheres
        </span>
        <span className="sr-only">{alt}</span>
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src={light ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
          alt={alt}
          width={36}
          height={50}
          className="h-9 w-auto max-h-9 object-contain"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src={light ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
        alt=""
        width={32}
        height={44}
        className="h-8 w-auto max-h-8 object-contain"
        priority
      />
      <span
        className={`font-serif text-[1.35rem] leading-none tracking-tight ${
          light ? "text-cream" : "text-earth"
        }`}
      >
        Me Refugiar
      </span>
    </Link>
  );
}
