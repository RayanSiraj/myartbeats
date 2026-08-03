export type EventChapter = "south-florida" | "north-florida";
export type EventStatus = "upcoming" | "past";

export type Event = {
  title: string;
  date: string;
  description: string;
  photos: string[];
  chapter?: EventChapter;
  status: EventStatus;
};

const photoPaths = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/events/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.webp`);

export const events: Event[] = [
  {
    title: "Acrylic Pour Art at Joe DiMaggio Children's Hospital",
    date: "2025-06-23",
    description: "Acrylic pour art session with patients at Joe DiMaggio Children's Hospital.",
    photos: photoPaths("acrylic-pour-art-at-joe-dimaggio-childrens-hospital", 9),
    status: "past",
  },
  {
    title: "Beach Cleanup & Seashell Collection",
    // DATE TBD — awaiting confirmation
    date: "2025-03-15",
    description: "Beach cleanup and seashell collection activity.",
    photos: photoPaths("beach-cleanup-seashell-collection", 7),
    status: "past",
  },
  {
    title: "Creative Coloring at Everglades Elementary",
    // DATE TBD — awaiting confirmation
    date: "2025-04-05",
    description: "Creative coloring activity at Everglades Elementary.",
    photos: photoPaths("creative-coloring-at-everglades-elementary", 4),
    status: "past",
  },
  {
    title: "Creative Coloring at Special Needs Fall Camp (Day 1)",
    // DATE TBD — awaiting confirmation
    date: "2025-09-13",
    description: "Creative coloring activity at Special Needs Fall Camp on day one.",
    photos: photoPaths("creative-coloring-at-special-needs-fall-camp-day-1", 8),
    status: "past",
  },
  {
    title: "Cypress Bay Art Fest Sales Booth Fundraiser",
    date: "2025-01-31",
    description: "Sales booth fundraiser at Cypress Bay Art Fest.",
    photos: photoPaths("cypress-bay-art-fest-sales-booth-fundraiser", 3),
    status: "past",
  },
  {
    title: "Developmental Disabilities Awareness Mural",
    // DATE TBD — awaiting confirmation
    date: "2025-08-02",
    description: "Mural project for developmental disabilities awareness.",
    photos: photoPaths("developmental-disabilities-awareness-mural", 10),
    status: "past",
  },
  {
    title: "Donating Bookmarks to Title 1 Schools",
    // DATE TBD — awaiting confirmation
    date: "2025-05-10",
    description: "Bookmark donation to Title 1 schools.",
    photos: photoPaths("donating-bookmarks-to-title-1-schools", 5),
    status: "past",
  },
  {
    title: "Greeting Card Donation to Joe DiMaggio",
    // DATE TBD — awaiting confirmation
    date: "2025-12-06",
    description: "Greeting card donation to Joe DiMaggio.",
    photos: photoPaths("greeting-card-donation-to-joe-dimaggio", 5),
    status: "past",
  },
  {
    title: "Halloween Art Activities & Social for Special Needs",
    date: "2025-11-07",
    description: "Halloween art activities and social gathering for special needs.",
    photos: photoPaths("halloween-art-activities-social-for-special-needs", 16),
    status: "past",
  },
  {
    title: "Painting Picnic Tables Cypress Bay High",
    // DATE TBD — awaiting confirmation
    date: "2025-10-04",
    description: "Picnic table painting project at Cypress Bay High.",
    photos: photoPaths("painting-picnic-tables-cypress-bay-high", 9),
    status: "past",
  },
  {
    title: "Paper Lanterns at Nicklaus Children's Hospital",
    // DATE TBD — awaiting confirmation
    date: "2025-07-19",
    description: "Paper lantern making activity at Nicklaus Children's Hospital.",
    photos: photoPaths("paper-lanterns-at-nicklaus-childrens-hospital", 5),
    status: "past",
  },
  {
    title: "Pickleball Tournament Fundraiser",
    date: "2026-01-25",
    description: "Pickleball tournament fundraiser.",
    photos: photoPaths("pickleball-tournament-fundraiser", 4),
    status: "past",
  },
  {
    title: "Rock Painting at Joe DiMaggio Children's Hospital",
    // DATE TBD — awaiting confirmation
    date: "2025-06-07",
    description: "Rock painting session at Joe DiMaggio Children's Hospital.",
    photos: photoPaths("rock-painting-at-joe-dimaggio-childrens-hospital", 7),
    status: "past",
  },
  {
    title: "Rock Painting at Special Needs Tennis Practice",
    // DATE TBD — awaiting confirmation
    date: "2025-02-22",
    description: "Rock painting activity at Special Needs Tennis Practice.",
    photos: photoPaths("rock-painting-at-special-needs-tennis-practice", 8),
    status: "past",
  },
  {
    title: "Seashell Painting at Joe DiMaggio Children's Hospital",
    // DATE TBD — awaiting confirmation
    date: "2025-05-24",
    description: "Seashell painting session at Joe DiMaggio Children's Hospital.",
    photos: photoPaths("seashell-painting-at-joe-dimaggio-childrens-hospital", 6),
    status: "past",
  },
  {
    title: "Sketching at Everglades Elementary",
    // DATE TBD — awaiting confirmation
    date: "2025-03-29",
    description: "Sketching activity at Everglades Elementary.",
    photos: photoPaths("sketching-at-everglades-elementary", 5),
    status: "past",
  },
  {
    title: "Squishy Decor at Special Needs Fall Camp (Day 2)",
    // DATE TBD — awaiting confirmation
    date: "2025-09-20",
    description: "Squishy decor activity at Special Needs Fall Camp on day two.",
    photos: photoPaths("squishy-decor-at-special-needs-fall-camp-day-2", 7),
    status: "past",
  },
  {
    title: "St. Patrick's Day Coloring at Starling Retirement Home",
    date: "2026-04-18",
    description: "St. Patrick's Day coloring activity at Starling Retirement Home.",
    photos: photoPaths("st-patricks-day-coloring-at-starling-retirement-home", 4),
    status: "past",
  },
  {
    title: "Watercolor at NFL School of Special Education",
    date: "2026-02-26",
    description: "Watercolor activity at NFL School of Special Education.",
    photos: photoPaths("watercolor-at-nfl-school-of-special-education", 5),
    status: "past",
  },
  {
    title: "Winter Exhibition Sales Booth Fundraiser",
    date: "2024-11-03",
    description: "Sales booth fundraiser at a winter exhibition.",
    photos: photoPaths("winter-exhibition-sales-booth-fundraiser", 12),
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
