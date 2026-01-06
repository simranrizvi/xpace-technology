"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, CreditCard, Truck, LayoutGrid, ArrowRight, RefreshCw } from 'lucide-react';

const ResilientHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0a1120] text-white flex items-center overflow-hidden px-6 lg:px-20">
      
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 ml-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-[10px] font-bold tracking-widest uppercase text-slate-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Architecture Modernization
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight !text-white">
            From <span className="relative inline-block">
              Rigid
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '110%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-1/2 left-[-5%] h-[4px] bg-red-600 -rotate-2"
              />
            </span> to <br />
            <span className="text-blue-400">Resilient.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            XPACE transforms monolithic systems into autonomous Microservices. 
            Decouple your logic, deploy independently, and scale without limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#e31e24] hover:bg-red-700 text-white font-bold py-3 px-8 flex items-center justify-center rounded gap-2 transition-transform active:scale-95 group">
              Start Transformation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-[#1a2333]/50 hover:bg-[#252f44] border border-slate-700 text-white font-bold py-3 px-7 rounded flex items-center justify-center gap-2 transition-transform active:scale-95">
              <RefreshCw size={18} /> View Process
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: Circular Orbit Animation */}
        <div className="relative flex items-center justify-center h-[500px] w-full">
          
          {/* Main Orbit Path (Static Circle) */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-slate-800 rounded-full" />
          <div className="absolute w-[220px] h-[220px] border border-dashed border-slate-800/50 rounded-full" />

          {/* Center Core API Box */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="z-20 p-8 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl flex flex-col items-center gap-3 w-40"
          >
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
              <LayoutGrid size={32} className="text-white" />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Core API</span>
            </div>
          </motion.div>

          {/* Floating Microservices (Rotating) */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            
            {/* Cart Icon */}
            <div className="absolute top-[10%] left-[45%] -translate-x-1/2 rotate-[-0deg]">
              <OrbitIcon icon={<ShoppingCart size={20} />} label="Cart" color="bg-blue-500" />
            </div>

            {/* Auth Icon */}
            <div className="absolute top-[45%] right-[5%] -translate-y-1/2 rotate-[-0deg]">
              <OrbitIcon icon={<ShieldCheck size={20} />} label="Auth" color="bg-red-500" />
            </div>

            {/* Payment Icon */}
            <div className="absolute bottom-[10%] left-[55%] -translate-x-1/2 rotate-[-0deg]">
              <OrbitIcon icon={<CreditCard size={20} />} label="Payment" color="bg-green-500" />
            </div>

            {/* Ship Icon */}
            <div className="absolute top-[50%] left-[5%] -translate-y-1/2 rotate-[-0deg]">
              <OrbitIcon icon={<Truck size={20} />} label="Ship" color="bg-yellow-500" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

// Helper Component for Rotating Icons
const OrbitIcon = ({ icon, label, color }) => (
  <div className="flex flex-col items-center gap-2 group animate-[spin_20s_linear_infinite_reverse]">
    <div className={`${color} p-3 rounded-full shadow-lg transition-transform group-hover:scale-125`}>
      {icon}
    </div>
    <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
      {label}
    </span>
  </div>
);

export default ResilientHero;