"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/homepage/slider1.webp",
    tag: "SOLUTION FOR YOUR BUSINESS",
    titleLine1: "IT Solutions",
    titleLine2: "& Technology",
  },
  {
    image: "/homepage/slider2.webp",
    tag: "SOLTION FOR YOUR BUSINESS",
    titleLine1: "Efficiency",
    titleLine2: "& Innovation",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Background Images - Absolute aur overlap */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Dark Overlay - images ke upar */}
      <div className="absolute inset-0 bg-black/30"></div>  {/* ye dark overlay bana dega, adjust % as needed */}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-10 ml-9">
         <motion.div
  key={`tag-${index}`}
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="relative inline-block mb-6"  // relative taake andar absolute line sahi place ho
>
  {/* Blur wala pill badge */}
  <div className="px-8 py-3 text-primary backdrop-blur-md bg-white/20  inline-flex items-center gap-4">
    {/* Red line andar - vertical divider jaise */}
    <span className="w-9 h-1 bg-red-600 rounded-full"></span>

    {/* Tag text */}
    <span className="uppercase tracking-wider text-sm font-medium">
      {slides[index].tag}
    </span>
  </div>
</motion.div>

          <motion.h1
            key={`title-${index}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight"  
          >
            {slides[index].titleLine1}
            <span className="block">{slides[index].titleLine2}</span>
          </motion.h1>

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="mt-2 text-white py-3 px-12">
              Discover More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/50">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/50">
        ❯
      </button>
    </section>
  );
}