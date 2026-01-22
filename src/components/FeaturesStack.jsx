import { motion } from "framer-motion";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";
import img5 from "../assets/image5.png";

const cards = [
  {
    id: "01",
    title: "D’un réseau engagé qui partage les mêmes ambitions",
    desc: "Rejoignez des entrepreneurs et créateurs animés par la même énergie que vous. Échangez idées, retours d’expérience et opportunités pour progresser ensemble.",
    img: img1,
    cta: "Rejoindre le réseau",
    link: "https://espace.focus-business.com/checkout",
  },
  {
    id: "02",
    title: "De l’e-commerce, du branding, de l’IA et du digital",
    desc: "Chaque semaine, nous partageons des stratégies concrètes, des astuces pratiques et des analyses actuelles pour booster vos projets en ligne.",
    img: img2,
    cta: "Accéder aux cours",
    link: "https://espace.focus-business.com/checkout",
  },
  {
    id: "03",
    title: "D’un accompagnement collectif pour progresser plus vite",
    desc: "Vous n’êtes plus seul : la force du groupe vous permet d’avancer avec plus de clarté et de confiance. Les questions des autres enrichissent votre parcours.",
    img: img3,
    cta: "Progresser avec nous",
    link: "https://espace.focus-business.com/checkout",
  },
  {
    id: "04",
    title: "D’une communauté active accessible à tout moment",
    desc: "Un espace privé disponible 24/7 pour discuter, poser vos questions et créer des connexions réelles avec des profils variés : débutants motivés, entrepreneurs confirmés, experts.",
    img: img3,
    cta: "Découvrir le salon",
    link: "https://discord.gg/Z8qWfPyYMY",
  },
  {
    id: "05",
    title: "D’outils et de ressources pour structurer vos projets",
    desc: "Accédez à des modèles de business plans, checklists, templates et documents stratégiques pour mettre en place des actions concrètes immédiatement.",
    img: img5,
    cta: "Télécharger les outils",
    link: "https://espace.focus-business.com/checkout",
  },
];

export default function FeaturesStack() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header (DA du site actuel: clair, propre, premium) */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
            Votre groupe business
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gray-950">
            Avec{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              Focus
            </span>{" "}
            voici
            <br />
            ce que tu obtiens
          </h2>
        </div>

        {/* Stack sticky */}
        <div className="relative">
          {cards.map((card, index) => (
            <div
              key={index}
              className="sticky top-24 min-h-[92vh] flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.55 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="
                  w-full
                  rounded-[28px]
                  bg-white
                  border border-gray-200
                  shadow-[0_18px_60px_rgba(0,0,0,0.10)]
                  p-8 md:p-14
                  flex flex-col md:flex-row
                  gap-10 md:gap-14
                  items-start md:items-center
                  min-h-[70vh]
                  relative
                  overflow-hidden
                "
              >
                {/* Fond très subtil (évite l’effet “gros chiffre sombre”) */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-200/60 via-white to-emerald-200/50 blur-3xl" />
                  <div className="absolute -bottom-48 -left-48 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-200/50 via-white to-sky-200/40 blur-3xl" />
                </div>

                {/* Col texte */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="text-5xl md:text-6xl font-semibold tracking-tight text-sky-500">
                        {card.id}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-950 leading-[1.12]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                        {card.desc}
                      </p>

                      <div className="mt-8">
                        <a
                          href={card.link}
                          className="
                            inline-flex items-center gap-3
                            rounded-full
                            border border-gray-200
                            bg-white
                            px-6 py-3
                            text-sm font-medium text-gray-950
                            shadow-sm
                            transition-all
                            hover:shadow-md hover:-translate-y-[1px]
                            active:translate-y-0 active:shadow-inner
                          "
                        >
                          {card.cta}
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
                  </div>
                </div>

                {/* Col image (cadre homogène “app window”) */}
                <div className="flex-1 w-full relative z-10">
                  <div
                    className="
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                      overflow-hidden
                      transform-gpu
                      transition-transform duration-700
                      hover:scale-[1.01]
                    "
                  >
                    {/* top bar façon app */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                      <span className="ml-3 text-xs text-gray-500 truncate">
                        {card.title}
                      </span>
                    </div>

                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
