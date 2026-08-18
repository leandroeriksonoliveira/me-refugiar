import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  light?: boolean;
  variant?: "nav" | "full" | "mark";
};

export function Logo({ className = "", light = false, variant = "nav" }: LogoProps) {
  const alt = "Me Refugiar — Ministério de Mulheres";

  if (variant === "full") {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <Image
          src={light ? "/brand/logo-full-light.png" : "/brand/logo-full.png"}
          alt={alt}
          width={900}
          height={587}
          className="h-auto w-[180px] sm:w-[220px]"
          priority
        />
      </Link>
    );
  }

  if (variant === "mark") {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <Image
          src={light ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
          alt={alt}
          width={480}
          height={664}
          className="h-12 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={light ? "/brand/logo-mark-light.png" : "/brand/logo-mark.png"}
        alt=""
        width={480}
        height={664}
        className="h-11 w-auto sm:h-12"
        priority
      />
      <Image
        src={light ? "/brand/logo-wordmark-light.png" : "/brand/logo-wordmark.png"}
        alt={alt}
        width={800}
        height={211}
        className="h-8 w-auto sm:h-9"
        priority
      />
    </Link>
  );
}
