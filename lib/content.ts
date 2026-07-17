export const homeContent = {
  heroIntro:
    "My Art Beats is a student-led nonprofit creating welcoming artistic spaces where students with autism and other developmental disabilities can make, share, and belong.",
  sections: {
    create: {
      title: "CREATE",
      description:
        "Placeholder program copy: students explore visual art, music, and collaborative making with patient mentors and joyful room to experiment.",
    },
    connect: {
      title: "CONNECT",
      description:
        "Placeholder outreach copy: our student artists bring creativity to children's hospitals, elderly homes, elementary schools, and neighborhood gatherings.",
    },
    coalesce: {
      title: "COALESCE",
      description:
        "Placeholder community copy: South Florida and North Florida chapters gather families, educators, artists, and supporters around shared creative experiences.",
    },
  },
  collaborators: [
    "PLACEHOLDER Arts Center",
    "PLACEHOLDER Community School",
    "PLACEHOLDER Children's Hospital",
    "PLACEHOLDER Music Collective",
    "PLACEHOLDER Family Network",
    "PLACEHOLDER Senior Living",
  ],
};

export const aboutContent = {
  intro:
    "PLACEHOLDER: My Art Beats is a student-led nonprofit using art and music to open creative avenues, build confidence, and create meaningful community for individuals with autism and other developmental disabilities.",
  framing:
    "PLACEHOLDER: High school students organize welcoming programs, outreach visits, exhibitions, and fundraisers where every person can contribute at their own pace.",
  cards: [
    {
      title: "Our Mission",
      description: "PLACEHOLDER: Explore the three beats that guide how we create, connect, and grow together.",
      href: "/about/mission",
      className: "about-card--mission",
    },
    {
      title: "Our Teams",
      description: "PLACEHOLDER: Meet the student leaders and local chapter communities shaping the work.",
      href: "/about/teams",
      className: "about-card--teams",
    },
  ],
};

export const missionContent = {
  lead:
    "PLACEHOLDER: We believe every person deserves a creative outlet, a patient mentor, and a community that celebrates their voice.",
  intro:
    "PLACEHOLDER: My Art Beats brings students together through hands-on visual art and music experiences designed around belonging rather than performance. Our student leaders make room for different ways of communicating, participating, and expressing ideas.",
  pillars: [
    {
      title: "CREATE",
      kicker: "Make space for imagination",
      description:
        "PLACEHOLDER: We provide accessible art and music activities where participants can try new materials, follow their curiosity, and build confidence through making. The goal is not a perfect product; it is the joy and agency of creating something personal.",
      className: "mission-pillar--create",
      color: "cobalt" as const,
    },
    {
      title: "CONNECT",
      kicker: "Bring creativity into the community",
      description:
        "PLACEHOLDER: We carry our creative energy beyond the studio through visits, performances, and collaborative projects with schools, hospitals, elderly homes, and community partners. Each interaction is an invitation to listen, share, and build trust.",
      className: "mission-pillar--connect",
      color: "poppy" as const,
    },
    {
      title: "COALESCE",
      kicker: "Grow a lasting circle of support",
      description:
        "PLACEHOLDER: We connect families, educators, artists, and student volunteers across our chapters. Through exhibitions and fundraisers, individual acts of creativity become a shared movement for inclusion and opportunity.",
      className: "mission-pillar--coalesce",
      color: "violet" as const,
    },
  ],
  closing:
    "PLACEHOLDER: As My Art Beats grows, our commitment stays simple: provide artistic avenues and mentorship, honor each person’s pace, and make belonging something people can feel in every room.",
};

export const teamContent = {
  intro:
    "PLACEHOLDER: Our executive team is made up of student leaders who bring curiosity, care, and follow-through to every creative initiative.",
  members: [
    { name: "Maya Patel", role: "Co-Founder & Executive Director", initials: "MP", color: "cobalt", bio: "PLACEHOLDER: Maya coordinates the organization’s vision, partnerships, and student-led programming." },
    { name: "Jordan Williams", role: "Programs Director", initials: "JW", color: "poppy", bio: "PLACEHOLDER: Jordan shapes welcoming art and music sessions with mentors and chapter volunteers." },
    { name: "Sofia Martinez", role: "Community Outreach Lead", initials: "SM", color: "violet", bio: "PLACEHOLDER: Sofia builds relationships with schools, care communities, and local creative partners." },
    { name: "Ethan Chen", role: "Chapter Development Lead", initials: "EC", color: "sunshine", bio: "PLACEHOLDER: Ethan helps student organizers turn shared ideas into strong, sustainable chapter plans." },
    { name: "Amara Johnson", role: "Events & Fundraising Lead", initials: "AJ", color: "cobalt", bio: "PLACEHOLDER: Amara creates exhibitions and fundraisers that invite the wider community to participate." },
    { name: "Lucas Rivera", role: "Accessibility & Mentorship Lead", initials: "LR", color: "poppy", bio: "PLACEHOLDER: Lucas works with volunteers to make each activity more flexible, welcoming, and supportive." },
  ],
  chapters: [
    { title: "South Florida", href: "/chapters/south-florida", className: "chapter-card--south", description: "PLACEHOLDER: Meet the people and programs growing our South Florida creative community." },
    { title: "North Florida", href: "/chapters/north-florida", className: "chapter-card--north", description: "PLACEHOLDER: Meet the people and programs growing our North Florida creative community." },
  ],
};
