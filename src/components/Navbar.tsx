"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Image from "next/image";

const navKeys = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/mission", label: "mission" },
  { href: "/beliefs", label: "beliefs" },
  { href: "/programs", label: "programs" },
  { href: "/prayer-times", label: "prayerTimes" },
  { href: "/events", label: "events" },
  { href: "/donations", label: "donate" },
  { href: "/volunteer", label: "volunteer" },
  { href: "/contact", label: "contact" },
];

const localeLabels: Record<string, string> = {
  en: "English",
  ur: "اردو",
  ar: "العربية",
  fr: "Français",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const lang = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const subtitleText =
    locale === "ar" ? "المركز الإسلامي" :
    locale === "ur" ? "اسلامی کمیونٹی سینٹر" :
    locale === "fr" ? "Centre Islamique Chiite Duodécimain" :
    "Islamic Community Center";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center shadow-md">
              <Image
                src="/images/mibh-logo.png"
                alt="MIBH Montreal Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary leading-tight">MIBH Montreal</p>
              <p className="text-xs text-gray-500 leading-tight">{subtitleText}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.href === "/donations"
                    ? "bg-gold text-white hover:bg-gold-light"
                    : "text-gray-700 hover:text-primary hover:bg-cream"
                }`}
              >
                {t(item.label as never)}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-cream transition-colors flex items-center gap-1"
              >
                🌐 {localeLabels[locale] || "English"}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {routing.locales.map((l) => (
                    <Link
                      key={l}
                      href={pathname}
                      locale={l as "en" | "ur" | "ar" | "fr"}
                      className={`block px-4 py-2 text-sm hover:bg-cream transition-colors ${
                        l === locale ? "font-bold text-primary" : "text-gray-700"
                      }`}
                    >
                      {localeLabels[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary transition-colors text-sm"
              aria-label="Switch language"
            >
              🌐
            </button>
            {langOpen && (
              <div className="absolute top-16 right-16 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                {routing.locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l as "en" | "ur" | "ar" | "fr"}
                    className={`block px-4 py-2 text-sm hover:bg-cream transition-colors ${
                      l === locale ? "font-bold text-primary" : "text-gray-700"
                    }`}
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-cream transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  item.href === "/donations"
                    ? "bg-gold text-white hover:bg-gold-light"
                    : "text-gray-700 hover:text-primary hover:bg-cream"
                }`}
              >
                {t(item.label as never)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
