export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface VroomEvent {
  slug: string;
  title: string;
  date: string;
  description: string;
  status: "past" | "upcoming";
  coverImage: string;
  coverVideo?: string;
  logo?: string;
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
    date: "03.04.2026",
    description: "",
    status: "past",
    coverImage: "/events/blueprint/cover.jpg",
    coverVideo: "/videos/blueprinttableshot.mov#t=0.5",
    logo: "/events/blueprint/lorelogo.svg",
    gallery: [
      // Add your media here:
      // { type: "image", src: "/events/blueprint/1.jpg" },
      // { type: "video", src: "/events/blueprint/1.mp4" },
    ],
  },
  {
    slug: "dinner-for-creatives",
    title: "Dinner for Creatives",
    date: "02.28.2026",
    description: "",
    status: "past",
    coverImage: "/events/dinner-for-creatives/cover.jpg",
    coverVideo: "/events/dinner-for-creatives/cover.mp4",
    gallery: [
      // Add your media here:
      // { type: "image", src: "/events/dinner-for-creatives/1.jpg" },
      // { type: "video", src: "/events/dinner-for-creatives/1.mp4" },
    ],
  },

  // ── Upcoming ──────────────────────────────────────
  // Add your 3 upcoming events here when ready:
  // {
  //   slug: "event-name",
  //   title: "Event Name",
  //   date: "MM.DD.2026",
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

export function formatDate(date: string) {
  const parts = date.split(".");
  if (parts.length !== 3) return date;
  const [mm, dd, yyyy] = parts;
  return `${parseInt(mm)}/${parseInt(dd)}/${yyyy}`;
}
