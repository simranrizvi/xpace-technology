import React from 'react';

const steps = [
  { num: "01", title: "Corpus Collection", desc: "Gathering raw text data." },
  { num: "02", title: "Preprocessing", desc: "Tokenization & Cleaning." },
  { num: "03", title: "Model Training", desc: "Fine-tuning BERT/GPT." },
  { num: "04", title: "Validation", desc: "Testing edge cases." },
  { num: "05", title: "API Integration", desc: "Scalable deployment." },
];

const NlpPipeline = () => {
  return (
    <section className="bg-[#1a2b4b] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-[#ef3b33] text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
          Our Methodology
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-20 tracking-tight">
          NLP Engineering Pipeline
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-0 relative">

          {steps.map((step, idx) => (
            <React.Fragment key={idx}>

              {/* Step Column */}
              <div className="group flex-1 flex flex-col items-center relative z-10">

                {/* Card */}
                <div className={`
                  w-full max-w-[200px] p-6 rounded-xl border-2 transition-all duration-300 min-h-[160px]
                  flex flex-col items-center justify-center
                  ${step.active 
                    ? 'border-[#ef3b33] shadow-[0_0_20px_rgba(239,59,51,0.2)]' 
                    : 'border-[#1A2B4B] group-hover:border-[#ef3b33]'}
                `}>

                  {/* Number inside card */}
                  <div className={`
                    text-4xl font-black mb-3 transition-all duration-300
                    ${step.active 
                      ? 'text-[#ef3b33]' 
                      : 'text-slate-700 group-hover:text-[#ef3b33]'}
                  `}>
                    {step.num}
                  </div>

                  <h3 className={`font-bold text-[14px] mb-2 ${step.active ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed max-w-[140px]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-[110px]">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ef3b33]/60"
                  >
                    <path 
                      d="M5 12H19M19 12L13 6M19 12L13 18" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NlpPipeline;
