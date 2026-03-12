import type { Metadata } from "next";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import TeamCard from "@/components/TeamCard";
import { ArrowRightIcon } from "@/components/icons";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about VROOM — the events company creating unforgettable, high-energy experiences.",
};

const missionPillars = [
  {
    title: "Sourcing",
    text: "We find the right vendors and venues. Not just what's available, but what's right for the vision.",
  },
  {
    title: "Coordination",
    text: "We manage logistics and information flow between vendors and venues so everyone is aligned when the day arrives.",
  },
  {
    title: "Execution",
    text: "We partner with companies we believe in and make sure the end result is something we're all proud of.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero split */}
      <section className="grid min-h-screen lg:grid-cols-2">
        <div className="relative min-h-[50vh] overflow-hidden lg:min-h-screen">
          <VideoPlayer
            src="/videos/sticker.mov"
            className="absolute inset-0 h-full w-full"
            autoPlay
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 lg:px-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-neutral-500 sm:text-5xl lg:text-6xl">
            The moment
            <br />
            is the
            <br />
            <span className="text-white">medium.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400">
            We design experiences as a choreography of venue, vendors, and
            people. Every detail intentional, every moment crafted to leave
            something lasting long after the night ends.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {missionPillars.map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            The Team
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            See what we&apos;ve been up to
          </h2>
          <Link
            href="/events"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105"
          >
            View Events
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
