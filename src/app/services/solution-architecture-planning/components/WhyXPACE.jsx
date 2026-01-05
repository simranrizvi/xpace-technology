"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "Vendor-Agnostic Approach",
    desc: "We recommend solutions that are best for you, not tied to a single vendor."
  },
  {
    title: "Business-First Mindset",
    desc: "Our architects speak both 'code' and 'business'."
  },
  {
    title: "Holistic Perspective",
    desc: "We consider infrastructure, security, data, and human processes."
  }
];

const WhyXPACE = () => {
  return (
    <section className="py-20 bg-white px-6">
      {/* Container 80% Width for Desktop */}
      <div className="max-w-[90%] lg:max-w-[93%] mx-auto bg-[#1a2b4b] rounded-2xl overflow-hidden shadow-2xl">
        
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center !text-white"
          >
            <h2 className="text-3xl md:text-3xl font-bold mb-5 !text-white">
              Why XPACE?
            </h2>

            <div className="space-y-8">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon with Red Accent */}
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shadow-sm" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 tracking-wide italic md:not-italic">
                      {item.title}
                    </h3>
                    <p className="text-blue-100/70 text-sm md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[420px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team success"
              fill
              className="object-cover object-center brightness-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay for subtle color matching */}
            <div className="absolute inset-0 bg-[#1a2b4b]/10 mix-blend-multiply"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyXPACE;