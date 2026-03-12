import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug, formatDate } from "@/lib/events";
import EventGallery from "@/components/EventGallery";
import { ArrowLeftIcon } from "@/components/icons";

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

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="size-4" />
            All Events
          </Link>

          <h1 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            {event.title}
          </h1>
          <time className="mt-3 block text-lg text-neutral-400">
            {formatDate(event.date)}
          </time>
          {event.description && (
            <p className="mt-4 max-w-lg text-neutral-400">
              {event.description}
            </p>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {event.gallery.length > 0 ? (
            <EventGallery items={event.gallery} />
          ) : (
            <>
              <div className="placeholder-media flex aspect-video items-center justify-center rounded-sm" />
              <p className="mt-4 text-center text-sm text-neutral-600">
                Gallery coming soon.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
