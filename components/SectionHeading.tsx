type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12" data-reveal>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
