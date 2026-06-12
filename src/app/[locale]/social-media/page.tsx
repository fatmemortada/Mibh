import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";

const platforms = [
  { icon: "📷", name: "Instagram", handle: "@mosqueimambargahbabul", url: "https://www.instagram.com/mosqueimambargahbabul", description: "Follow us for daily updates, event photos, and community highlights." },
  { icon: "📘", name: "Facebook", handle: "Mosque Imambargah Babul Hawaij", url: "https://www.facebook.com/share/18D7zSi4KS/", description: "Like our page for event announcements, live streams, and community discussions." },
  { icon: "▶️", name: "YouTube", handle: "@mosqueimambargababulhawai6222", url: "https://youtube.com/@mosqueimambargababulhawai6222", description: "Subscribe for lectures, programs, and educational content from our mosque." },
  { icon: "🎵", name: "TikTok", handle: "@mibhmtl", url: "https://tiktok.com/@mibhmtl", description: "Short-form content highlighting our community and programs." },
  { icon: "💬", name: "WhatsApp", handle: "Community Group", url: "#", description: "Join our WhatsApp community group for instant updates and announcements." },
];

const contentTypes = [
  { icon: "📢", title: "Announcements", desc: "Stay informed about upcoming events and programs." },
  { icon: "🎙️", title: "Lectures", desc: "Islamic lectures and educational content." },
  { icon: "📸", title: "Event Highlights", desc: "Photos and videos from our gatherings." },
  { icon: "📿", title: "Daily Duas", desc: "Daily supplications and Quranic verses." },
  { icon: "🗓️", title: "Schedule Updates", desc: "Prayer times and program schedules." },
  { icon: "🫂", title: "Community Spotlights", desc: "Stories and features from our community." },
];

export default function SocialMediaPage() {
  return (
    <>
      <HeroSection title="Stay Connected" subtitle="Follow Us" description="Follow MIBH Montreal on social media for updates, announcements, lectures, and community activities." small />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Follow Us" subtitle="@mibhmtl" description="Stay connected with our community across all platforms." />
            <div className="space-y-4">
              {platforms.map((platform) => (
                <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                  <div className="text-4xl shrink-0 group-hover:scale-110 transition-transform">{platform.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900">{platform.name}</h3>
                    <p className="text-primary font-medium text-sm">{platform.handle}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{platform.description}</p>
                  </div>
                  <div className="shrink-0 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="What You'll Find" subtitle="On Our Social Media" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 text-center shadow-sm">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
