"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Ship, Box, Share2, ArrowDown } from 'lucide-react';

const EvolutionSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Visual Transition Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col items-center space-y-8"
          >
            {/* Legacy Monolith Card */}
            <div className="w-full max-w-sm bg-white p-6 rounded-xl border-l-4 border-slate-200 shadow-sm flex items-center gap-5 opacity-60">
              <div className="bg-slate-50 p-3 rounded-lg">
                <Server className="text-slate-400" size={32} />
              </div>
              <div>
                <h4 className="text-slate-500 font-bold text-lg">Legacy Monolith</h4>
                <p className="text-slate-400 text-sm">Slow, Rigid, Risky to update</p>
              </div>
            </div>

            {/* Red Down Arrow */}
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-red-500"
            >
              <ArrowDown size={32} strokeWidth={3} />
            </motion.div>

            {/* Cloud-Native Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-sm bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-xl flex items-center gap-5"
            >
              <div className="bg-cyan-50 p-3 rounded-lg">
                <Ship className="text-cyan-500" size={32} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-lg">Cloud-Native</h4>
                <p className="text-cyan-600 text-sm font-medium">Agile, Resilient, Scalable</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-[#1e293b] leading-tight">
              Unleashing the <span className="text-red-600">True Power</span> of Cloud
            </h2>

            <div className="space-y-6 text-secondary text-base leading-relaxed">
              <p>
                Moving to the cloud is not enough; you must be built for the cloud. 
                Cloud-Native Architecture creates loosely coupled systems that are 
                resilient, manageable, and observable.
              </p>
              <p>
                At XPACE, we help you transition from "Cloud-Enabled" to "Cloud-Native." We 
                architect solutions using Kubernetes, Docker, and Service Meshes, enabling your 
                teams to make high-impact changes frequently with minimal toil.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-5 py-3 rounded-lg border border-slate-200 transition-colors cursor-default group">
                <Ship size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-800 text-sm">Kubernetes</span>
              </div>
              
              <div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-5 py-3 rounded-lg border border-slate-200 transition-colors cursor-default group">
                <Box size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-800 text-sm">Docker</span>
              </div>

              <div className="flex items-center gap-2 bg-[#f0f7ff] hover:bg-[#e0efff] px-5 py-3 rounded-lg border border-blue-100 transition-colors cursor-default group">
                <Share2 size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-800 text-sm">Service Mesh</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;