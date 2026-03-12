import Image from "next/image";
import { InstagramIcon, XIcon, LinkedInIcon } from "./icons";
import type { TeamMember } from "@/lib/team";

const platformIcons = {
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className={`object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ${member.imageClass ?? ""}`}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-lg font-bold uppercase tracking-tight text-white">
          {member.name}
        </h3>
        <div className="flex gap-3">
          {member.socials.map((s) => {
            const Icon = platformIcons[s.platform];
            return (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-sm text-neutral-400">{member.role}</p>
    </div>
  );
}
