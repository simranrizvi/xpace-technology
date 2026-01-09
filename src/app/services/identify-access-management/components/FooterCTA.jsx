import React from 'react';
import { Link, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="font-sans">
      
      {/* 1. Decentralized Identity Section (White) */}
      <div className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Link Icon Circle */}
          <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-gray-50 flex items-center justify-center mb-8">
            <Link className="text-red-600 rotate-45" size={28} />
          </div>

          <h2 className="text-[#112240] text-3xl font-bold mb-4">
            Decentralized Identity (DID)
          </h2>
          
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            XPACE is preparing for Self-Sovereign Identity. We are exploring blockchain solutions 
            where users own their digital credentials in a wallet, sharing only what is necessary 
            without central authorities.
          </p>
        </div>
      </div>

      {/* 2. Red CTA Section (Textured) */}
      <div className="relative bg-accent py-20 px-6 overflow-hidden">
        
      

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-4xl font-bold mb-6 tracking-tight">
            Take Control of Access
          </h2>
          
          <p className="text-white/90 text-lg mb-10 ">
            Your data is only as secure as the identity accessing it. Partner with XPACE for robust IAM.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-md font-bold text-sm shadow-xl hover:bg-gray-100 transition-all uppercase tracking-wider">
              Request Assessment
            </button>
            <button className="bg-red-700/50 text-white border border-red-400 px-8 py-3 rounded-md font-bold text-sm hover:bg-red-700 transition-all uppercase tracking-wider">
              Explore SSO Solutions
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FooterCTA;