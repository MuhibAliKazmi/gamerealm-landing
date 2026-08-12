interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className ?? ''}`}>
      <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-lg">{subtitle}</p>
      )}
    </div>
  );
}
