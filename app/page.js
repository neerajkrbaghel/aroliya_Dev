import Home from "./home/page";
export const metadata = {
  title: "Aroliya - Website Development in India | App Development Company",
  description:
    "Aroliya is a top website development company in India specializing in custom web applications, mobile app development, Shopify stores, and WordPress websites. Get a free consultation for your next project.",
  keywords: [
    "website development in india",
    "app development in india",
    "web development company",
    "mobile app development",
    "Shopify development",
    "WordPress development",
    "custom software development",
    "React development company",
    "Next.js development company",
    "SaaS development",
    "enterprise web development",
    "UI UX design services",
    "digital transformation services",
    "ecommerce website development",
  ],
  openGraph: {
    title: "Aroliya - Website Development in India | App Development Company",
    description:
      "Top website development and app development company in India. Custom web apps, Shopify stores, WordPress sites, and mobile applications for businesses worldwide.",
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
    title: "Aroliya - Website Development in India | App Development Company",
    description:
      "Leading website development and app development company in India. Custom web apps, Shopify, WordPress, and mobile apps.",
    images: ["https://www.aroliya.com/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
