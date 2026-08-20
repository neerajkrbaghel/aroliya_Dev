import Head from "next/head";
import dynamic from "next/dynamic";
import Nav from "./component/Nav/page";
import Hero from "./component/hero/page";
import Footer from "./footer/page";
import Whatsapp from "../whatsapp_icon/page";

const Service = dynamic(() => import("./component/service/page"));
const HowItWorks = dynamic(() => import("./component/HowItWorks/page"));
const TrustedCompanies = dynamic(() => import("./component/Trusted-Companies/page"));
const Review = dynamic(() => import("./component/testimonials/page"));
const FAQ = dynamic(() => import("./component/faqs/page"));
const Right = dynamic(() => import("./component/left-right/page"));
const WhyChooseAroliya = dynamic(() => import("./WhyChooseAroliya/page"));
const ServicesHeader = dynamic(() => import("./component/ServiceHeader/page"));
const Support = dynamic(() => import("./component/Support/page"));
export default function page() {
  return (
    <>
      <link rel="canonical" href="https://www.aroliya.com" />
      <Head>
        <title>Website Development Agency in India | App Development Agency | Aroliya</title>
        <meta name="description" content="Aroliya is a top website development agency in India and app development agency in India. We deliver custom web applications, Shopify stores, WordPress websites, and mobile apps. Contact the best web development company for your digital needs." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "Organization", "name": "Aroliya", "url": "https://www.aroliya.com", "logo": "https://www.aroliya.com/logo/logo.png", "description": "Aroliya is a leading website development agency in India and app development agency in India specializing in custom web applications, mobile apps, Shopify stores, and WordPress websites.", "foundingDate": "2023", "areaServed": {"@type": "Country", "name": "India"}, "sameAs": ["https://www.instagram.com/aroliya5280/", "https://www.facebook.com/profile.php?id=61571008499035", "https://www.linkedin.com/company/aroliya-group/", "https://x.com/Aroliya171825/"], "contactPoint": {"@type": "ContactPoint", "telephone": "+91-9870519002", "contactType": "customer service", "email": "info@aroliya.com"}}'}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "WebSite", "name": "Aroliya", "url": "https://www.aroliya.com", "potentialAction": {"@type": "SearchAction", "target": "https://www.aroliya.com/find-work?search={search_term_string}", "query-input": "required name=search_term_string"}}'}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context": "https://schema.org", "@type": "ProfessionalService", "name": "Aroliya - Website Development Agency in India", "url": "https://www.aroliya.com", "description": "Aroliya is a leading website development agency in India and app development agency in India. Custom web applications, mobile apps, Shopify stores, and WordPress websites.", "telephone": "+91-9870519002", "email": "info@aroliya.com", "address": {"@type": "PostalAddress", "addressCountry": "IN"}, "areaServed": "India", "serviceType": ["Website Development", "App Development", "Shopify Development", "WordPress Development", "Custom Software Development", "UI/UX Design"], "priceRange": "$$", "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "50"}}'}} />
        <meta name="keywords" content="website development agency in india, app development agency in india, website development in india, app development in india, web development company in india, mobile app development company in india, custom software development in india, software development company in india, Shopify development agency, WordPress development company, React development company, Next.js development company, SaaS development company, custom web application development, enterprise software development, website design company in india, ecommerce website development in india, AI automation company in india, digital transformation services, UI/UX design services" />
        <meta name="author" content="Aroliya" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Aroliya - Top Digital Agency | Web Development & E-Commerce" />
        <meta property="og:description" content="Top-rated digital agency specializing in web development, Shopify stores, and e-commerce solutions. Rank higher on Google with our SEO-optimized websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aroliya.com" />
        <meta property="og:image" content="https://aroliya.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aroliya - Top Digital Agency | Web Development & E-Commerce" />
        <meta name="twitter:description" content="Top-rated digital agency specializing in web development, Shopify stores, and e-commerce solutions." />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
      </Head>
<main role="main">
      <Nav />
      <Hero />
      <Right />
      <Service />
      <HowItWorks />
      <ServicesHeader />
      <WhyChooseAroliya />
      <TrustedCompanies />
      <Review />
      <Support />
      <FAQ />
      <Footer />
      <Whatsapp />
      </main>
    </>
  );
}
