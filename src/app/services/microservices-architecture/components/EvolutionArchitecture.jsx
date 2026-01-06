"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CreditCard, Package, ShoppingCart, CheckCircle2, XCircle, Box, AlertCircle } from 'lucide-react';

const EvolutionArchitecture = () => {
  const [activeTab, setActiveTab] = useState('microservices');

  // Content for Legacy vs Microservices
  const content = {
    legacy: {
      title: "The Bottleneck of",
      highlight: "Legacy",
      desc: "Monolithic applications tightly couple all functions into a single codebase. A small change in one area requires re-testing and re-deploying the entire system, slowing down innovation.",
      features: [
        "High risk deployments",
        "Difficult to scale specific features",
        "Locked into one technology stack"
      ],
      icon: <XCircle size={18} className="text-red-500 fill-red-50" />
    },
    microservices: {
      title: "The Freedom of",
      highlight: "Modularity",
      desc: "Microservices structure your application as a collection of loosely coupled services. Each service is self-contained, allowing teams to develop, deploy, and scale independently using the best tools for the job.",
      features: [
        "Fault isolation & resilience",
        "Independent scaling & deployment",
        "Faster time-to-market"
      ],
      icon: <CheckCircle2 size={18} className="text-green-500 fill-green-50" />
    }
  };

  const current = content[activeTab];

  return (
    <section className="bg-[#f8fafc] py-24 px-6 lg:px-20 min-h-screen flex flex-col items-center">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header & Toggle */}
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Evolution of Architecture
          </h2>
          
          <div className="inline-flex bg-slate-200/50 p-1.5 rounded-full border border-slate-200 shadow-inner">
            <button 
              onClick={() => setActiveTab('legacy')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'legacy' ? 'bg-[#1e293b] text-white shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Legacy Monolith
            </button>
            <button 
              onClick={() => setActiveTab('microservices')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'microservices' ? 'bg-[#e31e24] text-white shadow-lg shadow-red-200' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Microservices
            </button>
          </div>
        </div>

        {/* Content Card */}
        <motion.div 
          layout
          className="bg-white rounded-[10px] shadow-lg border border-slate-200 p-8 md:p-2 flex flex-col lg:flex-row items-center gap-16 min-h-[500px]"
        >
          {/* Left Side: Visual Representation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">
              
              <AnimatePresence mode="wait">
                {activeTab === 'microservices' ? (
                  <motion.div 
                    key="micro"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="grid grid-cols-2 gap-4 w-full p-8 relative"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-md text-[10px] font-bold text-slate-500 whitespace-nowrap">
                      API Gateway
                    </div>
                    <div className="absolute inset-0 border-2 border-dashed border-blue-100 rounded-full scale-90 animate-[spin_20s_linear_infinite] opacity-50" />

                    <ServiceBox color="bg-blue-50" icon={<ShieldCheck className="text-blue-500" />} label="Auth" labelColor="text-blue-600" />
                    <ServiceBox color="bg-green-50" icon={<CreditCard className="text-green-500" />} label="Billing" labelColor="text-green-600" />
                    <ServiceBox color="bg-purple-50" icon={<Package className="text-purple-500" />} label="Products" labelColor="text-purple-600" />
                    <ServiceBox color="bg-orange-50" icon={<ShoppingCart className="text-orange-500" />} label="Orders" labelColor="text-orange-600" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="legacy"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="flex flex-col items-center justify-center gap-6"
                  >
                    <div className="relative">
                      <div className="w-48 h-48 bg-slate-200/50 rounded-2xl border-2 border-slate-300 flex flex-col items-center justify-center gap-4 shadow-inner">
                        <Box size={48} className="text-slate-400" />
                        <span className="text-slate-600 font-bold text-xl">All-in-One</span>
                      </div>
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white p-1.5 rounded-full shadow-lg">
                        <AlertCircle size={20} />
                      </div>
                    </div>
                    <div className="bg-red-50 px-4 py-1 rounded-full text-[10px] font-bold text-red-600 uppercase tracking-widest">
                      Single Point of Failure
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Text Description */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-primary">
                  {current.title} <span className={activeTab === 'legacy' ? 'text-red-600' : 'text-accent'}>{current.highlight}</span>
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-md">
                  {current.desc}
                </p>

                <div className="space-y-4 pt-4">
                  {current.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {current.icon}
                      <span className="text-slate-500 font-semibold text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceBox = ({ color, icon, label, labelColor }) => (
  <div className={`${color} p-8 rounded-2xl flex flex-col items-center justify-center gap-3 border border-white shadow-sm hover:shadow-md transition-all cursor-default`}>
    {icon}
    <span className={`${labelColor} font-bold text-sm`}>{label}</span>
  </div>
);

export default EvolutionArchitecture;