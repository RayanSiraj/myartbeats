import Link from "next/link";
import PulseLine from "@/components/PulseLine";
import type { ChapterData } from "@/lib/chapters";
import { events, sortEventsByDate } from "@/lib/events";

type ChapterPageProps = {
  chapter: ChapterData;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function ChapterPage({ chapter }: ChapterPageProps) {
  const chapterEvents = sortEventsByDate(events.filter((event) => event.chapter === chapter.slug));

  return (
    <>
      <section className={`chapter-hero ${chapter.washClass}`}>
        <div className="site-container">
          <p className="eyebrow" style={{ color: `var(--color-${chapter.accentColor})` }}>
            My Art Beats
          </p>
          <h1 className="section-heading mt-3">{chapter.name} Chapter</h1>
          <div className="chapter-hero__pulse">
            <PulseLine color={chapter.accentColor} />
          </div>
          <p className="chapter-hero__tagline">{chapter.tagline}</p>
          <p className="chapter-hero__intro">{chapter.intro}</p>
        </div>
      </section>

      <section className="site-container chapter-roster">
        <div className="chapter-section-heading">
          <p className="eyebrow" style={{ color: `var(--color-${chapter.accentColor})` }}>The local team</p>
          <h2 className="section-heading mt-3">People behind this chapter.</h2>
        </div>
        <div className="team-grid mt-8">
          {chapter.roster.map((member) => (
            <article className="team-card" key={member.name}>
              <div
                aria-label={`Photo placeholder for ${member.name}`}
                className={`team-card__portrait team-card__portrait--${member.color}`}
                role="img"
              >
                {member.initials}
              </div>
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                {member.bio && (
                  <details>
                    <summary>Read bio</summary>
                    <p>{member.bio}</p>
                  </details>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container chapter-events">
        <div className="chapter-section-heading">
          <p className="eyebrow" style={{ color: `var(--color-${chapter.accentColor})` }}>Chapter events</p>
          <h2 className="section-heading mt-3">Making an impact together.</h2>
        </div>
        {chapterEvents.length > 0 ? (
          <div className="impact-grid mt-8">
            {chapterEvents.map((event, index) => (
              <article className="event-card" key={event.title}>
                <div
                  className="event-card__color"
                  style={{
                    backgroundColor: `var(--color-${chapter.accentColor})`,
                    opacity: 0.7 + (index % 3) * 0.1,
                  }}
                />
                <div className="event-card__content">
                  <p className="eyebrow" style={{ color: `var(--color-${chapter.accentColor})` }}>
                    {dateFormatter.format(new Date(`${event.date}T12:00:00`))}
                  </p>
                  <h3 className="display-font mt-2 text-2xl font-extrabold text-ink">{event.title}</h3>
                  <p className="mt-2 text-ink">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="chapter-empty-state">
            <p>Chapter-specific event history coming soon — see all My Art Beats events.</p>
            <Link className="button button-outline" href="/events">See all My Art Beats events</Link>
          </div>
        )}
      </section>

      <section className="site-container chapter-cta">
        <div className="chapter-cta__inner">
          <p className="eyebrow">Join {chapter.name}</p>
          <h2 className="section-heading mt-3">Bring your beat to this chapter.</h2>
          <p className="mt-4 max-w-2xl">
            PLACEHOLDER: Volunteer with {chapter.name} or join the wider My Art Beats community to help make creative space for more people.
          </p>
          <div className="hero-actions mt-6">
            <Link className="button button-secondary" href="/join/volunteer">Volunteer with {chapter.name}</Link>
            <Link className="button button-outline" href="/join">Join My Art Beats</Link>
          </div>
        </div>
      </section>
    </>
  );
}
