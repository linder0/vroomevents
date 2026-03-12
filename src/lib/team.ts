export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imageClass?: string;
  socials: { platform: "instagram" | "x" | "linkedin"; href: string }[];
}

export const team: TeamMember[] = [
  {
    name: "Vik",
    role: "CEO",
    image: "/team/vik.JPEG",
    socials: [
      { platform: "instagram", href: "#" },
      { platform: "x", href: "#" },
      { platform: "linkedin", href: "#" },
    ],
  },
  {
    name: "Linda",
    role: "COO",
    image: "/team/linda.JPG",
    imageClass: "scale-130",
    socials: [
      { platform: "instagram", href: "#" },
      { platform: "x", href: "#" },
      { platform: "linkedin", href: "#" },
    ],
  },
  {
    name: "Ali",
    role: "Media",
    image: "/team/ali.png",
    imageClass: "scale-[1.35]",
    socials: [
      { platform: "instagram", href: "#" },
      { platform: "x", href: "#" },
      { platform: "linkedin", href: "#" },
    ],
  },
];
