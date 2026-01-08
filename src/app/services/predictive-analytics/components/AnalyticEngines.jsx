import React from 'react';
import { LineChart, Users, ShieldAlert, Target, Zap, Cpu } from 'lucide-react';

const engines = [
  {
    title: "Time-Series Forecasting",
    description: "Modeling sequential data (sales, stock) to predict future values, accounting for seasonality.",
    icon: <LineChart className="w-6 h-6 text-white" />,
  },
  {
    title: "Churn Prediction",
    description: "Identifying subtle behavioral patterns that indicate a customer is about to leave.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Risk Modeling",
    description: "Calculating credit risk, fraud probability, or liability scores to automate decisions.",
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
  },
  {
    title: "Propensity Modeling",
    description: "Predicting the likelihood of a customer purchasing a product to optimize marketing.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "Dynamic Pricing",
    description: "Forecasting demand elasticity to adjust pricing in real-time for max revenue.",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    title: "Predictive Maintenance",
    description: "Using sensor data to predict equipment failure before it causes downtime.",
    icon: <Cpu className="w-6 h-6 text-white" />,
  },
];

const AnalyticEngines = () => {
  return (
    <section className="bg-[#0f1115] py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col items-center justify-center">
      {/* Background Subtle Hexagon Pattern (Optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>

      {/* Header */}
      <div className="text-center mb-16 z-10">
        <p className="text-[#ef3b33] text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Analytic Engines</h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        {engines.map((engine, index) => (
          <div 
            key={index}
            className="group relative bg-[#1c1f26] border border-slate-800 p-5 rounded-xl transition-all duration-300 hover:bg-[#232730] hover:border-slate-600 hover:-translate-y-2 cursor-default"
          >
            {/* Icon Container */}
            <div className="bg-[#ef3b33] w-12 h-12 rounded-lg flex items-center justify-center mb-5 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform duration-300">
              {engine.icon}
            </div>

            {/* Content */}
            <h3 className="text-white text-xl font-bold mb-4 group-hover:text-red-50">{engine.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {engine.description}
            </p>

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnalyticEngines;