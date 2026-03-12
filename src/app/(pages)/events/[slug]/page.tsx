import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug } from "@/lib/events";
import EventGallery from "@/components/EventGallery";
import PostcardSlideshow from "@/components/PostcardSlideshow";
import SocialEmbeds from "@/components/SocialEmbeds";
import ClickableImage from "@/components/ClickableImage";
import DesignGraphics from "@/components/DesignGraphics";
import EventMeta from "@/components/EventMeta";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/icons";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.description || `${event.title} — a VROOM event.`,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const hasMedia =
    (event.postcards && event.postcards.length > 0) ||
    (event.designGraphics && event.designGraphics.length > 0) ||
    event.gallery.length > 0 ||
    !!event.inviteGraphic;

  return (
    <>
      {/* Full-width header */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="size-4" />
            All Events
          </Link>

          <div className="mt-6 flex items-start justify-between gap-6">
            <h1 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            {event.partifulUrl && (
              <a
                href={event.partifulUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black sm:inline-flex"
              >
                View on Partiful
                <ExternalLinkIcon className="size-4" />
              </a>
            )}
          </div>

          <EventMeta event={event} variant="detail" />

          {event.partifulUrl && (
            <a
              href={event.partifulUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black sm:hidden"
            >
              View on Partiful
              <ExternalLinkIcon className="size-4" />
            </a>
          )}
        </div>
      </section>

      {/* Two-column body */}
      {hasMedia ? (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-10">
              {/* Left column — media */}
              <div className="space-y-12 lg:col-span-7">
                {event.postcards && event.postcards.length > 0 && (
                  <PostcardSlideshow videos={event.postcards} />
                )}

                {event.gallery.length > 0 && (
                  <EventGallery items={event.gallery} />
                )}

                {event.designGraphics && event.designGraphics.length > 0 && (
                  <DesignGraphics items={event.designGraphics} />
                )}

              </div>

              {/* Right column — writing */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-20 space-y-8">
                  {event.description && (
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {event.description}
                    </p>
                  )}

                  {event.sections && event.sections.length > 0 && (
                    <div className="space-y-6">
                      {event.sections.map((section, i) => (
                        <div key={i}>
                          <h3 className="text-sm font-semibold text-white">
                            {section.title}
                          </h3>
                          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-400">
                            {section.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {event.inviteGraphic && (
                    <ClickableImage
                      src={event.inviteGraphic}
                      alt={`${event.title} invite graphic`}
                      width={600}
                      height={600}
                      className="w-full"
                    />
                  )}

                  {event.designCredit && (
                    <p className="text-xs text-neutral-500">
                      Design by{" "}
                      <a
                        href={event.designCredit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 underline underline-offset-2 transition-colors hover:text-white"
                      >
                        {event.designCredit.name}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="placeholder-media flex aspect-video items-center justify-center rounded-sm" />
            <p className="mt-4 text-center text-sm text-neutral-600">
              Gallery coming soon.
            </p>
          </div>
        </section>
      )}

      {/* Social Embeds — full width below */}
      {event.socialEmbeds && event.socialEmbeds.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <SocialEmbeds urls={event.socialEmbeds} />
          </div>
        </section>
      )}
    </>
  );
}
