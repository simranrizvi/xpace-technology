"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Globe, BarChart3 } from 'lucide-react';

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      title: "SaaS Platforms",
      desc: "Onboard thousands of tenants instantly with isolated environments.",
      icon: <Layers size={24} />,
    },
    {
      title: "On-Demand Services",
      desc: "Powering apps that require instant scaling during peak usage.",
      icon: <Zap size={24} />,
    },
    {
      title: "IoT Ecosystems",
      desc: "Managing millions of device connections efficiently.",
      icon: <Globe size={24} />,
    },
    {
      title: "FinTech",
      desc: "High-frequency trading algorithms without idle infrastructure costs.",
      icon: <BarChart3 size={24} />,
    }
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-20 text-center">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-16"
        >
          Where We Apply This Expertise
        </motion.h2>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;