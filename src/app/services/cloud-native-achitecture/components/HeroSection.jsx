"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Zap, Code2, Share2, Box, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0a0f1e] text-white flex items-center overflow-hidden pt-20 pb-10 md:py-0">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT CONTENT: Text & Buttons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              <Box size={14} /> CLOUD-NATIVE ARCHITECTURE
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl !text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Build Faster, <br />
              <span className="text-blue-500">Scale Smarter.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We design agile, containerized applications born in the cloud. 
              Break free from legacy limitations and maximize speed, 
              flexibility, and operational efficiency.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto text-[13px] bg-[#e31e24] hover:bg-red-700 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-transform active:scale-95">
                Start Your Cloud Journey <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto text-[13px] bg-primary hover:bg-primary border border-gray-700 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-transform active:scale-95">
                <Box size={18} /> View Container Strategy
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: Animated Architecture Diagram */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
            
            {/* Center Box (Kubernetes) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="z-20 p-6 md:p-8 bg-[#162033]/90 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl flex flex-col items-center gap-4 w-48 md:w-60 text-center"
            >
              <Ship size={48} className="text-cyan-400 md:w-16 md:h-16" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Kubernetes</h3>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Orchestration</p>
              </div>
            </motion.div>

            {/* Floating Badges with responsive positioning */}
            <Badge icon={<Box size={16}/>} label="Docker" color="text-blue-400" 
              className="top-4 left-[10%] md:top-10 md:left-20" delay={0} />
            
            <Badge icon={<Zap size={16}/>} label="Serverless" color="text-yellow-400" 
              className="top-10 right-[5%] md:top-20 md:right-10" delay={1} />
            
            <Badge icon={<Code2 size={16}/>} label="IaC" color="text-purple-400" 
              className="bottom-16 left-[5%] md:bottom-20 md:left-10" delay={2} />
            
            <Badge icon={<Share2 size={16}/>} label="Service Mesh" color="text-red-400" 
              className="bottom-8 right-[10%] md:bottom-10 md:right-5" delay={3} />

            {/* Connecting Lines (Dashed) - Visible on Tablet/Desktop */}
            <svg className="absolute inset-0 w-full h-full opacity-20 hidden sm:block">
              <line x1="25%" y1="20%" x2="45%" y2="45%" stroke="white" strokeDasharray="4,4" />
              <line x1="75%" y1="25%" x2="55%" y2="45%" stroke="white" strokeDasharray="4,4" />
              <line x1="25%" y1="80%" x2="45%" y2="55%" stroke="white" strokeDasharray="4,4" />
              <line x1="85%" y1="85%" x2="60%" y2="60%" stroke="white" strokeDasharray="4,4" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper Component for Floating Badges
const Badge = ({ icon, label, color, className, delay }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      y: [0, 8, 0],
    }} 
    transition={{ 
      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay },
      opacity: { duration: 1 }
    }}
    className={`absolute z-30 bg-[#162033] px-3 py-2 md:px-4 md:py-2.5 rounded-full border border-gray-700 flex items-center gap-2 shadow-lg ${className}`}
  >
    <span className={color}>{icon}</span>
    <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{label}</span>
  </motion.div>
);

export default HeroSection;