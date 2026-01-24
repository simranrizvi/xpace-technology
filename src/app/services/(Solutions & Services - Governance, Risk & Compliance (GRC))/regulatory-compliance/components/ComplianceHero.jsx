import React from 'react';
import { ShieldCheck, Globe, Lock, FileSearch, ShieldAlert, Download, CheckCircle } from 'lucide-react';

const ComplianceHero = () => {
  return (
    <section className="relative min-h-screen bg-[#1a2b4b] text-white flex items-center overflow-hidden px-6 lg:px-20">
      
      {/* Background World Map Overlay (Simple SVG/Image Placeholder) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* --- LEFT CONTENT --- */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Globe className="w-3 h-3 text-red-500" />
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-300">Global Standards: Active</span>
          </div>

          <h1 className="text-6xl md:text-7xl !text-white font-black leading-[0.95] tracking-tight">
            Turn into 
            <span className="text-blue-300 opacity-80"> Compliance  Advantage.</span> <br />
           
           
          </h1>

          <p className="text-gray-300 text-lg max-w-lg leading-relaxed border-l-2 border-red-600 pl-6">
            We simplify global regulations. Achieve ISO, GDPR, HIPAA, and SOC 2 
            certification to unlock new markets and build unshakeable customer trust.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-red-700 transition-all uppercase text-sm shadow-lg shadow-red-900/20">
              <CheckCircle className="w-5 h-5" />
              Start Readiness Check
            </button>
            <button className="flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all uppercase text-sm">
              <Download className="w-5 h-5" />
              Download Guide
            </button>
          </div>
        </div>

        {/* --- RIGHT VISUAL (Compliance Node) --- */}
        <div className="relative flex justify-center items-center h-[600px]">
          
          {/* Central Green Node */}
          <div className="relative w-48 h-48 rounded-full border-2 border-green-500 flex flex-col items-center justify-center bg-[#1a2b4b] z-20 shadow-[0_0_60px_rgba(34,197,94,0.3)]">
            <ShieldCheck size={48} className="text-white mb-2" />
            <span className="text-2xl font-black">100%</span>
            <span className="text-[10px] font-bold tracking-widest text-green-400 uppercase">Compliant</span>
          </div>

          {/* Dotted Connection Lines */}
          <div className="absolute w-[400px] h-[400px] border border-dashed border-white/10 rounded-full" />
          <div className="absolute w-[2px] h-[450px] border-l border-dashed border-white/20" />
          <div className="absolute h-[2px] w-[450px] border-t border-dashed border-white/20" />

          {/* Orbiting Compliance Badges */}
          {/* GDPR (Top) */}
          <ComplianceBadge icon={<Lock size={20}/>} label="GDPR" position="top-0" color="border-blue-400" />
          {/* HIPAA (Bottom) */}
          <ComplianceBadge icon={<ShieldAlert size={20}/>} label="HIPAA" position="bottom-0" color="border-red-400" />
          {/* SOC 2 (Left) */}
          <ComplianceBadge icon={<FileSearch size={20}/>} label="SOC 2" position="left-0" color="border-purple-400" />
          {/* ISO 27001 (Right) */}
          <ComplianceBadge icon={<ShieldCheck size={20}/>} label="ISO 27001" position="right-0" color="border-yellow-400" />
          
        </div>
      </div>
    </section>
  );
};

// Sub-component for badges
const ComplianceBadge = ({ icon, label, position, color }) => {
  const posClasses = {
    "top-0": "top-10 left-1/2 -translate-x-1/2",
    "bottom-0": "bottom-10 left-1/2 -translate-x-1/2",
    "left-0": "left-10 top-1/2 -translate-y-1/2",
    "right-0": "right-10 top-1/2 -translate-y-1/2",
  }[position];

  return (
    <div className={`absolute ${posClasses} z-30 flex flex-col items-center gap-2`}>
      <div className={`p-4 rounded-full border-2 ${color} bg-[#1a2b4b] shadow-xl hover:scale-110 transition-transform cursor-pointer`}>
        <div className="text-white">{icon}</div>
      </div>
      <span className="text-[10px] font-black tracking-tighter text-gray-300">{label}</span>
    </div>
  );
};

export default ComplianceHero;