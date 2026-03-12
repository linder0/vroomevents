"use client";

import Image from "next/image";
import type { GalleryItem } from "@/lib/events";
import Lightbox from "./Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

interface DesignGraphicsProps {
  items: GalleryItem[];
}

export default function DesignGraphics({ items }: DesignGraphicsProps) {
  const { activeIndex, open, close, isOpen } = useLightbox();

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="relative block w-full overflow-hidden cursor-pointer aspect-square"
          >
            <Image
              src={item.src}
              alt={item.alt || ""}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-contain"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          src={items[activeIndex!].src}
          type="image"
          alt={items[activeIndex!].alt}
          onClose={close}
        />
      )}
    </div>
  );
}
