import React from 'react';
import { Network } from 'lucide-react';

export const DistributedCloudSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Top Section: The Distributed Cloud Era */}
      <div className="bg-white py-20 px-6 flex flex-col items-center text-center">
        {/* Icon with Soft Shadow */}
        <div className="bg-white p-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-8 flex items-center justify-center border border-gray-50">
          <Network className="text-red-600 w-12 h-12" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6 ">
          The Distributed Cloud Era
        </h2>
        
        <p className="max-w-3xl text-gray-600 leading-relaxed text-sm md:text-base font-medium">
          XPACE is preparing for the Distributed Cloud, where cloud services extend to your specific 
          location. We deploy solutions that bring the public cloud to your data center, blurring the 
          line between "public" and "private."
        </p>
      </div>

      {/* Bottom Section: Unify Your Universe (Red) */}
      <div 
        className="relative bg-[#e31b23] py-24 px-6 text-center overflow-hidden"
        style={{
          /* Image jesa hexagonal pattern background */
          backgroundImage: `url('https://www.transparenttextures.com/patterns/hexellence.png')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-white text-4xl font-bold mb-6 tracking-tight ">
            Unify Your Universe
          </h2>
          
          <p className="text-white/90 text-sm md:text-lg mb-12 max-w-2xl mx-auto font-bold leading-snug">
            Don't let fragmented infrastructure slow you down. Orchestrate a powerful Multi-Cloud strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* White Button */}
            <button className="bg-white text-red-600 px-8 py-3 rounded-sm font-black text-sm  tracking-widest hover:bg-gray-100 transition-all shadow-xl w-full sm:w-auto">
              Design Hybrid Cloud
            </button>
            
            {/* Outline Button */}
            <button className="border-2 border-white/40 bg-black/10 text-white px-8 py-3 rounded-sm font-black text-sm tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto">
              Read Strategy Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};