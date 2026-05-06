import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const handleScrollTo = (id, name) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(name);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (window.scrollY >= top - 120 && window.scrollY < top + height - 120) {
          setActive(link.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => handleScrollTo("home", "Home")}
          className="text-lg font-semibold text-white tracking-wide"
        >
          Tuhina
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.id, link.name)}
              className={`transition ${
                active === link.name
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleScrollTo("contact", "Contact")}
          className="hidden md:block px-5 py-2 text-sm rounded-full border border-white/20 hover:border-white transition"
        >
          Contact
        </button>

        {/* MOBILE ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-xl bg-black/90 border border-white/10">
          <div className="flex flex-col p-5 gap-4 text-sm">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id, link.name)}
                className="text-left text-white/70 hover:text-white"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleScrollTo("contact", "Contact")}
              className="mt-2 py-2 rounded-full border border-white/20"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}