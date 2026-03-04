export default function HomePage() {
return (
<> <div className="hero"> <h1 className="h1">
Site Control & Land Acquisition for Energy Infrastructure </h1>

```
    <p className="sub">
      Wind Energy · Solar Energy · Battery Storage (BESS) · Transmission · Pipeline
      <br />
      Fast, clean execution from first contact to recorded agreements.
    </p>

    <div className="kpiRow">
      <div className="kpi">Field-first execution</div>
      <div className="kpi">Clear documentation & tracking</div>
      <div className="kpi">Landowner communication that closes</div>
      <div className="kpi">Midwest coverage + national capability</div>
    </div>
  </div>

  <div className="grid">
    <div className="card">
      <div className="kicker">Core Services</div>

      <ul className="ul">
        <li>Landowner outreach, negotiation, and portfolio buildout</li>
        <li>Option / lease / easement execution & document control</li>
        <li>Title / ownership verification support & curative tracking</li>
        <li>Stakeholder coordination: survey, environmental, engineering</li>
        <li>Field coverage with rapid turnarounds across the Midwest</li>
      </ul>

      <div style={{ marginTop: "18px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a className="btnPrimary" href="mailto:contact@groundcontrol-llc.com">
          Email: contact@groundcontrol-llc.com
        </a>

        <a className="btnSecondary" href="tel:4026692419">
          Call: 402-669-2419
        </a>
      </div>

      <p style={{ marginTop: "10px", opacity: ".8" }}>
        Prefer email? Email works best and we’ll respond quickly.
      </p>
    </div>

    <div className="card">
      <div className="kicker">Working With</div>

      <ul className="ul">
        <li>Developers, EPCs, and land teams</li>
        <li>Transmission & pipeline project groups</li>
        <li>BESS and renewable infrastructure sponsors</li>
      </ul>

      <p style={{ marginTop: "10px" }}>
        If you need a land team that can move fast without creating clean-up
        work later, we’re built for that.
      </p>
    </div>
  </div>
</>
```

);
}
