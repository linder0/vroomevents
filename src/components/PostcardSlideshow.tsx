"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Lightbox from "./Lightbox";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface PostcardSlideshowProps {
  videos: string[];
}

export default function PostcardSlideshow({ videos }: PostcardSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (index: number) => {
      const next = (index + videos.length) % videos.length;
      // Lock the container height before switching to prevent layout shift
      const container = containerRef.current;
      if (container) {
        container.style.minHeight = `${container.offsetHeight}px`;
      }
      setCurrent(next);
    },
    [videos.length]
  );

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const unlock = () => {
      const container = containerRef.current;
      if (container) container.style.minHeight = "";
    };

    el.addEventListener("loadeddata", unlock, { once: true });
    el.load();
    el.play().catch(() => {});

    return () => el.removeEventListener("loadeddata", unlock);
  }, [current]);

  const handleEnded = () => go(current + 1);

  if (videos.length === 0) return null;

  return (
    <div>
      <div className="relative">
        <div
          ref={containerRef}
          className="cursor-pointer overflow-hidden bg-black"
          onClick={() => setExpanded(true)}
        >
          <video
            ref={videoRef}
            src={videos[current]}
            muted
            playsInline
            onEnded={handleEnded}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <button
            onClick={() => go(current - 1)}
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Previous postcard"
          >
            <ChevronLeftIcon className="size-5" />
          </button>

          <span className="text-sm tabular-nums text-neutral-400">
            {current + 1} / {videos.length}
          </span>

          <button
            onClick={() => go(current + 1)}
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Next postcard"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </div>

      {expanded && (
        <Lightbox
          src={videos[current]}
          type="video"
          onClose={() => setExpanded(false)}
        />
      )}
    </div>
  );
}
