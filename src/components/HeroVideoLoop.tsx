"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const videos = [
  "/videos/hero.mp4",
  "/events/blueprint/cover.mp4",
  "/events/blueprint/1.mp4",
  "/events/blueprint/2.mp4",
  "/videos/blueprinttableshot.mov",
];

const FADE_MS = 1000;

export default function HeroVideoLoop() {
  const topRef = useRef<HTMLVideoElement>(null);
  const bottomRef = useRef<HTMLVideoElement>(null);
  const [topSrc, setTopSrc] = useState(videos[0]);
  const [bottomSrc, setBottomSrc] = useState(videos[1]);
  const indexRef = useRef(0);
  const [showTop, setShowTop] = useState(true);
  const busy = useRef(false);

  const crossfade = useCallback(() => {
    if (busy.current) return;
    busy.current = true;

    const next = (indexRef.current + 1) % videos.length;
    const prep = (next + 1) % videos.length;
    const incoming = showTop ? bottomRef : topRef;

    incoming.current!.currentTime = 0;
    incoming.current?.play().catch(() => {});

    setShowTop((prev) => !prev);
    indexRef.current = next;

    setTimeout(() => {
      if (showTop) {
        setTopSrc(videos[prep]);
      } else {
        setBottomSrc(videos[prep]);
      }
      busy.current = false;
    }, FADE_MS + 200);
  }, [showTop]);

  useEffect(() => {
    const active = showTop ? topRef.current : bottomRef.current;
    if (!active) return;

    const onTimeUpdate = () => {
      if (active.duration - active.currentTime <= FADE_MS / 1000) {
        crossfade();
      }
    };

    active.addEventListener("timeupdate", onTimeUpdate);
    return () => active.removeEventListener("timeupdate", onTimeUpdate);
  }, [showTop, crossfade]);

  return (
    <>
      <video
        ref={bottomRef}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${showTop ? "opacity-0" : "opacity-100"}`}
        src={bottomSrc}
      />
      <video
        ref={topRef}
        muted
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${showTop ? "opacity-100" : "opacity-0"}`}
        src={topSrc}
      />
    </>
  );
}
