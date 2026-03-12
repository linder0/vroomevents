import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from "./icons";
import type { ComponentType, ComponentProps } from "react";

const iconMap: Record<string, ComponentType<ComponentProps<"svg">>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
};

interface SocialLinksProps {
  showLabels?: boolean;
  distributed?: boolean;
  className?: string;
}

export default function SocialLinks({
  showLabels = false,
  distributed = false,
  className = "",
}: SocialLinksProps) {
  return (
    <div
      className={`flex items-center ${distributed ? "justify-between" : "gap-4"} ${className}`}
    >
      {SOCIAL_LINKS.map((s) => {
        const Icon = iconMap[s.name];
        return (
          <Link
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
            aria-label={s.name}
          >
            {Icon && <Icon className="size-5" />}
            {showLabels && <span className="text-sm">{s.name}</span>}
          </Link>
        );
      })}
    </div>
  );
}
