"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiHardHat, BiPaintRoll, BiNote, BiBulb, BiLayer, BiOutline } from "react-icons/bi";

const howItWorksContent = {
  heading: {
    title: "Where Creativity Meets Structural Integrity",
    subtitle: "How It Works",
    description:
      "At arcraft we're dedicated to shaping environments that transcend mere structures, weaving stories and experience into every design",
  },
  steps: [
    {
      number: "01",
      icon: BiHardHat,
      title: "Project Initiation",
      description: "At arcraft we're dedicated to shaping environments that transcend mere structures",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "02",
      icon: BiPaintRoll,
      title: "Conceptual Design",
      description: "At arcraft we're dedicated to shaping environments that transcend mere structures",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "03",
      icon: BiNote,
      title: "Construction Documents",
      description: "At arcraft we're dedicated to shaping environments that transcend mere structures",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: "Design Development",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiBulb,
      title: "Construction Administration",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiBulb,
      title: "Construction Administration",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiOutline,
      title: "Post-Occupancy Evaluation",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiLayer,
      title: "Schematic Design",
      description:
        "Our journey begins with a spark of imagination and a commitment to turning dreams into tangible spaces. From concept to construction, we orchestrate a symphony of design",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
};

export default function HowItWorks({ className }) {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-20 lg:mb-36">
          <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
            <div className="lg:w-7/12 mb-5 lg:mb-0">
              {howItWorksContent.heading.subtitle && (
                <motion.span
                  initial={{ opcatity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500">
                  {howItWorksContent.heading.subtitle}
                </motion.span>
              )}
              {howItWorksContent.heading.title && (
                <motion.h2
                  initial={{ opcatity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl ">
                  {howItWorksContent.heading.title}
                </motion.h2>
              )}
            </div>
            <div className="lg:w-5/12 self-end"></div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
