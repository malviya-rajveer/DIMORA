import { AboutUS } from "@/components/AboutUs";
import { Our_Process } from "@/components/Our_Process";
import { HeroSection } from "@/components/hero";
import { Latest_Product } from "@/components/LatestProject";
import { Limit_less } from "@/components/limitless";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <section className="h-full w-full overflow-x-hidden">
      <HeroSection />
      <AboutUS />
      <Latest_Product />
      <Our_Process />
      <Limit_less />
      <Footer />
    </section>
  );
}
