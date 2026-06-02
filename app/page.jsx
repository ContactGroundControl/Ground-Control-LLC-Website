export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="heroBg" />
        <div className="heroGrid" />
        <div className="heroEyebrow">Land Acquisition · Site Control · Midwest</div>
        <h1 className="heroH1">
          We Close the <em>Ground</em>
          <br />So You Can Build.
        </h1>
        <p className="heroSub">
          Contract land agents embedded in your project — handling easement negotiation,
          landowner outreach, and agreement execution across Iowa, Nebraska, and the broader Midwest.
        </p>
        <div className="heroActions">
          <a className="btnPrimary" href="mailto:contact@groundcontrol-llc.com">
            Engage Our Team
          </a>
          <a className="btnGhost" href="#services">
            Our Services
          </a>
        </div>
        <div className="heroSectors">
          <span className="sectorTag">Wind</span>
          <span className="sectorTag">Solar</span>
          <span className="sectorTag">BESS</span>
          <span className="sectorTag">Transmission</span>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="statsBar">
        <div className="stat">
          <div className="statNum">10<span>+</span></div>
          <div className="statLabel">Projects in Iowa</div>
        </div>
        <div className="stat">
          <div className="statNum">2<span>+</span></div>
          <div className="statLabel">Projects in Nebraska</div>
        </div>
        <div className="stat">
          <div className="statNum">Est<span>.</span></div>
          <div className="statLabel">2015 · Omaha, NE</div>
        </div>
        <div className="stat">
          <div className="statNum">Field<span>-</span>First</div>
          <div className="statLabel">Execution Model</div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="sectionTag">What We Do</div>
        <h2 className="sectionH2">
          Land Control Services
          <br />Built for Energy Infrastructure
        </h2>
        <div className="servicesGrid">
          <div className="serviceCard">
            <div className="serviceNum">01</div>
            <div className="serviceTitle">Landowner Outreach & Negotiation</div>
            <p className="serviceDesc">
              Direct, professional contact with landowners. We build trust, manage objections,
              and bring willing signatures — without creating liability for your project.
            </p>
          </div>
          <div className="serviceCard">
            <div className="serviceNum">02</div>
            <div className="serviceTitle">Option, Lease & Easement Execution</div>
            <p className="serviceDesc">
              Full document execution from draft to recorded agreement. We handle the paperwork
              cycle so your legal and development teams aren't buried in logistics.
            </p>
          </div>
          <div className="serviceCard">
            <div className="serviceNum">03</div>
            <div className="serviceTitle">Title & Ownership Verification</div>
            <p className="serviceDesc">
              Curative tracking and ownership research to identify issues before they stall a
              closing. We flag problems early so your team can resolve them on schedule.
            </p>
          </div>
          <div className="serviceCard">
            <div className="serviceNum">04</div>
            <div className="serviceTitle">Portfolio Buildout & Tracking</div>
            <p className="serviceDesc">
              Systematic parcel-by-parcel progress tracking with clear documentation. You always
              know where every agreement stands.
            </p>
          </div>
          <div className="serviceCard">
            <div className="serviceNum">05</div>
            <div className="serviceTitle">Stakeholder Coordination</div>
            <p className="serviceDesc">
              We coordinate across survey, environmental, and engineering teams — keeping field
              activity aligned with your project milestones and permitting timelines.
            </p>
          </div>
          <div className="serviceCard">
            <div className="serviceNum">06</div>
            <div className="serviceTitle">Rapid Field Deployment</div>
            <p className="serviceDesc">
              Midwest-based agents ready to mobilize quickly. When your project window opens,
              we're already on the ground — not ramping up from out of state.
            </p>
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section id="geography" className="section">
        <div className="sectionTag">Where We Work</div>
        <h2 className="sectionH2">
          Rooted in the Midwest.
          <br />Ready Across the Region.
        </h2>
        <div className="twoCol">
          <div className="stateList">
            <div className="stateRow">
              <span className="stateName">Iowa</span>
              <span className="stateBadge badgeActive">Active · 10+ Projects</span>
            </div>
            <div className="stateRow">
              <span className="stateName">Nebraska</span>
              <span className="stateBadge badgeActive">Active · 2+ Projects</span>
            </div>
            <div className="stateRow">
              <span className="stateName">Kansas</span>
              <span className="stateBadge badgeAvailable">Available</span>
            </div>
            <div className="stateRow">
              <span className="stateName">South Dakota</span>
              <span className="stateBadge badgeAvailable">Available</span>
            </div>
            <div className="stateRow">
              <span className="stateName">Minnesota</span>
              <span className="stateBadge badgeAvailable">Available</span>
            </div>
            <div className="stateRow">
              <span className="stateName">Missouri</span>
              <span className="stateBadge badgeAvailable">Available</span>
            </div>
          </div>
          <div>
            <div className="geoCopy">
              <p>
                Ground Control's agents are based in the Midwest and know the land, the landowners,
                and the local dynamics that matter when you're trying to close agreements on a timeline.
              </p>
              <p>
                <strong>Iowa and Nebraska are our primary operating states</strong> — where we have
                established project experience, agent relationships, and a track record of executed
                agreements across wind, solar, BESS, and transmission projects.
              </p>
              <p>
                For projects in neighboring states, we can mobilize quickly. Contact us to discuss
                coverage and capacity for your specific project geography.
              </p>
            </div>
            <div className="trackRecord">
              <div className="trackRecordLabel">Completed Project Experience</div>
              <div className="trackStats">
                <div>
                  <div className="trackStatNum">10<span>+</span></div>
                  <div className="trackStatLabel">Iowa projects</div>
                </div>
                <div>
                  <div className="trackStatNum">2<span>+</span></div>
                  <div className="trackStatLabel">Nebraska projects</div>
                </div>
                <div>
                  <div className="trackStatNum">4</div>
                  <div className="trackStatLabel">Energy sectors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="serve" className="section">
        <div className="sectionTag">Who We Work With</div>
        <h2 className="sectionH2">
          Built for Developers,
          <br />EPCs & Project Teams
        </h2>
        <div className="twoCol">
          <ul className="serveList">
            <li className="serveItem">Renewable energy developers (wind, solar, BESS)</li>
            <li className="serveItem">Transmission project sponsors & utilities</li>
            <li className="serveItem">Engineering, Procurement & Construction (EPC) firms</li>
            <li className="serveItem">In-house land teams needing contract capacity</li>
            <li className="serveItem">Legal teams managing agreement execution at scale</li>
            <li className="serveItem">Investment groups and infrastructure funds</li>
          </ul>
          <div className="serveCopy">
            <p>
              Ground Control is not a generalist right-of-way firm. We're land agents who specialize
              in energy infrastructure site control — the specific, high-stakes work of getting
              landowners to yes on options, leases, and easement agreements.
            </p>
            <p>
              If your project is in Iowa, Nebraska, or a neighboring Midwest state and you need
              agents who can move fast, document cleanly, and represent your organization
              professionally in the field — <strong>that's exactly what we're built for.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="sectionTag">How We Work</div>
        <h2 className="sectionH2">
          Clean Execution,
          <br />Start to Finish
        </h2>
        <div className="processSteps">
          <div className="step">
            <div className="stepN">01</div>
            <div className="stepTitle">Project Intake</div>
            <p className="stepDesc">
              We review your parcel list, agreement forms, and project timeline — aligning on
              scope before any field work begins.
            </p>
          </div>
          <div className="step">
            <div className="stepN">02</div>
            <div className="stepTitle">Field Deployment</div>
            <p className="stepDesc">
              Agents contact landowners directly — in person, by phone, or mail — and begin
              negotiations within your approved parameters.
            </p>
          </div>
          <div className="step">
            <div className="stepN">03</div>
            <div className="stepTitle">Agreement Execution</div>
            <p className="stepDesc">
              We manage the full document cycle — drafting, review coordination, signing, and
              recording — with tracking at every step.
            </p>
          </div>
          <div className="step">
            <div className="stepN">04</div>
            <div className="stepTitle">Reporting & Closeout</div>
            <p className="stepDesc">
              Clean documentation handed off to your team. No loose ends, no clean-up work,
              no ambiguity in what was executed.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="aboutInner">
          <div>
            <div className="sectionTag">About</div>
            <div className="aboutYear">
              Est.
              <br />
              <span>2015</span>
            </div>
          </div>
          <div>
            <div className="aboutBody">
              <p>
                Ground Control, LLC was established in 2015 and has spent the past decade working
                on energy infrastructure land acquisition across the Midwest. The company operates
                as a contract land agent team — embedded directly in client projects rather than
                managing them from a distance.
              </p>
              <p>
                Our work spans wind, solar, BESS, and transmission development, with primary
                operating experience in Iowa and Nebraska. We focus on a single discipline: getting
                landowners to the table, executing agreements cleanly, and handing off documentation
                that doesn't require follow-up.
              </p>
              <p>
                <strong>
                  Ground Control is built for developers and project teams that need field-ready
                  agents, not another layer of management.
                </strong>
              </p>
            </div>
            <div className="aboutRule">
              <div className="aboutFact">
                <span className="aboutFactLabel">Established</span>
                <span className="aboutFactVal">2015</span>
              </div>
              <div className="aboutFact">
                <span className="aboutFactLabel">Headquarters</span>
                <span className="aboutFactVal">Omaha, Nebraska</span>
              </div>
              <div className="aboutFact">
                <span className="aboutFactLabel">Discipline</span>
                <span className="aboutFactVal">Energy infrastructure land acquisition</span>
              </div>
              <div className="aboutFact">
                <span className="aboutFactLabel">Primary States</span>
                <span className="aboutFactVal">Iowa · Nebraska</span>
              </div>
              <div className="aboutFact">
                <span className="aboutFactLabel">Sectors</span>
                <span className="aboutFactVal">Wind · Solar · BESS · Transmission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contactInner">
          <div>
            <div className="sectionTag">Get in Touch</div>
            <h2 className="sectionH2">
              Ready to Move?
              <br />So Are We.
            </h2>
            <p className="contactIntro">
              Whether you have an active project in Iowa or Nebraska or are scoping capacity for
              an upcoming Midwest development, we're available to talk through fit and timeline —
              no lengthy intake process required.
            </p>
          </div>
          <div className="contactBlock">
            <div className="contactLine">
              <span className="contactLineLabel">Email</span>
              <a className="contactLineVal" href="mailto:contact@groundcontrol-llc.com">
                contact@groundcontrol-llc.com
              </a>
            </div>
            <div className="contactLine">
              <span className="contactLineLabel">Phone</span>
              <a className="contactLineVal" href="tel:+14026692419">
                402-669-2419
              </a>
            </div>
            <div className="contactLine">
              <span className="contactLineLabel">Headquarters</span>
              <span className="contactLineVal">Omaha, Nebraska</span>
            </div>
            <div className="contactLine">
              <span className="contactLineLabel">Primary Coverage</span>
              <span className="contactLineVal">Iowa · Nebraska · Midwest</span>
            </div>
            <p className="contactNote">
              Email is preferred and we respond quickly. If a matter is time-sensitive, call directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

