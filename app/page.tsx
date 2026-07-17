import Link from "next/link";
import PulseLine from "@/components/PulseLine";
import ProgramBadge from "@/components/ProgramBadge";
import { homeContent } from "@/lib/content";
import { getEventsByStatus } from "@/lib/events";

const impactColors = ["bg-cobalt", "bg-poppy", "bg-violet"];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function Home() {
  const pastEvents = getEventsByStatus("past").slice(0, 6);

  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero__grid">
          <div>
            <p className="eyebrow text-poppy-text">A student-led creative community</p>
            <h1 className="hero-beats">
              <span>CREATE.</span>
              <span>CONNECT.</span>
              <span>COALESCE.</span>
            </h1>
            <div className="hero-pulse"><PulseLine color="poppy" /></div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/join">Join us</Link>
              <Link className="button button-outline" href="/events">See our events</Link>
            </div>
          </div>
          <div className="hero-note">
            <p className="eyebrow">Who we are</p>
            <p className="mt-3">{homeContent.heroIntro}</p>
            <p className="mt-3">
              Placeholder outreach: students share art and music through visits to children&apos;s hospitals, elderly homes, elementary schools, exhibitions, and fundraisers.
            </p>
            <div className="mt-6"><ProgramBadge /></div>
          </div>
        </div>
      </section>

      <section className="home-act home-act--create">
        <div className="site-container">
          <div className="pulse-divider"><PulseLine color="cobalt" /></div>
          <div className="home-act__body mt-8">
            <p className="eyebrow">The first beat</p>
            <h2 className="section-heading mt-3">{homeContent.sections.create.title}</h2>
            <p>{homeContent.sections.create.description}</p>
          </div>
        </div>
      </section>

      <section className="home-act home-act--connect">
        <div className="site-container">
          <div className="pulse-divider"><PulseLine color="poppy" /></div>
          <div className="home-act__body mt-8">
            <p className="eyebrow">The second beat</p>
            <h2 className="section-heading mt-3">{homeContent.sections.connect.title}</h2>
            <p>{homeContent.sections.connect.description}</p>
          </div>
        </div>
      </section>

      <section className="home-act home-act--coalesce">
        <div className="site-container">
          <div className="pulse-divider"><PulseLine color="violet" /></div>
          <div className="home-act__body mt-8">
            <p className="eyebrow">The third beat</p>
            <h2 className="section-heading mt-3">{homeContent.sections.coalesce.title}</h2>
            <p>{homeContent.sections.coalesce.description}</p>
          </div>
          <div className="chapter-grid">
            <Link className="chapter-card chapter-card--south" href="/chapters/south-florida">
              <span className="eyebrow">Chapter</span>
              <span className="display-font text-3xl font-extrabold">South Florida</span>
            </Link>
            <Link className="chapter-card chapter-card--north" href="/chapters/north-florida">
              <span className="eyebrow">Chapter</span>
              <span className="display-font text-3xl font-extrabold">North Florida</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container py-8">
        <div className="involvement">
          <p className="eyebrow">Get involved</p>
          <h2 className="section-heading mt-3">Bring your beat to the community.</h2>
          <div className="involvement-actions mt-6">
            <Link className="button button-secondary" href="/join">Join Us</Link>
            <Link className="button button-outline" href="/join/start-a-chapter">Start a Chapter</Link>
            <Link className="button button-outline" href="/join/volunteer">Volunteer</Link>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <p className="eyebrow text-poppy-text">Our collaborators</p>
        <h2 className="section-heading mt-3 text-ink">Making room for more voices</h2>
        <div className="collaborator-list">
          {homeContent.collaborators.map((collaborator) => (
            <span className="collaborator-chip" key={collaborator}>{collaborator}</span>
          ))}
        </div>
      </section>

      <section className="site-container py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-violet">See our impact</p>
            <h2 className="section-heading mt-3 text-ink">A highlight reel of making together</h2>
          </div>
          <Link className="button button-outline" href="/events">View All Events</Link>
        </div>
        <div className="impact-grid">
          {pastEvents.map((event, index) => (
            <article className="event-card" key={event.title}>
              <div className={`event-card__color ${impactColors[index % impactColors.length]}`} style={{ opacity: 0.7 + (index % 3) * 0.1 }} />
              <div className="event-card__content">
                <p className="eyebrow text-violet">{dateFormatter.format(new Date(`${event.date}T12:00:00`))}</p>
                <h3 className="display-font mt-2 text-2xl font-extrabold text-ink">{event.title}</h3>
                <p className="mt-2 text-ink/80">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
