import TextType from "./TextType";
import { Montagu_Slab, Poppins, Audiowide } from "next/font/google";
const montaguSlab = Montagu_Slab({ subsets: ["latin"] });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div
      className="
      relative h-screen w-full 
      bg-[url('/heroMobile.png')] 
      md:bg-[url('/heroLaptop.png')] 
      bg-cover 
      bg-center
      "
    >
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="text-white px-6 md:px-20 max-w-xl">
          <h1
            className={`text-5xl md:text-8xl tracking-wide ${audiowide.className}`}
          >
            Velora Prommotion Immobilière
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

          <button className="cursor-pointer mt-6 px-6 py-3 bg-white text-black hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
