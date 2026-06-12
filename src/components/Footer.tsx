import { Link } from "@/i18n/navigation";
import { translate } from "@/lib/translation";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = translate(locale, "footer");
  const nav = translate(locale, "nav");

  const quickLinks = [
    { href: "/about", label: nav("about") },
    { href: "/mission", label: nav("mission") },
    { href: "/beliefs", label: nav("beliefs") },
    { href: "/programs", label: nav("programs") },
    { href: "/prayer-times", label: nav("prayerTimes") },
    { href: "/events", label: nav("events") },
  ];

  const getInvolved = [
    { href: "/donations", label: nav("donate") },
    { href: "/volunteer", label: nav("volunteer") },
    { href: "/contact", label: nav("contact") },
    { href: "/news", label: nav("news") },
    { href: "/gallery", label: nav("gallery") },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/share/18D7zSi4KS/", label: "Facebook", Icon: FacebookIcon },
    { href: "https://www.instagram.com/mosqueimambargahbabul", label: "Instagram", Icon: InstagramIcon },
    { href: "https://youtube.com/@mosqueimambargababulhawai6222", label: "YouTube", Icon: YoutubeIcon },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-white font-bold text-lg">Follow Us on Social Media</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gold text-gray-300 hover:text-white transition-all font-medium text-sm shadow-md"
                  aria-label={label} title={label}>
                  <Icon />{label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-sm">MIBH</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white">MIBH Montreal</p>
                <p className="text-xs text-gray-400">Islamic Community Center</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t("description")}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm hover:text-gold transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("getInvolved")}</h3>
            <ul className="space-y-2">
              {getInvolved.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm hover:text-gold transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{t("contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 mibhmtl@gmail.com</li>
              <li>📞 (514) 963-7907</li>
              <li>📍 Montreal, Quebec, Canada</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
