"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AutomationSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-sans overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: IMAGE WITH LIVE OVERLAY --- */}
        <div className="relative group">
          {/* Subtle Shadow Background Effect */}
          <div className="absolute -inset-4 bg-gray-50 rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500"></div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Industrial Computer Vision"
              className="w-full h-auto object-cover"
            />

            {/* LIVE ANALYSIS FEED OVERLAY (Matches Image) */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#1e293b]/90 backdrop-blur-md rounded-lg p-4 border-l-4 border-red-600 shadow-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">Live Analysis Feed</span>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] text-white font-bold uppercase">REC</span>
                </div>
              </div>
              
              <div className="flex gap-6 text-[11px] font-mono">
                <div className="text-blue-400">OBJ: <span className="text-white">14</span></div>
                <div className="text-blue-400">FPS: <span className="text-white">60</span></div>
                <div className="text-blue-400">STATUS: <span className="text-green-400 font-bold uppercase">Normal</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="space-y-6">
          <h2 className="text-[#0f172a] text-4xl md:text-4xl font-bold leading-tight">
            Automating the <span className="text-red-600">Visual World</span>
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Computer Vision allows software to "see." But for enterprises, it's about 
            insight. XPACE turns cameras into intelligent sensors that detect defects, 
            recognize faces, and monitor safety 24/7.
          </p>

          <ul className="space-y-4 pt-4">
            {[
              "Zero-Defect Manufacturing (99.9%)",
              "Real-time Threat Detection",
              "Automated Inventory Audits"
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-800 font-semibold text-base">
                <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AutomationSection;