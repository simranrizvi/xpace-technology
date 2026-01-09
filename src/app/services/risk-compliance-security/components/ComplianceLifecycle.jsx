import React from 'react';
import { MoveRight } from 'lucide-react'; // Arrows ke liye

const steps = [
  { id: "01", label: "MAP" },
  { id: "02", label: "ANALYZE" },
  { id: "03", label: "HARDEN", isActive: true }, // Default active/green
  { id: "04", label: "VERIFY" },
  { id: "05", label: "AUTOMATE" },
];

export default function ComplianceLifecycle() {
  return (
    <section className="bg-[#1a2b4b] py-20 flex flex-col items-center font-sans">
      <h2 className="text-4xl font-bold text-white mb-16">Compliance Lifecycle</h2>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Circle & Label */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div
                className={`
                  w-16 h-16 md:w-17 md:h-17 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all duration-300
                  ${step.isActive 
                    ? 'bg-red-500 border-red-500 text-[#1a2b4b] ' 
                    : 'bg-transparent border-slate-600 text-slate-400 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                  }
                `}
              >
                {step.id}
              </div>
              <span className={`mt-4 text-xs font-bold tracking-widest transition-colors duration-300
                ${step.isActive ? 'text-white' : 'text-slate-500 group-hover:text-red-500'}
              `}>
                {step.label}
              </span>
            </div>

            {/* Arrow (sirf last element se pehle) */}
            {index !== steps.length - 1 && (
              <div className="text-red-500 mb-8">
                <MoveRight size={24} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}