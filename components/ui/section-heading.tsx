export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-xs font-medium tracking-[0.28em] uppercase ${
          light ? "text-gold-soft" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <div className="ornament my-4 text-gold">✦</div>
      <h2
        className={`font-serif text-4xl leading-tight sm:text-5xl ${
          light ? "text-cream" : "text-earth"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-blush/90" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
