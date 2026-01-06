"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, RefreshCw, Cloud } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#05070a]  text-white flex items-center justify-center p-6 font-sans overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 " 
        style={{ 
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="max-w-7xl max-h-screen w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6 border border-slate-700 w-fit px-3 py-1 rounded-md bg-slate-900/50">
            <RefreshCw size={14} className="text-slate-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-300">System Modernization</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight !text-white mb-6">
            Revitalize Your <br />
             <span className="text-primary">Digital Core.</span> <br />
            <span className="text-primary"></span>
          </h1>

          <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
            Transform aging legacy software into modern, secure, and agile platforms. 
            Eliminate technical debt without disrupting your critical business operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#e52e2e] hover:bg-[#c42525] text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all active:scale-95">
              Start Modernization <ArrowRight size={20} />
            </button>
            <button className="border border-slate-700 px-8 py-3 rounded-md font-bold flex items-center gap-2 text-slate-300 hover:bg-white/5 transition-all">
              <AlertCircle size={20} /> Audit Technical Debt
            </button>
          </div>
        </motion.div>

        {/* Right Side - Interactive Image/Card Area */}
        <div className="relative flex justify-center items-center h-[500px]" style={{ perspective: "1500px" }}>
            
            {/* Legacy Box (Static Outline) */}
            <div className="absolute left-10 top-20 w-48 h-48 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center opacity-40">
                <div className="w-12 h-8 border-2 border-slate-700 rounded flex flex-col gap-1 p-1">
                    <div className="w-full h-1 bg-slate-700"></div>
                </div>
            </div>

            {/* Main Card with Image-Like Hover Rotation */}
            <motion.div 
                initial={{ y: 0, rotateY: 0, rotateX: 0 }}
                whileHover={{ 
                  rotateY: -15, // Side angle
                  rotateX: 10,  // Upward tilt
                  rotateZ: -5,  // Slight slant like the original image
                  scale: 1.05,
                  y: -10        // Lift up effect
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 15 
                }}
                className="relative cursor-pointer bg-gradient-to-br from-[#1a357a] to-[#0f172a] p-10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] w-[340px] h-[360px] flex flex-col items-center justify-center border border-white/10"
            >
                {/* Status Badges */}
                <div className="absolute -top-2 -right-4 bg-[#e52e2e] text-[10px] font-bold px-3 py-1 rounded shadow-lg z-20">
                    API Enabled
                </div>
                <div className="absolute -bottom-2 -left-4 bg-[#3b82f6] text-[10px] font-bold px-3 py-1 rounded shadow-lg z-20">
                    Secure
                </div>

                {/* Center Icon */}
                <div className="text-[#64b5f6] mb-8 drop-shadow-[0_0_15px_rgba(100,181,246,0.4)]">
                    <Cloud size={90} strokeWidth={1.2} />
                </div>
                
                <h3 className="text-3xl font-bold mb-2">Cloud Ready</h3>
                <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 font-bold">Optimization Complete</p>
            </motion.div>

            {/* Neon Accent Line */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-red-600 to-transparent shadow-[0_0_20px_rgba(220,38,38,0.6)]"></div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;