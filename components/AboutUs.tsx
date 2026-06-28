"use client";

import { motion } from "framer-motion";
import { audiowide, poppins } from "./HeroSection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section id="a-propos">
      <div className="bg-[#2A241F] px-4 pb-12 md:px-16 lg:px-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-6 text-white">
              <h1 className={`text-3xl md:text-5xl ${audiowide.className}`}>
                A propos de nous
              </h1>

              <p className={poppins.className}>
                Velora Promotion Immobilière met son savoir-faire au service de
                la création de projets immobiliers d’exception. Animée par une
                vision moderne de l’habitat, l’entreprise développe des
                résidences alliant élégance architecturale, confort optimal et
                qualité durable, afin d’offrir à ses clients un cadre de vie à
                la hauteur de leurs aspirations.
              </p>

              <Link href="/#contact">
                <button
                  className={`group cursor-pointer mt-2 flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 text-black transition hover:bg-gray-200 ${audiowide.className}`}
                >
                  Contactez-nous
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex w-full justify-center lg:w-1/2"
          >
            <Image
              src="/siége.png"
              alt="Siége"
              width={1000}
              height={700}
              className="w-[75%] rounded-lg shadow-lg md:w-[65%] lg:w-[90%] xl:w-[80%] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
