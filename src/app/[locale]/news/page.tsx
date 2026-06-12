import HeroSection from "@/components/HeroSection";

const news = [
  { date: "June 2026", tag: "Announcement", title: "Website Launch", description: "We are excited to announce the launch of our new website! Explore our programs, learn about our beliefs, and stay connected with the MIBH Montreal community." },
  { date: "Coming Soon", tag: "Program", title: "Summer Youth Camp Registration", description: "Registration for our annual summer youth camp will open soon. The camp includes sports, Islamic studies, field trips, and leadership activities for ages 12-18." },
  { date: "Coming Soon", tag: "Community", title: "New Community Initiatives", description: "We are developing new community outreach programs including a food bank, senior support services, and interfaith dialogue events." },
];

export default function NewsPage() {
  return (
    <>
      <HeroSection title="News & Announcements" subtitle="Stay Informed" description="The latest updates, announcements, and news from the MIBH Montreal community." small />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item) => (
              <article key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-sm text-gray-500">{item.date}</time>
                  <span className="px-3 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">{item.tag}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="max-w-lg mx-auto mt-16">
            <div className="bg-cream border border-cream-dark rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-6">Subscribe to our newsletter to receive the latest news, event announcements, and community updates.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm" />
                <button type="submit" className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shrink-0">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
