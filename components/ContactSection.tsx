"use client";

import { motion } from "framer-motion";
import { audiowide, poppins } from "./HeroSection";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="bg-gradient-to-r from-[#B08D32] via-[#4A3D24] to-[#2A241F] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className={`text-4xl md:text-5xl mb-6 ${audiowide.className}`}>
              Contactez-nous
            </h2>

            <p className={`text-gray-200 leading-8 mb-8 ${poppins.className}`}>
              Vous souhaitez obtenir plus d&apos;informations sur nos projets
              immobiliers ou planifier une visite ? Notre équipe est à votre
              disposition pour répondre à toutes vos questions.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className={`text-[#D4AF37] ${audiowide.className}`}>
                  Adresse
                </h4>
                <p className={poppins.className}>Oran, Algérie</p>
              </div>

              <div>
                <h4 className={`text-[#D4AF37] ${audiowide.className}`}>
                  Téléphone
                </h4>
                <p className={poppins.className}>+213 578 24 67 69</p>
              </div>

              <div>
                <h4 className={`text-[#D4AF37] ${audiowide.className}`}>
                  Email
                </h4>
                <p className={poppins.className}>contact@velora-prom.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-[#D4AF37]/30 bg-white/10 backdrop-blur-md p-8 shadow-2xl space-y-5"
          >
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-gray-300 outline-none transition focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-gray-300 outline-none transition focus:border-[#D4AF37]"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-gray-300 outline-none transition focus:border-[#D4AF37]"
            />

            <textarea
              rows={5}
              placeholder="Votre message..."
              className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-gray-300 outline-none transition focus:border-[#D4AF37]"
            />

            <motion.button
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              type="submit"
              className={`w-full rounded-xl bg-gradient-to-r from-[#B08D32] to-[#D4AF37] py-4 text-white transition hover:scale-[1.02] hover:shadow-xl ${audiowide.className}`}
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
