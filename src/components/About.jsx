import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">

      <div className="max-w-4xl mx-auto px-5">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-semibold mb-4"
        >
          About
        </motion.h2>

        {/* MAIN VALUE LINE */}
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
          I help businesses build a strong online presence with clean,
          fast and mobile-first websites that actually bring customers.
        </p>

        {/* SHORT PARAGRAPH */}
        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
          Whether it's a restaurant or a local business, I focus on creating
          simple, reliable and user-friendly websites that people enjoy using.
        </p>

        {/* 🔥 VALUE CARDS (IMPORTANT ADDITION) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {[
            {
              title: "Mobile First",
              desc: "Looks perfect on every phone screen",
            },
            {
              title: "Fast Loading",
              desc: "Optimized for speed & performance",
            },
            {
              title: "Clean Design",
              desc: "Simple UI that builds trust",
            },
            {
              title: "Business Focused",
              desc: "Designed to convert visitors",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                border border-white/10 
                rounded-xl 
                p-4 
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <h3 className="text-sm font-medium mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-white/60">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}