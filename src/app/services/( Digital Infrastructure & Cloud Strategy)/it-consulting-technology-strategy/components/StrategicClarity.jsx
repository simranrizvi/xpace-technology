import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const StrategicClarity = () => {
  const benefits = [
    {
      title: "Maximized ROI",
      desc: "Stop wasting money on 'Shelfware'. We ensure every dollar spent on IT returns tangible value.",
    },
    {
      title: "Reduced Technical Debt",
      desc: "Create a plan to retire aging legacy systems systematically, reducing outage risks.",
    },
    {
      title: "Faster Decision Making",
      desc: "With a clear framework, your teams stop arguing about tools and start building.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          Value of Strategic Clarity
        </h2>
       

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Impact Analysis Graph Card */}
          <div className="w-full lg:w-3/5 group">
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-transparent transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-primary">Impact Analysis</span>
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span> IT Spend
                  </span>
                  <span className="flex items-center gap-1.5 text-accent">
                    <span className="w-2 h-2 rounded-full bg-accent"></span> Business Value
                  </span>
                </div>
              </div>

              {/* Graph Area */}
              <div className="relative h-64 w-full border-l border-b border-gray-100">
                {/* Grid Lines */}
                <div className="absolute w-full h-[1px] bg-gray-50 top-1/4"></div>
                <div className="absolute w-full h-[1px] bg-gray-50 top-2/4"></div>
                <div className="absolute w-full h-[1px] bg-gray-50 top-3/4"></div>

                {/* Dotted Line (IT Spend) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  <path 
                    d="M 0 220 Q 150 200 300 180 T 500 180" 
                    fill="none" 
                    stroke="#d1d5db" 
                    strokeWidth="3" 
                    strokeDasharray="8,8"
                  />
                  
                  {/* Red Line (Business Value) */}
                  <path 
                    d="M 0 230 Q 100 180 250 120 T 500 40" 
                    fill="none" 
                    stroke="#dc1e25" 
                    strokeWidth="4" 
                    className="transition-all duration-700 group-hover:drop-shadow-[0_0_8px_rgba(220,30,37,0.5)]"
                  />
                </svg>

                {/* Innovation Gap Label */}
                <div className="absolute top-[100px] left-[60%] -translate-x-1/2 bg-white shadow-lg border border-blue-100 rounded px-3 py-1 animate-bounce">
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                    Innovation Gap
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Benefits List */}
          <div className="w-full lg:w-2/5 space-y-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-5 group cursor-default">
                <div className="mt-1 transition-transform duration-300 group-hover:scale-125">
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {benefit.desc}
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

export default StrategicClarity;