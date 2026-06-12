import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

const events = [
  { icon: "🕌", title: "Weekly Friday Prayers", frequency: "Every Friday", description: "Congregational Jumu'ah prayer followed by Quran recitation, lecture, and community fellowship.", category: "Weekly" },
  { icon: "🌙", title: "Ramadan Programs", frequency: "Ramadan 1447 AH", description: "Daily Iftar gatherings, Taraweeh prayers, Dua Kumayl, Quran competition for youth, and Laylat al-Qadr night vigil programs.", category: "Seasonal" },
  { icon: "🏴", title: "Muharram Majalis", frequency: "Muharram 1448 AH", description: "Commemoration of the martyrdom of Imam Husayn (AS) with daily lectures, elegies (latmiyat), and community meals (niyaz).", category: "Seasonal" },
  { icon: "🎉", title: "Eid al-Fitr Celebration", frequency: "Shawwal 1", description: "Congregational Eid prayers followed by community celebration with food, activities for children, and family gatherings.", category: "Annual" },
  { icon: "🎊", title: "Eid al-Adha Celebration", frequency: "Dhul Hijjah 10", description: "Eid prayers and community celebration commemorating the sacrifice of Prophet Ibrahim (AS).", category: "Annual" },
  { icon: "🎂", title: "Eid al-Ghadir Celebration", frequency: "Dhul Hijjah 18", description: "Celebration of the appointment of Imam Ali (AS) as the successor of Prophet Muhammad (PBUH) at Ghadir Khumm.", category: "Annual" },
  { icon: "📚", title: "Educational Conferences", frequency: "Throughout the year", description: "Conferences and seminars on Islamic topics featuring guest speakers, scholars, and interactive workshops.", category: "Educational" },
  { icon: "👨‍👩‍👧‍👦", title: "Community Gatherings", frequency: "Monthly", description: "Monthly family nights with potluck dinners, games, discussions, and activities for all ages.", category: "Monthly" },
];

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "events");

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.events} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("upcoming")} subtitle={t("upcomingSubtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event) => (
              <div key={event.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{event.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cream text-primary">{event.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{event.frequency}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title={t("stayUpdated")} subtitle={t("neverMiss")} description={t("neverMissDesc")} />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">{t("contactDetails")}</Link>
            <Link href="/social-media" className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">{t("followSocial")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
