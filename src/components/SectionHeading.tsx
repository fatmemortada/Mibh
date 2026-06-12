interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
      <div className={`mt-4 w-20 h-1 bg-gold rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
