"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <section className="bg-white pt-20">
      
      {/* Upper Section: Architecting for Tomorrow */}
      <div className="max-w-[80%] mx-auto text-center mb-20 px-4">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
        >
          Innovation Focus
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
        >
          Architecting for Tomorrow
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
        >
          We incorporate principles of composable enterprise design and modularity, 
          ensuring your system is ready for AI, Blockchain, and Edge Computing.
        </motion.p>
      </div>

      {/* Lower Section: Red Banner CTA */}
      <div className="relative w-full bg-red-600 py-20 px-6 overflow-hidden">
        {/* Subtle Grid Pattern Overlay (Optional, for that tech look) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-[80%] mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-3xl font-bold text-white mb-6"
          >
            Build on a Solid Foundation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/90 mb-10 text-sm md:text-lg"
          >
            Don't leave your technology success to chance. Design a roadmap that guarantees scalability.
          </motion.p>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-6 py-4 rounded-md font-bold text-sm shadow-xl transition-all"
            >
              Request Strategy Consultation
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-md font-bold text-sm hover:bg-white hover:text-red-600 transition-all"
            >
              Contact Our Architects
            </motion.button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FooterCTA;