"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Activity } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />,
    title: "Customer-Centric Approach",
    desc: "Tailoring services to unique customer needs for personalized solutions.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-14 h-14 sm:w-15 sm:h-15 lg:w-16 lg:h-16 flex items-center justify-center",
  },
  {
    icon: <Globe className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />,
    title: "Quality and Reliability",
    desc: "Ensuring consistent high-quality, reliable service delivery for customer satisfaction.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-14 h-14 sm:w-15 sm:h-15 lg:w-16 lg:h-16 flex items-center justify-center",
  },
  {
    icon: <Activity className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />,
    title: "Innovation and Adaptability",
    desc: "Embracing innovation to evolve and offer cutting-edge solutions for clients.",
    bgImage: "url('/homepage/shape-1.webp')",
    iconBg: "bg-red-500 w-14 h-14 sm:w-15 sm:h-15 lg:w-16 lg:h-16 flex items-center justify-center",
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-16 lg:pb-20 -mt-6 lg:-mt-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-lg bg-white group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Hover Background */}
              <div
                className="absolute inset-0 bg-cover bg-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"
                style={{ backgroundImage: service.bgImage }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Content */}
              <div className="relative p-6 sm:p-7 lg:p-8 py-10 lg:py-14 flex flex-col h-full z-20">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-5 lg:mb-6">
                  {/* Icon */}
                  <div
                    className={`${service.iconBg} group-hover:bg-red-600 transition-all duration-500`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] lg:text-[20px] font-bold text-primary group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-secondary text-[14px] sm:text-[15px] lg:text-[16px] group-hover:text-white/90 transition-colors duration-500">
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
