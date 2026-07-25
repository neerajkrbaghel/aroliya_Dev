"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"))
import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import shild from "../../../../public/icons/shild.png";
import namaste from "../../../../public/icons/namaste.png";

export default function Hero() {
  return (
    <section className={styles.heroContainer} aria-label="Hero banner" aria-roledescription="carousel">
      <HeroSlider />
    </section>
  );
}
