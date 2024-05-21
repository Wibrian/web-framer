import About from "./components/About";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero className={"pt-32 pb-0 lg:pb-10"} />
      <About className={"py-16 lg:py-32 overflow-hidden"} />
      <HowItWorks />
    </main>
  );
}
