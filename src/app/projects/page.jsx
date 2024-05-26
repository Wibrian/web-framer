import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/about/Hero";
import Projects from "@/components/projects/Projects";
import CTA from "@/components/CTA";

const metadata = {
  title: "Projects - Arcraft by JoefreyCodes",
};

export default function page() {
  return (
    <>
      <Hero className={"pt-52 pb-24"} title={"Projects"} subtitle={"Our Projects"} />
      <Projects className={"pt-0 pb-52"} itemsPerPage={4} />
      <CTA
        className={"py-32 lg:py-32 bg-violet-600"}
        cta_label={"Get in touch"}
        cta_link={"contact/"}
        title={"Do you have project in mind?"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
        }
      />
    </>
  );
}
