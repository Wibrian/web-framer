"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const heroContent = {
  intro: {
    title: "Where Creativity Meets Structural Integrity",
    subtitle: "Welcome",
    description:
      "Welcome to a world where creativity meets unwavering structural integrity. At arcraft, we believe that exceptional design goes hand in hand with meticulous engineering",
    btn: {
      href: "/projects",
      label: "View Projects",
    },
  },
};

export default function Hero({ className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className={className} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
          <div className="lg:w-4/12 z-[3] relative">
            {heroContent.intro.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500">
                {heroContent.intro.subtitle}
              </motion.span>
            )}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                viewport={{ once: true }}
                className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8">
                {heroContent.intro.title}
              </motion.h1>
            )}
            {heroContent.intro.description && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                viewport={{ once: true }}
                className="leading-realxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16">
                {heroContent.intro.description}
              </motion.h1>
            )}
            {heroContent.intro.btn.label && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                viewport={{ once: true }}>
                <Link
                  href={heroContent.intro.btn.href}
                  className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-violet-600 hover:shadow-xl">
                  {heroContent.intro.btn.label}
                </Link>
              </motion.h1>
            )}
          </div>
          <div className="lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: true }}
              style={{ y: imgScroll }}
              className="z-[2] relative bg-cover bg-center ">
              <Image src="/images/hero-img-1-min.jpg" width={828} height={985} alt="Hero Image" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: true }}
              style={{ y: imgScroll2 }}
              className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]">
              <Image src="/images/dots.svg" alt="Dots Image" className="w-64" width={200} height={200} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
