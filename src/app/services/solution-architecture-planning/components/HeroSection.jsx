"use client"

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden min-h-[500px] flex items-center px-8 py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-gray-600 text-xs font-bold uppercase tracking-wider mb-6 bg-gray-800/50">
            <span className="text-red-500 mr-2">●</span> Enterprise Architecture
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Strategic Solution <br />
            <span className="text-red-600">Architecture Planning</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            We bridge the gap between business vision and technical reality, 
            designing robust roadmaps for scalable, future-proof enterprise systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all">
              Start Your Roadmap
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>

        {/* Right Image/Graphic Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative">
             {/* Main Image Overlay Effect */}
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply transition-opacity hover:opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team working" 
              className="w-full h-auto grayscale brightness-75"
            />
            
            {/* Security First Badge */}
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-xl text-black flex items-center space-x-4">
               <div className="text-red-600">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-900">Security First</p>
                  <div className="h-1.5 w-24 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-red-600 w-3/4"></div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;