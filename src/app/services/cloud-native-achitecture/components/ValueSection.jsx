"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';

const ValueSection = () => {
  const points = [
    { title: "Rapid Release Cycles", desc: "Deploy updates multiple times a day instead of once a month." },
    { title: "Elastic Scalability", desc: "Resources adjust automatically to real-time demand." },
    { title: "Resource Optimization", desc: "Run more applications on less hardware with lightweight containers." },
    { title: "Vendor Neutrality", desc: "Prevent lock-in by using open standards (CNCF) across any cloud." },
  ];

  // Stick heights in percentage for better control
  const chartData = [30, 60, 40, 80, 50, 95, 70, 85];

  return (
    <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-[#1e293b]">
              The Value of <span className="text-red-600">Going Native</span>
            </h2>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-red-600 fill-red-50" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{point.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Efficiency Metrics Card with Stick Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-10 relative"
          >
            {/* Window Controls (Red, Yellow, Green dots) */}
            <div className="flex gap-1.5 absolute top-6 right-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="mb-8">
              <h3 className="text-slate-400 font-bold text-xs tracking-[0.2em] uppercase mb-8">EFFICIENCY METRICS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Metric 1 */}
                <div className="bg-[#f0fff4] p-5 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 text-green-600 text-[10px] font-black uppercase tracking-wider mb-2">
                    <TrendingUp size={14} /> Deployment Freq.
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-slate-800">+300%</div>
                </div>

                {/* Metric 2 */}
                <div className="bg-[#f0f7ff] p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-wider mb-2">
                    <TrendingDown size={14} /> Infra Costs
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-slate-800">-40%</div>
                </div>
              </div>
            </div>

            {/* STICK CHART: Fix is here */}
            <div className="flex items-end justify-between h-40 w-full gap-2 pt-4 px-2">
              {chartData.map((h, i) => (
                <div key={i} className="flex-1 bg-slate-100 rounded-t-md relative h-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 bg-[#475569] rounded-t-md group-hover:bg-[#1e293b] transition-colors"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ValueSection;