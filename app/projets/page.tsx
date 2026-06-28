"use client";

import { motion } from "framer-motion";
import ProjetCard from "@/components/ProjetCard";
import { projets } from "@/data/projets";
import { audiowide } from "@/components/HeroSection";

const ProjetPage = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-[url('/projetsPage/phone.png')] md:bg-[url('/projetsPage/laptop.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-xl md:max-w-2xl lg:max-w-xl px-6 text-white md:px-16 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-6xl lg:text-8xl tracking-wide leading-tight ${audiowide.className}`}
            >
              Nos Appartements
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="bg-black py-16">
        <div className="bg-black text-white py-16 px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projets.map((projet) => (
              <ProjetCard key={projet.slug} projet={projet} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjetPage;
