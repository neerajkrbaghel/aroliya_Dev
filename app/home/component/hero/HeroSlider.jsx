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

export default function HeroSlider() {
  return (
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
                <Link href="#services" className={styles.primaryBtn}>View Services</Link>
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
              <Link href="#services" className={styles.primaryBtn}>Start Now</Link>
              <Link href="/register" className={styles.secondaryBtn}>Sign Up</Link>
            </div>
            <div className={styles.trustBadge}>
              <Image src={shild} alt="" width={30} height={30} aria-hidden="true" />
              <p>Trusted - Easy - Reliable - Affordable - Innovative — Encrypted data, free to submit. Help: +91-9870519002</p>
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
              with a powerful portfolio that proves impact and builds credibility.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/register?userType=freelancer" className={styles.primaryBtn}>Register as Freelancer</Link>
              <Link href="/client-dashboard/post-job" className={styles.outlineBtn}>Post a Job</Link>
            </div>
            <div className={styles.trustBadge}>
              <Image src={shild} alt="" width={25} height={25} aria-hidden="true" />
              <p>sign in securely—your data is fully encrypted. For assistance, call +91-9870519002.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
