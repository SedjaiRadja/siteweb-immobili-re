import TextType from "./TextType";
import { ArrowRight } from "lucide-react";
import LogoLoop from "./LogoLoop";
import { Poppins, Audiowide } from "next/font/google";
import Link from "next/link";

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const logosImages = [
  { src: "/facebook.png", alt: "facebook" },
  { src: "/instagram.png", alt: "instagram" },
  { src: "/linkedin.png", alt: "linkedin" },
  { src: "/tiktok.png", alt: "tiktok" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/heroMobile.png')] md:bg-[url('/heroLaptop.png')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-2xl px-4 sm:px-6 md:px-12 lg:px-20 text-white">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl leading-tight break-words ${audiowide.className}`}
          >
            Velora Promotion Immobilière
          </h1>

          <div
            className={`mt-4 text-base sm:text-lg md:text-2xl opacity-90 ${poppins.className}`}
          >
            <TextType
              text={[
                "Découvrez des biens d'exception",
                "Trouvez votre futur logement",
                "Investissez intelligemment",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={false}
              cursorBlinkDuration={0.5}
            />
          </div>

          <Link href="/#projets">
            <button
              className={`group cursor-pointer mt-6 flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black transition hover:bg-gray-200 ${audiowide.className}`}
            >
              Explore
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Logo Loop */}
      <div className="relative overflow-hidden bg-[#2A241F] py-3">
        <LogoLoop
          logos={logosImages}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#2A241F"
          ariaLabel="Social logos"
        />
      </div>
    </section>
  );
}
