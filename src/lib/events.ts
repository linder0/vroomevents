export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface EventSection {
  title: string;
  body: string;
}

export interface VroomEvent {
  slug: string;
  title: string;
  date: string;
  description: string;
  status: "past" | "upcoming";
  headcount?: number;
  location?: string;
  sections?: EventSection[];
  coverImage: string;
  coverVideo?: string;
  logo?: string;
  inviteGraphic?: string;
  partifulUrl?: string;
  socialEmbeds?: string[];
  postcards?: string[];
  designGraphics?: GalleryItem[];
  designCredit?: { name: string; url: string };
  gallery: GalleryItem[];
}

/**
 * Media for each event lives in: public/events/[slug]/
 *
 * Example structure:
 *   public/events/dinner-for-creatives/
 *     cover.jpg
 *     cover.mp4
 *     1.jpg
 *     2.jpg
 *     3.mp4
 *     ...
 *
 * Reference them as: /events/dinner-for-creatives/cover.jpg
 */

export const events: VroomEvent[] = [
  // ── Past ──────────────────────────────────────────
  {
    slug: "blueprint",
    title: "Blueprint",
    date: "2026-03-04",
    description:
      "Join us for intimate gathering of NYC builders and storytellers shaping consumer culture. We're taking over Silence Please for a night of custom cocktails, charcuterie, good music, and founder spotlights. Let's lay the blueprint for what consumer will look like :)",
    status: "past",
    headcount: 80,
    location: "Silence Please, NYC",
    sections: [
      {
        title: "Itinerary",
        body: "7:00-7:30: Arrival, cocktails, charcuterie\n\n7:30-7:45: Quick words\n\n7:45-9:30: Open social",
      },
      {
        title: "Food/Drinks",
        body: "We'll have a large charcuterie garden across the central table designed by our friend Madison Balke (@madisoneatsthis). She makes the most beautiful, abundant spreads.\n\nCustom cocktails will be by DAE New York (@dae.bk.newyork), who are doing something special for the night.",
      },
      {
        title: "About VROOM",
        body: "VROOM is a full-stack event operations startup.\nWe design and execute the logistical backbone of events so hosts can focus on people.",
      },
    ],
    coverImage: "/events/blueprint/cover.jpg",
    coverVideo: "/videos/blueprinttableshot.mov#t=0.5",
    logo: "/events/blueprint/lorelogo.svg",
    inviteGraphic: "/events/blueprint/invitegraphic.png",
    partifulUrl: "https://partiful.com/e/LJYCHwHqRTfVhxc8U95D",
    socialEmbeds: [
      // Add social media post URLs here, e.g.:
      // "https://www.tiktok.com/@user/video/1234567890",
      // "https://www.instagram.com/p/ABC123/",
      // "https://x.com/user/status/1234567890",
      // "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
    postcards: [
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00000000.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00087980.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00088718.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00089172.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00090712.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00092634.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00092890.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00179256.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00189006.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00200335.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00203800.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch 2_00218837.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch00000000.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch00089172.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch00090712.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch00189006.mov",
      "/events/blueprint/blueprintmedia/blueprintpostcards/test glitch00218837.mov",
    ],
    gallery: [
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00476.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00477.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00478.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00479.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00486.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00488.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00489.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00496.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00499.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00509.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00515.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00519.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00524.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00532.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00535.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00537.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00553.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00557.jpg" },
      { type: "image", src: "/events/blueprint/blueprintmedia/blueprintphotos/DSC00573.jpg" },
    ],
  },
  {
    slug: "dinner-for-creatives",
    title: "Dinner for Creatives",
    date: "2026-02-28",
    description:
      "We're hosting a private dinner for a small group of creatives, creative technologists, founders, and artists in New York. The goal is simple: bring thoughtful people around one table and make space for real conversation. Good food, good people, and time to actually connect. We just moved to NYC and wanted to start by gathering the kind of people we hope to build alongside :)",
    status: "past",
    headcount: 14,
    location: "NYC",
    sections: [
      {
        title: "Itinerary",
        body: "7:30 - 8:00: Mingling\n\n8:00 - 9:30: 3 Course Dinner\n\n9:30 - 10:00: More Mingling, Goodbyes",
      },
      {
        title: "Thai/Italian Meal by Chef Beatrice",
        body: "Bread service - Sesame Sour dough (2) Regular (1), thai chili honey butter\n\nCourse 1 -\nGreen mango, kale, caesar dressing, crispy shallots, parm, bread crumbs\n\nCourse 2 -\nCrab wonton ravioli, paw-kee-ma, baby corn, chili oil\n\nCourse 3 -\nRed curry cutlet, coconut rice, bell pepper, fried thai basil\n\nCourse 4 -\nThai tea tiramisu, Thai Affagato",
      },
    ],
    coverImage: "/events/dinner-for-creatives/cover.jpg",
    coverVideo: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 14_00000000.mov",
    inviteGraphic: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/invitegraphic.jpeg",
    partifulUrl: "https://partiful.com/e/Wv1UFlRLM9GERnsQNqgE",
    designGraphics: [
      { type: "image", src: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/menu.png", alt: "Dinner menu" },
      { type: "image", src: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/placecard.png", alt: "Fortune teller place card" },
      { type: "image", src: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/namecardfront.png", alt: "Name card front" },
      { type: "image", src: "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/namecardback.png", alt: "Name card back — folding instructions" },
    ],
    designCredit: { name: "Joanne Hong", url: "https://www.instagram.com/joannesiyeon/" },
    gallery: [
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_1.3.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_1.5.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_1.25.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_1.26.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_2.1.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_2.5.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_2.6.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_3.1.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_3.17.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_3.17.2.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_7.1.1.jpg" },
      { type: "image", src: "/events/dinner-for-creatives/adinnerforcreativesphotos/Still 2026-03-11 231946_8.1.1.jpg" },
    ],
    postcards: [
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 13_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 14_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 15_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 16_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 17_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 18_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 19_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 20_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 21_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 22_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 23_00000000.mov",
      "/events/dinner-for-creatives/dinnerforcreativesmedia/dinnerforcreativespostcards/Compound Clip 24_00000000.mov",
    ],
  },

  // ── Upcoming ──────────────────────────────────────
  // Add your 3 upcoming events here when ready:
  // {
  //   slug: "event-name",
  //   title: "Event Name",
  //   date: "2026-MM-DD",
  //   description: "",
  //   status: "upcoming",
  //   coverImage: "/events/event-name/cover.jpg",
  //   gallery: [],
  // },
];

export const pastEvents = events.filter((e) => e.status === "past");
export const upcomingEvents = events.filter((e) => e.status === "upcoming");

export function getEventBySlug(slug: string): VroomEvent | undefined {
  return events.find((e) => e.slug === slug);
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "numeric",
  day: "numeric",
  year: "numeric",
});

export function formatDate(date: string) {
  const parsed = new Date(date + "T00:00:00");
  if (isNaN(parsed.getTime())) return date;
  return dateFormatter.format(parsed);
}
