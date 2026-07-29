import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
    level: "Advanced",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
    level: "Learning",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    level: "Advanced",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "text-pink-400",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-400",
    level: "Intermediate",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-white",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    level: "Intermediate",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    level: "Advanced",
  },
];
export default function Skills() {
  return (
<section
id="skills"
className="bg-[#A30000] py-28 relative overflow-hidden"
>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_70%)]"/>

<div className="max-w-7xl mx-auto px-6 lg:px-16">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="max-w-3xl"
>

<p className="uppercase tracking-[6px] text-red-200 text-sm font-semibold">
Skills
</p>

<h2 className="mt-5 text-3xl lg:text-5xl font-black text-white">
Technologies I
<br/>
work with.
</h2>

<p className="mt-8 text-red-100 text-lg leading-9">
Modern frontend development focused on performance,
responsive UI, reusable components and developer experience.
</p>

</motion.div>

<div className="grid mt-20 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {skills.map((skill, index) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.08,
      duration: 0.5,
    }}
    whileHover={{
      y: -12,
      scale: 1.03,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/10
      p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-red-300
      hover:bg-white/15
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
  >
    {/* Glow */}

    <div
      className="
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-white/10
        blur-3xl
        transition
        group-hover:bg-red-400/20
      "
    />

    {/* Icon */}

    <div
      className={`
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-white/10
        text-4xl
        ${skill.color}
      `}
    >
      {skill.icon}
    </div>

    {/* Name */}

    <h3 className="relative mt-8 text-2xl font-bold text-white">
      {skill.name}
    </h3>

    {/* Level */}

    <span
      className="
        mt-3
        inline-block
        rounded-full
        bg-red-500/20
        px-4
        py-2
        text-sm
        font-medium
        text-red-100
      "
    >
      {skill.level}
    </span>

    {/* Progress */}

    <div className="relative mt-8">

      <div className="h-2 rounded-full bg-white/10">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width:
              skill.level === "Advanced"
                ? "95%"
                : skill.level === "Intermediate"
                ? "75%"
                : "55%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.1,
          }}
          className="
            h-2
            rounded-full
            bg-gradient-to-r
            from-white
            via-red-200
            to-red-400
          "
        />

      </div>

    </div>

    {/* Footer */}

    <p className="relative mt-6 text-sm leading-7 text-red-100">
      Continuously improving through real-world projects,
      experimentation, and modern frontend best practices.
    </p>

  </motion.div>
))}
      </div>
    </div>
     </section>
  );
}