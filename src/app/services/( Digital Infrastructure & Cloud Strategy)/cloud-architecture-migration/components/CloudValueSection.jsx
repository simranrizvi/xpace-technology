"use client"

import React from 'react';
import { DollarSign, Activity, Globe, Shield } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, ReferenceLine } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 25 },
  { name: 'C', value: 45 },
  { name: 'D', value: 80 },
  { name: 'E', value: 40 },
  { name: 'F', value: 20 },
];

const CloudValueSection = () => {
  const features = [
    {
      title: "Shift CapEx to OpEx",
      desc: "Eliminate massive upfront hardware costs. Pay only for the computing resources you actually consume.",
      icon: <DollarSign className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Elastic Scalability",
      desc: "Scale up during peak seasons (e.g., Black Friday) and scale down instantly to save money.",
      icon: <Activity className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Global Reach",
      desc: "Deploy apps to regions around the world in minutes, putting services closer to customers.",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Enhanced Resilience",
      desc: "Leverage cloud redundancy to ensure your data is backed up across multiple geographic zones.",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1e293b] text-3xl font-bold mb-2">Value of Cloud-First</h2>
          <div className="w-8 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm italic">
            Move from static, expensive hardware to dynamic, cost-efficient scaling.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Cost Analysis Chart */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-[#1e293b] text-sm">Cost Analysis</span>
              <div className="flex gap-4 text-[10px] font-medium uppercase tracking-tighter">
                <span className="flex items-center gap-1 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-gray-300" /> Legacy (Fixed)
                </span>
                <span className="flex items-center gap-1 text-blue-600">
                  <div className="w-2 h-2 rounded-full bg-blue-600" /> Cloud (Elastic)
                </span>
              </div>
            </div>

            <div className="h-64 w-full relative">
                {/* Labels on Chart */}
                <div className="absolute top-4 left-10 z-10 bg-gray-100 text-[10px] p-1 rounded border border-dashed border-gray-400 text-gray-600">
                    Over-Provisioned Capacity
                </div>
                <div className="absolute top-32 right-20 z-10 bg-green-100 text-[10px] p-1 rounded text-green-700 font-bold border border-green-200">
                    ↗ Savings Zone
                </div>

              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  {/* Grid Lines simulation */}
                  <XAxis hide />
                  <YAxis hide domain={[0, 100]} />
                  
                  {/* Legacy Fixed Line */}
                  <ReferenceLine y={65} stroke="#d1d5db" strokeDasharray="3 3" />
                  
                  {/* Cloud Elastic Area */}
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb" 
                    strokeWidth={3}
                    fill="url(#colorBlue)" 
                  />
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="w-full lg:w-1/2 space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[#1e293b] font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudValueSection;