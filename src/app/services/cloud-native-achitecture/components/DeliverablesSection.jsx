"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Ship, Cloud, Code2, Share2, RefreshCw } from 'lucide-react';

const DeliverablesSection = () => {
  const deliverables = [
    {
      title: "Containerization",
      desc: "Packaging apps into lightweight Docker containers for consistency across all environments.",
      icon: <Box size={24} />,
      color: "border-t-[#3b82f6]" // Blue
    },
    {
      title: "Kubernetes (K8s)",
      desc: "Designing robust clusters to automate deployment, scaling, and management of apps.",
      icon: <Ship size={24} />,
      color: "border-t-[#06b6d4]" // Cyan
    },
    {
      title: "Serverless Computing",
      desc: "Event-driven architectures (Lambda/Functions) that eliminate infra management entirely.",
      icon: <Cloud size={24} />,
      color: "border-t-[#eab308]" // Yellow
    },
    {
      title: "Infrastructure as Code",
      desc: "Automating provisioning using Terraform/Ansible for consistent, versioned infra.",
      icon: <Code2 size={24} />,
      color: "border-t-[#a855f7]" // Purple
    },
    {
      title: "Service Mesh",
      desc: "Deploying Istio to manage traffic flow, enforce security, and gather telemetry.",
      icon: <Share2 size={24} />,
      color: "border-t-[#ef4444]" // Red
    },
    {
      title: "CI/CD Integration",
      desc: "Automated pipelines ensuring rapid, reliable code delivery from commit to production.",
      icon: <RefreshCw size={24} />,
      color: "border-t-[#22c55e]" // Green
    }
  ];

  return (
    <section className="bg-[#0a0f1e] py-24 px-6 lg:px-20 text-white">
      <div className="container mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            What We Deliver
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            A complete ecosystem for modern application delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              // Yahan border-t-4 ke sath border-solid add kiya hai aur color hex codes use kiye hain
              className={`bg-[#162033] p-8 rounded-xl border-t-4 border-solid ${item.color} border-x-transparent border-b-transparent shadow-xl group transition-all`}
              style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="text-gray-400 mb-6 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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