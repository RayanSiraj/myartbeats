"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import PulseLine from "@/components/PulseLine";
import { InstagramIcon } from "@/components/icons";
import { events, sortEventsByDate, type Event, type EventChapter, type EventStatus } from "@/lib/events";

type ChapterFilter = "all" | EventChapter;

const statuses: EventStatus[] = ["upcoming", "past"];
const chapterFilters: { label: string; value: ChapterFilter }[] = [
  { label: "All", value: "all" },
  { label: "South Florida", value: "south-florida" },
  { label: "North Florida", value: "north-florida" },
];
const chapterLabels: Record<EventChapter, string> = {
  "south-florida": "South Florida",
  "north-florida": "North Florida",
};
const eventColors = ["var(--color-cobalt)", "var(--color-poppy)", "var(--color-violet)"];
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function groupEventsByYear(eventList: Event[]) {
  return eventList.reduce<Record<string, Event[]>>((groups, event) => {
    const year = event.date.slice(0, 4);
    groups[year] = groups[year] ? [...groups[year], event] : [event];
    return groups;
  }, {});
}

export default function EventsExplorer() {
  const [status, setStatus] = useState<EventStatus>("past");
  const [chapterFilter, setChapterFilter] = useState<ChapterFilter>("all");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const filteredEvents = useMemo(() => {
    const statusEvents = sortEventsByDate(events.filter((event) => event.status === status));
    if (chapterFilter === "all") return statusEvents;
    return statusEvents.filter((event) => event.chapter === chapterFilter);
  }, [chapterFilter, status]);

  const groupedEvents = useMemo(() => groupEventsByYear(filteredEvents), [filteredEvents]);
  const showChapterEmptyState = chapterFilter !== "all" && filteredEvents.length === 0;

  const selectStatus = (nextStatus: EventStatus) => {
    setStatus(nextStatus);
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = statuses.indexOf(status);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % statuses.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + statuses.length) % statuses.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = statuses.length - 1;

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      const nextStatus = statuses[nextIndex];
      selectStatus(nextStatus);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div>
      <div className="events-controls">
        <div aria-label="Event status" className="events-tabs" role="tablist">
          {statuses.map((tabStatus, index) => (
            <button
              aria-controls={`events-panel-${tabStatus}`}
              aria-selected={status === tabStatus}
              className="events-tab"
              id={`events-tab-${tabStatus}`}
              key={tabStatus}
              onClick={() => selectStatus(tabStatus)}
              onKeyDown={handleTabKeyDown}
              ref={(element) => { tabRefs.current[index] = element; }}
              role="tab"
              tabIndex={status === tabStatus ? 0 : -1}
              type="button"
            >
              {tabStatus === "upcoming" ? "Upcoming" : "Past"}
            </button>
          ))}
        </div>
        <div aria-label="Filter events by chapter" className="events-filters" role="group">
          {chapterFilters.map((filter) => (
            <button
              aria-pressed={chapterFilter === filter.value}
              className="events-filter"
              key={filter.value}
              onClick={() => setChapterFilter(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div
        aria-labelledby={`events-tab-${status}`}
        className="events-panel"
        id={`events-panel-${status}`}
        role="tabpanel"
        tabIndex={0}
      >
        {showChapterEmptyState ? (
          <div className="events-empty">
            <p>No {chapterLabels[chapterFilter as EventChapter]} events tagged yet — showing coming soon.</p>
            <button className="button button-outline" onClick={() => setChapterFilter("all")} type="button">
              Show all chapters
            </button>
          </div>
        ) : status === "upcoming" ? (
          <div className="events-empty events-empty--upcoming">
            <p className="eyebrow text-poppy-text">Stay in the loop</p>
            <h2 className="display-font mt-2 text-3xl font-extrabold text-ink">New events are announced on Instagram first.</h2>
            <p className="mt-3">PLACEHOLDER: Follow along for the next exhibition, workshop, visit, or fundraiser, and reach out when you are ready to make something with us.</p>
            <div className="events-empty__actions">
              <a
                aria-label="Follow My Art Beats on Instagram"
                className="events-instagram-link"
                href="https://instagram.com/myartbeatsofficial"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon /> Follow on Instagram
              </a>
              <Link className="button button-outline" href="/contact">Reach out</Link>
            </div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="events-empty">
            <p>No past events are listed yet. Check back soon for the next chapter in our story.</p>
          </div>
        ) : (
          <div className="events-timeline">
            <div aria-hidden="true" className="events-timeline__spine">
              <PulseLine animate={false} color="poppy" variant="vertical" />
            </div>
            {Object.entries(groupedEvents)
              .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
              .map(([year, yearEvents]) => (
              <section className="events-year" key={year}>
                <h2 className="events-year__heading">{year}</h2>
                {yearEvents.map((event, index) => (
                  <article className="events-timeline-card" key={event.title}>
                    <span aria-hidden="true" className="events-timeline-card__node" />
                    <div className="event-card">
                      <div className="event-card__color" style={{ backgroundColor: eventColors[index % eventColors.length] }} />
                      <div className="event-card__content">
                        <p className="eyebrow text-violet">{dateFormatter.format(new Date(`${event.date}T12:00:00`))}</p>
                        <h3 className="display-font mt-2 text-2xl font-extrabold text-ink">{event.title}</h3>
                        <p className="mt-2 text-ink">{event.description}</p>
                        {event.chapter && (
                          <span className="mt-4 inline-flex rounded-full bg-sunshine px-3 py-1 text-sm font-bold text-ink">
                            {chapterLabels[event.chapter]}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
