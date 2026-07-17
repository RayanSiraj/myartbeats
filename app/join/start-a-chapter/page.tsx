import Link from "next/link";
import PulseLine from "@/components/PulseLine";
import { joinContent, teamContent } from "@/lib/content";

export default function StartAChapter() {
  return (
    <section className="site-container py-16">
      <div className="about-hero__intro">
        <p className="eyebrow text-poppy-text">Join My Art Beats</p>
        <h1 className="section-heading mt-3">Start a chapter.</h1>
        <div className="join-hero__pulse"><PulseLine animate={false} color="poppy" variant="underline" /></div>
        <p>{joinContent.startChapter.intro}</p>
      </div>
      <div className="chapter-start-steps">
        {joinContent.startChapter.steps.map((step) => (
          <article className="chapter-start-step" key={step.number}>
            <span className="chapter-start-step__number">{step.number}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
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
      <div className="join-contact-cta">
        <p className="eyebrow text-sunshine">Ready to begin?</p>
        <h2 className="section-heading mt-3">Let&apos;s find your first beat.</h2>
        <p className="mt-4 max-w-2xl">PLACEHOLDER: Tell us where you are, who is joining you, and what kind of creative community you hope to build.</p>
        <Link className="button button-outline mt-6" href="/contact">Contact the team</Link>
      </div>
    </section>
  );
}
