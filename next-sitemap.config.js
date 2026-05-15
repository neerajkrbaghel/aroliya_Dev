/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.aroliya.com",
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/wp-admin/", "/admin/", "/dashboard/", "/client-dashboard/", "/freelancer-dashboard/", "/reset-password/", "/unauthorized/"],
      },
    ],
  },
  exclude: [
    "/api/*",
    "/wp-admin/*",
    "/admin/*",
    "/dashboard/*",
    "/client-dashboard/*",
    "/freelancer-dashboard/*",
    "/reset-password",
    "/unauthorized",
    "/proposals/*",
  ],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path === "/about") {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path === "/contact-us") {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => [
    {
      loc: "/services/web-development",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/services/e-commerce-solutions",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/services/virtual-assistance",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "/services/travel-bookings",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "/services/form-filling",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "/services/data-visualization",
      changefreq: "weekly",
      priority: 0.8,
    },
  ],
};
