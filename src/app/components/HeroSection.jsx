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

  const nextSlide = () => setIndex((p) => (p + 1) % slides.length);
  const prevSlide = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const i = setInterval(nextSlide, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden bg-black">
      
      {/* Background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.05,
            }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-2xl px-5 sm:px-8 lg:px-10 ml-0 lg:ml-9 text-center lg:text-left">

          {/* Tag */}
          <motion.div
            key={`tag-${index}`}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-5"
          >
            <div className="px-5 py-2 text-primary backdrop-blur-md bg-white/20 inline-flex items-center gap-3">
              <span className="w-6 h-1 bg-red-600 rounded-full"></span>
              <span className="uppercase tracking-wider text-xs sm:text-sm font-medium">
                {slides[index].tag}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${index}`}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-6xl font-bold text-primary mb-4 leading-tight"
          >
            {slides[index].titleLine1}
            <span className="block">{slides[index].titleLine2}</span>
          </motion.h1>

          {/* Button */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <Button className="mt-2 text-white py-2.5 px-8 sm:px-12">
              Discover More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full"
      >
        ❯
      </button>
    </section>
  );
}
