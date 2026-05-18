"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import shild from "../../../../public/icons/shild.png";
import namaste from "../../../../public/icons/namaste.png";

export default function Hero() {
  return (
    <section className={styles.heroContainer} aria-label="Hero banner" aria-roledescription="carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        className={styles.swiperContainer}
        aria-label="Featured services slideshow"
      >
        <SwiperSlide>
          <div className={`${styles.slide} ${styles.slideThree}`}>
            <div className={styles.slideContent}>
              <div className={styles.welcomeSection}>
                <h1>Aroliya - Custom Web & Mobile App Development Agency</h1>
                <p>
                  Asia's trusted platform for smart digital services — from custom web app development,
                  Shopify stores, and WordPress websites to mobile apps, form filling,
                  travel bookings, Data & AI, and eCommerce solutions.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="#services">
                    <button className={styles.primaryBtn} aria-label="View our services">View Services</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.slide}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/hero/hero-section.jpg')",
            }}
          >
            <div className={styles.slideContent}>
              <h2>Custom Web Apps, Shopify & WordPress Development</h2>
              <p>
                From custom web applications and Shopify eCommerce stores to WordPress websites and
                mobile apps — our expert team delivers high-performance digital solutions tailored to your business.
              </p>

              <div className={styles.heroButtons}>
                <Link href="#services">
                  <button className={styles.primaryBtn}>Start Now</button>
                </Link>
                <Link href="/register">
                  <button className={styles.secondaryBtn}>Sign Up</button>
                </Link>
              </div>

              <div className={styles.trustBadge}>
                <Image
                  src={shild}
                  alt=""
                  width={30}
                  height={30}
                  aria-hidden="true"
                />
                <p>
                  Trusted - Easy - Reliable - Affordable - Innovative —
                  Encrypted data, free to submit. Help: +91-9870519002
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`${styles.slide} ${styles.slideTwo}`}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero/hero.png')",
            }}
          >
            <div className={styles.slideContent}>
              <h2>Work Smarter with Aroliya Freelancer Hub</h2>
              <p>
                Showcase your skills, get hired, and grow your career faster
                with a powerful portfolio that proves impact and builds
                credibility.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/freelancer-registration">
                  <button className={styles.primaryBtn}>
                    Register as Freelancer
                  </button>
                </Link>
                <Link href="/post-job">
                  <button className={styles.outlineBtn}>Post a Job</button>
                </Link>
              </div>

              <div className={styles.trustBadge}>
                <Image
                  src={shild}
                  alt=""
                  width={25}
                  height={25}
                  aria-hidden="true"
                />
                <p>
                  sign in securely—your data is fully encrypted. For assistance,
                  call +91-9870519002.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
