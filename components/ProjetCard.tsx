"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { audiowide, poppins } from "./HeroSection";

type ProjectCardProps = {
  projet: {
    slug: string;
    name: string;
    location: string;
    images: string[];
    description: string;
    type: string;
    surface: string;
    price: string;
    delivery: string;
    caracteristiques: string[];
  };
};

const ProjetCard = ({ projet }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={projet.images[0]}
          alt={projet.name}
          width={500}
          height={300}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className={`text-xl font-bold ${audiowide.className}`}>
          {projet.name}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <MapPin size={16} />
          <span className={poppins.className}>{projet.location}</span>
        </div>

        <p className={`mt-3 mb-3 text-gray-300 ${poppins.className}`}>
          {projet.description}
        </p>

        <Link
          href={`/projets/${projet.slug}`}
          className={`group/button mt-auto flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#B08D32] to-[#D4AF37] px-5 py-3 text-white transition-all hover:scale-105 ${audiowide.className}`}
        >
          Details
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-2"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjetCard;
