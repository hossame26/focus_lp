import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import imgS1 from "../assets/imagephone1.png";
import imgS2 from "../assets/imagephone2.png";
import imgS3 from "../assets/imagephone3.png";


const ACCENT = "#2F80FF";

const steps = [
  {
    id: "01",
    title: "Accès avec plateformes interactifs",
    description: "Astuces e-commerce, stratégies digitales, études de cas.",
    img: imgS1,
  },
  {
    id: "02",
    title: "Ressources exclusives",
    description: "Templates, checklists, documents prêts à l’emploi.",
    img: imgS2,
  },
  {
    id: "03",
    title: "Communauté privée",
    description: "Un espace pour avancer plus vite, ensemble.",
    img: imgS3,
  },
];

function preloadImages(urls) {
  return Promise.allSettled(
    urls.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
          img.src = src;
        })
    )
  );
}

export default function InteractiveFeatures() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // états robustes
  const [loaded, setLoaded] = useState(() => steps.map(() => false));
  const [failed, setFailed] = useState(() => steps.map(() => false));
  const [ready, setReady] = useState(false); // évite écran vide au premier rendu

  const dotBg = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
      backgroundSize: "14px 14px",
    }),
    []
  );

  // Preload au montage pour éviter "plus rien"
  useEffect(() => {
    let cancelled = false;
    preloadImages(steps.map((s) => s.img)).then((results) => {
      if (cancelled) return;

      const nextLoaded = [...loaded];
      const nextFailed = [...failed];

      results.forEach((r, idx) => {
        if (r.status === "fulfilled") nextLoaded[idx] = true;
        else nextFailed[idx] = true;
      });

      setLoaded(nextLoaded);
      setFailed(nextFailed);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rotation auto (toujours dynamique)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % steps.length);
    }, 4500);
    return () => clearInterval(t);
  }, [paused]);

  const activeStep = steps[active];
  const activeImgOk = loaded[active] && !failed[active];

  // Fallback visuel si image KO (évite panneau vide)
  const fallbackStyle = useMemo(() => {
    const maps = [
      "linear-gradient(135deg, rgba(47,128,255,0.28), rgba(0,0,0,0.25))",
      "linear-gradient(135deg, rgba(47,128,255,0.20), rgba(0,0,0,0.35))",
      "linear-gradient(135deg, rgba(47,128,255,0.24), rgba(0,0,0,0.30))",
    ];
    return { backgroundImage: maps[active] || maps[0] };
  }, [active]);

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* ambient subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute -bottom-44 -right-44 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div
            className="lg:col-span-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* 1. Le Badge */}
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">
              Focus
            </div>

            {/* 2. Le Titre */}
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              Ce que{" "}
              <span className="text-white/45">vous trouverez</span>
              <br />
              dans FOCUS
            </h2>

            {/* 3. La liste des étapes */}
            <div className="mt-10 relative">
              <div className="absolute left-[20px] top-2 bottom-2 w-px bg-white/10" />

              <div className="space-y-7">
                {steps.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full text-left"
                    >
                      <div className="flex gap-6 items-start">
                        <div className="relative mt-0.5">
                          <div
                            className={[
                              "h-11 w-11 rounded-full flex items-center justify-center text-sm font-semibold",
                              isActive ? "text-white" : "text-white/45 bg-white/10",
                            ].join(" ")}
                            style={isActive ? { backgroundColor: ACCENT, boxShadow: "0 0 0 6px rgba(47,128,255,0.14)" } : undefined}
                          >
                            {s.id}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className={[ "text-lg md:text-xl font-medium tracking-tight", isActive ? "text-white" : "text-white/35" ].join(" ")}>
                            {s.title}
                          </div>
                          <div className="mt-2 text-white/55 text-sm md:text-base">
                            {s.description}
                          </div>
                          {isActive && (
                            <div className="mt-5 h-1.5 w-[320px] max-w-full rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                key={active}
                                initial={{ width: "0%" }}
                                animate={{ width: paused ? "0%" : "100%" }}
                                transition={{ duration: 4.5, ease: "linear" }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: ACCENT }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. LE NOUVEAU BOUTON CTA (Juste ici !) */}
            {/* 4. LE NOUVEAU BOUTON CTA (Noir & Blanc) */}
<div className="mt-12">
  <a
    href="https://espace.focus-business.com/checkout"
    className="
      inline-flex items-center gap-3
      px-8 py-4 rounded-full
      bg-white text-black 
      font-semibold text-base
      hover:bg-gray-100 hover:-translate-y-1
      transition-all duration-300
      shadow-[0_10px_30px_rgba(255,255,255,0.1)]
    "
  >
    Rejoindre Focus maintenant
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
</div>
          </div>

          {/* RIGHT */}
<div className="lg:col-span-7 relative flex justify-center items-center"> {/* Ajout de flex pour centrer le tel */}
  <div className="relative rounded-[38px] overflow-hidden border border-white/10 bg-white/[0.04] w-full flex justify-center items-center p-10">
    <div className="absolute inset-0 opacity-45" style={dotBg} />

    {/* --- LE SMARTPHONE COMMENCE ICI --- */}
    <div className="relative 
                    w-[280px] md:w-[320px] 
                    aspect-[9/19] 
                    rounded-[3rem] 
                    border-[10px] border-white/15 
                    bg-black 
                    overflow-hidden 
                    shadow-[0_0_100px_rgba(47,128,255,0.2)] 
                    z-20">
      
      {/* Encoche (Dynamic Island) */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 border border-white/5" />

      {/* Contenu de l'écran */}
      <div className="h-full w-full bg-black">
        {!ready ? (
          <div className="h-full w-full animate-pulse bg-white/5" />
        ) : (
          <>
            {activeImgOk ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={activeStep.img}
                  alt={activeStep.title}
                  className="w-full h-full object-cover" // object-cover est parfait ici
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            ) : (
               <div className="h-full w-full" style={fallbackStyle} />
            )}
            {/* Reflet sur l'écran */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10" />
          </>
        )}
      </div>
    </div>
    {/* --- LE SMARTPHONE FINIT ICI --- */}

  </div>
  
  {/* Halo réactif en arrière-plan */}
  <motion.div
    key={active}
    className="pointer-events-none absolute -inset-12 rounded-[48px] blur-[110px] opacity-20"
    style={{ backgroundColor: ACCENT }}
  />
</div>
        </div>
      </div>
    </section>
  );
}
