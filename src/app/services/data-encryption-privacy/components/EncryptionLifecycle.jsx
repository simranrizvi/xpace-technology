import React from 'react';
import { CreditCard, Stethoscope, Cloud, MessageSquare, ArrowRight } from 'lucide-react';

const EncryptionLifecycle = () => {
  const industries = [
    { title: "FinTech", desc: "Credit Card Tokenization", tag: "PCI Safe", icon: <CreditCard size={20} /> },
    { title: "Healthcare", desc: "Patient Records (PHI)", tag: "HIPAA Safe", icon: <Stethoscope size={20} /> },
    { title: "Cloud Storage", desc: "BYOK (Bring Your Own Key)", tag: "Private", icon: <Cloud size={20} /> },
    { title: "Messaging", desc: "Secure Communications", tag: "E2EE", icon: <MessageSquare size={20} /> },
  ];

  const steps = [
    { id: 1, label: "DISCOVER" },
    { id: 2, label: "CLASSIFY" },
    { id: 3, label: "ENCRYPT", active: true },
    { id: 4, label: "MANAGE KEYS" },
    { id: 5, label: "AUDIT" },
  ];

  return (
    <section className="font-sans">
      {/* 1. Where We Apply This (White Section) */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-primary text-4xl font-bold text-center mb-16">Where We Apply This</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((item, index) => (
              <div key={index} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-md cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-gray-400 group-hover:text-red-600 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100 flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-[#112240] font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Encryption Lifecycle (Dark Section) */}
      <div className="bg-[#112240] py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-4xl font-bold text-center mb-20">Encryption Lifecycle</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center group">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                    ${step.active 
                      ? 'bg-red-600 border-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] scale-110' 
                      : 'bg-transparent border-gray-700 text-gray-500 group-hover:border-gray-400'}`}>
                    {step.id}
                  </div>
                  <span className={`text-[10px] font-black tracking-widest mt-4 transition-colors
                    ${step.active ? 'text-white' : 'text-gray-500'}`}>
                    {step.label}
                  </span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center px-4 mb-8">
                    <ArrowRight size={16} className="text-red-600" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncryptionLifecycle;