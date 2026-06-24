import CountUpComponent from "@/components/CountUpComponent";
import Hero from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CountUpComponent />
    </div>
  );
}
