import { SiteProvider } from "@/components/SiteProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import ReadySlider from "@/components/ReadySlider";
import Localities from "@/components/Localities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquireButton from "@/components/EnquireButton";

export default function Home() {
  return (
    <SiteProvider>
      <div className="w-full overflow-x-hidden">
        <Header />
        <Hero />
        <Marquee />
        <HowItWorks />
        <Gallery />
        <Projects />
        <ReadySlider />
        <Localities />
        <Contact />
        <Footer />
        <EnquireButton className="btn-olive fixed bottom-5 right-5 z-30 text-[11px] shadow-[0_12px_30px_-12px_rgba(30,32,22,0.6)]">
          Enquire now
        </EnquireButton>
      </div>
    </SiteProvider>
  );
}
