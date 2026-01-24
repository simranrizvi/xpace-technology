import React from 'react';
import { CheckCircle2, BarChart3, FileText, ArrowDown } from 'lucide-react';

const ValueSection = () => {
  const values = [
    {
      title: "Reduce Audit Fatigue",
      desc: "Stop spending weeks gathering evidence. Generate reports in minutes with a click.",
    },
    {
      title: "Eliminate Human Error",
      desc: "Automated collection prevents forgetting screenshots or losing critical log files.",
    },
    {
      title: "Faster Sales Cycles",
      desc: "Answer security questionnaires (SIG/CAIQ) instantly with pre-verified documentation.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary ">
            Value of Organized Compliance
          </h2>
     
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Side: Visual Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              
              {/* Top Row: Chaos representation */}
              <div className="flex items-center justify-between mb-10 opacity-40">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-200 rounded-lg">
                    <FileText size={20} className="text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-gray-200 rounded"></div>
                    <div className="h-2 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  Chaos
                </span>
              </div>

              {/* Central Arrow */}
              <div className="flex justify-center mb-10">
                <div className="text-gray-300 animate-bounce">
                  <ArrowDown size={24} />
                </div>
              </div>

              {/* Bottom Card: Live Reporting */}
              <div className="bg-[#f0fdf4] border border-green-100 rounded-2xl p-6 flex items-center justify-between shadow-md transform hover:scale-[1.02] transition-transform cursor-default">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1e293b] rounded-xl shadow-lg">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#1e293b] font-bold text-lg">Live Reporting</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-[10px] font-bold uppercase tracking-wider">Instant</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-green-600 text-[10px] font-bold uppercase tracking-wider">Accurate</span>
                    </div>
                  </div>
                </div>
                {/* Small Green Dot */}
                <div className="w-3 h-3 bg-green-400 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div className="w-full lg:w-1/2 space-y-3">
            {values.map((item, index) => (
              <div 
                key={index}
                className="group flex gap-6 p-6 rounded-2xl border border-transparent hover:border-green-100 hover:bg-green-50/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mt-1">
                  <CheckCircle2 className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e293b] mb-2 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.desc}
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

export default ValueSection;