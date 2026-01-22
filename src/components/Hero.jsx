import { motion } from "framer-motion";
import focusBanniere from "../assets/focus-banniere.png";

export default function Hero() {
  const checkoutLink = "https://espace.focus-business.com/checkout";

  return (
    <section className="bg-black pt-24 pb-32 px-4">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Badge Trustpilot */}
        <div className="flex items-center gap-2 mb-14 opacity-80">
          <span className="text-sm font-semibold">4.8 sur 5</span>
          <svg width="16" height="16" fill="#00B67A" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold">Trustpilot</span>
        </div>

        {/* Titre */}
        <h1 className="focus-headline mb-10">
  Reste concentré{" "}
  <span className="light">sur l’essentiel</span>
</h1>

        {/* Sous-titre */}
        <p className="focus-subheadline mb-14">
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
        </div>

        {/* Mockup */}
<div className="mt-16 w-full max-w-6xl relative group"> 
  {/* Halo lumineux Bleu Ciel autour de l'image */}
  <div className="absolute -inset-1 bg-sky-400/30 blur-[120px] rounded-full opacity-100 transition-opacity duration-500" />
  
  {/* L'image remontée */}
  <img
    src={focusBanniere}
    alt="Focus Plateforme"
    className="relative z-10 w-full rounded-[32px] border border-sky-400/20 shadow-[0_0_50px_rgba(56,189,248,0.2)] object-cover"
  />
</div>

      </div>
    </section>
  );
}
