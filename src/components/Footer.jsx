import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#860000] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-400/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 py-20">

        {/* Top */}

        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">

          {/* Left */}

          <div className="max-w-md">

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-black"
            >
              Tuhina<span className="text-red-300">.</span>
            </motion.h2>

            <p className="mt-6 leading-8 text-white/70">
              Frontend Engineer passionate about building
              fast, scalable and beautiful web applications
              using modern technologies.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-red-700"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-red-700"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-red-700"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Navigation
            </h3>

            <div className="space-y-4">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/60 transition hover:text-white"
                >
                  {link.name}

                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between">

          <p className="text-white/50">
            © 2026 Tuhina Paria. All rights reserved.
          </p>

          <p className="text-white/50">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}