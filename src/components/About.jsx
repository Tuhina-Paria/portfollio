import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: <Code2 size={30} />,
    title: "React Engineering",
    subtitle: "Building scalable frontend applications",
    points: [
      "React & Hooks",
      "Component Architecture",
      "REST API Integration",
      "Reusable UI Components",
    ],
  },
  {
    icon: <Palette size={30} />,
    title: "UI Engineering",
    subtitle: "Designing polished user experiences",
    points: [
      "Responsive Design",
      "Tailwind CSS",
      "Framer Motion",
      "Pixel-perfect Interfaces",
    ],
  },
  {
    icon: <Rocket size={30} />,
    title: "Engineering Mindset",
    subtitle: "Always improving products",
    points: [
      "Performance",
      "Accessibility",
      "Clean Code",
      "Continuous Learning",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[6px] text-red-600">
            About Me
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900 lg:text-6xl">
            Building interfaces
            <br />
            that feel as good
            <br />
            as they function.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            I'm a frontend developer passionate about building fast,
            responsive, and polished web applications with
            <span className="font-semibold text-gray-900">
              {" "}React, JavaScript, and modern frontend technologies.
            </span>{" "}
            I enjoy turning ideas into intuitive user experiences while
            continuously learning new tools to build better products.
          </p>
        </motion.div>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-12
            flex
            flex-wrap
            gap-3
          "
        >
          {[
            "React",
            "JavaScript",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "Express",
            "MongoDB",
            "Git",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-red-100
                bg-red-50
                px-4
                py-2
                text-sm
                font-medium
                text-red-700
              "
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:border-red-500
                hover:shadow-2xl
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-50
                  text-red-600
                  transition
                  group-hover:bg-red-600
                  group-hover:text-white
                "
              >
                {card.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {card.subtitle}
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">

                {card.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>

                    <p className="text-gray-700">
                      {point}
                    </p>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}