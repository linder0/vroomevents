"use client";

import Image from "next/image";
import type { GalleryItem } from "@/lib/events";
import VideoPlayer from "./VideoPlayer";
import Lightbox from "./Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

interface EventGalleryProps {
  items: GalleryItem[];
}

export default function EventGallery({ items }: EventGalleryProps) {
  const { activeIndex, open, close, isOpen } = useLightbox();

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden cursor-pointer"
          >
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
          </button>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          src={items[activeIndex!].src}
          type={items[activeIndex!].type}
          alt={items[activeIndex!].alt}
          onClose={close}
        />
      )}
    </>
  );
}
