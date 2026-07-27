import Link from "next/link";
import { teamContent } from "@/lib/content";

export default function Teams() {
  return (
    <section>
      <div className="site-container teams-hero">
        <p className="eyebrow text-poppy-text">Our teams</p>
        <h1 className="section-heading mt-3">The people behind the beat.</h1>
        <p>{teamContent.intro}</p>
      </div>

      <div className="site-container">
        <div className="team-grid">
          {teamContent.members.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-card__portrait team-card__portrait--${member.color}`} aria-label={`Photo placeholder for ${member.name}`} role="img">
                {member.initials}
              </div>
              <div className="team-card__body">
                <h2>{member.name}</h2>
                <p className="team-card__role">{member.role}</p>
                <details>
                  <summary>Read bio</summary>
                  <p>{member.bio}</p>
                </details>
              </div>
            </article>
          ))}
        </div>

        <div className="teams-chapters">
          <div className="teams-chapters__heading">
            <p className="eyebrow text-marigold-text">Beyond the executive team</p>
            <h2 className="section-heading mt-3">Meet your local chapter.</h2>
          </div>
          {teamContent.chapters.map((chapter) => (
            <Link className={`teams-chapter-card ${chapter.className}`} href={chapter.href} key={chapter.href}>
              <span className="eyebrow">Chapter</span>
              <span>
                <span className="display-font block text-3xl font-extrabold">{chapter.title}</span>
                <span className="mt-3 block max-w-sm">{chapter.description}</span>
              </span>
              <span className="font-bold">Meet the chapter <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
