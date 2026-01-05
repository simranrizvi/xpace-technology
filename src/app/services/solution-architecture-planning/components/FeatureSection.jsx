"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden max-w-[93%] mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image with Decorative Accents */}
        <div className="relative group">
          {/* Top-Left Red "L" Shape Accent */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-red-600 z-0"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Strategic Planning Team" 
              width={600}
              height={400}
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Bottom-Right Blue "L" Shape Accent */}
          <div className="absolute -bottom-6 -right-6 w-25 h-25 border-b-4 border-r-4 border-slate-900 z-0"></div>
        </div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold text-primary mb-2 leading-11">
            Turning Strategy into <span className="text-red-600">Technical Reality</span>
          </h2>

          <div className="space-y-4 text-secondry text-base">
            <p>
              Solution Architecture Planning is the foundational step in any successful digital 
              initiative. Without a solid plan, organizations risk creating siloed systems and 
              incurring high technical debt.
            </p>
            <p>
              At XPACE, we design architectures that are commercially viable. We assess your IT 
              landscape, identify gaps, and design holistic solutions aligning with your budget 
              and timeline.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-row gap-16 mt-7 pt-8 border-t border-gray-100">
            <div>
              <motion.h3 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl font-black text-red-600 tracking-tight"
              >
                40%
              </motion.h3>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mt-2">
                Faster TTM
              </p>
            </div>

            <div>
              <motion.h3 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl font-black text-primary tracking-tight"
              >
                100%
              </motion.h3>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mt-2">
                Scalability
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureSection;