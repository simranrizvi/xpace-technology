"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, ShoppingCart, Activity, Truck, Camera, Tag, Cpu, Rocket, Monitor } from 'lucide-react';

const IndustryAndPipeline = () => {
  const applications = [
    {
      title: "Manufacturing",
      subtitle: "PCB Inspection",
      status: "Defect Detected",
      statusColor: "bg-red-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80",
      icon: <Factory size={18} />
    },
    {
      title: "Retail",
      subtitle: "Shelf Monitoring",
      status: "Stock Low",
      statusColor: "bg-yellow-600",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80",
      icon: <ShoppingCart size={18} />
    },
    {
      title: "Healthcare",
      subtitle: "X-Ray Assistant",
      status: "Analysis Complete",
      statusColor: "bg-green-600",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80",
      icon: <Activity size={18} />
    },
    {
      title: "Transport",
      subtitle: "Traffic Flow",
      status: "Plate Recognized",
      statusColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80",
      icon: <Truck size={18} />
    }
  ];

  const pipelineSteps = [
    { step: "STEP 1", label: "Collect", icon: <Camera size={20} />, active: false },
    { step: "STEP 2", label: "Label", icon: <Tag size={20} />, active: false },
    { step: "STEP 3", label: "Train", icon: <Cpu size={20} />, active: false },
    { step: "STEP 4", label: "Deploy", icon: <Rocket size={20} />, active: false },
    { step: "STEP 5", label: "Monitor", icon: <Monitor size={20} />, active: false },
  ];

  return (
    <div className="bg-slate-50 py-20 px-6 space-y-32">
      
      {/* --- INDUSTRY APPLICATIONS SECTION --- */}
      <section className="container mx-auto max-w-[90%]">
        <h2 className="text-[#0f172a] text-3xl font-bold text-center mb-12">Industry Applications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm border-2 border-transparent hover:border-red-500 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-40">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all" />
                <div className={`absolute top-2 right-2 ${app.statusColor} text-[10px] text-white px-2 py-1 rounded-full flex items-center gap-1 font-bold`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  {app.status}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[#0f172a] font-bold mb-1">
                  <span className="text-gray-400">{app.icon}</span>
                  {app.title}
                </div>
                <p className="text-gray-400 text-xs">{app.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR VISION PIPELINE SECTION --- */}
    <section className="container mx-auto">
  <h2 className="text-[#0f172a] text-4xl font-bold text-center mb-16">
    Our Vision Pipeline
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-0">
    {pipelineSteps.map((item, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center">
          <div
            className={`group w-29 h-29 rounded-2xl flex flex-col items-center justify-center gap-2 
              border-2 transition-all duration-300 shadow-sm cursor-pointer
              ${
                item.active
                  ? "border-red-500 bg-white text-red-600 scale-110 z-10"
                  : "border-gray-100 bg-white text-gray-400 hover:border-red-500 hover:shadow-md"
              }`}
          >
            {/* Icon */}
            <div
              className={`transition-colors duration-300
                ${item.active ? "text-red-500" : "group-hover:text-red-500"}`}
            >
              {item.icon}
            </div>

            <span className="text-[12px] font-bold uppercase tracking-tighter text-gray-700">
              {item.step}
            </span>

            <span
              className={`text-xs font-bold transition-colors duration-300
                ${
                  item.active
                    ? "text-[#0f172a]"
                    : "text-gray-700 group-hover:text-[#0f172a]"
                }`}
            >
              {item.label}
            </span>
          </div>
        </div>

        {/* Connector Line */}
        {index !== pipelineSteps.length - 1 && (
          <div
            className={`h-[2px] w-12 md:w-20 transition-colors duration-300
              ${index < 2 ? "bg-red-500" : "bg-gray-200"}`}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>
</section>


    </div>
  );
};

export default IndustryAndPipeline;