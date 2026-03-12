import Hero from "@/components/Hero";
import { BASE_URL, SITE_DESCRIPTION, SOCIAL_LINKS } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VROOM",
  description: SITE_DESCRIPTION,
  url: BASE_URL,
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </>
  );
}
