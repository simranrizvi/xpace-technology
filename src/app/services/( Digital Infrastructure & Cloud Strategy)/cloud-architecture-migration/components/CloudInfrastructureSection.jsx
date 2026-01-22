import React from 'react';
import { Cloud } from 'lucide-react';

const CloudInfrastructureSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Top Section (White) */}
      <div className="bg-white py-16 px-4 flex flex-col items-center text-center">
        <div className="bg-white p-4 rounded-full shadow-lg mb-6 flex items-center justify-center">
          <Cloud className="text-red-500 w-12 h-12" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4b] mb-4">
          Foundation for AI
        </h2>
        
        <p className="max-w-2xl text-gray-600 leading-relaxed text-base md:text-base">
          Moving to the cloud is the prerequisite for modern innovation. Once your data is in the 
          cloud, you unlock capabilities like Machine Learning and Big Data Analytics that were 
          impossible on-premise.
        </p>
      </div>

      {/* Bottom Section (Red with Pattern) */}
      <div 
        className="relative bg-[#e31b23] py-20 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      >
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Elevate Your Infrastructure
          </h2>
          
          <p className="text-white text-sm md:text-lg mb-10 max-w-3xl mx-auto font-medium">
            Stop managing hardware and start managing value. Architect a cloud environment that powers 
            your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#e31b23] px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Schedule Assessment
            </button>
            
            <button className="border-2 border-white/30 bg-black/10 text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto">
              Calculate Cloud Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudInfrastructureSection;