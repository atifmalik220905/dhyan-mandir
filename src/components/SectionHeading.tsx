interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-4">
          <span className="h-px w-8 bg-accent/60" />
          {eyebrow}
          <span className="h-px w-8 bg-accent/60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
