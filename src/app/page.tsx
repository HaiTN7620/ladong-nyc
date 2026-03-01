import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Gallery from "@/components/sections/gallery";
import FeaturedMenu from "@/components/sections/featured-menu";
import { ContactForm } from "@/components/ui/contact-form";

export default function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <Gallery />
      <FeaturedMenu />
      {/* <ContactForm /> */}
    </>
  );
}
