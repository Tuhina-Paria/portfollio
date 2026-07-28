import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      // Wait until curtain animation finishes
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#C1121F] overflow-hidden"
        >
          {/* Soft vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />

          {/* Name */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10 text-white text-2xl md:text-5xl font-medium tracking-[0.18em]"
          >
            <span className="font-bold"> Tuhina Paria</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;