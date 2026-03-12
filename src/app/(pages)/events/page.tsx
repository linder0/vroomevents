import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { pastEvents, upcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse VROOM events — past experiences and what's coming next.",
};

export default function EventsPage() {
  const allEvents = [...upcomingEvents, ...pastEvents];

  return (
    <section className="pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
