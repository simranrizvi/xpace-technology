"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const FooterCTA = () => {
  const points = [
    {
      title: "Performance-Obsessed Culture",
      desc: "We treat every millisecond of latency as a bug. Optimization is in our DNA."
    },
    {
      title: "Proven Track Record",
      desc: "We have designed backends that support millions of active users."
    },
    {
      title: "Security-Integrated Scaling",
      desc: "We ensure that as you scale up, your attack surface doesn't scale with you."
    }
  ];

  return (
    <section className="w-full">
      {/* Top Part: Why XPACE? Content */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Text Points */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-7">Why XPACE?</h2>
            <div className="space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center border border-red-100">
                      <ShieldCheck className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-md mb-1">{point.title}</h4>
                    <p className="text-primary text-sm leading-relaxed max-w-md">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dark Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-primary rounded-2xl p-10 md:p-10 relative -mt-8 overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-center"
          >
            {/* Cloud Icon Placeholder (Right Corner) */}
            <div className="absolute top-8 right-8 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5-.4-3.4-3.3-6-6.6-6-2.4 0-4.6 1.4-5.6 3.5C3.3 8.1 1 10.3 1 13c0 2.8 2.2 5 5 5" />
              </svg>
            </div>

            <h3 className="text-white text-3xl md:text-3xl font-bold mb-6 leading-tight">
              Built for the  
              Cloud-Native Era
            </h3>
            
            <p className="text-gray-300 text-base md:text-md leading-relaxed mb-10 max-w-md">
              Scalability today means being ready for tomorrow. We ensure your system is compatible 
              with Serverless, Edge architecture, and Kubernetes, capable of leveraging AI-driven auto-scaling.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="text-red-500 font-bold text-sm">#Serverless</span>
              <span className="text-blue-400 font-bold text-sm">#Kubernetes</span>
              <span className="text-red-500 font-bold text-sm">#EdgeComputing</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Part: Red CTA (Prepare for Massive Growth) */}
      <div className="bg-[#d91e1e] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-4xl font-bold text-white mb-6"
          >
            Prepare for Massive Growth
          </motion.h2>
          
          <p className="text-white/90 text-lg md:text-lg mb-12">
            Is your technology stack ready to handle your next million users? Partner with XPACE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-7 py-3 rounded-md font-bold hover:shadow-2xl transition-all">
              Consult Our System Architects
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-all">
              Request Technical Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;