"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ClickableImage({
  src,
  alt,
  width,
  height,
  className = "",
}: ClickableImageProps) {
  const { open, close, isOpen } = useLightbox();

  return (
    <>
      <button
        type="button"
        onClick={() => open(0)}
        className="block w-full cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>

      {isOpen && (
        <Lightbox src={src} type="image" alt={alt} onClose={close} />
      )}
    </>
  );
}
