import React from 'react';
import { FileCode, PlayCircle } from 'lucide-react';

const MachineComplianceSection = () => {
  return (
    <section className="font-sans">
      {/* Upper White Section: Machine-Readable Compliance */}
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          {/* Floating Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center border border-gray-50">
              <FileCode className="text-red-500" size={32} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            Machine-Readable Compliance
          </h2>
          
          <p className="text-gray-500 leading-relaxed mb-10">
            XPACE is preparing for OSCAL. We format documentation into XML/JSON, 
            allowing regulators to audit your systems automatically via API, 
            potentially eliminating human auditors.
          </p>

          {/* Code Snippet Tag */}
          <div className="inline-block bg-[#16213e] rounded-lg px-6 py-2 shadow-inner">
            <code className="text-green-400 text-xs font-mono">
              &lt;status&gt;compliant&lt;/status&gt;
            </code>
          </div>
        </div>
      </div>

      {/* Lower Red Section: Final CTA */}
      <div className="relative bg-accent py-24 px-6 overflow-hidden">
        

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-6">
            Stop Scrambling. Start Reporting.
          </h2>
          
          <p className="text-red-100 text-lg mb-12 max-w-2xl mx-auto">
            Turn compliance data into a strategic asset. Build a reporting engine that instills confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Button */}
            <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              Automate Reporting
            </button>
            
            {/* Outline Button */}
            <button className="flex items-center gap-2 border-2 border-red-400 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-all transform hover:-translate-y-1">
              <PlayCircle size={20} />
              View Dashboard Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineComplianceSection;