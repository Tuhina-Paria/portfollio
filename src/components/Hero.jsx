import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">

      {/* subtle glow (premium feel, not heavy) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_60%)]" />

      <div className="w-full max-w-xl text-center relative z-10">

        {/* SMALL TAG */}
        <p className="text-[10px] sm:text-xs text-white/40 mt-8 mb-3 tracking-widest uppercase">
          Websites for restaurants & local businesses
        </p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-[26px] leading-snug
            sm:text-4xl sm:leading-tight
            font-semibold
          "
        >
          Get a website that{" "}
          <span className="text-white">brings customers</span>{" "}
          to your business
        </motion.h1>

        {/* SUBTEXT */}
        <p className="
          text-white/60 
          mt-4 
          text-sm 
          sm:text-base
          leading-relaxed
        ">
          I design fast, mobile-first websites that help people
          discover your business and take action.
        </p>

        {/* TRUST */}
        <div className="mt-5 text-xs sm:text-sm text-white/50 space-y-1">
          <p>✔ Real restaurant demo built</p>
          <p>✔ Clean & modern UI</p>
          <p>✔ Ready for client projects</p>
        </div>

        {/* CTA */}
        <div className="
          flex flex-col sm:flex-row 
          gap-3 
          justify-center 
          mt-8
        ">

          <a
            href="#projects"
            className="
              px-6 py-3 
              rounded-full 
              border border-white/20 
              text-sm
              hover:bg-white/5
              transition
              active:scale-95
            "
          >
            View Work
          </a>

          <a
            href="https://wa.me/919434024513"
            target="_blank"
            className="
              px-6 py-3 
              rounded-full 
              bg-white text-black 
              text-sm font-medium
              shadow-lg shadow-white/10
              hover:scale-[1.02]
              transition
              active:scale-95
            "
          >
            Get Website
          </a>

        </div>

        {/* spacing */}
        <div className="h-12 sm:h-16" />

      </div>
    </section>
  );
}