import TextType from "./TextType";
import { ArrowRight } from "lucide-react";
import LogoLoop from "./LogoLoop";
import { Poppins, Audiowide } from "next/font/google";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const logosImages = [
  { src: "/facebook.png", alt: "facebook" },
  { src: "/instagram.png", alt: "instagram" },
  { src: "/linkedin.png", alt: "linkedin" },
  { src: "/snapchat.png", alt: "snapchat" },
];

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/heroMobile.png')] md:bg-[url('/heroLaptop.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="text-white px-6 md:px-20 max-w-xl">
          <h1
            className={`text-5xl md:text-8xl tracking-wide ${audiowide.className}`}
          >
            Velora Promotion Immobilière
          </h1>

          <div
            className={`mt-4 text-lg md:text-2xl opacity-90 ${poppins.className}`}
          >
            <TextType
              text={[
                "Découvrez des biens d'exception",
                "Trouvez votre futur logement",
                "Investissez intelligemment",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={false}
              cursorBlinkDuration={0.5}
            />
          </div>

          <button
            className={`group cursor-pointer rounded-lg mt-6 px-6 py-3 bg-white text-black hover:bg-gray-200 transition flex items-center gap-2 ${audiowide.className}`}
          >
            Explore
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>

      {/* LOGO LOOP SECTION */}
      <div className="pt-3 relative overflow-hidden flex items-center justify-center bg-gray-200 logos-loop mt-0">
        <LogoLoop
          logos={logosImages}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
