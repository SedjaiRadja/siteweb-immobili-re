import CountUpComponent from "@/components/CountUpComponent";
import Hero from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Projets from "@/components/Projets";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <CountUpComponent />
      <AboutUs />
      <Projets />
      <Services />
      <ContactSection />
    </div>
  );
}
