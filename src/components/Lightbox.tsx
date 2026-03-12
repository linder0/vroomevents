"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { CloseIcon } from "./icons";

interface LightboxProps {
  src: string;
  type: "image" | "video";
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ src, type, alt, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
        aria-label="Close"
      >
        <CloseIcon className="size-5" />
      </button>

      <div className="max-h-[90vh] max-w-[90vw]">
        {type === "video" ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        ) : (
          <Image
            src={src}
            alt={alt || ""}
            width={1920}
            height={1080}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            unoptimized
          />
        )}
      </div>
    </div>
  );
}
