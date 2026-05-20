"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
} from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiWordpress,
  SiNodedotjs,
  SiFramer,
  SiVuedotjs,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiShopify,
  SiWoocommerce,
} from "react-icons/si";
import Nav from "../../home/component/Nav/page";
import Footer from "../../home/footer/page";
import WhatsApp from "../../whatsapp_icon/page";
import styles from "./WebDeve.module.css";
import Link from "next/link";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_gq6cy0v",
        "template_k0pxln4",
        formRef.current,
        "QnDtxEHfL_ED3AVWE"
      );
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", desc: "React framework for production" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB", desc: "Interactive UIs" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031", desc: "Enterprise web apps" },
    { name: "WordPress", icon: <SiWordpress />, color: "#21759B", desc: "CMS & blogs" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", desc: "Backend runtime" },
    { name: "React Native", icon: <SiReact />, color: "#61DAFB", desc: "Cross-platform mobile apps" },
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B", desc: "Native mobile & web UI" },
    { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF", desc: "Modern Android development" },
    { name: "Swift", icon: <SiSwift />, color: "#F05138", desc: "iOS & macOS apps" },
    { name: "Shopify", icon: <SiShopify />, color: "#7AB55C", desc: "E-commerce platform" },
  ];

  const techStack = ["Next.js", "React Native", "Flutter", "Kotlin", "Swift", "Shopify", "React.js", "Angular", "WordPress", "WooCommerce"];

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
      link: "https://louilash.com/",
      technologies: ["Shopify", "Storefront API"],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    },
    {
      title: "Learning Management System",
      description: "Complete e-learning platform with course management and student tracking",
      link: "https://elenxia.com/",
      technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
      image: "/projects/elenxia.png",
    },
    {
      title: "Text-to-Handwriting",
      description: "AI-powered handwriting conversion with multiple font styles",
      link: "https://text-writerr.netlify.app/",
      technologies: ["React", "Canvas"],
      image: "/projects/text-writerr.png",
    },
    {
      title: "Telegram Group Share",
      description: "Easily share and discover Telegram groups in one place",
      link: "https://telegragrouplink.com/",
      technologies: ["PHP", "WordPress", "MySQL"],
      image: "/projects/telegragrouplink.png",
    },
  ];

  const process = [
    {
      step: "01",
      icon: <FiSearch />,
      title: "Discovery & Planning",
      description: "We dive deep into understanding your business goals, target audience, and project requirements. This phase includes competitor analysis and detailed scope definition.",
    },
    {
      step: "02",
      icon: <FiPenTool />,
      title: "Design & Prototyping",
      description: "Our designers create stunning wireframes and interactive prototypes. We focus on user experience, brand consistency, and conversion optimization.",
    },
    {
      step: "03",
      icon: <FiCode />,
      title: "Development",
      description: "Our developers bring designs to life using cutting-edge web and mobile technologies. We follow clean code practices, responsive design, and performance optimization.",
    },
    {
      step: "04",
      icon: <FiServer />,
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers. We check functionality, security, speed, and accessibility to ensure a flawless launch.",
    },
    {
      step: "05",
      icon: <FiCloud />,
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, from hosting setup to DNS configuration. Your website goes live with zero downtime.",
    },
    {
      step: "06",
      icon: <FiTrendingUp />,
      title: "Ongoing Support",
      description: "Post-launch, we provide continuous monitoring, updates, and improvements. Our team ensures your web presence stays secure and ahead.",
    },
  ];

  const features = [
    {
      icon: <FiCode />,
      title: "Custom Web Apps",
      description: "Tailor-made web applications using Next.js, React.js, and Angular. From dashboards to complex SaaS platforms.",
    },
    {
      icon: <FiShoppingCart/>,
      title: "Shopify & WooCommerce",
      description: "Full-featured e-commerce stores with custom themes, product management, payment integration, and inventory control.",
    },
    {
      icon: <FiSmartphone />,
      title: "React Native Apps",
      description: "Cross-platform mobile apps for iOS and Android with near-native performance using React Native.",
    },
    {
      icon: <FiSmartphone />,
      title: "Flutter Development",
      description: "Beautiful, natively compiled applications for mobile, web, and desktop from a single Dart codebase.",
    },
    {
      icon: <FiCode />,
      title: "Native Android (Kotlin)",
      description: "High-performance Android applications built with Kotlin, following modern architecture patterns.",
    },
    {
      icon: <FiCode />,
      title: "Native iOS (Swift)",
      description: "Premium iOS applications built with Swift, delivering seamless Apple ecosystem experiences.",
    },
  ];

  return (
    <>
      <Head>
        <title>Web & App Development Agency | Custom Web & Mobile Apps | Aroliya</title>
        <meta name="description" content="Aroliya is a top web and app development agency. We build custom web apps using Next.js, React.js, Angular, Shopify, WooCommerce and mobile apps using React Native, Flutter, Kotlin, Swift. Contact the best web & app development company." />
        <meta name="keywords" content="web and app development agency, mobile app development, web development company, nextjs development, react native development, flutter development, kotlin development, swift development, shopify development, woocommerce development, custom web apps, cross-platform apps, android app development, ios app development, full stack developers India" />
        <meta name="author" content="Aroliya" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Web & App Development Agency | Custom Web & Mobile Apps | Aroliya" />
        <meta property="og:description" content="Top web and app development agency offering custom web apps (Next.js, React, Angular, Shopify) and mobile apps (React Native, Flutter, Kotlin, Swift)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aroliya.com/services/web-and-app-development" />
        <meta property="og:image" content="https://aroliya.com/og-web-dev.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web & App Development Agency | Aroliya" />
        <meta name="twitter:description" content="Best web and app development services using Next.js, React, Flutter, Kotlin, Swift and more." />
        <link rel="canonical" href="https://aroliya.com/services/web-and-app-development" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ProfessionalService","name":"Aroliya","description":"Top web and app development agency offering custom web apps and mobile apps using Next.js, React, Flutter, Kotlin, Swift, Shopify, and WooCommerce.","url":"https://aroliya.com/services/web-and-app-development","areaServed":"India","serviceType":"Web & App Development","priceRange":"$$"}}`}} />
      </Head>
      <Nav />
      <div className={styles.container} id="main-content" role="main">
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
              <span className={styles.badge}>Web & App Development Agency</span>
              <h1 className={styles.heroTitle}>
                We Build Custom
                <span className={styles.gradientText}> Web & App</span>
              </h1>
              <p className={styles.heroSubtitle}>
                From concept to launch, we create high-performance web applications and mobile apps.
                Web: Next.js, React.js, Angular, Shopify, WooCommerce. 
                Mobile: React Native, Flutter, Kotlin, Swift.
                Transform your ideas into powerful digital experiences.
              </p>
              <div className={styles.techBadges}>
                {techStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.heroCta}>
                <Link href="#contact" className={styles.primaryBtn}>
                  Start Your Project
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
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Projects Delivered</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Technologies</span>
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
            <h2>What We Build</h2>
            <p>Comprehensive web & mobile app development solutions for businesses of all sizes</p>
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
            <h2>Technologies We Work With</h2>
            <p>We master the latest web and mobile technologies to deliver exceptional results</p>
          </div>

          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
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
            <p>A proven methodology that ensures your project succeeds every time</p>
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
            <h2>Our Recent Projects</h2>
            <p>Real websites and apps we've built for businesses like yours</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                style={{ cursor: "pointer" }}
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
            <h2>Ready to Start Your Project?</h2>
            <p>
              Tell us about your web or app development needs. Our team will get back within 24 hours with a detailed proposal.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.proForm}>
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
                  placeholder="Describe your project requirements..."
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

      {showSuccess && (
        <div className={styles.overlay} onClick={() => setShowSuccess(false)}>
          <motion.div
            className={styles.successModal}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.successIcon}><FiCheck /></div>
            <h3>Thank You!</h3>
            <p>Your request has been received. Our team will contact you within 24 hours.</p>
            <button className={styles.modalBtn} onClick={() => setShowSuccess(false)}>Got it</button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Services;