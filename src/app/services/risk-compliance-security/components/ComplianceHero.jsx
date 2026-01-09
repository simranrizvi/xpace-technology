"use client"

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ShieldCheck, FileText, Scale, CheckCircle } from 'lucide-react';

const ComplianceHero = () => {
  // Counter Logic
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, []);

  return (
    <section className="min-h-screen bg-[#1a2b3c] flex items-center justify-center p-6 overflow-hidden relative">
      <div className="max-w-7xl px-17 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/30 bg-green-950/20 backdrop-blur-sm">
            <CheckCircle size={14} className="text-green-500" />
            <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">
              Audit Ready: Yes
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black !text-white leading-none">
            Secure <br />
            <span className="text-accent">Compliant.</span>
          </h1>

          <div className="border-l-2 border-green-500/50 pl-6 max-w-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              We bridge the gap between technical security controls and regulatory requirements. 
              Ensure your infrastructure is not only secure but demonstrably compliant.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] tracking-tight">
              <ShieldCheck size={20} />
              Schedule Assessment
            </button>
            <button className="flex items-center gap-2 border border-gray-600 bg-transparent text-white px-8 py-3 rounded font-bold hover:bg-white/5 transition-all  tracking-tight">
              <FileText size={20} />
              Compliance Guide
            </button>
          </div>
        </div>

        {/* Right Side: Compliance Score Graphic */}
        <div className="relative flex justify-center items-center">
          {/* Animated Rings */}
          <div className="absolute w-[450px] h-[450px] border border-dashed border-gray-600/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute w-[350px] h-[350px] border border-green-500/20 rounded-full"></div>

          {/* Floating Tags (image ki tarah) */}
          <div className="absolute top-10 right-10 bg-[#0d1525] border border-gray-700 px-3 py-1.5 rounded-md flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
             <span className="text-white text-[10px] font-bold tracking-widest">PCI-DSS</span>
          </div>
          <div className="absolute top-10 -left-1 bg-[#0d1525] border border-gray-700 px-3 py-1.5 rounded-md flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
             <span className="text-white text-[10px] font-bold tracking-widest uppercase">ISO 27001</span>
          </div>
          <div className="absolute bottom-0 left-20 bg-[#0d1525] border border-gray-700 px-3 py-1.5 rounded-md flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
             <span className="text-white text-[10px] font-bold tracking-widest">GDPR</span>
          </div>
          <div className="absolute bottom-20 -right-10 bg-[#0d1525] border border-gray-700 px-3 py-1.5 rounded-md flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
             <span className="text-white text-[10px] font-bold tracking-widest uppercase">HIPAA</span>
          </div>

          {/* Central Score Card */}
          <div className="w-[300px] h-[350px] bg-[#0d1525] rounded-3xl border border-green-500/30 flex flex-col items-center justify-center p-8 shadow-[0_0_50px_rgba(34,197,94,0.1)] relative z-10">
            <div className="mb-6 text-white/90">
              <Scale size={60} strokeWidth={1.5} />
            </div>
            
            <div className="text-center">
              <motion.h2 className="text-7xl font-black text-white flex items-center justify-center">
                <motion.span>{rounded}</motion.span>%
              </motion.h2>
              <p className="text-green-500 font-black text-[10px] tracking-[0.3em] uppercase mt-2">
                Compliance Score
              </p>
            </div>
            
            {/* Inner Glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceHero;