"use client";
import { motion } from "framer-motion";

const aboutContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subtitle: "About Us",
  },
};

export default function Hero({ className, title, subtitle }) {
  if (title) {
    title = title;
  } else {
    title = aboutContent.heading.title;
  }

  if (subtitle) {
    subtitle = subtitle;
  } else {
    subtitle = aboutContent.heading.subtitle;
  }

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
          <div className="text-center lg:max-w-3xl mx-auto">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.03, duration: 0.5 } }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500">
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl">
                {title}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
