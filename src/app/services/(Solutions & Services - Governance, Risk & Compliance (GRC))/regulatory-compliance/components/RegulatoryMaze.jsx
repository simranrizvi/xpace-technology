
"use client"
import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const RegulatoryMaze = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: THE FUNNEL VISUAL --- */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center">
          
          {/* Top Icons (Complex Regulations) */}
          <div className="flex gap-8 mb-4">
            <FileText className="text-gray-300" size={28} />
            <Scale className="text-gray-300" size={28} />
            <AlertTriangle className="text-gray-300" size={28} />
          </div>
          
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            Complex Regulations
          </span>

          {/* The Funnel (CSS Triangle) */}
          <div className="relative mb-8">
            <div className="w-32 h-24 bg-gradient-to-b from-gray-200 to-gray-50 clip-funnel flex items-center justify-center">
               <ArrowRight className="text-gray-400 mt-4" size={20} />
            </div>
            {/* Custom Clip Path using Inline Style or Utility */}
            <style jsx>{`
              .clip-funnel {
                clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 40% 100%);
              }
            `}</style>
          </div>

          {/* Simplified Process Box */}
          <div className="w-full max-w-sm border-2 border-green-500 rounded-2xl p-5 flex items-center gap-4 bg-green-50/30">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="text-green-600" size={20} />
            </div>
            <div>
              <h4 className="text-[#1e293b] font-bold text-sm">Simplified Process</h4>
              <p className="text-[10px] text-gray-400 font-medium">Actionable Technical Controls</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <div className="space-y-8">
          <h2 className="text-[#1e293b] text-4xl  font-bold leading-tight">
            Navigating the <span className="text-red-600">Regulatory Maze</span>
          </h2>
          
          <div className="space-y-6 text-gray-500">
            <p className="text-lg">
              The cost of non-compliance is rising. Whether you are a SaaS 
              company needing SOC 2 or a healthcare provider navigating 
              HIPAA, the path is often overwhelming.
            </p>
            <p className="text-sm leading-relaxed">
              XPACE acts as your expert navigator. We translate legal jargon into technical 
              controls, ensuring your infrastructure, processes, and people meet strict 
              requirements without confusion.
            </p>
          </div>

          {/* Blue Stats Cards */}
          <div className="flex gap-6 pt-6">
            <div className="flex-1 bg-white border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
              <h4 className="text-2xl font-black text-[#1e293b]">100%</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Fines Avoided</p>
            </div>
            
            <div className="flex-1 bg-white border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
              <h4 className="text-2xl font-black text-[#1e293b]">100%</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Success Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RegulatoryMaze;