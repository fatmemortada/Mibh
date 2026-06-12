import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { heroImages } from "@/lib/images";

export default async function VolunteerPage() {
  const t = await getTranslations("volunteer");

  const benefits = ["Gain valuable skills and experience", "Build meaningful connections in the community", "Earn spiritual rewards (thawab) through service", "Make a tangible difference in people's lives", "Develop leadership and teamwork abilities", "Be part of something greater than yourself"];

  const opportunities = [
    { icon: "🎉", title: t("eventsTeam"), description: t("eventsTeamDesc") },
    { icon: "📚", title: t("educationPrograms"), description: t("educationProgramsDesc") },
    { icon: "🌟", title: t("youthActivities"), description: t("youthActivitiesDesc") },
    { icon: "📱", title: t("mediaTeam"), description: t("mediaTeamDesc") },
    { icon: "🏘️", title: t("communityOutreach"), description: t("communityOutreachDesc") },
    { icon: "💰", title: t("fundraising"), description: t("fundraisingDesc") },
  ];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.volunteer}
        buttons={[{ label: t("signUp"), href: "#signup", variant: "gold" as const }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("whyVolunteer")} subtitle={t("whySubtitle")} />
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream rounded-xl p-8 border border-cream-dark">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5">★</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("opportunities")} subtitle={t("opportunitiesSubtitle")} description={t("opportunitiesDescription")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{opp.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{opp.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{opp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="signup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <SectionHeading title={t("signupTitle")} subtitle={t("signupSubtitle")} description={t("signupDescription")} />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
