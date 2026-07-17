import type { EventChapter } from "@/lib/events";

export type ChapterAccent = "cobalt" | "violet";
export type MemberColor = "cobalt" | "poppy" | "violet" | "sunshine";

export type ChapterMember = {
  name: string;
  role: string;
  initials: string;
  color: MemberColor;
  bio?: string;
};

export type ChapterData = {
  name: string;
  slug: EventChapter;
  accentColor: ChapterAccent;
  washClass: string;
  tagline: string;
  intro: string;
  roster: ChapterMember[];
};

export const southFloridaChapter: ChapterData = {
  name: "South Florida",
  slug: "south-florida",
  accentColor: "cobalt",
  washClass: "chapter-page--south",
  tagline: "A bright creative current for South Florida.",
  intro:
    "PLACEHOLDER: Our South Florida chapter brings student artists, families, mentors, and community partners together through accessible art and music experiences.",
  roster: [
    { name: "Avery Brooks", role: "Chapter Lead", initials: "AB", color: "cobalt", bio: "PLACEHOLDER: Avery coordinates local programs and keeps chapter projects moving with care." },
    { name: "Nia Thompson", role: "Programs Coordinator", initials: "NT", color: "poppy", bio: "PLACEHOLDER: Nia plans art and music sessions with flexible ways for every participant to join." },
    { name: "Diego Santos", role: "Outreach Coordinator", initials: "DS", color: "violet" },
    { name: "Leila Morgan", role: "Volunteer Lead", initials: "LM", color: "sunshine", bio: "PLACEHOLDER: Leila welcomes new volunteers and helps mentors prepare for chapter activities." },
    { name: "Caleb Wilson", role: "Events Coordinator", initials: "CW", color: "cobalt" },
    { name: "Priya Shah", role: "Family Liaison", initials: "PS", color: "poppy", bio: "PLACEHOLDER: Priya listens to families and helps shape a warm, responsive chapter community." },
    { name: "Marcus Green", role: "Music Mentor", initials: "MG", color: "violet" },
    { name: "Elena Cruz", role: "Art Mentor", initials: "EC", color: "sunshine", bio: "PLACEHOLDER: Elena creates inviting visual art prompts that leave room for experimentation." },
  ],
};

export const northFloridaChapter: ChapterData = {
  name: "North Florida",
  slug: "north-florida",
  accentColor: "violet",
  washClass: "chapter-page--north",
  tagline: "A shared rhythm for North Florida.",
  intro:
    "PLACEHOLDER: Our North Florida chapter grows a supportive creative network where student leaders and community mentors make space for expression, friendship, and belonging.",
  roster: [
    { name: "Harper Reed", role: "Chapter Lead", initials: "HR", color: "violet", bio: "PLACEHOLDER: Harper guides chapter planning and builds connections with local schools and families." },
    { name: "Noah Williams", role: "Programs Coordinator", initials: "NW", color: "cobalt" },
    { name: "Zoe Anderson", role: "Outreach Coordinator", initials: "ZA", color: "poppy", bio: "PLACEHOLDER: Zoe helps bring student-made art and music into community spaces." },
    { name: "Kai Brown", role: "Volunteer Lead", initials: "KB", color: "sunshine" },
    { name: "Mia Davis", role: "Events Coordinator", initials: "MD", color: "violet", bio: "PLACEHOLDER: Mia organizes exhibitions and gatherings that celebrate the chapter’s artists." },
    { name: "Owen Taylor", role: "Family Liaison", initials: "OT", color: "cobalt" },
    { name: "Sage Martin", role: "Music Mentor", initials: "SM", color: "poppy", bio: "PLACEHOLDER: Sage supports collaborative sound-making and joyful group participation." },
    { name: "Riley Moore", role: "Art Mentor", initials: "RM", color: "sunshine" },
  ],
};
