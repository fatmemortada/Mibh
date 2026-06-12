import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "mission");

  const goals = [
    { icon: "🎯", title: t("inspireFaith"), description: t("inspireFaithDesc") },
    { icon: "📖", title: t("promoteKnowledge"), description: t("promoteKnowledgeDesc") },
    { icon: "❤️", title: t("supportNeedy"), description: t("supportNeedyDesc") },
    { icon: "🫂", title: t("buildUnity"), description: t("buildUnityDesc") },
  ];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.mission} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary text-white rounded-2xl p-10 text-center shadow-lg">
              <p className="text-gold-light font-semibold text-sm uppercase tracking-wider mb-2">{t("missionStatement")}</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">{t("missionText")}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gold rounded-2xl p-10 text-center shadow-lg">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">{t("visionStatement")}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">{t("visionText")}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("ourGoals")} subtitle={t("goalsSubtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((g) => (
              <div key={g.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-600">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic leading-relaxed text-white/90">&ldquo;{t("quote")}&rdquo;</blockquote>
          <cite className="block mt-4 text-gold-light font-medium not-italic">— {t("quoteSource")}</cite>
        </div>
      </section>
    </>
  );
}
