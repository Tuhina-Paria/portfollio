import { motion } from "framer-motion";

const projects = [
  {
    title: "Restaurant Website",
    desc: "Modern website designed to showcase menu and increase customer orders.",
    result: "Helps attract more customers online",
    image: "/projects/spice.png",
    live: "https://spice-n-ice-restaurant.vercel.app",
  },
  {
    title: "AI Image Platform",
    desc: "Full-stack app with login system and usage control.",
    result: "Secure & scalable user experience",
    image: "/projects/visioncraft.png",
    live: "https://vision-craft-ai-gamma.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    desc: "Complete online store with cart, orders and admin dashboard.",
    result: "End-to-end business solution",
    image: "/projects/greenly.png",
    live: "https://greenly-fronted.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">

      <div className="max-w-5xl mx-auto px-5">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          My Work
        </h2>

        <p className="text-white/50 text-sm mb-10">
          Real projects built to solve real business problems
        </p>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                group
                border border-white/10 
                rounded-2xl 
                overflow-hidden
                hover:border-white/30
                transition
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="
                    w-full 
                    aspect-[16/10] 
                    object-cover
                    transition duration-500
                    group-hover:scale-105
                  "
                />

                {/* subtle overlay for premium feel */}
                <div className="absolute inset-0 bg-black/10" />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-lg font-medium">
                  {p.title}
                </h3>

                <p className="text-white/60 text-sm mt-2">
                  {p.desc}
                </p>

                {/* RESULT */}
                <p className="text-white/40 text-xs mt-2">
                  👉 {p.result}
                </p>

                {/* CTA */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block mt-4 
                    text-sm 
                    px-4 py-2 
                    border border-white/20 
                    rounded-full
                    hover:bg-white hover:text-black
                    transition
                  "
                >
                  View Live
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}