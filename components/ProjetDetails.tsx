"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Home, Ruler, Calendar, Wallet } from "lucide-react";
import { audiowide, poppins } from "./HeroSection";
import Link from "next/link";
type ProjectDetailsProps = {
  projet: {
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

const ProjectDetails = ({ projet }: ProjectDetailsProps) => {
  return (
    <div className="bg-gradient-to-r from-[#2A241F] via-[#4A3D24] to-[#B08D32] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 ">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={projet.images[0]}
              alt={projet.name}
              width={700}
              height={500}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h1 className={`text-5xl mb-3 ${audiowide.className}`}>
                {projet.name}
              </h1>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className={poppins.className}>{projet.location}</span>
              </div>
            </div>

            <p className={`leading-8 ${poppins.className}`}>
              {projet.description}
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-xl border p-4">
                <Home className="text-[#D4AF37]" />
                <h3 className="font-semibold mt-2">Type</h3>
                <p>{projet.type}</p>
              </div>

              <div className="rounded-xl border p-4">
                <Ruler className="text-[#D4AF37]" />
                <h3 className="font-semibold mt-2">Surface</h3>
                <p>{projet.surface}</p>
              </div>

              <div className="rounded-xl border p-4">
                <Wallet className="text-[#D4AF37]" />
                <h3 className="font-semibold mt-2">Prix</h3>
                <p>{projet.price}</p>
              </div>

              <div className="rounded-xl border p-4">
                <Calendar className="text-[#D4AF37]" />
                <h3 className="font-semibold mt-2">Livraison</h3>
                <p>{projet.delivery}</p>
              </div>
            </div>

            <div>
              <h2 className={`text-2xl mb-4 ${audiowide.className}`}>
                Caractéristiques
              </h2>

              <ul className="grid sm:grid-cols-2 gap-3">
                {projet.caracteristiques.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[#D4AF37]/30 p-3"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/#contact">
              <button
                className={`rounded-xl bg-gradient-to-r from-[#B08D32] to-[#D4AF37] px-8 py-4 text-white transition hover:scale-105 ${audiowide.className}`}
              >
                Contactez-nous
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
