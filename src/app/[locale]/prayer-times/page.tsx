import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

const months = [
  { name: "January 2026", file: "/prayer-times/january-2026.pdf", icon: "❄️" },
  { name: "February 2026", file: "/prayer-times/february-2026.pdf", icon: "❄️" },
  { name: "March 2026", file: "/prayer-times/march-2026.pdf", icon: "🌱" },
  { name: "April 2026", file: "/prayer-times/april-2026.pdf", icon: "🌸" },
  { name: "May 2026", file: "/prayer-times/may-2026.pdf", icon: "🌺" },
  { name: "June 2026", file: "/prayer-times/june-2026.pdf", icon: "☀️" },
  { name: "July 2026", file: "/prayer-times/july-2026.pdf", icon: "🌞" },
  { name: "August 2026", file: "/prayer-times/august-2026.pdf", icon: "🏖️" },
  { name: "September 2026", file: "/prayer-times/september-2026.pdf", icon: "🍁" },
  { name: "October 2026", file: "/prayer-times/october-2026.pdf", icon: "🍂" },
  { name: "November 2026", file: "/prayer-times/november-2026.pdf", icon: "🍁" },
  { name: "December 2026", file: "/prayer-times/december-2026.pdf", icon: "🎄" },
];

export default async function PrayerTimesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "prayer");

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.prayerTimes} />

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Monthly Namaz Timings 2026" subtitle="Download Prayer Schedules"
            description="Click on any month below to view or download the detailed Namaz timings for Montreal." />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {months.map((month) => (
                <a key={month.name} href={month.file} target="_blank" rel="noopener noreferrer"
                  className="group bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{month.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm">{month.name}</h3>
                  <p className="text-xs text-gray-500 mt-2">📄 View / Download</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("importanceTitle")}</h2>
          <p className="text-gold-light font-semibold text-sm uppercase tracking-wider mb-6">{t("importanceSubtitle")}</p>
          <blockquote className="text-xl md:text-2xl italic leading-relaxed text-white/90">
            &ldquo;Indeed, prayer has been decreed upon the believers a decree of specified times.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gold-light font-medium not-italic">— Holy Qur&apos;an, Surah An-Nisa (4:103)</cite>
        </div>
      </section>
    </>
  );
}
