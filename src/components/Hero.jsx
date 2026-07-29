import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

import profile from "../assets/tuhina.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#A30000]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_65%)]" />

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/20 blur-[180px]" />

      {/* Watermark */}
      <h1
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        select-none
        font-black
        uppercase
        tracking-[4px]
        text-[180px]
        lg:text-[260px]
        text-white/[0.06]
        z-0
        opacity-3%
      "
      >
        Fronted
      </h1>

      {/* Social Icons */}
      <div
        className="
        absolute
        left-8
        top-1/2
        hidden
        -translate-y-1/2
        lg:flex
        flex-col
        items-center
        z-30
      "
      >

        <div className="h-28 w-px bg-white/20" />

        <motion.a
          whileHover={{ scale: 1.15, y: -4 }}
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="my-6 text-2xl text-white transition hover:text-red-100"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.15, y: -4 }}
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          className="my-6 text-2xl text-white transition hover:text-red-100"
        >
          <FaLinkedinIn />
        </motion.a>

        <div className="h-28 w-px bg-white/20" />

      </div>

      {/* Main Container */}

      <div
        className="
        relative
        z-20
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        flex-col-reverse
        items-center
        justify-center
        px-6
        pb-16
        lg:flex-row
        lg:items-end
        lg:justify-between
        lg:px-16
      "
      >
        {/* ================= LEFT CONTENT ================= */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
  className="
    relative
    z-20
    max-w-xl
    text-center
    lg:text-left
    lg:pb-20
  "
>
  {/* Small Heading

  <p
    className="
      mb-4
      uppercase
      tracking-[2px]
      text-red-100
      text-sm
      font-medium
    "
  >
   React • JavaScript • UI Engineering
  </p> */}

  {/* Main Heading */}

  <h2
    className="
      text-white
      text-2xl
      sm:text-5xl
      lg:text-6xl
      font-black
      leading-[0.95]
    "
  >
    Hello,
    <br />

    <span className="text-red-100">
      I'm Tuhina 
    </span>
  </h2>

  {/* Divider */}

  <motion.div
    initial={{ width: 0 }}
    animate={{ width: 90 }}
    transition={{
      delay: 0.8,
      duration: 0.5,
    }}
    className="mt-8 h-[3px] rounded-full bg-white"
  />

  {/* Description */}

  <p
    className="
      mt-8
      max-w-lg
      text-lg
      leading-9
      text-red-50/90
    "
  >
    I build
    <span className="font-semibold text-white">
      {" "}fast, scalable web applications{" "}
    </span>

    with

    <span className="font-semibold text-white">
      {" "}JavaScript, React, and Tailwind CSS-focused on clean architecture,
pixel-perfect UI and delightful user experiences.
    </span>

    
  </p>

  {/* Buttons */}

  <div
    className="
      mt-12
      flex
      flex-wrap
      justify-center
      gap-5
      lg:justify-start
    "
  >

    {/* View Work */}

    <motion.a
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      href="#projects"
      className="
        flex
        items-center
        gap-3
        rounded-full
        bg-white
        px-8
        py-4
        text-sm
        font-semibold
        tracking-wide
        text-red-700
        shadow-2xl
      "
    >
      View My Work

      <FaArrowRight />
    </motion.a>

    {/* Contact */}

    <motion.a
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      href="#contact"
      className="
        rounded-full
        border
        border-white/30
        bg-white/10
        px-8
        py-4
        text-sm
        font-semibold
        tracking-wide
        text-white
        backdrop-blur-xl
      "
    >
      Contact Me
    </motion.a>

    {/* Resume */}

    <motion.a
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      href="/Tuhina_Paria_FrontedResume.pdf"
      target="_blank"
rel="noopener noreferrer"
      // download
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/30
        px-8
        py-4
        text-sm
        font-semibold
        tracking-wide
        text-white
      "
    >
      <HiOutlineDownload size={18} />

      Resume
    </motion.a>

  </div>

</motion.div>
{/* ================= RIGHT IMAGE ================= */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.85,
    y: 60,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -12, 0],
  }}
  transition={{
    opacity: { duration: 0.8, delay: 0.5 },
    scale: { duration: 0.8, delay: 0.5 },
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="
    relative
    flex
    flex-1
    justify-center
    items-end
  "
>

  {/* Glow */}

  <div
    className="
      absolute
      bottom-10
      h-[550px]
      w-[550px]
      rounded-full
      bg-white/10
      blur-[170px]
    "
  />

  {/* Decorative Ring */}

  <div
    className="
      absolute
      h-[540px]
      w-[540px]
      rounded-full
      
    "
  />

  {/* Image */}

  <img
    src={profile}
    alt="Tuhina Paria"
    className="
      relative
      z-20
      h-[420px]
      sm:h-[520px]
      md:h-[650px]
     lg:h-[760px]
      object-contain
      drop-shadow-[0_40px_90px_rgba(0,0,0,0.45)]
      select-none
      pointer-events-none
    "
  />

  {/* Available Badge

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      absolute
      top-24
      right-0
      lg:right-8
      rounded-full
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      px-5
      py-3
      flex
      items-center
      gap-3
      shadow-xl
    "
  >
    <span className="relative flex h-3 w-3">

      <span
        className="
          absolute
          inline-flex
          h-full
          w-full
          rounded-full
          bg-green-400
          opacity-70
          animate-ping
        "
      />

      <span
        className="
          relative
          inline-flex
          h-3
          w-3
          rounded-full
          bg-green-400
        "
      />

    </span>

    <p className="text-sm font-medium text-white">
      Available for Hire
    </p>

  </motion.div> */}

</motion.div>

{/* ================= SCROLL INDICATOR ================= */}

{/* <motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1.8,
  }}
  className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    flex
    flex-col
    items-center
    text-white/80
  "
>

  <p
    className="
      mb-3
      text-xs
      uppercase
      tracking-[6px]
    "
  >
   
  </p>

  <div
    className="
      flex
      h-12
      w-7
      justify-center
      rounded-full
      border
      border-white/30
    "
  >

    <motion.div
      animate={{
        y: [2, 18, 2],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="
        mt-2
        h-2
        w-2
        rounded-full
        bg-white
      "
    />

  </div>

</motion.div> */}

</div>
</section>
);
};

export default Hero;