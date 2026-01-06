"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Cloud, 
  Code2, 
  Smartphone, 
  Zap, 
  Database 
} from 'lucide-react';

const WhatWeDeliver = () => {
  const capabilities = [
    {
      title: "Comprehensive Assessment",
      desc: "Auditing code and architecture to determine the 'Technical Debt Score' and best strategy.",
      icon: <RefreshCw className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Cloud Migration",
      desc: "Moving on-premise workloads to AWS, Azure, or Google Cloud to reduce hardware costs.",
      icon: <Cloud className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Code Refactoring",
      desc: "Cleaning up messy codebases to improve maintainability without changing external behavior.",
      icon: <Code2 className="text-white" size={24} />,
      bgColor: "bg-red-600", // Highlighted card from image
      isHighlighted: true
    },
    {
      title: "UI/UX Modernization",
      desc: "Replacing 'green screen' interfaces with responsive, intuitive web and mobile experiences.",
      icon: <Smartphone className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "API Enablement",
      desc: "Wrapping legacy logic in secure RESTful APIs for easy connection with modern apps.",
      icon: <Zap className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Data Migration",
      desc: "Safe transfer of historical data from proprietary formats to modern SQL/NoSQL stores.",
      icon: <Database className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    }
  ];

  // Container animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="bg-gray-100 py-20 px-6 font-sans">
      <div className="max-w-[90%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600 font-bold uppercase tracking-widest text-sm"
          >
            Our Capabilities
          </motion.span>
          <motion.h2 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6 mt-2"
          >
            What We Deliver
          </motion.h2>
        </div>

        {/* Capabilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg border border-slate-200 flex flex-col h-full "
            >
              {/* Icon Box */}
              <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-8 shadow-sm`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg -mt-4 font-bold text-primary mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;