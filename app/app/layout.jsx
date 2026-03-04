import "./globals.css";

export const metadata = {
  title: "Ground Control LLC",
  description: "Site Control & Land Acquisition for Energy Infrastructure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
