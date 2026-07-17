import PulseLine from "@/components/PulseLine";
import { joinContent } from "@/lib/content";

export default function Volunteer() {
  return (
    <section>
      <div className="site-container join-subpage-hero">
        <p className="eyebrow text-poppy-text">Join My Art Beats</p>
        <h1 className="section-heading mt-3">Volunteer your beat.</h1>
        <div className="join-hero__pulse"><PulseLine animate={false} color="poppy" variant="underline" /></div>
        <p>{joinContent.volunteer.intro}</p>
      </div>
      <div className="site-container">
        <div className="join-form-card">
          <div className="join-form-card__header">
            <div>
              <p className="eyebrow text-poppy-text">A first step</p>
              <h2 className="mt-2">Volunteer interest form</h2>
            </div>
            <a
              className="join-form-card__fallback"
              href={joinContent.volunteer.formUrl}
              rel="noreferrer"
              target="_blank"
            >
              Trouble with the embedded form? Open it in a new tab
            </a>
          </div>
          <iframe
            className="join-form-card__iframe"
            loading="lazy"
            src={joinContent.volunteer.formUrl}
            title="My Art Beats volunteer interest form"
          />
          <p className="join-form-card__note">{joinContent.volunteer.note}</p>
        </div>
      </div>
    </section>
  );
}
