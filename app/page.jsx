export default function HomePage() {
  return (
    <>
      <div className="hero">
        <h1 className="h1">Site Control & Land Acquisition for Energy Infrastructure</h1>

        <div className="sub">
          <div>Wind · Solar · BESS · Transmission · Pipeline</div>
          <div>Fast, clean execution from first contact to recorded agreements.</div>
        </div>

        <div className="kpiRow">
          <div className="kpi">Field-first execution</div>
          <div className="kpi">Clear documentation & tracking</div>
          <div className="kpi">Landowner communication that closes</div>
          <div className="kpi">Midwest coverage + national capability</div>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="kicker">CORE SERVICES</div>
          <ul className="ul">
            <li>Landowner outreach, negotiation, and portfolio buildout</li>
            <li>Option/lease/easement execution & document control</li>
            <li>Title/ownership verification support & curative tracking</li>
            <li>Stakeholder coordination: survey, environmental, engineering</li>
            <li>Field coverage with rapid turnarounds across the Midwest</li>
          </ul>

          <div className="ctaRow">
            <a className="btnPrimary" href="mailto:contact@groundcontrol-llc.com">
              Email: contact@groundcontrol-llc.com
            </a>
            <a className="btn" href="tel:+14026692419">
              Call: 402-669-2419
            </a>
          </div>

          <div className="fine">Prefer text? Email works best and we’ll respond quickly.</div>
        </div>

        <div className="card">
          <div className="kicker">WORKING WITH</div>
          <ul className="ul">
            <li>Developers, EPCs, and land teams</li>
            <li>Transmission & pipeline project groups</li>
            <li>BESS and renewable infrastructure sponsors</li>
          </ul>
          <div className="fine">
            If you need a land team that can move fast without creating clean-up work later, we’re built for that.
          </div>
        </div>
      </div>
    </>
  );
}
