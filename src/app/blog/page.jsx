import Hero from "@/components/about/Hero";
import Posts from "@/components/blog/Posts";
import Subscribe from "@/components/Subscribe";

// export const metadata = {
//   title: "Blogs - Arcraft by JoefreyCodes",
// };

export default function page() {
  return (
    <>
      <Hero className={"pt-52 pb-24"} title={"Recent Updates"} subtitle={"Our Blogs"} />
      <Posts className={"pt-0 pb-52"} itemsPerPage={6} />
      <Subscribe className={"py-16 pt-64 lg:py-32 bg-violet-600"} />
    </>
  );
}
