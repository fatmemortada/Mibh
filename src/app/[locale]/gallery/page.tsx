import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";

const galleryItems = [
  { icon: "🕌", title: "Friday Prayers", description: "Weekly congregational prayers" },
  { icon: "🌙", title: "Ramadan 1447", description: "Iftar and community gatherings" },
  { icon: "🏴", title: "Muharram 1447", description: "Majalis and commemorations" },
  { icon: "🎉", title: "Eid Celebrations", description: "Community festivities" },
  { icon: "📚", title: "Educational Programs", description: "Classes and workshops" },
  { icon: "🌟", title: "Youth Activities", description: "Sports and leadership" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Gatherings", description: "Community social events" },
  { icon: "🤝", title: "Community Service", description: "Outreach and volunteering" },
  { icon: "🎓", title: "Graduation Ceremonies", description: "Quran school graduations" },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection title="Media Gallery" subtitle="Moments Captured" description="Explore photos and videos from our events, programs, and community gatherings at MIBH Montreal." small />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Photo & Video Gallery" subtitle="Our Community in Pictures" description="Browse through moments from our events and programs. Full gallery coming soon." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.title} className="relative bg-gray-100 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-primary/50 hover:bg-gray-50 transition-all group cursor-pointer">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-bold text-gray-700 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Full photo and video gallery integration with albums and lightbox coming in Phase 3.</p>
              <Link href="/social-media" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">Follow Us on Social Media for Updates</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
