import SocialLinks from "./SocialLinks";
import VroomLogo from "./VroomLogo";
import HeroVideoLoop from "./HeroVideoLoop";
import { events } from "@/lib/events";

const heroVideos = [
  "/videos/hero.mp4",
  ...events
    .filter((e) => e.coverVideo)
    .map((e) => e.coverVideo!),
];

export default function Hero() {
  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden bg-black">
      <HeroVideoLoop videos={heroVideos} />

      <div className="absolute inset-0 z-[1] bg-black/50" />

      <h1 className="sr-only">VROOM</h1>
      <VroomLogo className="relative z-10 w-[200px] text-white sm:w-[260px]" />

      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-4 sm:px-6">
        <SocialLinks distributed />
      </div>
    </section>
  );
}
