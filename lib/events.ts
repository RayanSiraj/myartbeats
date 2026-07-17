export type EventChapter = "south-florida" | "north-florida";
export type EventStatus = "upcoming" | "past";

export type Event = {
  title: string;
  date: string;
  description: string;
  chapter?: EventChapter;
  status: EventStatus;
};

export const events: Event[] = [
  {
    title: "Color Outside the Lines",
    date: "2025-05-17",
    description: "Placeholder exhibition featuring student-made paintings, prints, and mixed-media works.",
    status: "past",
  },
  {
    title: "Beats for Belonging",
    date: "2025-04-12",
    description: "Placeholder afternoon of collaborative music, movement, and family connection.",
    status: "past",
  },
  {
    title: "Art in the Garden",
    date: "2025-03-22",
    description: "Placeholder outdoor workshop where young artists made bright botanical pieces together.",
    status: "past",
  },
  {
    title: "Community Canvas Night",
    date: "2025-02-15",
    description: "Placeholder fundraiser bringing students, families, and local artists to one shared canvas.",
    status: "past",
  },
  {
    title: "Rhythms of Care",
    date: "2025-01-25",
    description: "Placeholder hospital visit with student performances and handmade art activities.",
    status: "past",
  },
  {
    title: "New Year, New Strokes",
    date: "2024-12-07",
    description: "Placeholder studio gathering celebrating the creative goals of every participant.",
    status: "past",
  },
  {
    title: "Stories in Sound",
    date: "2024-11-09",
    description: "Placeholder listening party and student showcase centered on original compositions.",
    status: "past",
  },
  {
    title: "Open Studio Picnic",
    date: "2024-10-19",
    description: "Placeholder community picnic with accessible art stations and a family jam session.",
    status: "past",
  },
];

export function sortEventsByDate(eventList: Event[], direction: "asc" | "desc" = "desc"): Event[] {
  return [...eventList].sort((a, b) => {
    const comparison = a.date.localeCompare(b.date);
    return direction === "asc" ? comparison : -comparison;
  });
}

export function getEventsByStatus(status: EventStatus): Event[] {
  return sortEventsByDate(events.filter((event) => event.status === status));
}
