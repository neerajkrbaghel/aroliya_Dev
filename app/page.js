import Home from "./home/page";

export const metadata = {
  title: "Aroliya - Custom Web Apps, Shopify & WordPress Development Agency",
  description:
    "Aroliya is a leading custom web app, Shopify, WordPress, and mobile app development agency. We build high-performance digital solutions for businesses worldwide.",
  openGraph: {
    title: "Aroliya - Custom Web, Shopify, WordPress & Mobile App Development Agency",
    description:
      "Leading web & mobile app development agency. Specializing in custom web apps, Shopify stores, WordPress sites, and mobile applications.",
  },
};

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
