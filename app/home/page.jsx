import Head from "next/head";
import Nav from "./component/Nav/page";
import Hero from "./component/hero/page";
import Service from "./component/service/page";
import HowItWorks from "./component/HowItWorks/page";
import TrustedCompanies from "./component/Trusted-Companies/page";
import Review from "./component/testimonials/page";
import Footer from "./footer/page";
import FAQ from "./component/faqs/page";
import Right from "./component/left-right/page";
import WhyChooseAroliya from "./WhyChooseAroliya/page";
import ServicesHeader from "./component/ServiceHeader/page";
import Support from "./component/Support/page";
import Whatsapp from "../whatsapp_icon/page";
export default function page() {
  return (
    <>
      <Head>
        <title>Aroliya - Top Digital Agency | Web Development, E-Commerce & Shopify Solutions</title>
        <meta name="description" content="Aroliya is a top-rated digital agency specializing in web development, Shopify stores, and e-commerce solutions. We deliver high-performance websites that rank on Google. Contact the best agency for your digital needs." />
        <meta name="keywords" content="top agency, best digital agency, web development agency, top web development company, e-commerce agency, Shopify development agency, best Shopify experts, top e-commerce developers, custom web development, React Next.js developers, WooCommerce development, digital agency India, web design company, SEO friendly websites, professional web development services, custom online store, Shopify experts, best e-commerce platform, website development company" />
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
        <link rel="canonical" href="https://aroliya.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <html lang="en" />
      </Head>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" role="main">
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
