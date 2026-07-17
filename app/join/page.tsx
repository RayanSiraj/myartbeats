import Link from "next/link";
import PulseLine from "@/components/PulseLine";
import { InstagramIcon } from "@/components/icons";
import { joinContent } from "@/lib/content";

export default function Join() {
  return (
    <section>
      <div className="site-container join-hero">
        <div className="join-hero__intro">
          <p className="eyebrow text-poppy">Get involved</p>
          <h1 className="section-heading mt-3">Bring your beat.</h1>
          <div className="join-hero__pulse"><PulseLine animate={false} color="poppy" variant="underline" /></div>
          <p>{joinContent.intro}</p>
        </div>
      </div>
      <div className="site-container join-pathways">
        {joinContent.pathways.map((pathway) => (
          <Link className={`about-card ${pathway.className}`} href={pathway.href} key={pathway.href}>
            <div>
              <p className="eyebrow">{pathway.eyebrow}</p>
              <h2 className="display-font mt-3 text-4xl font-extrabold">{pathway.title}</h2>
              <p className="mt-3">{pathway.description}</p>
            </div>
            <span className="about-card__arrow">Explore pathway <span aria-hidden="true">→</span></span>
          </Link>
        ))}
        <div className="join-follow-card">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2 className="display-font mt-3 text-4xl font-extrabold">Follow along.</h2>
            <p className="mt-3">{joinContent.followAlong.description}</p>
          </div>
          <div className="join-follow-card__actions">
            <a
              aria-label="Follow My Art Beats on Instagram"
              className="join-follow-card__instagram"
              href={joinContent.followAlong.instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon /> Instagram
            </a>
            <Link className="button button-outline" href={joinContent.followAlong.href}>Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
