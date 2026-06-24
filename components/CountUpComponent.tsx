import CountUp from "./CountUp";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const CountUpComponent = () => {
  return (
    <div className=" mt-20 bg-gray-200 py-10 grid grid-cols-2 md:flex md:flex-row justify-around gap-10 md:gap-20">
      <div
        className={`flex flex-col items-center justify-center ${poppins.className}`}
      >
        <CountUp
          from={0}
          to={13}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text md:text-2xl text-2xl"
          delay={0}
        />
        <h2 className="text-lg md:text-xl ">{"+ Ans d'Expérience"}</h2>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${poppins.className}`}
      >
        <CountUp
          from={0}
          to={1300}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text md:text-2xl text-2xl"
          delay={0}
        />
        <h2 className="text-lg md:text-xl">+ Clients Fidèles</h2>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${poppins.className}`}
      >
        <CountUp
          from={0}
          to={6}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text md:text-2xl text-2xl"
          delay={0}
        />
        <h2 className="text-lg md:text-xl ">Projets Réalisés</h2>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${poppins.className}`}
      >
        <CountUp
          from={0}
          to={13}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text md:text-2xl text-2xl"
          delay={0}
        />
        <h2 className="text-lg md:text-xl ">Projets En Cours</h2>
      </div>
    </div>
  );
};
export default CountUpComponent;
