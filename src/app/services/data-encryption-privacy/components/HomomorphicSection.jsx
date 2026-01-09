import React from 'react';
import { Lock } from 'lucide-react';

const HomomorphicSection = () => {
  return (
    <section className="font-sans">
      
      {/* 1. Homomorphic Encryption Section (Dark) */}
      <div className="bg-[#060b16] py-24 px-6 relative overflow-hidden">
        {/* Subtle Background Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-800/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gray-800/10 rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Red Lock Icon Circle */}
          <div className="w-16 h-16 rounded-full bg-[#112240] border border-gray-800 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            <Lock className="text-red-600" size={24} />
          </div>

          <h2 className="text-white text-4xl font-bold mb-6">
            Homomorphic Encryption
          </h2>
          
          <p className="text-secondary text-sm leading-relaxed max-w-2xl mx-auto">
            XPACE is pioneering Homomorphic Encryption, allowing valid calculations to be performed 
            on encrypted data without ever decrypting it. Secure AI analytics on sensitive cloud data.
          </p>
        </div>
      </div>

      {/* 2. Secure Your Secrets CTA (Red Texture) */}
      <div className="relative bg-accent py-24 px-6 overflow-hidden">
        
     

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-4xl font-bold mb-9 tracking-tight">
            Secure Your Secrets
          </h2>
          
          <p className="text-white/90 text-lg mb-10 font-medium">
            Encryption is the only guarantee. Lock down your data assets permanently.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-red-600 px-10 py-4 rounded-md font-bold text-sm shadow-xl hover:bg-gray-100 transition-all uppercase tracking-wider">
              Request Encryption Audit
            </button>
            <button className="bg-red-700/40 text-white border border-red-400 px-10 py-4 rounded-md font-bold text-sm hover:bg-red-700/60 transition-all uppercase tracking-wider">
              Learn Key Management
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomomorphicSection;