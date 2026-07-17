import EventsExplorer from "@/components/EventsExplorer";

export default function Events() {
  return (
    <section>
      <div className="site-container events-hero">
        <p className="eyebrow text-poppy">My Art Beats events</p>
        <h1 className="section-heading mt-3">A timeline of making together.</h1>
        <p>PLACEHOLDER: Browse past gatherings, exhibitions, visits, and fundraisers, or stay close for the next event announcement.</p>
      </div>
      <div className="site-container">
        <EventsExplorer />
      </div>
    </section>
  );
}
