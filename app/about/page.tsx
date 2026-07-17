import Link from "next/link";
import PulseLine from "@/components/PulseLine";
import { aboutContent } from "@/lib/content";

export default function About() {
  return (
    <section className="about-hero">
      <div className="site-container">
        <div className="about-hero__intro">
          <p className="eyebrow text-poppy">About My Art Beats</p>
          <h1 className="section-heading mt-3">Art, music, and room to belong.</h1>
          <div className="about-hero__pulse">
            <PulseLine animate={false} color="poppy" variant="underline" />
          </div>
          <p>{aboutContent.intro}</p>
          <p className="text-ink">{aboutContent.framing}</p>
        </div>
        <div className="about-card-grid">
          {aboutContent.cards.map((card) => (
            <Link className={`about-card ${card.className}`} href={card.href} key={card.href}>
              <div>
                <p className="eyebrow">Explore</p>
                <h2 className="display-font mt-3 text-4xl font-extrabold">{card.title}</h2>
                <p className="mt-3 max-w-md">{card.description}</p>
              </div>
              <span className="about-card__arrow">Learn more <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
