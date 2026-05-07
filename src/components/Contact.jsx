import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white px-4"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-semibold leading-snug"
        >
          Need a website for your business?
        </motion.h2>

        {/* SUBTEXT */}
        <p className="text-white/60 mt-3 text-sm sm:text-base leading-relaxed">
          I design clean, mobile-friendly websites that help you
          attract customers and grow online.
        </p>

        {/* 🔥 VALUE POINTS */}
        <div className="mt-6 space-y-2 text-xs sm:text-sm text-white/50">
          <p>✔ Designed for real businesses (restaurants, local shops)</p>
          <p>✔ Fast loading + mobile-first</p>
          <p>✔ Simple, modern & easy to use</p>
        </div>

        {/* 🔥 CTA BUTTON */}
        <div className="mt-8">
         <p className="text-white/70 text-sm sm:text-base">
  Let’s create a modern website that helps your business stand out.
 </p>
         
        </div>

      </div>
    </section>
  );
}