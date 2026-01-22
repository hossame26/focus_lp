import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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

  // ===== NOUVEAU: DECK 3D DE CARTES (remplace le téléphone) =====
  const poses = [
    {
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      opacity: 1,
      blur: 0,
    },
    {
      x: 230,
      y: 58,
      scale: 0.86,
      rotateY: -38,
      rotateX: 10,
      z: -150,
      opacity: 0.55,
      blur: 2,
    },
    {
      x: -230,
      y: 58,
      scale: 0.86,
      rotateY: 38,
      rotateX: 10,
      z: -150,
      opacity: 0.55,
      blur: 2,
    },
  ];

  const getOrder = (i) => (i - active + steps.length) % steps.length; // 0 = active

  // Parallax souris
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });

  const tiltX = useTransform(smy, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(smx, [-0.5, 0.5], [-14, 14]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5..0.5
    mx.set(x);
    my.set(y);
  }
  function handleLeaveDeck() {
    mx.set(0);
    my.set(0);
  }
  // =============================================================

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
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">
              Focus
            </div>

            {/* Titre */}
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              Ce que{" "}
              <span className="text-white/45">vous trouverez</span>
              <br />
              dans FOCUS
            </h2>

            {/* Liste */}
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
                              isActive
                                ? "text-white"
                                : "text-white/45 bg-white/10",
                            ].join(" ")}
                            style={
                              isActive
                                ? {
                                    backgroundColor: ACCENT,
                                    boxShadow:
                                      "0 0 0 6px rgba(47,128,255,0.14)",
                                  }
                                : undefined
                            }
                          >
                            {s.id}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div
                            className={[
                              "text-lg md:text-xl font-medium tracking-tight",
                              isActive ? "text-white" : "text-white/35",
                            ].join(" ")}
                          >
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
                                transition={{
                                  duration: 4.5,
                                  ease: "linear",
                                }}
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

            {/* CTA */}
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
          </div>

          {/* RIGHT (DECK 3D) */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            <div
              onMouseMove={handleMove}
              onMouseLeave={handleLeaveDeck}
              className="relative w-full rounded-[38px] overflow-hidden border border-white/10 bg-white/[0.04] p-10 md:p-12"
              style={{ perspective: 1200 }}
            >
              <div className="absolute inset-0 opacity-45" style={dotBg} />

              {/* halo + vignette */}
              <motion.div
                key={active}
                className="pointer-events-none absolute -inset-16 rounded-[48px] blur-[120px] opacity-25"
                style={{ backgroundColor: ACCENT }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40" />

              {/* Group tilt */}
              <motion.div
                className="relative mx-auto h-[460px] md:h-[520px] w-full max-w-[760px] flex items-center justify-center"
                style={{
                  rotateX: tiltX,
                  rotateY: tiltY,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Deck */}
                {steps.map((s, i) => {
                  const order = getOrder(i); // 0/1/2
                  const pose = poses[order] || poses[1];

                  const imgOk = loaded[i] && !failed[i];
                  const isActiveCard = order === 0;

                  return (
                    <motion.button
                      key={s.id}
                      type="button"
                      onClick={() => setActive(i)}
                      className="absolute select-none"
                      style={{
                        transformStyle: "preserve-3d",
                        WebkitTapHighlightColor: "transparent",
                      }}
                      initial={false}
                      animate={{
                        x: pose.x,
                        y: pose.y,
                        scale: pose.scale,
                        rotateY: pose.rotateY,
                        rotateX: pose.rotateX,
                        z: pose.z,
                        opacity: pose.opacity,
                        filter: `blur(${pose.blur}px)`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        mass: 0.8,
                      }}
                    >
                      <div
                        className={[
                          "relative h-[380px] md:h-[440px] w-[260px] md:w-[300px]",
                          "rounded-[28px] overflow-hidden",
                          "border border-white/15",
                          "bg-black/40",
                          "shadow-[0_30px_120px_rgba(0,0,0,0.55)]",
                          isActiveCard
                            ? "ring-1 ring-white/10"
                            : "ring-0",
                        ].join(" ")}
                      >
                        {/* Background image */}
                        <div className="absolute inset-0">
                          {ready ? (
                            imgOk ? (
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={`${active}-${i}-${s.img}`}
                                  src={s.img}
                                  alt={s.title}
                                  className="h-full w-full object-cover"
                                  initial={{ opacity: 0, scale: 1.06 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.35 }}
                                />
                              </AnimatePresence>
                            ) : (
                              <div
                                className="h-full w-full"
                                style={
                                  isActiveCard
                                    ? fallbackStyle
                                    : {
                                        backgroundImage:
                                          "linear-gradient(135deg, rgba(47,128,255,0.18), rgba(0,0,0,0.45))",
                                      }
                                }
                              />
                            )
                          ) : (
                            <div className="h-full w-full animate-pulse bg-white/5" />
                          )}
                        </div>

                        {/* Glass overlays */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/8 via-white/0 to-white/10" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/55" />

                        {/* Scanlines */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.08]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 2px, transparent 6px)",
                          }}
                        />

                        {/* Header pill */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                            <span
                              className="inline-block h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: ACCENT,
                                boxShadow:
                                  "0 0 0 4px rgba(47,128,255,0.12)",
                              }}
                            />
                            Focus
                          </div>

                          <div className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
                            {s.id}
                          </div>
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                          <div className="text-white text-base md:text-lg font-semibold tracking-tight">
                            {s.title}
                          </div>
                          <div className="mt-1.5 text-white/70 text-sm md:text-base leading-snug">
                            {s.description}
                          </div>

                          {/* Active glow bar */}
                          {isActiveCard && (
                            <motion.div
                              key={`glow-${active}`}
                              className="mt-5 h-1.5 w-full rounded-full bg-white/10 overflow-hidden"
                            >
                              <motion.div
                                initial={{ x: "-30%", opacity: 0 }}
                                animate={{ x: "130%", opacity: 1 }}
                                transition={{
                                  duration: 1.2,
                                  ease: "linear",
                                  repeat: Infinity,
                                }}
                                className="h-full w-1/2 rounded-full"
                                style={{
                                  backgroundImage: `linear-gradient(90deg, rgba(47,128,255,0), ${ACCENT}, rgba(47,128,255,0))`,
                                }}
                              />
                            </motion.div>
                          )}
                        </div>

                        {/* Edge glow */}
                        <div
                          className="pointer-events-none absolute -inset-[1px] rounded-[28px] opacity-0 transition-opacity duration-300"
                          style={{
                            boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 90px rgba(47,128,255,0.18)`,
                            opacity: isActiveCard ? 1 : 0,
                          }}
                        />
                      </div>
                    </motion.button>
                  );
                })}

                {/* Center spotlight */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-[520px] blur-[40px] opacity-25 bg-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
