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
      <path
        d="M20 6 9 17l-5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <path
        d="M18 6 6 18M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <path
        d="M7 17 17 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7h8v8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header (DA blanche, propre) */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gray-950">
            Accédez à <span className="text-gray-950">FOCUS</span> dès
            <br />
            aujourd’hui
          </h2>
          <p className="mt-5 text-gray-600 text-base md:text-lg">
            Accédez à la communauté, aux ressources et aux replays.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.35, once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={[
                "relative rounded-[28px] border bg-white overflow-hidden",
                "shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
                plan.popular
                  ? "border-gray-200"
                  : "border-gray-200/70",
              ].join(" ")}
            >
              {/* subtle top glow for popular */}
              {plan.popular && (
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[520px] rounded-full bg-gradient-to-r from-fuchsia-200/70 via-sky-200/55 to-emerald-200/60 blur-3xl" />
              )}

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
                  {plan.features.map((feature) => (
                    <div
                      key={feature.text}
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
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <motion.a
                    href={plan.popular ? "https://espace.focus-business.com/checkout" : "https://discord.gg/Z8qWfPyYMY"}
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

              {/* bottom hairline */}
              <div className="h-px w-full bg-gray-200/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
