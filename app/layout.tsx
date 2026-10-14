import "./global.css";
import type { Metadata, Viewport } from "next";
import { site } from "../content/site";
import { DEFAULT_SCHEME, DEFAULT_THEME, SCHEMES } from "./lib/schemes";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.role}`,
  description: site.pitch,
  openGraph: {
    title: site.name,
    description: site.pitch,
    url: site.url,
    siteName: site.name,
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.pitch },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1420",
  viewportFit: "cover",
};

// Runs before paint so a saved theme or scheme never flashes the default.
const themeScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme'),s=localStorage.getItem('scheme');
if(t==='light'||t==='dark')d.dataset.theme=t;if(${JSON.stringify(SCHEMES.map((s) => s.id))}.indexOf(s)>-1)d.dataset.scheme=s;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      data-scheme={DEFAULT_SCHEME}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
