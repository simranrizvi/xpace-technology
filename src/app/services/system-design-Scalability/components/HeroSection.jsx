"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Shield, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#0a0f1a] py-20 px-6 overflow-hidden relative">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-red-600"></div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">
              System Design & Scalability
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Scale Beyond <br />
            <span className="text-blue-400">Limits.</span>
          </h2>

          <div className="border-l-4 border-red-600 pl-6 mb-10">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We engineer resilient, high-velocity systems built to handle millions of requests 
              without compromising speed, security, or reliability.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-[#0a0f1a] px-8 py-3 rounded-md font-bold flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Consult Our Architects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="border border-gray-700 text-white px-8 py-3 rounded-md font-bold hover:bg-white/5 transition-all">
              Technical Audit
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual Element with Glow */}
        <div className="relative">
          
          {/* Central Blinking Glow Light */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px]"
          />

          {/* Main Visualization Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#161e2d] border border-gray-800 rounded-xl p-12 min-h-[440px] flex items-center justify-center"
          >
            {/* Central Uptime Card */}
           <div className="bg-[#0d1117] border border-gray-800 p-6 rounded-xl text-center z-10 shadow-2xl relative">
  
  <div className="flex flex-col gap-2 justify-center items-center mb-4">
  <div className="w-12 h-4 border-2 border-blue-400 rounded-sm"></div>
  <div className="w-12 h-4 border-2 border-blue-400 rounded-sm"></div>
</div>

  <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
    Uptime Guarantee
  </p>


                {/* Circular Pulse Line around center */}
                <div className="absolute inset-[-20px] border border-dashed border-gray-300 rounded-full animate-spin-slow opacity-30"></div>
            </div>

            {/* Floating Badges */}
            <motion.div 
             
              className="absolute top-12 left-12 bg-[#2d3748]/50 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="bg-blue-500 p-1 rounded text-white"><Database className="w-4 h-4" /></div>
              <span className="text-white text-xs font-bold">Sharding</span>
            </motion.div>

            <motion.div 
              // animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-24 right-12 bg-[#2d3748]/50 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="bg-yellow-500 p-1 rounded text-white"><Zap className="w-4 h-4" /></div>
              <span className="text-white text-xs font-bold">Low Latency</span>
            </motion.div>

            <motion.div 
              // animate={{ x: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-24 left-16 bg-[#2d3748]/50 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="bg-red-500 p-1 rounded text-white"><Shield className="w-4 h-4" /></div>
              <span className="text-white text-xs font-bold">Secure</span>
            </motion.div>

            <motion.div 
              // animate={{ x: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-12 right-16 bg-[#2d3748]/50 border border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="bg-purple-500 p-1 rounded text-white"><InfinityIcon className="w-4 h-4" /></div>
              <span className="text-white text-xs font-bold">Auto-Scale</span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;



// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Database, Zap, Shield, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <section className="bg-[#0a0f1a] py-24 px-6 overflow-hidden relative min-h-[700px] flex items-center">
      
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none" 
//            style={{ 
//              backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
//              backgroundSize: '45px 45px' 
//            }}>
//       </div>

//       <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
//         {/* Left Side: Content */}
//         <div className="text-left">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-[2px] bg-red-600"></div>
//             <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
//               System Design & Scalability
//             </span>
//           </div>

//           <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
//             Scale Beyond <br />
//             <span className="text-blue-400">Limits.</span>
//           </h2>

//           <div className="border-l-4 border-red-600 pl-6 mb-10">
//             <p className="text-gray-400 text-lg leading-relaxed max-w-md">
//               We engineer resilient, high-velocity systems built to handle millions of requests 
//               without compromising speed, security, or reliability.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-5">
//             <button className="bg-white text-[#0a0f1a] px-8 py-4 rounded-md font-bold flex items-center gap-2 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//               Consult Our Architects <ArrowRight className="w-5 h-5" />
//             </button>
//             <button className="border border-gray-700 text-white px-8 py-4 rounded-md font-bold hover:bg-white/5 transition-all">
//               Technical Audit
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Visual Container */}
//         <div className="relative">
          
//           {/* Heartbeat / Bright Pulsing Light Effect (Right Background) */}
//           <motion.div 
//             animate={{ 
//               opacity: [0.1, 0.8, 0.1, 0.9, 0.1], // Heartbeat pulse intensity
//               scale: [1, 1.05, 1, 1.1, 1],
//             }}
//             transition={{ 
//               duration: 3, 
//               repeat: Infinity, 
//               ease: "easeInOut",
//               times: [0, 0.1, 0.2, 0.3, 1] // Mimics heart thumping rhythm
//             }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] -z-10"
//           />

//           {/* Main Container Box */}
//           <div className="relative bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-10 md:p-16 min-h-[550px] flex items-center justify-center shadow-2xl">
            
//             {/* Central 99.999% Card */}
//             <div className="bg-[#0a0f1a] border border-gray-700 p-8 md:p-12 rounded-2xl text-center z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
//                 <div className="flex justify-center gap-3 mb-6">
//                     <div className="w-10 h-3 border-2 border-cyan-400 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
//                     <div className="w-10 h-3 border-2 border-cyan-400 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
//                 </div>
//                 <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">99.999%</h3>
//                 <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-black">Uptime Guarantee</p>
                
//                 {/* Dashed Spinning Outer Ring */}
//                 <div className="absolute inset-[-25px] border border-dashed border-gray-700 rounded-full animate-[spin_10s_linear_infinite] opacity-40"></div>
//             </div>

//             {/* FIXED Small Status Cards (Non-animated as requested) */}
            
//             {/* Sharding */}
//             <div className="absolute top-10 left-10 bg-[#1f2937] border border-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
//               <div className="bg-blue-500 p-1.5 rounded-md text-white"><Database className="w-4 h-4" /></div>
//               <span className="text-white text-[11px] font-bold">Sharding</span>
//             </div>

//             {/* Low Latency */}
//             <div className="absolute top-20 right-10 bg-[#1f2937] border border-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
//               <div className="bg-yellow-500 p-1.5 rounded-md text-white"><Zap className="w-4 h-4" /></div>
//               <span className="text-white text-[11px] font-bold">Low Latency</span>
//             </div>

//             {/* Secure */}
//             <div className="absolute bottom-20 left-12 bg-[#1f2937] border border-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
//               <div className="bg-red-600 p-1.5 rounded-md text-white"><Shield className="w-4 h-4" /></div>
//               <span className="text-white text-[11px] font-bold">Secure</span>
//             </div>

//             {/* Auto-Scale */}
//             <div className="absolute bottom-10 right-12 bg-[#1f2937] border border-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
//               <div className="bg-purple-600 p-1.5 rounded-md text-white"><InfinityIcon className="w-4 h-4" /></div>
//               <span className="text-white text-[11px] font-bold">Auto-Scale</span>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;