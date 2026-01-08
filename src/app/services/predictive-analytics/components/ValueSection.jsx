import React from 'react';
import { UserCheck, TrendingUp, Zap, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

const ValueSection = () => {
  const metrics = [
    { label: "Inventory Optimization", value: "92%", color: "bg-blue-500" },
    { label: "Customer Retention", value: "85%", color: "bg-green-500" },
    { label: "Risk Mitigation", value: "78%", color: "bg-red-600" },
  ];

  const features = [
    {
      title: "Optimized Inventory",
      desc: "Reduce holding costs and stockouts by predicting exactly what you need.",
      icon: <UserCheck size={20} className="text-green-400" />,
    },
    {
      title: "Higher Marketing ROI",
      desc: "Target only users with a high statistical probability of conversion.",
      icon: <UserCheck size={20} className="text-green-400" />,
    },
    {
      title: "Risk Prevention",
      desc: "Identify loan defaults or supply chain disruptions weeks in advance.",
      icon: <UserCheck size={20} className="text-green-400" />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          The Value of Foresight
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Stats Card */}
        <div className="relative group">
          {/* Gradient Border Trick */}
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-500 to-red-700 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div> */}
          
          <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl px-6 py-5 pt-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-[#1a2b4b] font-bold text-xl">Operational Efficiency</h3>
              <div className="flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 text-xs font-bold uppercase">Live</span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-8 mb-3">
              {metrics.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-600">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Mini Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50/50 p-4 rounded-xl text-center border border-slate-100">
                <div className="flex justify-center text-green-500 mb-1">
                  <ArrowDownLeft size={18} />
                </div>
                <div className="text-green-600 font-bold text-lg">-15%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Cost</div>
              </div>
              <div className="bg-slate-50/50 p-4 rounded-xl text-center border border-slate-100">
                <div className="flex justify-center text-blue-500 mb-1">
                  <ArrowUpRight size={18} />
                </div>
                <div className="text-blue-600 font-bold text-lg">+22%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Revenue</div>
              </div>
              <div className="bg-slate-50/50 p-4 rounded-xl text-center border border-slate-100">
                <div className="flex justify-center text-red-500 mb-1">
                  <Zap size={18} className="fill-red-500" />
                </div>
                <div className="text-red-600 font-bold text-lg">3x</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Speed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="space-y-5">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6 group cursor-default">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center transition-colors group-hover:bg-green-100">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-primary font-bold text-md">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueSection;