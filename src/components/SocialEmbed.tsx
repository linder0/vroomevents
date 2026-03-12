"use client";

import { useEffect, useRef } from "react";

type Platform = "youtube" | "tiktok" | "instagram" | "twitter" | "unknown";

function detectPlatform(url: string): Platform {
  if (/youtu\.?be/.test(url)) return "youtube";
  if (/tiktok\.com/.test(url)) return "tiktok";
  if (/instagram\.com/.test(url)) return "instagram";
  if (/twitter\.com|x\.com/.test(url)) return "twitter";
  return "unknown";
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

function extractTikTokVideoId(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/);
  return match?.[1] ?? null;
}

const scriptLoaded: Record<string, boolean> = {};

function loadScript(src: string) {
  if (scriptLoaded[src]) return;
  scriptLoaded[src] = true;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

interface SocialEmbedProps {
  url: string;
}

export default function SocialEmbed({ url }: SocialEmbedProps) {
  const platform = detectPlatform(url);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (platform === "tiktok") {
      loadScript("https://www.tiktok.com/embed.js");
    } else if (platform === "instagram") {
      loadScript("https://www.instagram.com/embed.js");
      window.instgrm?.Embeds.process();
    } else if (platform === "twitter") {
      loadScript("https://platform.twitter.com/widgets.js");
      window.twttr?.widgets.load(containerRef.current ?? undefined);
    }
  }, [platform, url]);

  if (platform === "youtube") {
    const videoId = extractYouTubeId(url);
    if (!videoId) return null;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-sm">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  if (platform === "tiktok") {
    const videoId = extractTikTokVideoId(url);
    if (!videoId) return null;
    return (
      <div ref={containerRef}>
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id={videoId}
          style={{ maxWidth: 605 }}
        >
          <a href={url}>TikTok video</a>
        </blockquote>
      </div>
    );
  }

  if (platform === "instagram") {
    return (
      <div ref={containerRef}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          style={{
            maxWidth: 540,
            width: "100%",
            background: "#000",
            border: 0,
            borderRadius: 4,
          }}
        >
          <a href={url}>Instagram post</a>
        </blockquote>
      </div>
    );
  }

  if (platform === "twitter") {
    return (
      <div ref={containerRef}>
        <blockquote className="twitter-tweet" data-theme="dark">
          <a href={url}>Tweet</a>
        </blockquote>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-sm border border-white/10 p-4 text-sm text-neutral-400 transition-colors hover:text-white"
    >
      {url}
    </a>
  );
}
