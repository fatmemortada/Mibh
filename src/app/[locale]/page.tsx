import { Link } from "@/i18n/navigation";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages, mosqueImages, mibhPhotos } from "@/lib/images";
import { translate } from "@/lib/translation";
import MuharramSection from "@/components/MuharramSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "home");

  const programs = [
    { icon: "📖", title: t("weeklyPrograms"), description: t("weeklyDesc"), items: ["Friday Congregational Prayer", "Quran Recitation & Tafsir", "Islamic Studies Classes", "Family Gatherings"], href: "/programs", image: mibhPhotos.photo1 },
    { icon: "🌟", title: t("youthPrograms"), description: t("youthDesc"), items: ["Leadership Development", "Sports Activities", "Quran Competitions", "Volunteer Opportunities"], href: "/programs", image: mibhPhotos.photo2 },
    { icon: "👩‍👧", title: t("womensPrograms"), description: t("womensDesc"), items: ["Educational Sessions", "Quran Circles", "Family Workshops", "Support Groups"], href: "/programs", image: mibhPhotos.photo3 },
    { icon: "👶", title: t("childrensPrograms"), description: t("childrensDesc"), items: ["Quran School", "Arabic Language", "Islamic Values Education", "Holiday Activities"], href: "/programs", image: mibhPhotos.community },
  ];

  const beliefs = [
    { title: t("tawhid"), desc: t("tawhidDesc") },
    { title: t("adalah"), desc: t("adalahDesc") },
    { title: t("nubuwwah"), desc: t("nubuwwahDesc") },
    { title: t("imamah"), desc: t("imamahDesc") },
    { title: t("qiyamah"), desc: t("qiyamahDesc") },
  ];

  return (
    <>
      <HeroSection
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        description={t("heroDescription")}
        bgImage={heroImages.home}
        buttons={[
          { label: t("learnMore"), href: "/about", variant: "outline" as const },
          { label: t("donate"), href: "/donations", variant: "gold" as const },
          { label: t("joinPrograms"), href: "/programs", variant: "outline" as const },
        ]}
      />

      <MuharramSection />

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("whoWeAre")} subtitle={t("aboutSubtitle")} description={t("aboutDescription")} />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image src={mibhPhotos.photo2} alt="MIBH Montreal Community" width={600} height={400} className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="text-gray-700 leading-relaxed text-lg">{t("aboutText")}</p>
                <Link href="/about" className="inline-block mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md">
                  {t("aboutLink")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0">
          <Image src={mosqueImages.islamicPattern} alt="" fill className="object-cover opacity-5" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("coreBeliefs")} subtitle={t("beliefsSubtitle")} description={t("beliefsDescription")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {beliefs.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/beliefs" className="text-primary font-semibold hover:text-primary-dark transition-colors">
              {t("learnImams")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("programsTitle")} subtitle={t("programsSubtitle")} description={t("programsDescription")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Link key={p.title} href={p.href || "/programs"} className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all overflow-hidden flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-4xl drop-shadow-lg">{p.icon}</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                  <ul className="space-y-1.5 flex-1">
                    {p.items.map((item) => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">✦</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-primary">
        <div className="absolute inset-0">
          <Image src={mibhPhotos.photo3} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("supportTitle")}</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{t("supportDescription")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donations" className="px-8 py-4 bg-gold text-white font-bold rounded-lg hover:bg-gold-light transition-colors shadow-lg text-lg">
              {t("makeDonation")}
            </Link>
            <Link href="/volunteer" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors text-lg">
              {t("volunteerWithUs")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
