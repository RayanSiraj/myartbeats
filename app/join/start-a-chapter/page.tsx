import Link from "next/link";
import { teamContent } from "@/lib/content";

export default function StartAChapter() {
  return (
    <section className="site-container py-16">
      <div className="about-hero__intro">
        <p className="eyebrow text-poppy">Join My Art Beats</p>
        <h1 className="section-heading mt-3">Start a chapter.</h1>
        <p>
          PLACEHOLDER: Gather a few student leaders, find creative partners, and help bring an accessible My Art Beats community to your area.
        </p>
      </div>
      <div className="teams-chapters">
        <div className="teams-chapters__heading">
          <p className="eyebrow text-violet">Our chapters</p>
          <h2 className="section-heading mt-3">Find a local beat or get inspired.</h2>
        </div>
        {teamContent.chapters.map((chapter) => (
          <Link className={`chapter-card ${chapter.className}`} href={chapter.href} key={chapter.href}>
            <span className="eyebrow">Chapter</span>
            <span>
              <span className="display-font block text-3xl font-extrabold">{chapter.title}</span>
              <span className="mt-3 block max-w-sm">{chapter.description}</span>
            </span>
            <span className="font-bold">Visit chapter <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
