import Hero from "@/components/about/Hero";
import ContactForm from "@/components/contact/ContactForm";

export default function page() {
  return (
    <>
      <Hero className={"pt-52 pb-24"} title={"Contact Us"} subtitle={"Get in Touch"} />
      <ContactForm />
    </>
  );
}
