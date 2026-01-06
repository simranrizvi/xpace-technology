"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';

const FinalSections = () => {
  const journeySteps = [
    { num: "1", title: "Readiness Assessment", desc: "Analyze portfolio for refactoring opportunities." },
    { num: "2", title: "Containerization", desc: "Refactor code to run effectively in Docker." },
    { num: "3", title: "Orchestration", desc: "Configure K8s clusters, helm, and operator." },
    { num: "4", title: "Pipeline Integration", desc: "Build automated CI/CD with testing gates." },
    { num: "5", title: "Observability", desc: "Implement ELK/Prometheus for deep visibility." },
  ];

  return (
    <div className="w-full">
      
      {/* 1. CLOUD-NATIVE JOURNEY SECTION */}
     <section className="bg-white  pb-20 px-6 lg:px-20 text-center">
  <h2 className="text-4xl font-bold text-primary mb-30">Our Cloud-Native Journey</h2>
  <div className="container mx-auto relative">
    {/* Connecting Line */}
    <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px]  bg-gray-200 z-0" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
      {journeySteps.map((step, index) => (
        /* 1. Yahan 'group' class add ki hai */
        <div key={index} className="flex flex-col items-center group cursor-pointer">
          
          {/* 2. border-gray-200 ko default rakha aur group-hover:border-red-500 add kiya */}
          <div className="w-17 h-17 rounded-full bg-white border-4 border-gray-200 
                          flex items-center justify-center text-xl font-bold text-slate-400 mb-6 
                          shadow-sm transition-all duration-300
                          group-hover:border-red-500 group-hover:text-red-500">
            {step.num}
          </div>

          <h4 className="font-bold text-slate-800 mb-2 text-sm group-hover:text-red-600 transition-colors">
            {step.title}
          </h4>
          <p className="text-slate-500 text-xs leading-relaxed max-w-[150px]">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 2. WHY XPACE SECTION */}
      <section className="bg-primary py-24 px-6 lg:px-20 text-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold !text-white">Why XPACE?</h2>
            
            <div className="space-y-5">
              <WhyCard 
                icon={<ShieldCheck className="text-red-500" />} 
                title="CNCF Expertise" 
                desc="Industry-compliant architecture following Cloud Native Computing Foundation standards." 
              />
              <WhyCard 
                icon={<Zap className="text-red-500" />} 
                title="DevSecOps Culture" 
                desc="Security is integrated into the container lifecycle, not added later." 
              />
              <WhyCard 
                icon={<Globe className="text-red-500" />} 
                title="Multi-Cloud Mastery" 
                desc="Architectures that span across AWS, Azure, and Google Cloud Platform." 
              />
            </div>
          </div>

          {/* Edge Computing Card */}
          <div className="bg-[#111827]  py-15 mt-15 border border-blue-900/30 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4  opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready for the Edge</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Cloud-Native is the stepping stone to Edge Computing. XPACE architectures are designed 
              to be portable, allowing you to move workloads from the central cloud to the edge as 5G 
              and IoT technologies mature.
            </p>
            <div className="flex items-center pb-9 gap-2 text-red-500 font-bold text-sm   tracking-widest uppercase">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse  " />
              Distributed Future Ready
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSFORM AGILITY (FINAL CTA) */}
      <section className="bg-[#e31e24] py-17 px-6 text-center text-white">
        <div className="container mx-auto space-y-8">
          <h2 className="text-4xl md:text-4xl font-bold">Transform Your Agility</h2>
          <p className="text-red-100 text-lg">
            Stop managing servers and start innovating. Partner with XPACE Technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded hover:bg-slate-100 transition-all">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-red-600 transition-all">
              Schedule Kubernetes Audit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper Component for "Why" cards
const WhyCard = ({ icon, title, desc }) => (
  <div className="bg-[#162033] p-6 rounded-xl border border-gray-800 flex items-start gap-5 hover:border-gray-700 transition-all group">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-lg mb-1 group-hover:text-red-500 transition-colors">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default FinalSections;