// src/components/BridgeProof.jsx
import { motion } from "framer-motion";

export default function BridgeProof() {
  const checkoutLink = "https://espace.focus-business.com/checkout";

  return (
    <section className="bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Container */}
        <motion.div
          // entrée section
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.55, once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // mouvement constant (subtil)
          animate={{ y: [0, -6, 0] }}
          className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm"
        >
          {/* Glow animé */}
          <motion.div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[560px] rounded-full blur-3xl opacity-70"
            animate={{ x: ["-10%", "10%", "-10%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(90deg, rgba(217,70,239,0.35), rgba(56,189,248,0.28), rgba(52,211,153,0.28))",
            }}
          />

          {/* Content */}
          <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { k: "Modules", v: "4 piliers" },
                { k: "Templates", v: "Prêts à copier" },
                { k: "Communauté", v: "Active chaque jour" },
              ].map((x, i) => (
                <motion.div
                  key={x.k}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.6, once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 * i }}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <div className="text-xs text-gray-500">{x.k}</div>
                  <div className="text-sm font-semibold text-gray-950">{x.v}</div>
                </motion.div>
              ))}
            </div>

            {/* Proof + CTA */}
            <div className="flex-1 md:text-right">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="text-gray-900 font-semibold"
              >
                “Du concret, pas de blabla.”
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                className="text-sm text-gray-600"
              >
                Cours clairs + templates + feedback → tu avances plus vite.
              </motion.div>

              {/* ✅ CTA checkout */}
              <motion.a
                href={checkoutLink}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="inline-flex mt-4 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-950 shadow-sm hover:shadow-md"
              >
                Voir les accès <span aria-hidden>→</span>
              </motion.a>
            </div>
          </div>

          {/* Divider + line animée */}
          <div className="h-px w-full bg-gray-200/70" />
          <div className="py-4">
            <div className="mx-auto h-[3px] w-28 rounded-full bg-gray-950/10 overflow-hidden">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gray-950/30"
                initial={{ x: "-70%" }}
                whileInView={{ x: "170%" }}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* transition du mouvement constant */}
          <motion.div
            className="hidden"
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
