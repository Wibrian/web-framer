"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialLinkedin } from "react-icons/sl";

const teamsContent = {
  heading: {
    title: "Introducing our Exceptional Team",
    subtitle: "Meet our Teams",
    description:
      "At arcraft we're dedicated to shaping environments that transcend mere structures, weaving stories and experiences into every design.",
  },
  teams: [
    {
      image: "/images/person-1-min.jpg",
      name: "Jane Cooper",
      role: "Principal Architect",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "/images/person-2-min.jpg",
      name: "Alexandra Moore",
      role: "Design Architect",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "/images/person-3-min.jpg",
      name: "James Mayer",
      role: "Landscape Architect",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "/images/person-4-min.jpg",
      name: "Robert Fox",
      role: "Landscape Architect",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "/images/person-5-min.jpg",
      name: "Sarah Brown",
      role: "Design Architect",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "/images/person-6-min.jpg",
      name: "Michael Williams",
      role: "Design Architect",
      twitter: "#",
      linkedin: "#",
    },
  ],
};

export default function Teams({ className }) {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-20 lg:mb-36">
          <div className="w-full lg:w-8/12 lg:flex gap-7 items-center">
            <div className="lg:w-7/12 mb-5 lg:mb-0">
              {teamsContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500">
                  {teamsContent.heading.subtitle}
                </motion.span>
              )}
              {teamsContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl">
                  {teamsContent.heading.title}
                </motion.h2>
              )}
            </div>
            <div className="lg:w-5/12 self-end">
              {teamsContent.heading.description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
                  viewport={{ once: true }}
                  className="text-gray-500">
                  {teamsContent.heading.description}
                </motion.p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-10/12 mx-auto">
          {teamsContent.teams.map((person, i) => {
            i *= 0.2;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: i, duration: 0.3 } }}
                viewport={{ once: true }}
                key={person.name}
                className="bg-white relative overflow-hidden">
                <Link href={"#"}>
                  <Image src={person.image} alt="person" width={400} height={400} className="object-cover object-top w-full !max-h-72 !max-w-full" />
                </Link>
                <div className="p-8">
                  <h3 className="mb-0.5">{person.name}</h3>
                  <p className="text-gray-500 uppercase text-[12px] tracking-[1px] mb-4">{person.role}</p>
                  <div className="mt-5 flex space-x-5 items-center">
                    {person.twitter && (
                      <Link href={person.twitter} className="duration-300 transition-all ease-in-out hover:opacity-30">
                        <RxTwitterLogo className="text-lg" />
                      </Link>
                    )}
                    {person.linkedin && (
                      <Link href={person.linkedin} className="duration-300 transition-all ease-in-out hover:opacity-30">
                        <SlSocialLinkedin className="text-lg" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
