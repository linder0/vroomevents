import { formatDate } from "@/lib/events";
import type { VroomEvent } from "@/lib/events";

interface EventMetaProps {
  event: VroomEvent;
  variant?: "card" | "detail";
}

const styles = {
  card: {
    wrapper: "mt-2 flex items-center gap-2 text-sm font-medium text-white/80",
    dot: "text-white/40",
  },
  detail: {
    wrapper: "mt-4 flex items-center gap-3 text-sm text-neutral-400",
    dot: "text-neutral-600",
  },
} as const;

export default function EventMeta({ event, variant = "detail" }: EventMetaProps) {
  const s = styles[variant];

  return (
    <div className={s.wrapper}>
      <time>{formatDate(event.date)}</time>
      {event.headcount && (
        <>
          <span className={s.dot}>&middot;</span>
          <span>{event.headcount} guests</span>
        </>
      )}
      {event.location && (
        <>
          <span className={s.dot}>&middot;</span>
          <span>{event.location}</span>
        </>
      )}
    </div>
  );
}
