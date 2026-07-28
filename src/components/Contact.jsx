import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#A30000] py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[220px]" />

        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-red-400/20 blur-[150px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-red-300/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[8px] text-red-200">
            OPEN TO OPPORTUNITIES
          </p>

          <h2 className="mt-8 text-6xl font-black leading-[0.9] text-white lg:text-8xl">
            Ready to
            <br />
            build products
            <br />
            people love.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/75">
            Frontend Engineer passionate about building responsive,
            performant and beautifully crafted web applications using
            React and modern JavaScript.
          </p>

          {/* Badges */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <MapPin size={18} className="text-white" />
              <span className="text-white">
                India
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <Briefcase size={18} className="text-white" />
              <span className="text-white">
                Frontend Engineer
              </span>
            </div>

            <div className="rounded-full bg-green-500/20 px-5 py-3 text-green-200">
              ● Available for Hire
            </div>

          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="mailto:yourmail@gmail.com"
            className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-white
            px-10
            py-5
            text-lg
            font-semibold
            text-[#A30000]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_20px_60px_rgba(255,255,255,.25)]
          "
          >
            Let's Work Together

            <ArrowUpRight
              size={20}
              className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            />
          </a>
        </motion.div>

        {/* Contact Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          {/* EMAIL */}

          <motion.a
            whileHover={{ y: -10 }}
            href="mailto:tuhinaparia@gmail.com"
            className="
            group
            rounded-[30px]
            border
            border-white/15
            bg-white/10
            p-8
            backdrop-blur-2xl
            transition
            hover:border-white/30
            hover:bg-white/15
          "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition group-hover:rotate-12">
              <Mail className="text-white" size={30} />
            </div>

            <p className="mt-8 text-xs uppercase tracking-[4px] text-red-200">
              Email
            </p>

            <h3 className="mt-2 text-xl font-bold text-white break-all">
              tuhinaparia@gmail.com
            </h3>

            <p className="mt-4 text-white/60">
              Usually replies within 24 hours.
            </p>
          </motion.a>

          {/* LINKEDIN */}

          <motion.a
            whileHover={{ y: -10 }}
            href="https://www.linkedin.com/in/tuhina-paria/"
            target="_blank"
            rel="noreferrer"
            className="
            group
            rounded-[30px]
            border
            border-white/15
            bg-white/10
            p-8
            backdrop-blur-2xl
            transition
            hover:border-white/30
            hover:bg-white/15
          "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition group-hover:rotate-12">
              <Linkedin className="text-white" size={30} />
            </div>

            <p className="mt-8 text-xs uppercase tracking-[4px] text-red-200">
              LinkedIn
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Connect
            </h3>

            <p className="mt-4 text-white/60">
              Let's connect professionally.
            </p>
          </motion.a>

          {/* GITHUB */}

          <motion.a
            whileHover={{ y: -10 }}
            href="https://github.com/Tuhina-Paria"
            target="_blank"
            rel="noreferrer"
            className="
            group
            rounded-[30px]
            border
            border-white/15
            bg-white/10
            p-8
            backdrop-blur-2xl
            transition
            hover:border-white/30
            hover:bg-white/15
          "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition group-hover:rotate-12">
              <Github className="text-white" size={30} />
            </div>

            <p className="mt-8 text-xs uppercase tracking-[4px] text-red-200">
              GitHub
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Projects
            </h3>

            <p className="mt-4 text-white/60">
              Explore my code and projects.
            </p>
          </motion.a>

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 text-center"
        >
          <p className="text-3xl font-bold text-white">
            Thanks for visiting.
          </p>

          <p className="mt-4 text-lg text-white/60">
            Let's create something meaningful together.
          </p>
        </motion.div>

      </div>
    </section>
  );
}