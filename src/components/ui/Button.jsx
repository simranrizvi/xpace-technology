"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({ children, bgEffect, className = "" }) => {
  const [hover, setHover] = useState(false);

  const overlayVariants = {
    initial: { y: "-100%" },
    animate: { y: "0%" },
    exit: { y: "100%" },
  };

  return (
    <button
      className={`relative overflow-hidden font-bold  bg-primary rounded flex justify-center items-center ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.span
            key="overlay"
            className={`absolute inset-0 bg-red-600 z-10 ${bgEffect}`}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <span className="relative z-20 flex justify-center items-center w-full h-full">
        {children}
      </span>
    </button>
  );
};

export default Button;
