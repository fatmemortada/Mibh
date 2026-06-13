import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttons?: { label: string; href: string; variant: "primary" | "gold" | "outline" }[];
  small?: boolean;
  bgImage?: string;
}

export default function HeroSection({ title, subtitle, description, buttons, small = false, bgImage }: HeroSectionProps) {
  const buttonStyles: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    gold: "bg-gold text-white hover:bg-gold-light",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary",
  };

  return (
    <section
      className={`relative bg-primary text-white overflow-hidden ${
        small ? "py-16" : "py-24 md:py-32"
      }`}
    >
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover object-top opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/35 to-primary/50" />
        </div>
      )}

      {/* Decorative Islamic geometric pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.8' opacity='0.7'%3E%3Cpath d='M60 0L75 15L90 0L90 15L105 15L105 30L120 30L105 45L120 60L105 75L120 90L105 90L105 105L90 105L90 120L75 105L60 120L45 105L30 120L30 105L15 105L15 90L0 90L15 75L0 60L15 45L0 30L15 30L15 15L30 15L30 0Z'/%3E%3Ccircle cx='60' cy='60' r='25' stroke-dasharray='3 4'/%3E%3Ccircle cx='60' cy='60' r='38'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col min-h-[400px] md:min-h-[500px] pt-8 md:pt-12">
        {subtitle && (
          <p className="text-gold-light font-medium text-sm uppercase tracking-widest mb-3">{subtitle}</p>
        )}
        <h1 className={`font-bold tracking-tight ${small ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>
          {title}
        </h1>
        <p className="absolute bottom-6 right-4 sm:right-6 lg:right-8 text-white/70 text-sm md:text-base max-w-md text-left leading-relaxed">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-auto mb-16 md:mb-20">
            {buttons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-sm ${
                  buttonStyles[btn.variant]
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
