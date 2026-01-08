"use client"

import React from 'react';
import { Bot, Globe, Database, Radio, Users, Cpu, Share2 } from 'lucide-react';

const SeamlessHero = () => {
  return (
    <section className="relative min-h-screen lg:-mt-7 w-full bg-[#1a2b4b] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-6xl mx-auto lg:ml-27 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/40 border border-red-500/30 px-3 py-1 rounded-sm">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Neural Bridge Active</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold !text-white leading-[1]">
            Seamless <br /> 
            <span className="text-[#ef3b33]">Symbiosis.</span>
          </h1>

          <div className="flex gap-4">
            <div className="w-1 bg-[#ef3b33] self-stretch opacity-60"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
              Don't let your AI live in isolation. We fuse advanced algorithms with your enterprise DNA, creating a single, intelligent organism.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-[#1a2b4b] hover:bg-slate-100 font-bold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all">
              <span className="text-red-500 font-bold">⚡</span>
              Ignite Integration
            </button>
            <button className="border border-slate-700 bg-slate-800/30 hover:bg-slate-800/60 text-white font-semibold py-3 px-8 rounded flex items-center justify-center gap-2 transition-all">
              <Share2 size={18} className="text-slate-400" />
              View Architecture
            </button>
          </div>
        </div>

        {/* Right Side Visuals (The Neural Network) */}
        <div className="relative flex justify-center items-center h-[500px]">
          
          {/* Central AI Node */}
          <div className="relative z-20 w-32 h-32 bg-[#1a2b4b] rounded-full flex items-center justify-center border-4 border-[#ef3b33] shadow-[0_0_50px_rgba(239,59,51,0.4)]">
            <Bot className="text-white w-14 h-14" />
          </div>

          {/* Dotted Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#ef3b33" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#ef3b33" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#ef3b33" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#ef3b33" strokeWidth="2" strokeDasharray="6,4" />
          </svg>

          {/* Floating Nodes */}
          {/* ERP (Top) */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
            <div className="bg-slate-800 p-3 rounded-full border border-slate-600 shadow-xl">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">ERP</span>
          </div>

          {/* WEB (Left) */}
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-pulse">
            <div className="bg-slate-800 p-3 rounded-full border border-slate-600 shadow-xl">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">WEB</span>
          </div>

          {/* IOT (Right) */}
          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-pulse">
            <div className="bg-slate-800 p-3 rounded-full border border-slate-600 shadow-xl">
              <Radio className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">IOT</span>
          </div>

          {/* CRM (Bottom) */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
            <div className="bg-slate-800 p-3 rounded-full border border-slate-600 shadow-xl">
              <Users className="text-white w-5 h-5" />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">CRM</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SeamlessHero;