"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Database, HeartPulse, Zap, FileText } from 'lucide-react';

const IndustryApplications = () => {
  const industries = [
    {
      title: "Banking",
      desc: "Migrating COBOL core banking systems to Java Microservices.",
      icon: <Database size={24} className="text-slate-300" />
    },
    {
      title: "Healthcare",
      desc: "Upgrading EHR systems to be HIPAA-compliant & interoperable.",
      icon: <HeartPulse size={24} className="text-slate-300" />
    },
    {
      title: "Manufacturing",
      desc: "Connecting legacy ERPs to modern IoT sensors.",
      icon: <Zap size={24} className="text-slate-300" />
    },
    {
      title: "Public Sector",
      desc: "Digitizing paper-based workflows to improve citizen access.",
      icon: <FileText size={24} className="text-slate-300" />
    }
  ];

  return (
    <section className="bg-[#05070a] py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-4xl font-bold !text-white text-center mb-16 tracking-tight">
          Industry Applications
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, backgroundColor: "#161b22" }}
              transition={{ duration: 0.3 }}
              className="bg-[#0d1117] border border-slate-800 p-8 py-4 rounded-2xl flex flex-col items-start transition-colors group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#1c2128] rounded-xl flex items-center justify-center mb-3 border border-slate-700 group-hover:border-slate-500 transition-colors">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;