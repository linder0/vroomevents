export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vroomevents.com";

export const SITE_DESCRIPTION =
  "VROOM is an events company creating unforgettable, high-energy experiences.";

export const CONTACT_EMAIL = "hi@vroomevents.com";

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com/vroom" },
  { name: "TikTok", href: "https://tiktok.com/@vroom" },
  { name: "X", href: "https://x.com/vroom" },
  { name: "YouTube", href: "https://youtube.com/@vroom" },
] as const;
