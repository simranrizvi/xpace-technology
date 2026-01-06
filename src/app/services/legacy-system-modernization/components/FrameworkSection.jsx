"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Cloud, Layers, Code2, ShoppingCart, Trash2, ChevronRight } from 'lucide-react';

const FrameworkSection = () => {
  const [activeTab, setActiveTab] = useState('Rehost');

  const frameworkData = {
    "Retain": {
      title: "Retain",
      desc: "Keep what works perfectly. Sometimes the best strategy for a specific, low-value, stable component is to leave it alone.",
      icon: <Layers size={48} />
    },
    "Rehost": {
      title: "Re-host (Lift & Shift)",
      desc: "Move to the cloud with minimal changes for quick wins. Ideal for reducing data center footprint immediately.",
      icon: <Cloud size={48} />
    },
    "Replatform": {
      title: "Re-platform",
      desc: "Move to the cloud with some optimization, such as using managed databases (RDS) instead of managing your own SQL server.",
      icon: <RefreshCw size={48} />
    },
    "Refactor": {
      title: "Refactor ",
      desc: "Rewrite code to be cloud-native (Microservices). This involves significant changes but offers the highest long-term ROI.",
      icon: <Code2 size={48} />
    },
    "Repurchase": {
      title: "Repurchase",
      desc: "Switch to a SaaS alternative. Why maintain a custom CRM when you can move to Salesforce?",
      icon: <ShoppingCart size={48} />
    },
    "Retire": {
      title: "Retire ",
      desc: "Shut down redundant systems safely. Eliminate the cost of hosting applications no one uses anymore.",
      icon: <Trash2 size={48} />
    }
  };

  const tabs = Object.keys(frameworkData);

  return (
    <section className="min-h-screen bg-[#0a1221] py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          The "6 R's" Framework
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Navigation Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center justify-between px-6 py-2.5 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-[#e52e2e] text-white shadow-lg ' 
                  : 'bg-[#162235] text-slate-400 hover:bg-[#1c2b42] text-left'
                }`}
              >
                <span>{tab}</span>
                {activeTab === tab && <ChevronRight size={20} />}
              </button>
            ))}
          </div>

          {/* Right Side: Dynamic Content Card */}
          <div className="lg:col-span-8 bg-[#162235]/50 border border-slate-800 rounded-3xl p-10 md:p-10  min-h-[350px] relative overflow-hidden">
            {/* Background Decorative Icon */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 text-slate-400">
               <RefreshCw size={280} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Active Icon Circle */}
                <div className="w-17 h-17 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-[#4fd1ed] mb-6 shadow-inner">
                  {frameworkData[activeTab].icon}
                </div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {frameworkData[activeTab].title}
                </h3>
                <p className="text-slate-400 text-lg md:text-lg leading-relaxed max-w-2xl">
                  {frameworkData[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;