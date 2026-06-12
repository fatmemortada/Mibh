import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import { heroImages } from "@/lib/images";

export default async function AboutPage() {
  const t = await getTranslations("about");

  const values = [
    { icon: "🕌", title: t("faith"), description: t("faithDesc") },
    { icon: "📚", title: t("knowledge"), description: t("knowledgeDesc") },
    { icon: "🤲", title: t("service"), description: t("serviceDesc") },
    { icon: "🤝", title: t("unity"), description: t("unityDesc") },
  ];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.about} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={t("ourStory")} subtitle={t("storySubtitle")} description={t("storyDescription")} />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>MIBH Montreal was established with a vision to create a vibrant Islamic center that serves the spiritual, educational, and social needs of the Shia Muslim community in Montreal and surrounding areas.</p>
              <p>We strive to provide a welcoming environment where individuals and families can strengthen their connection with Allah, deepen their understanding of Islam, and contribute positively to society. Our center is open to all who seek knowledge, spiritual growth, and community fellowship.</p>
              <p>Through our diverse programs — from weekly prayers and Quranic classes to youth activities and community outreach — we aim to nurture a generation of Muslims who are confident in their faith, committed to excellence, and dedicated to serving humanity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("ourValues")} subtitle={t("valuesSubtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => <InfoCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("ourCommunity")} subtitle={t("communitySubtitle")} />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">🕌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("weeklyGatherings")}</h3>
              <p className="text-gray-600">{t("weeklyGatheringsDesc")}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("servingMontreal")}</h3>
              <p className="text-gray-600">{t("servingMontrealDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
