"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { formatDate } from "@/lib/events";
import type { VroomEvent } from "@/lib/events";

interface EventCardProps {
  event: VroomEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (hovered) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [hovered]);

  return (
    <Link href={`/events/${event.slug}`}>
      <article
        className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {event.coverVideo ? (
          <video
            ref={videoRef}
            src={event.coverVideo}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />
        )}

        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />

        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-center">
            {event.status === "upcoming" ? (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Upcoming
              </p>
            ) : event.logo ? (
              <Image
                src={event.logo}
                alt={`${event.title} collaborator`}
                width={80}
                height={80}
                className="h-6 w-auto"
              />
            ) : null}
          </div>
          <div>
            <h3 className="text-3xl font-black uppercase leading-none tracking-wide text-white sm:text-4xl">
              {event.title}
            </h3>
            <time className="mt-2 block text-sm font-medium text-white/80">
              {formatDate(event.date)}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
