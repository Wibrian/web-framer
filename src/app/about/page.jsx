import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Teams from "@/components/about/Teams";
import WhyUs from "@/components/about/WhyUs";

export default function page() {
  return (
    <>
      <Hero className={"pt-52 pb-24"} />
      <Story />
      <WhyUs className={"pt-52 pb-24"} />
      <Testimonial className={"pt-10 lg:pt-32 pb-10 lg:pb-32"} />
      <Teams className={"py-10 lg:py-32"} />
      <Subscribe className={"py-10 lg:py-32 bg-violet-600"} />
    </>
  );
}
