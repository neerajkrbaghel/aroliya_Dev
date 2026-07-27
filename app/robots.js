

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/dashboard/",
          "/client-dashboard/",
          "/freelancer-dashboard/",
          "/wp-admin/",
          "/login",
          "/register",
          "/reset-password",
          "/unauthorized",
          "/job-apply",
        ],
      },
    ],
    sitemap: "https://www.aroliya.com/sitemap.xml",
  };
}
