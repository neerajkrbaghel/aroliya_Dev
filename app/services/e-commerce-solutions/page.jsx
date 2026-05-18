"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCode,
  FiLayers,
  FiSmartphone,
  FiZap,
  FiCheck,
  FiMail,
  FiMessageSquare,
  FiUsers,
  FiSearch,
  FiPenTool,
  FiServer,
  FiCloud,
  FiTrendingUp,
  FiTarget,
  FiShield,
  FiGlobe,
  FiShoppingCart,
  FiCreditCard,
  FiPackage,
} from "react-icons/fi";
import {
  SiShopify,
  SiWoocommerce,
  SiStripe,
  SiGoogle,
  SiFacebook,
  SiInstagram,
  SiRazorpay,
  SiTiktok,
  SiGoogleanalytics,
  SiN8N,
  SiWebflow,
} from "react-icons/si";
import Nav from "../../home/component/Nav/page";
import Footer from "../../home/footer/page";
import WhatsApp from "../../whatsapp_icon/page";
import styles from "./EcommerceSolutions.module.css";
import Link from "next/link";

const EcommerceSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    alert("Your request was submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const platforms = [
    { name: "Shopify", icon: <SiShopify />, color: "#96BF48", desc: "Full-featured e-commerce platform" },
    { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A", desc: "WordPress e-commerce solution" },
    { name: "Stripe", icon: <SiStripe />, color: "#635BFF", desc: "Payment processing" },
    { name: "Razorpay", icon: <SiRazorpay />, color: "#0061FF", desc: "India payment gateway" },
    { name: "Google Shopping", icon: <SiGoogle />, color: "#4285F4", desc: "Product listings & ads" },
    { name: "Google Analytics", icon: <SiGoogleanalytics />, color: "#E37400", desc: "Analytics & tracking" },
    { name: "Meta Ads", icon: <SiFacebook />, color: "#1877F2", desc: "Social media marketing" },
    { name: "TikTok Ads", icon: <SiTiktok />, color: "#000000", desc: "TikTok advertising" },
    { name: "n8n Automation", icon: <SiN8N />, color: "#EA4B71", desc: "Workflow automation" },
    { name: "Flow", icon: <SiWebflow />, color: "#4353FF", desc: "Product analytics" },
  ];

  const platformStack = ["Shopify", "WooCommerce", "Stripe", "Razorpay", "Google Analytics", "Meta Ads", "TikTok Ads", "n8n", "Flow"];

  const projects = [
    {
      title: "Mohh Furniture",
      description: "Premium furniture brand in India with elegant product showcases and seamless checkout experience",
      link: "https://mohh.com",
      technologies: ["Shopify", "Liquid"],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    },
    {
      title: "Expressiam",
      description: "Contemporary clothing brand with stylish collections and smooth shopping experience",
      link: "https://expressiam.com",
      technologies: ["Shopify", "Custom Theme"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      title: "Louilash",
      description: "Luxury cosmetic store with premium design and seamless product browsing experience",
      link: "https://louilash.com",
      technologies: ["Shopify", "Storefront API"],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      icon: <FiSearch />,
      title: "Discovery & Planning",
      description: "We analyze your products, target audience, and competitors to create a strategic roadmap for your online store.",
    },
    {
      step: "02",
      icon: <FiPenTool />,
      title: "Design & Branding",
      description: "Our designers create stunning store designs that reflect your brand identity and drive conversions.",
    },
    {
      step: "03",
      icon: <FiCode />,
      title: "Development & Setup",
      description: "We build and configure your store on Shopify or WooCommerce with all necessary plugins and integrations.",
    },
    {
      step: "04",
      icon: <FiPackage />,
      title: "Product Setup",
      description: "We help you list products, set up categories, pricing, inventory, and shipping configurations.",
    },
    {
      step: "05",
      icon: <FiCreditCard />,
      title: "Payments & Testing",
      description: "Configure payment gateways and test the entire checkout flow to ensure smooth transactions.",
    },
    {
      step: "06",
      icon: <FiTrendingUp />,
      title: "Launch & Marketing",
      description: "Launch your store and set up marketing campaigns to drive traffic and boost sales.",
    },
  ];

  const features = [
    {
      icon: <FiShoppingCart />,
      title: "Custom Store Setup",
      description: "We build tailor-made Shopify and WooCommerce stores that perfectly represent your brand.",
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile-First Design",
      description: "Every store we create provides an excellent shopping experience on all devices.",
    },
    {
      icon: <FiCreditCard />,
      title: "Payment Integration",
      description: "Secure payment gateway setup including Stripe, PayPal, and local payment options.",
    },
    {
      icon: <FiTrendingUp />,
      title: "SEO & Marketing",
      description: "Built with SEO best practices and integrated marketing tools to drive organic traffic.",
    },
    {
      icon: <FiShield />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your store and customer data.",
    },
    {
      icon: <FiGlobe />,
      title: "Multi-Currency",
      description: "Accept payments in multiple currencies and expand your global reach.",
    },
  ];

  return (
    <>
      <Head>
        <title>Shopify & WooCommerce Development Services | Aroliya</title>
        <meta
          name="description"
          content="We provide Shopify and WooCommerce development services. Build custom e-commerce stores, themes, and integrations for your online business."
        />
        <meta
          name="keywords"
          content="shopify development, woocommerce development, ecommerce store, shopify theme, woocommerce plugin, online store development"
        />
      </Head>
      <Nav />
      <div className={styles.container}>
        <WhatsApp />

        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.badge}>E-Commerce Solutions</span>
              <h1 className={styles.heroTitle}>
                We Build Shopify &<br />
                <span className={styles.gradientText}>WooCommerce Stores</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transform your business with powerful e-commerce stores built on Shopify and WooCommerce. 
                From custom themes to seamless integrations, we create online stores that convert visitors into customers.
              </p>
              <div className={styles.techBadges}>
                {platformStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.heroCta}>
                <Link href="#contact" className={styles.primaryBtn}>
                  Start Your Store
                </Link>
                <Link href="#process" className={styles.secondaryBtn}>
                  Our Process
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>200+</span>
                  <span className={styles.statLabel}>Stores Launched</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>6+</span>
                  <span className={styles.statLabel}>Platforms</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2>What We Offer</h2>
            <p>Complete e-commerce solutions to launch and grow your online business</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.technologiesSection}>
          <div className={styles.sectionHeader}>
            <h2>Platforms & Tools We Work With</h2>
            <p>We specialize in the leading e-commerce platforms and marketing tools</p>
          </div>

          <div className={styles.techGrid}>
            {platforms.map((tech, index) => (
              <motion.div
                key={index}
                className={styles.techCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={styles.techIcon} style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techDesc}>{tech.desc}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.processSection} id="process">
          <div className={styles.sectionHeader}>
            <h2>Our Process</h2>
            <p>A proven methodology to launch your online store successfully</p>
          </div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.processStep}>{item.step}</div>
                <div className={styles.processIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <h2>Our E-Commerce Projects</h2>
            <p>Real stores we've built for businesses across India and beyond</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.projectTech}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.finalCTA} id="contact">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiTarget className={styles.ctaIcon} />
            <h2>Ready to Launch Your Online Store?</h2>
            <p>
              Tell us about your e-commerce needs. Our team will get back within 24 hours with a detailed proposal.
            </p>

            <form onSubmit={handleSubmit} className={styles.proForm}>
              <div className={styles.formRow}>
                <FiUsers className={styles.fieldIcon} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <FiMail className={styles.fieldIcon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formRowText}>
                <FiMessageSquare className={styles.fieldIconText} />
                <textarea
                  name="message"
                  placeholder="Describe your e-commerce project requirements..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className={styles.proSubmitBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Get Free Quote
              </motion.button>
            </form>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EcommerceSolutions;