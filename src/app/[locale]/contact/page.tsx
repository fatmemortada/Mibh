import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "contact");

  const info = [
    { icon: "📧", title: t("email"), value: "mibhmtl@gmail.com", description: t("emailDesc") },
    { icon: "📞", title: t("phone"), value: "(514) 963-7907", description: t("phoneDesc") },
    { icon: "📍", title: t("address"), value: "Montreal, Quebec, Canada", description: t("addressDesc") },
  ];

  const topics = [
    { icon: "📋", title: "Programs", description: "Learn about our programs and how to join" },
    { icon: "💰", title: "Donations", description: "Support our mission financially" },
    { icon: "🤝", title: "Volunteering", description: "Get involved and serve the community" },
    { icon: "📿", title: "Religious Questions", description: "Ask about Islamic beliefs and practices" },
    { icon: "🫂", title: "Community Support", description: "Access counseling and support services" },
  ];

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.contact} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {info.map((item) => (
              <div key={item.title} className="bg-cream rounded-xl p-6 text-center border border-cream-dark">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-primary font-semibold mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title={t("helpTitle")} subtitle={t("helpSubtitle")} centered={false} />
              <div className="space-y-3">
                {topics.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div><h3 className="font-semibold text-gray-900">{item.title}</h3><p className="text-sm text-gray-600">{item.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title={t("messageTitle")} subtitle={t("messageSubtitle")} centered={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl mb-2">📍</p>
              <p className="text-gray-600 font-medium">Montreal, Quebec, Canada</p>
              <p className="text-gray-400 text-sm mt-1">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
