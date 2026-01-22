import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setVisible(true); // scroll vers le haut
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scroll vers le bas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-6 left-0 right-0 z-50 px-4
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <nav
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-2xl
          bg-black/60 backdrop-blur-xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >
        {/* Logo */}
<div className="flex items-center">
  <img 
    src="/66.png" 
    alt="Focus Logo" 
    className="h-14 w-auto object-contain" 
  />
</div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          <NavItem label="Le Club" />
          <NavItem label="Cours" />

          <a
            href="https://espace.focus-business.com/"
            className="
              ml-2 px-4 py-2 rounded-xl
              bg-white text-black
              text-sm font-medium
              shadow-md
              transition-all
              hover:shadow-lg hover:-translate-y-[1px]
              active:translate-y-0 active:shadow-inner
            "
          >
            Espace Client
          </a>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ label }) {
  return (
    <a
      href="#"
      className="
        px-4 py-2 rounded-xl
        text-sm font-medium text-gray-300
        transition-all
        hover:text-white hover:bg-white/10
        active:bg-white/20
      "
    >
      {label}
    </a>
  );
}
