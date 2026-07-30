import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
export const metadata = {
  title: {
    default:
      "Website Development in India | App Development in India | Aroliya",
    template: "%s | Aroliya - Web & Mobile App Development Agency",
  },
  description:
    "Aroliya is a top website development company in India and app development company in India. We offer custom web development, mobile app development, Shopify development, WordPress development, and software development services for businesses worldwide.",
  keywords: [
    "website development in india",
    "app development in india",
    "web development company in india",
    "mobile app development company in india",
    "custom software development in india",
    "software development company in india",
    "Shopify development company",
    "WordPress development company",
    "React development company",
    "Next.js development company",
    "SaaS development company",
    "enterprise software development",
    "custom web application development",
    "website design company in india",
    "ecommerce website development in india",
    "AI automation company in india",
    "digital transformation services",
    "UI/UX design services",
  ],
  metadataBase: new URL("https://www.aroliya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website Development in India | App Development Company | Aroliya",
    description:
      "Aroliya is a leading website development and app development company in India. Custom web apps, Shopify stores, WordPress sites, and mobile applications.",
    url: "https://www.aroliya.com",
    siteName: "Aroliya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.aroliya.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aroliya - Website Development and App Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development in India | App Development | Aroliya",
    description:
      "Leading website development and app development company in India. Custom web apps, Shopify, WordPress, and mobile apps.",
    images: ["https://www.aroliya.com/og-image.jpg"],
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
  verification: {},
  other: {
    "theme-color": "#1a1a2e",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preload" href="/hero/hero-section.jpg" as="image" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div id="main-content" role="main">{children}</div>
      </body>
    </html>
  );
}
