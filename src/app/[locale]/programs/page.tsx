import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "programs");

  const weekly = ["Friday Congregational Prayer (Salat al-Jumu'ah)", "Weekly Quran Recitation Circle", "Tafsir (Quranic Exegesis) Classes", "Islamic Studies & Theology", "Family Gatherings & Potlucks", "Community Discussions & Q&A Sessions"];
  const youth = ["Leadership Development Workshops", "Sports Activities & Tournaments", "Quran Memorization Competitions", "Volunteer & Service Opportunities", "Youth Discussion Circles", "Career & Academic Mentorship"];
  const womens = ["Weekly Educational Sessions", "Quran Circles for Sisters", "Family & Parenting Workshops", "Community Support Groups", "Skills Development Workshops", "Sisters' Social Gatherings"];
  const childrens = ["Quran School (Weekend Classes)", "Arabic Language Classes", "Islamic Values & Morals Education", "Holiday & Eid Activities", "Arts & Crafts with Islamic Themes", "Stories of the Prophets & Imams"];
  const services = [
    { icon: "💒", title: t("marriage"), description: t("marriageDesc") },
    { icon: "🕊️", title: t("funeral"), description: t("funeralDesc") },
    { icon: "🤝", title: t("counseling"), description: t("counselingDesc") },
    { icon: "🌱", title: t("newMuslim"), description: t("newMuslimDesc") },
    { icon: "👨‍👩‍👧‍👦", title: t("family"), description: t("familyDesc") },
    { icon: "🏘️", title: t("outreach"), description: t("outreachDesc") },
  ];

  const programSections = [
    { title: t("weeklyTitle"), subtitle: t("weeklySubtitle"), description: t("weeklyDescription"), items: weekly, bg: "" },
    { title: t("youthTitle"), subtitle: t("youthSubtitle"), description: t("youthDescription"), items: youth, bg: "bg-cream" },
    { title: t("womensTitle"), subtitle: t("womensSubtitle"), description: t("womensDescription"), items: womens, bg: "" },
    { title: t("childrensTitle"), subtitle: t("childrensSubtitle"), description: t("childrensDescription"), items: childrens, bg: "bg-cream" },
  ];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.programs}
        buttons={[
          { label: "Volunteer", href: "/volunteer", variant: "gold" as const },
          { label: "Contact Us", href: "/contact", variant: "outline" as const },
        ]}
      />

      {programSections.map((section) => (
        <section key={section.title} className={`py-16 ${section.bg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title={section.title} subtitle={section.subtitle} description={section.description} />
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 text-lg">✦</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("communityTitle")} subtitle={t("communitySubtitle")} description={t("communityDescription")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <InfoCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
