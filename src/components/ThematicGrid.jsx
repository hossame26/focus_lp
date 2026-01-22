import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Target, Cpu, Zap, X } from "lucide-react";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";
import img5 from "../assets/image5.png";

const themes = [
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: <ShoppingCart className="text-pink-500" />,
    img: img1,
    details:
      "Maîtrisez le sourcing, la logistique et la conversion pour bâtir une boutique rentable dès le premier mois.",
    gridClass: "md:col-span-2 md:row-span-2",
    float: { amp: 10, dur: 6.2, rot: -0.8 },
  },
  {
    id: "branding",
    title: "E-Branding",
    icon: <Target className="text-blue-500" />,
    img: img2,
    details:
      "Créez une identité visuelle forte et un storytelling qui transforme vos visiteurs en ambassadeurs.",
    gridClass: "md:col-span-1 md:row-span-1",
    float: { amp: 8, dur: 5.4, rot: 0.8 },
  },
  {
    id: "ia",
    title: "IA",
    icon: <Cpu className="text-purple-500" />,
    img: img3,
    details: "Automatisez 80% de vos tâches répétitives grâce aux meilleurs outils d'IA.",
    gridClass: "md:col-span-1 md:row-span-1",
    float: { amp: 9, dur: 5.8, rot: -0.6 },
  },
  {
    id: "automatisation",
    title: "Automatisation",
    icon: <Zap className="text-amber-500" />,
    img: img5,
    details:
      "Connectez vos outils entre eux pour faire tourner votre business pendant que vous dormez.",
    gridClass: "md:col-span-3 md:row-span-1",
    float: { amp: 7, dur: 6.6, rot: 0.6 },
  },
];

// ===== Animations header (entrée) =====
const headerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ===== Float constant (cartes) =====
const floatCard = ({ amp = 8, dur = 6, rot = 0.6 } = {}) => ({
  y: [0, -amp, 0],
  rotate: [0, rot, 0],
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" },
});

export default function ThematicGrid() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <section className="bg-white py-20 md:py-32 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER animée */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={headerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
        >
          <motion.div
            variants={headerItem}
            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm mb-6"
          >
            Votre business avant tout !
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] text-gray-950"
          >
            <span className="bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              Découvrez
            </span>{" "}
            notre
            <br />
            plateforme
          </motion.h2>

          {/* Petit trait animé (remplit le vide) */}
          <motion.div
            variants={headerItem}
            className="mx-auto mt-8 h-[3px] w-28 rounded-full bg-gray-950/10 overflow-hidden"
          >
            <motion.div
              className="h-full w-1/2 rounded-full bg-gray-950/30"
              initial={{ x: "-70%" }}
              whileInView={{ x: "170%" }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {themes.map((theme, idx) => (
            <motion.div
              key={theme.id}
              onClick={() => setSelectedTheme(theme)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.25, once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
              // ---- NOUVEAU: mouvement constant (pas statique) ----
              animate={floatCard(theme.float)}
              whileHover={{
                scale: 1.012,
                y: -10,
                transition: { duration: 0.25 },
              }}
              className={`${theme.gridClass} group relative bg-white border border-gray-200 rounded-[32px] overflow-hidden p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer will-change-transform`}
            >
              {/* grain subtil */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.9) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* halo très léger */}
              <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-200/35 via-sky-200/30 to-emerald-200/30 blur-3xl" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-gray-50 rounded-2xl border border-gray-100"
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    transition={{ duration: 0.25 }}
                  >
                    {theme.icon}
                  </motion.div>
                  <ArrowUpRight className="text-gray-300 group-hover:text-gray-950 transition-colors" />
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-2 rounded-xl inline-block max-w-fit">
                  <h3 className="text-2xl font-bold text-gray-950 mb-1">
                    {theme.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-1">
                    {theme.details}
                  </p>
                </div>
              </div>

              {/* IMAGE STYLE APP-WINDOW */}
              <div className="absolute inset-0 z-0 pl-32 pt-12 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <div className="w-full h-full rounded-tl-3xl overflow-hidden border-l border-t border-gray-200 shadow-2xl bg-white">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50/50">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  </div>
                  <img src={theme.img} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODALE */}
      <AnimatePresence>
        {selectedTheme && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTheme(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] p-10 md:p-14 shadow-2xl z-[110]"
            >
              <button
                onClick={() => setSelectedTheme(null)}
                className="absolute top-8 right-8 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 border border-gray-200 z-[120] hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    {selectedTheme.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-950">
                    {selectedTheme.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedTheme.details}
                </p>

                <motion.a
                  href="https://espace.focus-business.com/checkout"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center gap-2 rounded-full bg-black text-white px-8 py-4 font-bold shadow-lg hover:bg-gray-900 transition-all"
                >
                  Accéder au module <ArrowUpRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
