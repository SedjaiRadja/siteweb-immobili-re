"use client";
"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DraftingCompass,
  KeyRound,
  ShieldCheck,
  Trees,
  Handshake,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { audiowide, poppins } from "./HeroSection";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const services = [
  {
    icon: Building2,
    title: "Promotion Immobilière",
    description:
      "Construction de résidences modernes répondant aux plus hauts standards de qualité.",
  },
  {
    icon: DraftingCompass,
    title: "Architecture Moderne",
    description:
      "Des conceptions innovantes alliant esthétique, confort et fonctionnalité.",
  },
  {
    icon: KeyRound,
    title: "Vente d'Appartements",
    description: "Des appartements F2, F3 et F4 adaptés à tous les besoins.",
  },
  {
    icon: ShieldCheck,
    title: "Résidences Sécurisées",
    description: "Surveillance 24h/24, accès contrôlé et parkings privés.",
  },
  {
    icon: Trees,
    title: "Espaces Verts",
    description: "Jardins paysagers, aires de jeux et espaces de détente.",
  },
  {
    icon: Handshake,
    title: "Accompagnement",
    description:
      "Un accompagnement personnalisé de la réservation jusqu'à la remise des clés.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#2A241F]">
      <section id="services" className="py-8 px-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-row gap-4 lg:justify-between lg:items-center"
          >
            <div className="py-8 px-4 md:px-16 lg:px-32 flex flex-col gap-4 text-white">
              <h1 className={`text-3xl md:text-5xl ${audiowide.className}`}>
                Nos Services
              </h1>

              <p className={poppins.className}>
                Nous proposons des solutions immobilières complètes pour
                répondre à tous vos besoins.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              className="services-swiper"
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.15,
                },
                768: {
                  slidesPerView: 2.2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <SwiperSlide className="pt-3" key={service.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      className="group rounded-2xl border border-[#D4AF37]/30 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                        <Icon
                          size={32}
                          className="text-[#D4AF37] transition group-hover:text-white"
                        />
                      </div>

                      <h3
                        className={`mb-3 text-2xl text-[#2A241F] ${audiowide.className}`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`leading-7 text-gray-600 ${poppins.className}`}
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
