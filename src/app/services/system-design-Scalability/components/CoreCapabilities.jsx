"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, GitBranch, Zap, Box, Infinity as InfinityIcon } from 'lucide-react';

const capabilities = [
  {
    title: "High-Availability (HA)",
    desc: "Redundancy and failover mechanisms aiming for 99.999% uptime to ensure business continuity.",
    icon: <Activity className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Database Sharding",
    desc: "Advanced partitioning and indexing strategies to manage massive datasets without query lag.",
    icon: <Database className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Traffic Management",
    desc: "Distributing network traffic efficiently across multiple servers to prevent bottlenecks.",
    icon: <GitBranch className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Caching Strategies",
    desc: "Utilizing Redis/Memcached to drastically reduce latency for frequently accessed data.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Microservices",
    desc: "Breaking down monolithic apps into independent services that scale individually.",
    icon: <Box className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Auto-Scaling",
    desc: "Dynamic resource allocation that grows and shrinks instantly with user demand.",
    icon: <InfinityIcon className="w-6 h-6 text-red-500" />,
  }
];

const CoreCapabilities = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[90%] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Core Capabilities
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-gray-200 shadow-xl hover:border-gray-300 hover:shadow-lg transition-all bg-white group"
            >
              {/* Icon Container */}
              <div className="mb-2 -mt-3 inline-block p-3 rounded-lg bg-gray-50 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-100">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#1a2b4b] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;