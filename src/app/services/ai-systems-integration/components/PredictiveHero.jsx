import React from 'react';
import { Share2, RefreshCw, Database, Zap, Radio, Lock } from 'lucide-react';

const PredictiveHero = () => {
 
   const services = [
    {
      title: "API Orchestration",
      description: "Wrapping ML models in scalable REST/gRPC APIs for real-time app consumption.",
      icon: <Share2 className="w-5 h-5 text-white" />,
    },
    {
      title: "MLOps Pipelines",
      description: "Automated CI/CD ensuring models are retrained and redeployed without downtime.",
      icon: <RefreshCw className="w-5 h-5 text-white" />,
    },
    {
      title: "Legacy Connectors",
      description: "Custom bridges allowing modern AI to fetch data from mainframes and SQL DBs.",
      icon: <Database className="w-5 h-5 text-white" />,
    },
    {
      title: "Real-Time Streaming",
      description: "Kafka pipelines feeding live data into AI models for instant decision making.",
      icon: <Zap className="w-5 h-5 text-white" />,
    },
    {
      title: "Edge Deployment",
      description: "Running optimized models directly on IoT sensors and cameras for zero latency.",
      icon: <Radio className="w-5 h-5 text-white" />,
    },
    {
      title: "Secure Middleware",
      description: "Encrypted transformation layers ensuring GDPR/HIPAA compliance at every step.",
      icon: <Lock className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-12 px-6 bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-1">
            Integration Suite
          </p>
          <h2 className="text-4xl font-bold text-primary">
            What We Engineer
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
           <div 
  key={index} 
  className="p-6 rounded-xl bg-white border border-gray-50 
  shadow-sm transition-all duration-300 
  hover:shadow-xl hover:-translate-y-2"
>
              {/* Icon Box */}
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-5">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictiveHero;