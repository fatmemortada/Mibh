import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

export default async function DonationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "donations");

  const options = [
    { icon: "💚", title: t("oneTime"), description: t("oneTimeDesc"), featured: false },
    { icon: "🔄", title: t("monthly"), description: t("monthlyDesc"), featured: true },
    { icon: "🤲", title: t("zakat"), description: t("zakatDesc"), featured: false },
    { icon: "❤️", title: t("sadaqah"), description: t("sadaqahDesc"), featured: false },
    { icon: "🎓", title: t("sponsorship"), description: t("sponsorshipDesc"), featured: false },
    { icon: "🏗️", title: t("buildingFund"), description: t("buildingFundDesc"), featured: false },
  ];

  const impact = ["Maintain our Islamic center and facilities", "Support educational programs for all ages", "Organize community events and religious programs", "Assist families in need within our community", "Develop youth initiatives and leadership programs", "Provide counseling and support services"];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.donations}
        buttons={[
          { label: t("donateNow"), href: "#donate", variant: "gold" as const },
          { label: t("volunteerInstead"), href: "/volunteer", variant: "outline" as const },
        ]}
      />

      {/* Square Payment Link */}
      <section className="py-16 bg-gradient-to-br from-gold/10 to-primary/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-gold">
            <div className="text-5xl mb-4">💳</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Make a Secure Donation</h2>
            <p className="text-gray-600 mb-6">Use our secure Square payment link to make a one-time or recurring donation. Every contribution supports our mission.</p>
            <a href="https://square.link/u/X4eHO0Co" target="_blank" rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-white font-bold text-lg rounded-xl hover:bg-gold-light transition-all transform hover:scale-105 shadow-lg">
              Donate Now via Square →
            </a>
            <p className="text-xs text-gray-400 mt-4">Secure payment processed by Square</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("yourImpact")} subtitle={t("impactSubtitle")} description={t("impactDescription")} />
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream rounded-xl p-8 border border-cream-dark">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impact.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary text-lg mt-0.5">✓</span><span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" id="donate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("donationOptions")} subtitle={t("optionsSubtitle")} description={t("optionsDescription")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {options.map((opt) => (
              <div key={opt.title} className={`rounded-xl p-6 shadow-sm border-2 transition-all ${opt.featured ? "bg-white border-gold shadow-md" : "bg-white border-gray-200 hover:border-primary/30 hover:shadow-md"}`}>
                {opt.featured && <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">⭐ {t("recommended")}</p>}
                <div className="text-4xl mb-3">{opt.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{opt.description}</p>
                <a href="https://square.link/u/X4eHO0Co" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm text-center">Donate →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic leading-relaxed text-white/90">
            &ldquo;The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gold-light font-medium not-italic">— Holy Qur&apos;an, Surah Al-Baqarah (2:261)</cite>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title={t("otherWays")} subtitle={t("otherWaysDesc")} />
          <p className="text-gray-700 mb-8">{t("otherWaysText")}</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md">{t("contactDonations")}</Link>
        </div>
      </section>
    </>
  );
}
