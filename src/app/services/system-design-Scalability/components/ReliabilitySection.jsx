"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ReliabilitySection = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden relative">
      
      {/* Container 80% Width */}
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Quote Overlay */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <Image 
              src="/sean-pollock-PhYq704ffdA-unsplash.jpg" 
              alt="Server Infrastructure"
              width={800}
              height={500}
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Dark Overlay on Image */}
            <div className="absolute inset-0 bg-[#1a2b4b]/20"></div>
          </motion.div>

          {/* Floating Quote Box (Static/Fixed) */}
          <div className="absolute -bottom-10 -right-5 md:right-10 bg-[#1a2b4b] p-8 rounded-lg shadow-2xl max-w-[320px] z-20">
            <div className="w-10 h-1 bg-red-600 mb-4"></div>
            <p className="text-white text-sm italic font-medium leading-relaxed">
              "We don't just build software that works; we build software that survives success."
            </p>
          </div>
        </div>

        {/* Right Side: Content with Heartbeat Glow */}
        <div className="relative">
          
          {/* Subtle Heartbeat Light Effect in Background */}
          <motion.div 
            animate={{ 
              opacity: [0.05, 0.2, 0.05, 0.25, 0.05],
              scale: [1, 1.1, 1, 1.15, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              times: [0, 0.1, 0.2, 0.3, 1] 
            }}
            className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] -z-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-primary mb-3 leading-tight">
              Engineering for <span className="text-accent">Reliability & Speed</span>
            </h2>

            <div className="space-y-6 text-secondary text-base md:text-base leading-relaxed">
              <p>
                System Design is the art of engineering precision. While architecture sets the strategy, 
                system design executes it to function at scale.
              </p>
              <p>
                When your user base grows from ten thousand to ten million, your system shouldn't buckle. 
                We employ advanced engineering principles—database sharding, caching strategies, 
                and async processing—to ensure responsiveness regardless of traffic spikes.
              </p>
            </div>

            {/* Fixed Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1a2b4b]">Fault Tolerant</h4>
                  <p className="text-gray-400 text-sm">Self-healing architecture</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1a2b4b]">Load Balanced</h4>
                  <p className="text-gray-400 text-sm">Even traffic distribution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ReliabilitySection;