import React from 'react';
import { DollarSign, Activity, Globe, ShieldCheck } from 'lucide-react';

const ValueCloudFirst = () => {
  const features = [
    {
      icon: <DollarSign className="text-blue-600 w-5 h-5" />,
      title: "Shift CapEx to OpEx",
      desc: "Eliminate massive upfront hardware costs. Pay only for the computing resources you actually consume.",
      highlight: true
    },
    {
      icon: <Activity className="text-blue-600 w-5 h-5" />,
      title: "Elastic Scalability",
      desc: "Scale up during peak seasons (e.g., Black Friday) and scale down instantly to save money.",
    },
    {
      icon: <Globe className="text-blue-600 w-5 h-5" />,
      title: "Global Reach",
      desc: "Deploy apps to regions around the world in minutes, putting services closer to customers.",
    },
    {
      icon: <ShieldCheck className="text-blue-600 w-5 h-5" />,
      title: "Enhanced Resilience",
      desc: "Leverage cloud redundancy to ensure your data is backed up across multiple geographic zones.",
    }
  ];

  return (
    <section className="bg-[#f8faff] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a2b4b] mb-2">Value of Cloud-First</h2>
         
          <p className="text-gray-500 text-lg">
            Move from static, expensive hardware to dynamic, cost-efficient scaling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Cost Analysis Chart Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-[#1a2b4b] text-xl">Cost Analysis</h3>
              <div className="flex gap-4 text-xs font-semibold text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span> Legacy (Fixed)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span> Cloud (Elastic)
                </span>
              </div>
            </div>

            {/* Custom SVG Graph */}
            <div className="relative h-64 w-full">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid Lines */}
                {[...Array(5)].map((_, i) => (
                  <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#f0f0f0" strokeWidth="1" />
                ))}
                {[...Array(9)].map((_, i) => (
                  <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="200" stroke="#f0f0f0" strokeWidth="1" />
                ))}
                
                {/* Fixed Capacity Line (Dashed) */}
                <line x1="0" y1="80" x2="400" y2="80" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Cloud Elastic Curve */}
                <path 
                  d="M0 160 Q 50 160, 100 130 T 200 60 T 300 160" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3" 
                />
                <path 
                  d="M0 160 Q 50 160, 100 130 T 200 60 T 300 160 L 300 200 L 0 200 Z" 
                  fill="url(#gradient)" 
                  opacity="0.1"
                />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Labels */}
              <div className="absolute top-10 left-10 bg-gray-100 text-[10px] p-1 rounded border border-dashed border-gray-400 text-gray-500">
                Over-Provisioned Capacity
              </div>
              <div className="absolute top-[85px] right-[25%] bg-green-50 text-green-600 text-[10px] font-bold py-1 px-2 rounded border border-green-200 flex items-center gap-1">
                <span>↗</span> Savings Zone
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-2xl transition-all duration-300 flex gap-5 items-start ${
                  item.highlight ? 'bg-white shadow-md border border-blue-50' : 'hover:bg-blue-50/50'
                }`}
              >
                <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2b4b] mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueCloudFirst;