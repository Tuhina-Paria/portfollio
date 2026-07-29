import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "VisionCraft AI",
    subtitle: "AI Text-to-Image Generation Platform",
    description:
      "A full-stack AI application where users generate images from text prompts with secure authentication, smooth animations, and cloud-based image storage.",

    image: "/projects/visioncraft.png",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "Cloudinary",
    ],

    live: "https://vision-craft-ai-gamma.vercel.app",
    github: "https://github.com/Tuhina-Paria/VisionCraft-AI",
  },

  {
    title: "Greenly",
    subtitle: "Modern Grocery E-Commerce",

    description:
      "A responsive e-commerce platform featuring authentication, shopping cart, order management, and admin functionality with a modern user experience.",

    image: "/projects/greenly.png",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],

    live: "https://greenly-fronted.vercel.app",
    github: "https://github.com/Tuhina-Paria/Greenly",
  },

  // {
  //   title: "Spice & Ice",

  //   subtitle: "Restaurant Business Website",

  //   description:
  //     "A modern marketing website focused on responsive design, engaging user experience, and helping local businesses establish a strong online presence.",

  //   image: "/projects/spice.png",

  //   technologies: [
  //     "React",
  //     "Tailwind CSS",
  //     "Responsive Design",
  //     "Framer Motion",
  //   ],

  //   live: "https://spice-n-ice-restaurant.vercel.app",
  //   github: "YOUR_GITHUB_LINK",
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#fafafa] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[6px] text-red-600">
            Selected Projects
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight text-gray-900 lg:text-5xl">
            Products I've
            <br />
            built and shipped.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            A collection of projects showcasing my frontend
            engineering skills, component architecture,
            responsive design, animations, API integration,
            and full-stack development.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
  <motion.div
    key={project.title}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className={`
      grid
      items-center
      gap-14
      lg:grid-cols-2
      ${
        index % 2 !== 0
          ? "lg:[&>*:first-child]:order-2"
          : ""
      }
    `}
  >

    {/* ================= IMAGE ================= */}

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-xl
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          object-cover
          transition
          duration-700
          hover:scale-105
        "
      />
    </motion.div>

    {/* ================= CONTENT ================= */}

    <div>

      <p className="text-sm font-semibold uppercase tracking-[5px] text-red-600">
        Featured Project
      </p>

      <h3 className="mt-4 text-4xl font-black text-gray-900">
        {project.title}
      </h3>

      <p className="mt-2 text-xl text-gray-500">
        {project.subtitle}
      </p>

      <p className="mt-8 leading-8 text-gray-600">
        {project.description}
      </p>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-3">

        {project.technologies.map((tech) => (
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

      </div>
            {/* ================= Buttons ================= */}

      <div className="mt-10 flex flex-wrap gap-5">

        {/* Live Demo */}

        <motion.a
          whileHover={{
            y: -4,
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-red-600
            px-7
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            hover:bg-red-700
          "
        >
          Live Demo

          <ExternalLink size={18} />
        </motion.a>

        {/* GitHub */}

        <motion.a
          whileHover={{
            y: -4,
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-gray-300
            bg-white
            px-7
            py-4
            font-semibold
            text-gray-800
            transition
            hover:border-red-600
            hover:text-red-600
          "
        >
          GitHub

          <Github size={18} />
        </motion.a>

        {/* Read Case Study

        <motion.button
          whileHover={{
            x: 5,
          }}
          className="
            inline-flex
            items-center
            gap-2
            font-semibold
            text-red-600
          "
        >
          Read Case Study

          <ArrowUpRight size={18} />
        </motion.button> */}

      </div>

    </div>

  </motion.div>
))}

        </div>

      </div>
    </section>
  );
}
        
        