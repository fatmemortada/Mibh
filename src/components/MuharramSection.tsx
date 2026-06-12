"use client";

import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function MuharramSection() {
  const targetDate = new Date("2026-06-15T19:30:00-04:00");

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 overflow-hidden">
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5922B' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full text-gold-light text-xs sm:text-sm font-semibold uppercase tracking-widest">
            🏴 Special Muharram 1448 AH Program
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Muharram <span className="text-gold-light">1448 AH</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Programs & Majalis — Commemoration of the Martyrdom of Imam Hussain (AS)
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-3">Countdown to Ashra-e-Muharram</p>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Main Content: Poster + Details */}
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          {/* Poster - Left 40% */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="relative rounded-xl overflow-hidden border-2 border-gold/40 shadow-2xl shadow-gold/10 group">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors" />
              <Image
                src="/images/mibh-community.jpg"
                alt="Muharram 1448 AH Poster"
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Gold corner ornaments */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/60 rounded-tl-lg z-20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/60 rounded-tr-lg z-20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/60 rounded-bl-lg z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/60 rounded-br-lg z-20" />
            </div>
          </div>

          {/* Details - Right 60% */}
          <div className="flex-1 space-y-6">
            {/* Featured Scholar */}
            <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-6">
              <p className="text-gold-light text-xs uppercase tracking-widest mb-2">Featured Scholar</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Maulana Syed Hadi Hasan</h3>
              <p className="text-gray-400 text-sm">Lucknow, India</p>
              <p className="text-gray-300 mt-3 leading-relaxed text-sm">
                Maulana Syed Hadi Hasan will deliver the Majalis and religious lectures throughout the
                First Ashra (first ten days) of Muharram 1448 AH.
              </p>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-5 flex items-start gap-3">
                <span className="text-2xl shrink-0">📅</span>
                <div>
                  <p className="text-white font-semibold text-sm">Program Commencement</p>
                  <p className="text-gray-300 text-sm">June 15 & 16, 2026</p>
                  <p className="text-gray-500 text-xs italic mt-1">*Subject to Moon Sighting</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-5 flex items-start gap-3">
                <span className="text-2xl shrink-0">🕢</span>
                <div>
                  <p className="text-white font-semibold text-sm">Time</p>
                  <p className="text-gray-300 text-sm">7:30 PM Daily</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-5 flex items-start gap-3 sm:col-span-2">
                <span className="text-2xl shrink-0">📍</span>
                <div>
                  <p className="text-white font-semibold text-sm">Location</p>
                  <p className="text-gray-300 text-sm font-medium">
                    Mosquée Imambargah Babul Hawaij
                  </p>
                  <p className="text-gray-400 text-xs">Charitable Organization</p>
                  <p className="text-gray-300 text-xs mt-1">
                    301-8270 Mountain Sights Avenue, Montreal, Quebec H4P 2B7
                  </p>
                </div>
              </div>
            </div>

            {/* Program Includes */}
            <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-5">
              <p className="text-gold-light text-xs uppercase tracking-widest mb-3">Program Includes</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Tilawat-e-Quran",
                  "Hadith-e-Kisa",
                  "Majlis-e-Aza",
                  "Religious Lecture",
                  "Noha Khwani",
                  "Matam",
                  "Dua",
                  "Community Gathering",
                  "Niyaz / Refreshments",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-gold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Reciters */}
            <div className="bg-white/5 backdrop-blur rounded-xl border border-gold/20 p-5">
              <p className="text-gold-light text-xs uppercase tracking-widest mb-2">Reciters & Participants</p>
              <p className="text-white font-semibold">Syed Mohsin Raza</p>
              <p className="text-gray-400 text-xs mt-1">
                Additional reciters and community participants will join throughout the Muharram program.
              </p>
            </div>

            {/* Contact Info + Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-sm text-gray-400 space-y-0.5">
                <p>📞 Tel: (514) 963-7907</p>
                <p>✉️ mibhmtl@gmail.com</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://maps.google.com/?q=301-8270+Mountain+Sights+Avenue+Montreal+Quebec+H4P+2B7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm shadow-lg"
                >
                  🗺️ Get Directions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  ✉️ Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
