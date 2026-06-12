import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { heroImages } from "@/lib/images";
import { translate } from "@/lib/translation";

const twelveImams = [
  { name: "Imam Ali ibn Abi Talib", title: "Amir al-Mu'minin", arabic: "علي بن أبي طالب", description: "The cousin and son-in-law of Prophet Muhammad (PBUH), the first Imam, and the rightful successor. Known for his unparalleled knowledge, justice, and courage." },
  { name: "Imam Hasan ibn Ali", title: "Al-Mujtaba", arabic: "الحسن بن علي", description: "The elder grandson of the Prophet (PBUH), known for his patience, generosity, and peace-making treaty that preserved the Muslim community." },
  { name: "Imam Husayn ibn Ali", title: "Sayyid al-Shuhada", arabic: "الحسين بن علي", description: "The younger grandson of the Prophet (PBUH), who sacrificed his life at Karbala standing against tyranny and injustice." },
  { name: "Imam Ali Zayn al-Abidin", title: "Al-Sajjad", arabic: "علي زين العابدين", description: "Known for his devotion in worship and his profound supplications collected in Al-Sahifa al-Sajjadiyya." },
  { name: "Imam Muhammad al-Baqir", title: "Baqir al-Ilm", arabic: "محمد الباقر", description: "The 'Splitter of Knowledge' who established the foundations of Shia Islamic scholarship." },
  { name: "Imam Ja'far al-Sadiq", title: "Al-Sadiq", arabic: "جعفر الصادق", description: "Founder of the Ja'fari school of thought, he taught thousands of scholars in various sciences." },
  { name: "Imam Musa al-Kadhim", title: "Al-Kadhim", arabic: "موسى الكاظم", description: "Known for his forbearance, patience, and deep worship even while enduring imprisonment." },
  { name: "Imam Ali al-Ridha", title: "Al-Ridha", arabic: "علي الرضا", description: "Known for his wisdom and scholarly debates, spreading Islamic knowledge throughout the empire." },
  { name: "Imam Muhammad al-Taqi", title: "Al-Jawad", arabic: "محمد التقي", description: "Known for his remarkable knowledge and wisdom at a young age." },
  { name: "Imam Ali al-Hadi", title: "Al-Hadi", arabic: "علي الهادي", description: "The 'Guide' who led the Shia community through spiritual and scholarly guidance." },
  { name: "Imam Hasan al-Askari", title: "Al-Askari", arabic: "الحسن العسكري", description: "The father of Imam al-Mahdi, who prepared the community for the period of occultation." },
  { name: "Imam Muhammad al-Mahdi", title: "Al-Hujjah, Al-Qa'im", arabic: "محمد المهدي", description: "The twelfth and final Imam, the awaited savior who will reappear to establish justice throughout the world." },
];

const usulAlDin = [
  { title: "Tawhid", arabic: "التوحيد", subtitle: "Oneness of Allah", description: "Belief that Allah is One, unique, and without partner. He is the Creator, Sustainer, and Lord of all that exists. Nothing is comparable to Him, and He alone deserves worship.", verse: "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.", verseRef: "Surah Al-Ikhlas (112:1-4)" },
  { title: "Adalah", arabic: "العدل", subtitle: "Divine Justice", description: "Allah is perfectly just and fair in all matters. He does not oppress anyone, and all His actions are based on wisdom and justice.", verse: "Indeed, Allah does not do injustice, even as much as an atom's weight.", verseRef: "Surah An-Nisa (4:40)" },
  { title: "Nubuwwah", arabic: "النبوة", subtitle: "Prophethood", description: "Allah sent prophets and messengers to guide humanity. Prophet Muhammad (PBUH) is the Seal of the Prophets.", verse: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets.", verseRef: "Surah Al-Ahzab (33:40)" },
  { title: "Imamah", arabic: "الإمامة", subtitle: "Divine Leadership", description: "After Prophet Muhammad (PBUH), leadership of the Muslim community continued through twelve divinely appointed Imams from the Ahlul Bayt.", verse: "O you who have believed, obey Allah and obey the Messenger and those in authority among you.", verseRef: "Surah An-Nisa (4:59)" },
  { title: "Qiyamah", arabic: "القيامة", subtitle: "Day of Judgment", description: "Every person will be resurrected and held accountable before Allah. The righteous will enter Paradise.", verse: "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.", verseRef: "Surah Az-Zalzalah (99:7-8)" },
];

export default async function BeliefsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translate(locale, "beliefs");

  return (
    <>
      <HeroSection title={t("title")} subtitle={t("subtitle")} description={t("description")} small bgImage={heroImages.beliefs}
        buttons={[{ label: "Learn About Our Mission", href: "/mission", variant: "outline" as const }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("usulTitle")} subtitle={t("usulSubtitle")} description={t("usulDescription")} />
          <div className="space-y-8 max-w-4xl mx-auto">
            {usulAlDin.map((item, i) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">{i + 1}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <span className="text-gold text-lg">{item.arabic}</span>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-3">{item.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-cream rounded-lg p-4 border-l-4 border-gold">
                      <p className="text-gray-800 italic leading-relaxed text-sm">&ldquo;{item.verse}&rdquo;</p>
                      <p className="text-gray-500 text-xs mt-1">— {item.verseRef}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("imamsTitle")} subtitle={t("imamsSubtitle")} description={t("imamsDescription")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {twelveImams.map((imam, i) => (
              <div key={imam.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wide">{imam.title}</p>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{imam.name} (AS)</h3>
                <p className="text-sm text-gray-500 mb-3">{imam.arabic}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{imam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
