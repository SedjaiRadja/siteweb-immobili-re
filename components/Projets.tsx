"use client";

import { motion } from "framer-motion";
import { audiowide, poppins } from "./HeroSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projets } from "../data/projets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ProjectCard from "./ProjetCard";

const Projets = () => {
  return (
    <section id="projets">
      <div className="bg-gradient-to-r from-[#2A241F] via-[#4A3D24] to-[#B08D32] pb-5 pt-5 pl-5 pr-5">
        <div className="flex flex-row gap-4 lg:justify-between lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="py-8 px-4 md:px-16 lg:px-32 flex flex-col gap-4 text-white"
          >
            <h1 className={`text-3xl md:text-5xl ${audiowide.className}`}>
              Nos Projets
            </h1>

            <p className={poppins.className}>
              Découvrez nos derniers projets immobiliers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/projets" className="lg:ml-auto">
              <button
                className={`group mb-4 cursor-pointer rounded-lg mr-5 mt-10 p-3 bg-white text-black hover:bg-gray-200 transition flex items-center gap-2 ${audiowide.className}`}
              >
                Voir tous les projets
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <Swiper
            className="projects-swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projets.slice(0, 3).map((projet) => (
              <SwiperSlide key={projet.slug}>
                <ProjectCard projet={projet} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projets;