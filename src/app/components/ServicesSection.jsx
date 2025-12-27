"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Activity } from "lucide-react"; // Changed Smartphone -> Activity for adaptability/innovation

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-white" />,
    title: "Customer-Centric Approach",
    desc: "Tailoring services to unique customer needs for personalized solutions.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-16 h-16 flex items-center justify-center ", // increased area
  },
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Quality and Reliability",
    desc: "Ensuring consistent high-quality, reliable service delivery for customer satisfaction.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-16 h-16 flex items-center justify-center ",
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    title: "Innovation and Adaptability",
    desc: "Embracing innovation to evolve and offer cutting-edge solutions for clients.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-16 h-16 flex items-center justify-center ",
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-20 -mt-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-lg bg-white group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"
                style={{ backgroundImage: service.bgImage }}
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Content */}
              <div className="relative p-8 py-14 flex flex-col h-full z-20">
                <div className="flex items-start gap-6 mb-6">
                  {/* Icon left with bigger background area */}
                  <div className={`flex-shrink-0 ${service.iconBg} group-hover:bg-red-600 transition-all duration-500`}>
                    {service.icon}
                  </div>

                  {/* Heading right */}
                  <h3 className="text-[20px] font-bold text-primary group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Paragraph below */}
                <p className="text-secondary text-[16px] group-hover:text-white/90 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
