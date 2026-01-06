"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Puzzle, 
  Globe, 
  Zap, 
  Database, 
  Activity, 
  RefreshCcw 
} from 'lucide-react';

const StrategicEngineering = () => {
  const engineeringItems = [
    {
      title: "Domain-Driven Design",
      desc: "We analyze your business to define clear boundaries (Bounded Contexts), ensuring services are logically separated.",
      icon: <Puzzle size={24} />,
    },
    {
      title: "API Gateway",
      desc: "Secure entry points (Kong/Apigee) to manage traffic, authentication, and routing efficiently.",
      icon: <Globe size={24} />,
    },
    {
      title: "Event-Driven Arch",
      desc: "Using Kafka or RabbitMQ for asynchronous communication to keep services decoupled and fast.",
      icon: <Zap size={24} />,
    },
    {
      title: "Polyglot Persistence",
      desc: "Selecting the right database for each service—SQL for transactions, NoSQL for high-speed catalogs.",
      icon: <Database size={24} />,
    },
    {
      title: "Distributed Tracing",
      desc: "Implementing Jaeger/Zipkin to track requests across services for instant debugging.",
      icon: <Activity size={24} />,
    },
    {
      title: "Auto-Healing",
      desc: "Systems designed to detect failures and restart automatically without human intervention.",
      icon: <RefreshCcw size={24} />,
    }
  ];

  return (
    <section className="bg-[#0a0f1e] py-24 px-6 lg:px-20">
      <div className="container mx-auto">
        
        {/* Section Heading with Red Underline */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            Strategic Engineering
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-red-600"
          />
        </div>

        {/* Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#162033]/40 border border-slate-800 p-8 py-5 rounded-2xl hover:border-slate-600 transition-all duration-300 group"
            >
              {/* Red Icon Box */}
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-2 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicEngineering;