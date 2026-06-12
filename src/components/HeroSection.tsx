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
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      )}

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-gold-light font-medium text-sm uppercase tracking-widest mb-3">{subtitle}</p>
        )}
        <h1 className={`font-bold tracking-tight ${small ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>
          {title}
        </h1>
        <p className={`mx-auto mt-4 text-white/90 max-w-3xl ${small ? "text-lg" : "text-lg md:text-xl"}`}>
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-8">
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
