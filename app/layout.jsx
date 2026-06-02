import "./globals.css";

export const metadata = {
  title: "Ground Control LLC — Land Acquisition & Site Control",
  description:
    "Contract land agents specializing in energy infrastructure site control across Iowa, Nebraska, and the Midwest. Wind, solar, BESS, and transmission.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a className="navLogo" href="/">
            Ground<span>Control</span>
          </a>
          <ul className="navLinks">
            <li><a href="#services">Services</a></li>
            <li><a href="#geography">Coverage</a></li>
            <li><a href="#serve">Who We Serve</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="navCta" href="mailto:contact@groundcontrol-llc.com">
            Get in Touch
          </a>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="footerLogo">
            Ground<span>Control</span> LLC
          </div>
          <div className="footerMeta">
            <span className="footerCopy">Est. 2015 · Omaha, NE</span>
            <span className="footerCopy">© 2026 Ground Control, LLC</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
