"use client";

import { useRef, useEffect, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && autoPlay) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={`object-cover ${className}`}
    />
  );
}
