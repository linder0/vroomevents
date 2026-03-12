"use client";

import Image from "next/image";
import type { GalleryItem } from "@/lib/events";
import VideoPlayer from "./VideoPlayer";

interface EventGalleryProps {
  items: GalleryItem[];
}

export default function EventGallery({ items }: EventGalleryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, i) => (
        <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-sm">
          {item.type === "video" ? (
            <VideoPlayer
              src={item.src}
              className="w-full"
              autoPlay
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt || ""}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}
