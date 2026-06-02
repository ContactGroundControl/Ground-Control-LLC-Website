import "./globals.css";

export const metadata = {
  title: "Ground Control LLC — Contract Land Agents | Easement & Site Control | Iowa & Nebraska",
  description:
    "Ground Control LLC provides contract land agent services for renewable energy developers across Iowa, Nebraska, and the Midwest. Specializing in easement negotiation, landowner outreach, option and lease execution, and site control for wind, solar, BESS, and transmission projects. Est. 2015, Omaha NE.",
  keywords: [
    "contract land agents Iowa",
    "land acquisition renewable energy midwest",
    "easement negotiation wind solar Nebraska",
    "site control energy infrastructure",
    "land agent services BESS transmission Iowa",
    "renewable energy land acquisition contractor",
    "easement execution midwest",
    "landowner outreach wind farm Iowa",
    "contract ROW agents Nebraska",
    "energy land acquisition Omaha",
  ],
  authors: [{ name: "Ground Control LLC" }],
  creator: "Ground Control LLC",
  publisher: "Ground Control LLC",
  metadataBase: new URL("https://www.groundcontrol-llc.com"),
  alternates: {
    canonical: "https://www.groundcontrol-llc.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.groundcontrol-llc.com",
    siteName: "Ground Control LLC",
    title: "Ground Control LLC — Contract Land Agents for Renewable Energy",
    description:
      "Field-first contract land agents for wind, solar, BESS, and transmission developers across Iowa, Nebraska, and the Midwest. Easement negotiation, landowner outreach, and site control. Est. 2015.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ground Control LLC — Contract Land Agents for Renewable Energy Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ground Control LLC — Contract Land Agents for Renewable Energy",
    description:
      "Field-first contract land agents for wind, solar, BESS, and transmission developers across Iowa, Nebraska, and the Midwest.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "PVF71Ki_jQGP9nad4L4ZORbT-OlyBaeus1y3O2r_xKs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.groundcontrol-llc.com/#business",
      name: "Ground Control LLC",
      description:
        "Contract land agent services for renewable energy developers across Iowa, Nebraska, and the Midwest. Specializing in easement negotiation, landowner outreach, and site control for wind, solar, BESS, and transmission projects.",
      url: "https://www.groundcontrol-llc.com",
      telephone: "+1-402-669-2419",
      email: "contact@groundcontrol-llc.com",
      foundingDate: "2015",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Omaha",
        addressRegion: "NE",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Iowa" },
        { "@type": "State", name: "Nebraska" },
        { "@type": "State", name: "Kansas" },
        { "@type": "State", name: "South Dakota" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "State", name: "Missouri" },
      ],
      knowsAbout: [
        "Land Acquisition",
        "Easement Negotiation",
        "Site Control",
        "Renewable Energy Development",
        "Wind Energy",
        "Solar Energy",
        "Battery Energy Storage Systems",
        "Transmission Infrastructure",
        "Landowner Outreach",
        "Right of Way Acquisition",
      ],
      sameAs: [
        "https://www.linkedin.com/company/ground-control-llc",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.groundcontrol-llc.com/#website",
      url: "https://www.groundcontrol-llc.com",
      name: "Ground Control LLC",
      description: "Contract land agents for renewable energy infrastructure",
      publisher: {
        "@id": "https://www.groundcontrol-llc.com/#business",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.groundcontrol-llc.com/#service",
      name: "Contract Land Agent Services",
      provider: {
        "@id": "https://www.groundcontrol-llc.com/#business",
      },
      serviceType: "Land Acquisition & Easement Negotiation",
      areaServed: "Midwest United States",
      description:
        "Landowner outreach, easement negotiation, option and lease execution, title verification, and site control for renewable energy developers.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
