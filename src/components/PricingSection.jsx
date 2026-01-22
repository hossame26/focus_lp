import { motion } from "framer-motion";

const plans = [
  {
    name: "Discord Public",
    price: "0",
    description: "Pour découvrir l’ambiance.",
    features: [
      { text: "Accès aux salons de discussion généraux", included: true },
      { text: "Réseautage basique", included: true },
      { text: "Accès aux stratégies & ressources", included: false },
      { text: "Lives & ateliers exclusifs", included: false },
    ],
    cta: "Rejoindre le Discord Public",
    popular: false,
    badge: "Gratuit",
  },
  {
    name: "Focus Business Club",
    price: "9,90",
    description: "Pour ceux qui veulent des résultats.",
    features: [
      { text: "Accès TOTAL aux salons privés", included: true },
      { text: "Ressources & templates inclus", included: true },
      { text: "Lives & Q&A hebdomadaires", included: true },
      { text: "Accès aux replays", included: true },
    ],
    cta: "Rejoindre Focus",
    popular: true,
    badge: "Groupe premium",
  },
];

function CheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Animations utilitaires
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

const floatCard = (i = 0) => ({
  y: [0, -8 - i * 2, 0],
  rotate: [0, i % 2 === 0 ? -0.8 : 0.8, 0],
  transition: {
    duration: 4.8 + i * 0.7,
    repeat: Infinity,
    ease: "easeInOut",
    delay: i * 0.18,
  },
});

export default function PricingSection() {
  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header animée */}
        <motion.div
          className="text-center"
          variants={headerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
        >
          <motion.h2
            variants={headerItem}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gray-950"
          >
            Accédez à <span className="text-gray-950">FOCUS</span> dès
            <br />
            aujourd’hui
          </motion.h2>

          <motion.p variants={headerItem} className="mt-5 text-gray-600 text-base md:text-lg">
            Accédez à la communauté, aux ressources et aux replays.
          </motion.p>

          {/* Petit trait animé (remplit le vide sans surcharger) */}
          <motion.div
            variants={headerItem}
            className="mx-auto mt-7 h-[3px] w-28 rounded-full bg-gray-950/10 overflow-hidden"
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

        {/* Pricing grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.35, once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
              // ---- NOUVEAU: mouvement constant (pas statique) ----
              animate={floatCard(idx)}
              whileHover={{
                y: -10,
                rotate: idx === 0 ? -0.6 : 0.6,
                transition: { duration: 0.25 },
              }}
              className={[
                "relative rounded-[28px] border bg-white overflow-hidden will-change-transform",
                "shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
                plan.popular ? "border-gray-200" : "border-gray-200/70",
              ].join(" ")}
            >
              {/* subtle top glow for popular */}
              {plan.popular && (
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[520px] rounded-full bg-gradient-to-r from-fuchsia-200/70 via-sky-200/55 to-emerald-200/60 blur-3xl" />
              )}

              {/* grain subtil (rend vivant sans perdre le côté vendeur) */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              <div className="relative p-8 md:p-10">
                {/* top badges */}
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
                    {plan.badge}
                  </div>

                  {plan.popular && (
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium tracking-wide text-gray-700 shadow-sm">
                      Le plus populaire
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-950">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <div className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-950">
                    €{plan.price}
                  </div>
                  <div className="pb-2 text-gray-700 font-medium">/mois</div>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.4, once: true }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 + i * 0.04 }}
                      className={[
                        "flex items-start gap-3",
                        feature.included ? "text-gray-900" : "text-gray-400",
                      ].join(" ")}
                    >
                      <div className="mt-[2px]">
                        {feature.included ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
                            <CheckIcon className="text-gray-950" />
                          </span>
                        ) : (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                            <CrossIcon className="text-gray-400" />
                          </span>
                        )}
                      </div>

                      <div className="text-[15px] md:text-base leading-relaxed">
                        {feature.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <motion.a
                    href={
                      plan.popular
                        ? "https://espace.focus-business.com/checkout"
                        : "https://discord.gg/Z8qWfPyYMY"
                    }
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={[
                      "group inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-4",
                      "text-sm md:text-base font-medium",
                      "transition-all",
                      plan.popular
                        ? "border-gray-200 bg-white text-gray-950 shadow-sm hover:shadow-md"
                        : "border-gray-200 bg-gray-50 text-gray-950 hover:bg-white hover:shadow-sm",
                    ].join(" ")}
                  >
                    {plan.cta}
                    <motion.span
                      className="inline-flex"
                      initial={false}
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRightIcon className="text-gray-950" />
                    </motion.span>
                  </motion.a>

                  <div className="mt-4 text-center text-xs text-gray-500">
                    Aucun résultat spécifique n’est garanti. Annulable à tout moment.
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
