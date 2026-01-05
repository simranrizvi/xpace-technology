"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const industries = [
  {
    title: "E-Commerce Platforms",
    hoverText: "Processing streams of data from millions of connected devices in real-time for smart cities.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "FinTech & Trading",
    hoverText: "Processing streams of data from millions of connected devices in real-time for smart cities.",
    image: "https://images.unsplash.com/photo-1611974714024-463ef9c71939?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "IoT Data Ingestion",
    hoverText: "Processing streams of data from millions of connected devices in real-time for smart cities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Media & Streaming",
    hoverText: "Processing streams of data from millions of connected devices in real-time for smart cities.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
  }
];

const IndustryApplications = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[90%] mx-auto">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Industry Applications
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[250px] md:h-[230px] rounded-2xl overflow-hidden bg-[#5a6a85] cursor-pointer"
            >
              {/* Background Image (Lower opacity by default) */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 md:p-8 flex flex-col justify-end">
                
                {/* Arrow Icon */}
                <div className="absolute top-6 right-8 text-white/50 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>

                {/* Red accent line */}
                <div className="w-8 h-[3px] bg-red-600 mb-4"></div>

                {/* Title */}
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Hover Text (Reveal on Hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <p className="overflow-hidden text-gray-200 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.hoverText}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;