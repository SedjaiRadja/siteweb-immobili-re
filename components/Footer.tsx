import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { audiowide, poppins } from "./HeroSection";
const logosImages = [
  { src: "/facebook2.png", alt: "Facebook", href: "https://facebook.com" },
  { src: "/instagram2.png", alt: "Instagram", href: "https://instagram.com" },
  { src: "/linkedin2.png", alt: "LinkedIn", href: "https://linkedin.com" },
  { src: "/tiktok2.png", alt: "TikTok", href: "https://tiktok.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2A241F] text-white border-t border-[#D4AF37]/20">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className={`text-2xl text-[#D4AF37] ${audiowide.className}`}>
              VELORA PROMOTION IMMOBILIERE
            </h2>

            <p className={`mt-4 text-gray-300 leading-7 ${poppins.className}`}>
              Nous concevons des résidences modernes offrant confort, sécurité
              et qualité de vie pour nos clients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`mb-5 text-lg ${audiowide.className}`}>
              Navigation
            </h3>

            <ul className={`space-y-3 ${poppins.className}`}>
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition">
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  href="/#projets"
                  className="hover:text-[#D4AF37] transition"
                >
                  Nos Projets
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#D4AF37] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#D4AF37] transition"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#D4AF37] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`mb-5 text-lg ${audiowide.className}`}>Contact</h3>

            <div className={`space-y-4 text-gray-300 ${poppins.className}`}>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span>Oran, Algérie</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37]" />
                <span>+213 578 24 67 69</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37]" />
                <span>contact@velora-prom.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className={`mb-5 text-lg ${audiowide.className}`}>
              Suivez-nous
            </h3>

            <div className="flex gap-4">
              {logosImages.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#D4AF37]/20 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className={`text-gray-400 ${poppins.className}`}>
            © {new Date().getFullYear()} VELORA PROMOTION IMMOBILIERE. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
