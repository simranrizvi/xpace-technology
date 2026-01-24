import React from "react";
import { Eye } from "lucide-react";

const ComplianceCTA = () => {
  return (
    <div className="w-full">
      {/* Upper Section: Automated Compliance */}
      <section className="bg-slate-50 py-20 px-4 flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-white rounded-full shadow-sm border border-gray-100">
          <Eye className="text-red-500" size={32} />
        </div>

        <h2 className="text-4xl font-bold text-primary text-slate-800 mb-4">
          Automated Compliance
        </h2>

        <p className="max-w-2xl text-slate-500 leading-relaxed text-sm md:text-base">
          XPACE moves towards Continuous Compliance Monitoring. Instead of
          annual panic, we integrate tools that monitor your posture 24/7,
          alerting instantly if a configuration violates a rule.
        </p>
      </section>

      {/* Lower Section: Red CTA */}
      <section className="relative bg-red-600 py-20 px-4 overflow-hidden">
        {/* Decorative Grid Pattern (Optional - For visual depth like image) */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            size: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Verify Your Security
          </h2>

          <p className="text-white/90 text-lg mb-10 font-medium">
            Don't wait for a regulator to knock on your door. Achieve
            world-class compliance today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* White Button */}
            <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg min-w-[200px]">
              Start Readiness Check
            </button>

            {/* Transparent/Outline Button */}
            <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-colors min-w-[200px]">
              Download Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceCTA;
