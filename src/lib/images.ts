// MIBH Montreal — Real community photos + Unsplash mosque architecture images

// User's actual MIBH photos
export const mibhPhotos = {
  hero: "/images/mibh-hero.png",
  community: "/images/mibh-community.jpg",
  photo1: "/images/mibh-photo-1.png",
  photo2: "/images/mibh-photo-2.png",
  photo3: "/images/mibh-photo-3.png",
};

// Mosque and Islamic architecture images from Unsplash
export const mosqueImages = {
  badshahiMosque:
    "https://images.unsplash.com/photo-1586767857313-9a4972a264c7?w=1200&q=80",
  mosqueInterior:
    "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1200&q=80",
  mosqueSilhouette:
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1200&q=80",
  islamicArchitecture:
    "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80",
  mosqueDome:
    "https://images.unsplash.com/photo-1574360781439-5a1e0e9ee21c?w=1200&q=80",
  prayerHall:
    "https://images.unsplash.com/photo-1545987775a0e05027a3f8?w=1200&q=80",
  mosqueNight:
    "https://images.unsplash.com/photo-1584551246679-0daf3d275d3b?w=1200&q=80",
  islamicPattern:
    "https://images.unsplash.com/photo-1532372320973-9d052aba9a02?w=1200&q=80",
  quranAndPrayer:
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&q=80",
  communityGathering:
    "https://images.unsplash.com/photo-1585032224878-0e42b7c1265e?w=1200&q=80",
};

// Hero background images per page — using real MIBH photos where available
export const heroImages = {
  home: mibhPhotos.hero,
  about: mibhPhotos.photo1,
  mission: mosqueImages.mosqueDome,
  beliefs: mosqueImages.mosqueNight,
  programs: mibhPhotos.photo2,
  prayerTimes: mosqueImages.mosqueSilhouette,
  events: mosqueImages.islamicArchitecture,
  donations: mosqueImages.islamicPattern,
  volunteer: mibhPhotos.photo3,
  contact: mosqueImages.quranAndPrayer,
};
