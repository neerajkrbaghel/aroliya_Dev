"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../../../../public/logo/logo.png";
import styles from "./Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [dropdown, setDropdown] = useState({
    services: false,
    freelancer: false,
    learnMore: false,
  });
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    import("aos").then((mod) => mod.default.init({ duration: 1000 }));
    checkAuthStatus();

    const handleScroll = () => setIsFixed(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.menuOpen);
    } else {
      document.body.classList.remove(styles.menuOpen);
    }

    return () => {
      document.body.classList.remove(styles.menuOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const checkAuthStatus = async () => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        const parsed = JSON.parse(userData);
        setUserName(parsed.name || "");
        setUser(parsed);
        setUserRole(parsed.role || null);
      } else {
        setUser(null);
        setUserRole(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      setUserRole(null);
    }
  };

  const toggleDropdown = (name) =>
    setDropdown((prev) => ({ ...prev, [name]: !prev[name] }));

  const closeAllDropdowns = () => {
    setDropdown({
      services: false,
      freelancer: false,
      learnMore: false,
    });
  };

  const getDashboardLink = () => {
    if (!userRole) return "/login";

    switch (userRole.toLowerCase()) {
      case "client":
        return "/client-dashboard";
      case "freelancer":
        return "/freelancer-dashboard";
      case "admin":
        return "/wp-admin";
      default:
        return "/dashboard";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    closeAllDropdowns();
  };

  return (
    <header className={`${styles.header} ${isFixed ? styles.fixed : ""}`} role="banner">
      {/* Top Bar */}
      <div className={styles.topBar} role="region" aria-label="Contact and social media">
        <div className={styles.topLeft}>
          <MdMarkEmailRead aria-hidden="true" /> <span>Info@aroliya.com</span>
          <FaPhoneAlt style={{ marginLeft: "1rem" }} aria-hidden="true" />{" "}
          <span>+91-9870519002</span>
        </div>
        <div className={styles.topRight} aria-label="Social media links">
          <Link href="https://www.instagram.com/aroliya5280/" aria-label="Follow us on Instagram">
            <FaInstagram aria-hidden="true" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61571008499035" aria-label="Follow us on Facebook">
            <FaFacebook aria-hidden="true" />
          </Link>
          <Link href="https://www.linkedin.com/company/aroliya-group/" aria-label="Follow us on LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </Link>
          <Link href="https://x.com/Aroliya171825/" aria-label="Follow us on Twitter">
            <FaXTwitter aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Aroliya Home">
          <Image src={logo} alt="Aroliya Logo - Custom Web & Mobile App Development Agency" width={150} height={50} />
        </Link>

        <div ref={menuRef} className={`${styles.navLinksContainer} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.navLinks}>

            <li>
              <Link href="/" onClick={closeMenu} >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} >
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-team" onClick={closeMenu} >
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            
            {/* Services Dropdown */}
            <li className={styles.dropdown}>
              <button
                onClick={() => toggleDropdown("services")}
                aria-expanded={dropdown.services}
                aria-haspopup="true"
                
              >
                Services <IoChevronDown aria-hidden="true" />
              </button>
              {dropdown.services && (
                <div className={styles.dropdownMenu} role="menu" aria-label="Services">
                  <Link href="/services/web-and-app-development" onClick={closeMenu} >
                    Web & App Development
                  </Link>
                  <Link href="/services/e-commerce-solutions" onClick={closeMenu} >
                    E-commerce Solutions
                  </Link>
                  <Link href="/services/virtual-assistance" onClick={closeMenu} >
                    Virtual Assistance
                  </Link>
                  <Link href="/services/form-filling" onClick={closeMenu} >
                    Online Form Filling
                  </Link>
                  <Link href="/services/data-visualization" onClick={closeMenu} >
                    Data & AI Solution
                  </Link>
                </div>
              )}
            </li>
            
            <li>
              <Link href="/find-work" onClick={closeMenu} >
                Find Work
              </Link>
            </li>
            
            {/* Freelancer Hub Dropdown */}
            <li className={styles.dropdown}>
              <button
                onClick={() => toggleDropdown("freelancer")}
                aria-expanded={dropdown.freelancer}
                aria-haspopup="true"
                
              >
                Freelancer Hub <IoChevronDown aria-hidden="true" />
              </button>
              {dropdown.freelancer && (
                <div className={styles.dropdownMenu} role="menu" aria-label="Freelancer">
                  <Link
                    href="/services/freelancer-hub/freelancer-plan"
                    onClick={closeMenu}
                    
                  >
                    Join as Freelancer
                  </Link>
                  <Link
                    href="/services/freelancer-hub/hire-freelancer"
                    onClick={closeMenu}
                    
                  >
                    Hire Freelancer
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/career" onClick={closeMenu} >
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={closeMenu} >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Auth Buttons (outside ul to avoid invalid markup) */}
          <div className={styles.mobileAuthButtons}>
            {user ? (
              <Link
                href={getDashboardLink()}
                className={styles.dashboardBtn}
                onClick={closeMenu}
                aria-label={`Dashboard - ${userName}`}
              >
                <FaUser aria-hidden="true" /> {userName}
              </Link>
            ) : (
              <>
                <Link href="/login" className={styles.loginBtn} onClick={closeMenu}>
                  Login
                </Link>
                <Link href="/register" className={styles.signUpBtn} onClick={closeMenu}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          {user ? (
            <Link href={getDashboardLink()} className={styles.dashboardBtn} aria-label={`Dashboard - ${userName}`}>
              <FaUser aria-hidden="true" /> {userName}
            </Link>
          ) : (
            <>
              <Link href="/login" className={styles.loginBtn}>Login</Link>
              <Link href="/register" className={styles.signUpBtn}>Register</Link>
            </>
          )}
        </div>

        <button
          ref={toggleRef}
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <IoClose size={26} aria-hidden="true" /> : <IoMenu size={26} aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
