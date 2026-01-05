"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  BarChart3, 
  Lock, 
  Layers, 
  Activity 
} from 'lucide-react';

const deliverables = [
  {
    title: "Strategic Tech Selection",
    desc: "We evaluate and select the optimal tools (Cloud, SaaS, Open Source) that best fit your specific business use case.",
    icon: <Target className="w-6 h-6 text-[#1a2b4b]" />
  },
  {
    title: "Integration Strategy & APIs",
    desc: "Seamless integration patterns ensuring your new solutions talk perfectly with existing ERP, CRM, and legacy systems.",
    icon: <Zap className="w-6 h-6 text-[#1a2b4b]" />
  },
  {
    title: "Scalability Modeling",
    desc: "Architecting systems designed to handle growth, planning for high availability and load balancing from day one.",
    icon: <BarChart3 className="w-6 h-6 text-[#1a2b4b]" />
  },
  {
    title: "Security-by-Design",
    desc: "Embedding security protocols, identity management, and compliance standards directly into the architectural blueprint.",
    icon: <Lock className="w-6 h-6 text-[#1a2b4b]" />
  },
  {
    title: "Technical Roadmap",
    desc: "A phased implementation plan that prioritizes critical features and minimizes business disruption.",
    icon: <Layers className="w-6 h-6 text-[#1a2b4b]" />
  },
  {
    title: "Risk Mitigation",
    desc: "Identifying technical bottlenecks early in the planning phase to reduce long term project risks.",
    icon: <Activity className="w-6 h-6 text-[#1a2b4b]" />
  }
];

const DeliverablesSection = () => {
  return (
    <section className="relative bg-white pb-20">
      {/* Top Background Banner (Purple/Dark Blue) */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-[#1a2b4b] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Text Area */}
        <div className="text-center pt-20 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-bold text-white mb-6"
          >
            What We Deliver
          </motion.h2>
          <p className="text-blue-100/80 text-md max-w-2xl mx-auto leading-relaxed">
            Comprehensive planning that covers every layer of your enterprise stack.
          </p>
        </div>

        {/* Grid Cards Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8  rounded-xl shadow-xl border border-gray-200 flex flex-col items-start hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon Holder */}
              <div className="bg-gray-50  rounded-xl mb-8">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              
              <p className="text-secondary text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeliverablesSection;