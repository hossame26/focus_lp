import { motion } from "framer-motion";
import focusBanniere from "../assets/focus-banniere.png";

import dashboardGgl from "../assets/dashboard_ggl.png";
import dashboardStripe from "../assets/dashboard_stripe.png";
import dashboardShopify from "../assets/dashboard_shopify.webp";
import templateSite from "../assets/template_site.jpeg";

const floatAnim = (i = 0) => ({
  y: [0, -10 - i * 2, 0],
  rotate: [0, -1.2, 1.2, 0],
  transition: {
    duration: 4.2 + i * 0.6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.15,
  },
});

const floatAnimSoft = (i = 0) => ({
  y: [0, -8 - i * 1.5, 0],
  rotate: [0, -0.6, 0.6, 0],
  scale: [1, 1.01, 1],
  transition: {
    duration: 5 + i * 0.7,
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.12,
  },
});

function FloatingCard({ src, label, className, i = 0 }) {
  return (
    <motion.div
      className={[
        "absolute z-30 pointer-events-none select-none", // <-- z-30 pour passer AU-DESSUS
        "rounded-2xl overflow-hidden",
        "border border-white/12 bg-black/35 backdrop-blur-md",
        "shadow-[0_30px_120px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
      animate={floatAnim(i)}
    >
      <div className="absolute top-3 left-3 z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-sky-400/80 shadow-[0_0_0_4px_rgba(56,189,248,0.12)]" />
          {label}
        </div>
      </div>

      <div className="relative">
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover opacity-[0.92]"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/8" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/35" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const checkoutLink = "https://espace.focus-business.com/checkout";

  return (
    <section className="bg-black pt-24 pb-32 px-4 overflow-hidden relative">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-sky-400/10 blur-[160px]" />
        <div className="absolute -bottom-44 -right-44 h-[560px] w-[560px] rounded-full bg-sky-400/10 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-10">
        {/* Badge Trustpilot */}
        <div className="flex items-center gap-2 mb-14 opacity-80">
          <span className="text-sm font-semibold">4.8 sur 5</span>
          <svg width="16" height="16" fill="#00B67A" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold">Trustpilot</span>
        </div>

        {/* Titre */}
        <h1 className="focus-headline mb-10 text-center">
          Reste concentré <span className="light">sur l’essentiel</span>
        </h1>

        {/* Sous-titre */}
        <p className="focus-subheadline mb-14 text-center">
          FOCUS est une plateforme privée où tu accèdes à des cours clairs et une
          communauté de créateurs et d'entrepreneurs.
        </p>

        {/* Bouton CTA */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <a
            href={checkoutLink}
            className="relative flex items-center gap-3 px-8 py-4 rounded-full
                       bg-[#0B0B0B] border border-white/10
                       text-white font-semibold text-base
                       hover:bg-white hover:text-black transition-all"
          >
            Rejoindre Focus
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M5 12h14m-7-7 7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="mt-3 text-xs text-white/55 text-center">
            Accès immédiat • Paiement sécurisé
          </div>
        </div>

        {/* Mockup + floating assets */}
        <div className="mt-16 w-full max-w-6xl relative">
          {/* Halo lumineux */}
          <div className="absolute -inset-2 bg-sky-400/25 blur-[140px] rounded-full opacity-100" />

          {/* Banner principale (en dessous) */}
          <motion.img
            src={focusBanniere}
            alt="Focus Plateforme"
            className="relative z-10 w-full rounded-[32px] border border-sky-400/20 shadow-[0_0_60px_rgba(56,189,248,0.22)] object-cover"
            animate={floatAnimSoft(0)}
            whileHover={{
              scale: 1.01,
              y: -6,
              transition: { duration: 0.25 },
            }}
          />

          {/* Reflet premium (entre bannière et cards) */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-[32px] bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />

          {/* Floating cards (AU-DESSUS de la bannière) */}
          <div className="hidden md:block absolute inset-0 z-30 pointer-events-none">
            <FloatingCard
              src={dashboardStripe}
              label="Dashboard Stripe"
              i={0}
              className="w-[260px] h-[160px] left-[-18px] top-[-26px] rotate-[-2deg] opacity-[0.92]"
            />
            <FloatingCard
              src={dashboardGgl}
              label="Dashboard Google"
              i={1}
              className="w-[280px] h-[170px] right-[-22px] top-[6px] rotate-[2deg] opacity-[0.90]"
            />
            <FloatingCard
              src={dashboardShopify}
              label="Dashboard Shopify"
              i={2}
              className="w-[300px] h-[180px] left-[18px] bottom-[-42px] rotate-[1deg] opacity-[0.88]"
            />
            <FloatingCard
              src={templateSite}
              label="Template site"
              i={3}
              className="w-[260px] h-[160px] right-[10px] bottom-[-34px] rotate-[-1deg] opacity-[0.88]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
