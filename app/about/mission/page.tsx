import PulseLine from "@/components/PulseLine";
import { missionContent } from "@/lib/content";

export default function Mission() {
  return (
    <>
      <section className="mission-hero">
        <div className="site-container">
          <p className="eyebrow text-poppy">Our mission</p>
          <h1 className="mission-beats">
            <span>CREATE.</span>
            <span>CONNECT.</span>
            <span>COALESCE.</span>
          </h1>
          <div className="mission-hero__pulse"><PulseLine color="poppy" /></div>
          <p className="mission-intro">{missionContent.intro}</p>
        </div>
      </section>

      <section className="site-container">
        <p className="mission-lead">{missionContent.lead}</p>
      </section>

      <div>
        {missionContent.pillars.map((pillar) => (
          <section className={`mission-pillar ${pillar.className}`} key={pillar.title}>
            <div className="site-container">
              <div className="pulse-divider"><PulseLine color={pillar.color} /></div>
              <div className="mission-pillar__content mt-8">
                <p className="eyebrow">A guiding beat</p>
                <h2 className="mt-3">{pillar.title}</h2>
                <p className="mission-pillar__kicker">{pillar.kicker}</p>
                <p className="mission-pillar__description">{pillar.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="site-container">
        <p className="mission-closing">{missionContent.closing}</p>
      </section>
    </>
  );
}
