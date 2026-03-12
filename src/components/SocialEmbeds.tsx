import SocialEmbed from "./SocialEmbed";

interface SocialEmbedsProps {
  urls: string[];
}

export default function SocialEmbeds({ urls }: SocialEmbedsProps) {
  if (urls.length === 0) return null;

  return (
    <div>
      <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Social
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {urls.map((url) => (
          <SocialEmbed key={url} url={url} />
        ))}
      </div>
    </div>
  );
}
