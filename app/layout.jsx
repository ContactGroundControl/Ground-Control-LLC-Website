import "./globals.css";

export const metadata = {
  title: "Ground Control LLC",
  description: "Energy Site Control & Land Acquisition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
