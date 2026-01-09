
"use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Globe, Shield, Activity, Lock, Server, 
  AlertTriangle, CheckCircle2, BarChart3, 
  MapPin, Clock, Search, Eye, Siren, 
  Radio, Cpu, Layers, FileText, Zap, Laptop
} from 'lucide-react';



/* --- MAIN CONTENT --- */
const SOCPage = () => {
  const [activeAlert, setActiveAlert] = useState(0);
  
  // Simulation for live feed
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-slate-200 bg-[#020617] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
      

      {/* 1. HERO SECTION: Inside the War Room */}
      <div className="relative h-screen flex items-center overflow-hidden">
        {/* Real SOC Image Background */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
             alt="Security Operations Center" 
             className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-[#203253]/60"></div>
           
           {/* Grid Overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center ">
          
          {/* Text Content */}
          <div className="space-y-8">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#203253]/80 border border-blue-500/30 rounded-full backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Global Watch Active</span>
             </div>
             
             <h1 className="text-6xl lg:text-7xl font-black !text-white leading-none tracking-tighter">
               Centralized <br/>
               <span className=" bg-clip-text text-accent ">Intelligence.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               A state-of-the-art SOC that unifies your defense. We monitor every heartbeat of your network to neutralize threats instantly.
             </p>
             
             <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(220,30,37,0.4)]">
                   <Eye size={20} className="group-hover:scale-110 transition-transform" /> Tour Virtual SOC
                </button>
                <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center gap-2">
                   <FileText size={20} /> SOC Pricing Guide
                </button>
             </div>
          </div>

          {/* Visual: Floating Holographic Command Center */}
          <div className="relative h-[500px] flex items-center justify-center">
             <div className="relative w-full max-w-lg bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden group hover:border-[#dc1e25]/50 transition-colors duration-500">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                   <div className="text-xs font-mono text-blue-400 flex items-center gap-2">
                      <Radio size={14} className="animate-pulse"/> LIVE_FEED::XPACE_HQ
                   </div>
                   <div className="text-xs font-bold text-green-400">STATUS: SECURE</div>
                </div>

                {/* Map Area */}
                <div className="relative h-48 bg-[#1e293b] rounded-lg mb-6 overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-30"></div>
                   
                   {/* Pulsing Nodes */}
                   <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#dc1e25] rounded-full animate-ping"></div>
                   <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                   <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
                   
                   {/* Scanning Bar */}
                   <div className="absolute top-0 w-full h-1 bg-white/20 animate-scan-vertical shadow-[0_0_10px_white]"></div>
                </div>

                {/* Live Logs */}
                <div className="space-y-2 font-mono text-[10px] text-gray-400">
                   <div className="flex gap-2"><span className="text-blue-400">10:42:01</span> <span className="text-white">Ingesting logs from AWS-East-1...</span></div>
                   <div className="flex gap-2"><span className="text-blue-400">10:42:05</span> <span className="text-yellow-400">Anomaly detected: IP 192.168.0.4</span></div>
                   <div className="flex gap-2"><span className="text-blue-400">10:42:06</span> <span className="text-[#dc1e25]">Action: Auto-Quarantine Executed</span></div>
                   <div className="flex gap-2 opacity-50"><span className="text-blue-400">10:42:08</span> <span className="text-gray-500">Resume normal monitoring...</span></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW: The Hub and Spoke */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* Visual: Central Brain */}
            <div className="relative flex justify-center items-center h-[400px]">
               {/* Center SOC */}
               <div className="absolute z-20 w-30 h-30 bg-[#203253] rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-[#dc1e25]">
                  <Eye size={40} className="mb-1"/>
                  <span className="text-xs font-bold">XPACE SOC</span>
               </div>
               
               {/* Satellites */}
               <Satellite icon={<Cloud size={20}/>} label="Cloud" angle={0} />
               <Satellite icon={<Laptop size={20}/>} label="Endpoints" angle={90} />
               <Satellite icon={<Server size={20}/>} label="Network" angle={180} />
               <Satellite icon={<Globe size={20}/>} label="Remote" angle={270} />
               
               {/* Rotating Rings */}
               <div className="absolute w-64 h-64 border border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
               <div className="absolute w-80 h-80 border border-gray-200 rounded-full animate-spin-reverse-slower"></div>
            </div>

            <div>
               <h2 className="text-4xl font-bold text-primary mb-6">Your Eyes and Ears on the <span className="text-[#dc1e25]">Digital Frontier</span></h2>
               <p className="text-base text-primary mb-6 leading-relaxed">
                  Building an in-house SOC is resource-intensive. XPACE delivers "SOC-as-a-Service," giving you world-class infrastructure without the capital expenditure.
               </p>
               <p className="text-primary leading-relaxed mb-8">
                  Our SOC is not just an alarm center; it is an intelligence hub. We combine People, Processes, and Technology to correlate millions of log events daily, distinguishing harmless anomalies from malicious activities.
               </p>
               
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-[#203253]">
                     <Globe size={16}/> 360° Visibility
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-[#203253]">
                     <Siren size={16} className="text-[#dc1e25]"/> Tier-3 Analysts
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 3. CORE FEATURES: Control Panel Grid */}
      <div className="py-24 bg-[#0f172a] text-white relative ">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">SOC Capabilities</span>
               <h2 className="text-4xl font-bold text-white">Command & Control</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <ControlCard 
                  icon={<Clock size={32}/>} 
                  title="24/7 Monitoring" 
                  desc="Cyberattacks don't stick to business hours. Our analysts guard your perimeter every second of the year."
               />
               <ControlCard 
                  icon={<Layers size={32}/>} 
                  title="SIEM Tuning" 
                  desc="We deploy and fine-tune Splunk or Sentinel to parse your logs intelligently and reduce noise."
               />
               <ControlCard 
                  icon={<Siren size={32}/>} 
                  title="Incident Triage" 
                  desc="Immediate investigation of alerts, categorization of severity, and execution of response playbooks."
               />
               <ControlCard 
                  icon={<Globe size={32}/>} 
                  title="Threat Intel" 
                  desc="Integration of global threat data (STIX/TAXII) to recognize attacker IPs and file hashes instantly."
               />
               <ControlCard 
                  icon={<FileText size={32}/>} 
                  title="Compliance Reports" 
                  desc="Granular monthly reports detailing security posture, incidents handled, and uptime for auditors."
               />
               <ControlCard 
                  icon={<Shield size={32}/>} 
                  title="Active Defense" 
                  desc="Proactive blocking of malicious IPs and isolation of compromised hosts before spread."
               />
            </div>
         </div>
      </div>

      {/* 4. BUSINESS BENEFITS: The Efficiency Dashboard */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-primary mb-4">The Value of Managed SOC</h2>
             
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Visual: KPI Monitor */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <h3 className="font-bold text-[#203253] mb-6 flex items-center gap-2">
                     <BarChart3 size={20}/> Incident Efficiency
                  </h3>
                  
                  <div className="space-y-6">
                     <div className="flex justify-between items-end">
                        <div className="text-sm text-gray-500">Incidents Processed</div>
                        <div className="text-2xl font-bold text-[#203253]">15,400</div>
                     </div>
                     <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full"></div>
                     </div>

                     <div className="flex justify-between items-end">
                        <div className="text-sm text-gray-500">Escalated to Client</div>
                        <div className="text-2xl font-bold text-[#dc1e25]">12</div>
                     </div>
                     <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-[#dc1e25] w-[5%]"></div>
                     </div>
                     
                     <div className="p-4 bg-green-50 rounded-lg text-center border border-green-100 mt-4">
                        <div className="text-green-700 font-bold text-lg">99.9% Noise Filtered</div>
                        <div className="text-xs text-green-600">Your team focuses only on what matters.</div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <BenefitRow 
                     title="Reduced Mean Time to Detect (MTTD)" 
                     desc="We slash detection time from industry average of weeks down to minutes."
                  />
                  <BenefitRow 
                     title="Operational Cost Savings" 
                     desc="Eliminate the cost of hiring a 12+ person team. Get experts at a fraction of the cost."
                  />
                  <BenefitRow 
                     title="Unified Visibility" 
                     desc="No more blind spots. We correlate firewall, email, and cloud data to find complex attacks."
                  />
               </div>
            </div>
         </div>
      </div>

      {/* 5. USE CASES: Global Operations (Real Images) */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Global Protection</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <LocationCard 
                  title="Multi-National Corp" 
                  desc="Follow-the-Sun monitoring across NY, London, and Singapore."
                  img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  icon={<Globe size={24}/>}
               />
               <LocationCard 
                  title="Healthcare Provider" 
                  desc="Securing patient databases from insider threats."
                  img="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  icon={<Activity size={24}/>}
               />
               <LocationCard 
                  title="SaaS Platform" 
                  desc="Protecting underlying infra to reassure customers."
                  img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  icon={<Cloud size={24}/>}
               />
               <LocationCard 
                  title="Government Agency" 
                  desc="Defense against nation-state cyber espionage."
                  img="https://images.unsplash.com/photo-1524813686514-a5756c97759e?auto=format&fit=crop&q=80&w=800"
                  icon={<Shield size={24}/>}
               />
            </div>
         </div>
      </div>

      {/* 6. DELIVERY APPROACH: Horizontal Pipeline */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-white">Onboarding Methodology</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
              
              <PipelineStep num="01" title="Discovery" icon={<Search size={20}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25]" />
              <PipelineStep num="02" title="Ingestion" icon={<Radio size={20}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25]" />
              <PipelineStep num="03" title="Baselining" icon={<Activity size={20}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25]" />
              <PipelineStep num="04" title="Playbooks" icon={<FileText size={20}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25]" />
              <PipelineStep num="05" title="Go Live" icon={<Zap size={20}/>} />
           </div>
        </div>
      </div>

      {/* 7. FUTURE FOCUS: Cognitive SOC */}
      <div className="py-24 bg-[#020617] text-center relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[600px] h-[600px] border border-[#dc1e25] rounded-full animate-ping-slow"></div>
         </div>
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white/10 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <Cpu size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">The Cognitive <span className="text-[#dc1e25]">SOC</span></h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
               XPACE is building the future of Autonomous Security. We are integrating AI analysts that can independently investigate alerts, allowing humans to focus purely on high-complexity hunting.
            </p>
         </div>
      </div>

      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-4xl font-bold mb-8">Watch the Watchmen</h2>
           <p className="text-lg text-white/90 mb-12">Secure your organization with the vigilance it deserves. Elite 24/7 Security Operations.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-3 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Tour Virtual SOC</button>
              <button className="px-8 py-3 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Download Pricing Guide</button>
           </div>
        </div>
      </div>

      
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const Satellite = ({ icon, label, angle }) => {
  // Simple CSS positioning based on angle
  const radius = 160; // distance from center
  const rad = (angle * Math.PI) / 180;
  const top = 50 + (Math.sin(rad) * radius) / 4; // /4 to maintain height in % logic roughly
  const left = 50 + (Math.cos(rad) * radius) / 4; 

  return (
    <div 
      className="absolute flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-lg animate-float"
      style={{ 
        top: `calc(50% + ${Math.sin(rad) * 140}px)`, 
        left: `calc(50% + ${Math.cos(rad) * 140}px)`,
        transform: 'translate(-50%, -50%)' 
      }}
    >
       <div className="text-[#203253]">{icon}</div>
       <div className="text-[10px] font-bold text-gray-500 uppercase">{label}</div>
    </div>
  );
};

const ControlCard = ({ icon, title, desc }) => (
  <div className="bg-[#1e293b] border-t-4 border-[#dc1e25] px-8 py-5 rounded-xl hover:bg-[#253248] transition-all group hover:-translate-y-1 relative overflow-hidden shadow-lg">
     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Radio size={64}/></div>
     <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#dc1e25] mb-4 shadow-lg">
        {icon}
     </div>
     <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
     <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">{desc}</p>
  </div>
);

const BenefitRow = ({ title, desc }) => (
  <div className="flex gap-4">
     <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600 h-fit"><CheckCircle2 size={16}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);

const LocationCard = ({ title, desc, icon, img }) => (
  <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg">
     <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
     <div className="absolute inset-0 bg-[#203253]/60 group-hover:bg-[#203253]/40 transition-colors"></div>
     <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-2 text-white mb-2">
           {icon} <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-sm text-gray-200">{desc}</p>
     </div>
  </div>
);

const PipelineStep = ({ num, title, icon, highlight }) => (
  <div className={`relative z-10 flex flex-col items-center p-6 rounded-2xl w-36 transition-all duration-300 ${highlight ? 'bg-[#dc1e25] shadow-lg scale-110' : 'bg-[#1a2b4b] border border-white/10 hover:border-white/30'}`}>
     <div className={`mb-3 p-2 rounded-full ${highlight ? 'bg-white text-[#dc1e25]' : 'bg-white/5 text-gray-400'}`}>{icon}</div>
     <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-white/80' : 'text-gray-500'}`}>Stage {num}</div>
     <div className="font-bold text-white text-sm">{title}</div>
  </div>
);

// Lucide Icon Helper
const Cloud = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M14 13.5c0-3.037-2.463-5.5-5.5-5.5S3 10.463 3 13.5"/><path d="M21 19a6 6 0 0 0-6-6"/></svg>;

export default SOCPage;