import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: {
    default:
      "Aroliya - Custom Web Apps, Shopify & WordPress Development Agency",
    template: "%s | Aroliya - Web & Mobile App Development Agency",
  },
  description:
    "Aroliya is a leading custom web apps, Shopify, WordPress, and mobile apps development agency. We build high-performance websites, eCommerce stores, and mobile applications for businesses worldwide.",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preload" href="/hero/hero-section.jpg" as="image" fetchpriority="high" />
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
