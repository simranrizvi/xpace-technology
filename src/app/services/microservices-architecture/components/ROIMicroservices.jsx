"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const ROIMicroservices = () => {
  const metrics = [
    { value: "99.9%", label: "UPTIME RELIABILITY" },
    { value: "3x", label: "FASTER DEPLOYMENT CYCLES" },
    { value: "-40%", label: "INFRASTRUCTURE COST REDUCTION" },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden max-w-[95%] mx-auto">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT: Metrics */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1  rounded text-[10px] font-bold uppercase tracking-widest">
              ROI Focused
            </span>
            <h2 className="text-4xl font-bold text-primary mt-2">
              Why Shift to <span className="text-[#e31e24]">Microservices?</span>
            </h2>
            <p className="text-secondary text-md leading-relaxed">
              It's not just about code; it's about business agility. Independent services mean independent value streams.
            </p>
          </div>

          <div className="space-y-4">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-4 rounded border border-slate-200 bg-slate-50/30"
              >
                <span className="text-2xl font-black text-[#1e293b] min-w-[100px]">{m.value}</span>
                <div className="h-8 w-[1px] bg-slate-200" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: System Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-[#0a0f1e] rounded-[20px]  mt-5 p-8 shadow-2xl border border-slate-800"
        >
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-tighter">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              System Active
            </div>
          </div>

          {/* Service Bars */}
          <div className="space-y-5">
            <ServiceBar label="Checkout Service" status="High Load" progress="w-[85%]" color="bg-green-400" />
            <ServiceBar label="User Profile" status="Idle" progress="w-[25%]" color="bg-blue-400" />
            <ServiceBar label="Inventory API" status="Normal" progress="w-[55%]" color="bg-blue-500" />
            <ServiceBar label="Recommendation" status="Processing" progress="w-[70%]" color="bg-purple-500" />
          </div>

          {/* Auto-scaling Event Alert */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 3 }}
            className="mt-12 bg-[#162033] border border-slate-700/50 p-4 rounded-xl flex items-center gap-4"
          >
            <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
              <RefreshCw size={18} className="animate-spin" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Scaling Event</p>
              <p className="text-white text-xs font-semibold">Checkout Service scaled to 5 replicas.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for Progress Bars
const ServiceBar = ({ label, status, progress, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[11px] font-bold tracking-tight">
      <span className="text-slate-300">{label}</span>
      <span className="text-slate-500 uppercase">{status}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: progress.replace('w-[', '').replace(']', '') }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`} 
      />
    </div>
  </div>
);

export default ROIMicroservices;