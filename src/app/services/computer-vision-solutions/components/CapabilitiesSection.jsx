"use client";
import React from 'react';
import { 
  Scan, 
  UserCheck, 
  Target, 
  FileText, 
  AlertTriangle, 
  Layers 
} from 'lucide-react'; // Lucide icons use kiye hain jo image se match karte hain

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Automated QC",
      description: "AI-driven visual inspection detecting surface defects and misalignments.",
      icon: <Scan className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Facial Recognition",
      description: "Biometric security for touchless access control and identity verification.",
      icon: <UserCheck className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Object Tracking",
      description: "Real-time identification and counting of vehicles, inventory, or people.",
      icon: <Target className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Intelligent OCR",
      description: "Extracting text from documents, license plates, or labels into digital data.",
      icon: <FileText className="text-red-500 w-6 h-6" />,
    },
    {
      title: "HSE Monitoring",
      description: "Detecting safety violations like missing helmets or unauthorized zone entry.",
      icon: <AlertTriangle className="text-red-500 w-6 h-6" />,
    },
    {
      title: "Edge Processing",
      description: "Deploying lightweight models on cameras/drones for real-time results.",
      icon: <Layers className="text-red-500 w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-[#0f172a] py-24 px-6 md:px-12 font-sans">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Our Capabilities
          </h4>
          <h2 className="text-white text-3xl md:text-4xl font-bold ">
            Vision Capabilities
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="relative group p-8 bg-[#1e293b]/30 border border-slate-700/50 hover:bg-[#1e293b]/50 transition-all duration-300 rounded-sm"
            >
              {/* Corner Accents (Image jese barik corners) */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600"></div>

              {/* Icon Area */}
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {cap.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-3 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;