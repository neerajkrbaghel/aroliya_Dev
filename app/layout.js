// app/layout.js
import "./globals.css";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata = {
  title: {
    default:
      "Aroliya - Custom Web Apps, Shopify & WordPress Development Agency",
    template: "%s | Aroliya - Web & Mobile App Development Agency",
  },
  description:
    "Aroliya is a leading custom web apps, Shopify, WordPress, and mobile apps development agency. We build high-performance websites, eCommerce stores, and mobile applications for businesses worldwide.",
  keywords:
    "custom web apps developer, shopify developer, wordpress developer, mobile apps developer, web development agency, ecommerce development, reactjs development, nextjs development, shopify store development, wordpress website development, mobile app development agency, aroliya, aroliya group, aroliya india, custom software development, web application development, hybrid mobile apps, ios app development, android app development",
  authors: [{ name: "Aroliya Group" }],
  creator: "Aroliya Group",
  publisher: "Aroliya Group",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  openGraph: {
    title: "Aroliya - Custom Web, Shopify, WordPress & Mobile App Development Agency",
    description:
      "Expert web development agency specializing in custom web apps, Shopify stores, WordPress sites, and mobile applications. Trusted by 500+ businesses worldwide.",
    url: "https://www.aroliya.com",
    siteName: "Aroliya",
    images: [
      {
        url: "/icons/wmremove.gif",
        width: 1200,
        height: 630,
        alt: "Aroliya - Custom Web & Mobile App Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://www.aroliya.com",
  },
  metadataBase: new URL("https://www.aroliya.com"),
  twitter: {
    card: "summary_large_image",
    title: "Aroliya - Custom Web Apps, Shopify & WordPress Development Agency",
    description:
      "Leading web & mobile app development agency. Specializing in custom web apps, Shopify, WordPress, and mobile app development.",
    images: ["/icons/wmremove.gif"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning helps ignore minor attribute differences added
    // by browser extensions or other client-side DOM modifications.
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://www.aroliya.com" />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1427049378384329');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1427049378384329&ev=PageView&noscript=1"
            alt="fb pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Aroliya" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aroliya" />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="rating" content="safe for kids" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Open Graph Enhanced */}
        <meta property="og:site_name" content="Aroliya" />
        <meta property="og:type" content="website" />
        <meta property="og:email" content="info@aroliya.com" />
        <meta property="og:phone_number" content="+91-9870519002" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta
          property="business:contact_data:website"
          content="https://www.aroliya.com"
        />
      </head>

      {/* suppressHydrationWarning put on body to reduce hydration mismatch errors
          caused by browser extensions that mutate the DOM before React hydrates. */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>

        {/* Google Analytics - only load when GA_ID present */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                (function(){
                  try {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      page_title: (typeof document !== 'undefined' && document.title) ? document.title : '',
                      page_location: (typeof window !== 'undefined' && window.location ? window.location.href : '')
                    });
                  } catch (e) {
                    // fail silently if any unexpected runtime error happens
                    console.warn('GA init failed', e);
                  }
                })();
              `}
            </Script>
          </>
        )}

        {/* Razorpay (keeps as-is) */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="sitelinks-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.aroliya.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aroliya.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  `}
        </Script>

        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.aroliya.com/#organization",
              "name": "Aroliya",
              "url": "https://www.aroliya.com",
              "logo": "https://www.aroliya.com/favicon.ico",
              "description": "India's No. 1 Platform for Smart Online Services - Professional Form Filling, Travel Bookings, E-Commerce Solutions, and AI Services.",
              "sameAs": [
                "https://www.facebook.com/people/Aroliya-Group/61571008499035/",
                "https://www.linkedin.com/company/aroliya-group/",
                "https://twitter.com/aroliya",
                "https://www.instagram.com/aroliya"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-9870519002",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }],
              "knowsAbout": [
                "Custom Web Application Development",
                "Shopify Store Development",
                "WordPress Website Development",
                "Mobile App Development",
                "E-Commerce Solutions",
                "React JS Development",
                "Next JS Development",
                "Form Filling Services",
                "Travel Bookings",
                "Hotel Reservations",
                "Virtual Assistant Services",
                "Data Analytics",
                "AI Solutions",
                "Digital Marketing"
              ]
            }
          `}
        </Script>

        <Script
          id="website-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.aroliya.com/#website",
              "url": "https://www.aroliya.com",
              "name": "Aroliya",
              "description": "Custom Web Apps, Shopify & WordPress Development Agency",
              "publisher": {
                "@id": "https://www.aroliya.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.aroliya.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-IN"
            }
          `}
        </Script>

        <Script
          id="service-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "provider": {
                "@type": "Organization",
                "name": "Aroliya",
                "url": "https://www.aroliya.com"
              },
              "name": "Custom Web & Mobile App Development Services",
              "description": "Professional custom web application development, Shopify store development, WordPress website development, and mobile app development services.",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Custom Web App Development",
                  "description": "React, Next.js, Node.js custom web application development"
                },
                {
                  "@type": "Offer",
                  "name": "Shopify Development",
                  "description": "Custom Shopify store development and theme customization"
                },
                {
                  "@type": "Offer",
                  "name": "WordPress Development",
                  "description": "Custom WordPress website and plugin development"
                },
                {
                  "@type": "Offer",
                  "name": "Mobile App Development",
                  "description": "iOS and Android mobile application development"
                },
                {
                  "@type": "Offer",
                  "name": "E-Commerce Solutions",
                  "description": "Full-featured eCommerce platform development"
                }
              ],
              "areaServed": "Worldwide"
            }
          `}
        </Script>

        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.aroliya.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "login",
        "item": "https://www.aroliya.com/login"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://www.aroliya.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.aroliya.com/contact"
      }
    ]
  }
  `}
        </Script>

        {/* Additional GTM/Conversion snippet (keeps as-is but client-only) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17545732712"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            try {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'AW-17545732712');
            } catch (e) {
              console.warn('GTag init failed', e);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
