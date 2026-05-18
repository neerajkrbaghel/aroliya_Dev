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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    alert("Your request was submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", desc: "React framework for production" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB", desc: "Interactive UIs" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031", desc: "Enterprise web apps" },
    { name: "WordPress", icon: <SiWordpress />, color: "#21759B", desc: "CMS & blogs" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", desc: "Backend runtime" },
    { name: "Framer", icon: <SiFramer />, color: "#FF0054", desc: "Design & prototyping" },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D", desc: "Progressive framework" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20", desc: "PHP framework" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", desc: "Utility-first CSS" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", desc: "CSS framework" },
  ];

  const techStack = ["Next.js", "React.js", "Angular", "WordPress", "Wix", "Framer", "Vue.js", "Laravel", "Tailwind CSS", "Bootstrap"];

  const projects = [
    {
      title: "Bloom & Grow Nursery",
      description: "Organic plant nursery with online ordering and delivery tracking system",
      link: "https://www.bloomandgrownursery.com",
      technologies: ["Next.js", "WordPress"],
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
    },
    {
      title: "Urban Coffee Roasters",
      description: "Specialty coffee subscription platform with membership management",
      link: "https://www.urbancoffeeroasters.com",
      technologies: ["React.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    },
    {
      title: "FitLife Personal Training",
      description: "Fitness coaching platform with workout plans and progress tracking",
      link: "https://www.fitlifepersonaltraining.com",
      technologies: ["Angular", "Node.js"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
    {
      title: "Artisan Bakery Co.",
      description: "Local bakery website with custom cake orders and pickup scheduling",
      link: "https://www.artisanbakeryco.com",
      technologies: ["Wix", "WordPress"],
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    },
    {
      title: "TechStart SaaS Dashboard",
      description: "Analytics dashboard for startups with real-time data visualization",
      link: "https://www.techstartdashboard.io",
      technologies: ["React.js", "Next.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Coastal Real Estate",
      description: "Property listing platform for beachfront homes with virtual tours",
      link: "https://www.coastalrealestateproperties.com",
      technologies: ["Next.js", "Framer"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
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
      description: "Our developers bring designs to life using cutting-edge technologies. We follow clean code practices, responsive design, and performance optimization.",
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
      icon: <FiLayers />,
      title: "Custom Web Applications",
      description: "We build tailor-made web apps that perfectly fit your business needs. From dashboards to complex SaaS platforms.",
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Design",
      description: "Every website we create looks and works flawlessly on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: <FiZap />,
      title: "Performance Optimized",
      description: "Fast-loading websites that rank better on Google and provide better user experience.",
    },
    {
      icon: <FiShield />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your data and your customers' information.",
    },
    {
      icon: <FiGlobe />,
      title: "SEO Friendly",
      description: "Built with SEO best practices to help your website rank higher on search engines and drive organic traffic.",
    },
    {
      icon: <FiTarget />,
      title: "Conversion Focused",
      description: "Strategic design and development focused on converting visitors into customers with clear CTAs and user flows.",
    },
  ];

  return (
    <>
      <Head>
        <title>Custom Web Development Services | Next.js, React.js, Angular | Aroliya</title>
        <meta
          name="description"
          content="We build custom web applications in Next.js, React.js, Angular, WordPress, Wix, and Framer. Professional web development services tailored to your business needs."
        />
        <meta
          name="keywords"
          content="custom web development, nextjs development, reactjs development, angular development, wordpress development, framer development, wix development"
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
              <span className={styles.badge}>Web Development Agency</span>
              <h1 className={styles.heroTitle}>
                We Build Custom
                <span className={styles.gradientText}> Web Apps</span>
              </h1>
              <p className={styles.heroSubtitle}>
                From concept to launch, we create high-performance web applications 
                using Next.js, React.js, Angular, WordPress, Wix, and Framer. 
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
                  <span className={styles.statNumber}>6+</span>
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
            <p>Comprehensive web development solutions for businesses of all sizes</p>
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
            <p>We master the latest and most reliable web technologies to deliver exceptional results</p>
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
            <p>Real websites we've built for businesses like yours</p>
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
            <h2>Ready to Start Your Project?</h2>
            <p>
              Tell us about your web development needs. Our team will get back within 24 hours with a detailed proposal.
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
    </>
  );
};

export default Services;