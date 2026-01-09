"use client"

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Crosshair, ShieldAlert,Laptop, Activity, Search, Globe, 
  Siren, Lock, FileText, BarChart3, Cloud, 
  Cpu, Radar, AlertTriangle, Eye, Terminal,
  CheckCircle2, StopCircle, RefreshCw, Zap
} from 'lucide-react';



/* --- MAIN CONTENT --- */
const ThreatMonitoringPage = () => {
  const [threatsNeutralized, setThreatsNeutralized] = useState(8420);

  // Live Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsNeutralized(prev => prev + Math.floor(Math.random() * 5));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-slate-200 bg-[#020617] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
     

      {/* 1. HERO SECTION: SOC Command Center */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
        {/* Radar Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="w-[1200px] h-[1200px] border border-white/5 rounded-full animate-spin-ultra-slow"></div>
           <div className="w-[800px] h-[800px] border border-white/5 rounded-full"></div>
           <div className="w-[400px] h-[400px] border border-white/5 rounded-full"></div>
           <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#dc1e25]/50 to-transparent animate-scan-radar"></div>
        </div>
        
        {/* Gradient Gloom */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#dc1e25]/10 rounded-full blur-[150px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center ">
          
          {/* Text */}
          <div className="space-y-8">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#dc1e25]/10 border border-[#dc1e25]/30 rounded-r-full border-l-4 border-l-[#dc1e25] backdrop-blur-md">
                <Activity size={14} className="text-[#dc1e25] animate-pulse" />
                <span className="text-[#dc1e25] text-xs font-mono font-bold tracking-widest uppercase">Live Threat Hunting: Active</span>
             </div>
             
             <h1 className="text-6xl lg:text-7xl font-black !text-white leading-none tracking-tighter">
               Vigilance  Beyond
                <br/>
              <span className='text-accent'>Barriers.</span> 
             </h1>
             
             <p className="text-xl text-gray-400 leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
               We don't just watch; we hunt. Continuous surveillance and rapid incident response to stop attacks before they cause damage.
             </p>
             
             <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Crosshair size={20} className="group-hover:rotate-90 transition-transform" /> Get Threat Assessment
                </button>
                <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center gap-2">
                   <Eye size={20} /> Tour Virtual SOC
                </button>
             </div>
          </div>

          {/* Visual: The Global Threat Map */}
          <div className="relative h-[400px] w-full flex items-center justify-center">
             <div className="relative w-full aspect-square max-w-[450px]">
                {/* Globe Wireframe */}
                <div className="absolute inset-0 rounded-full border border-white/10 bg-[#0f172a]/50 backdrop-blur-sm shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-20 animate-pulse-slow"></div>
                   
                   {/* Scanning Grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                {/* Threat Pings */}
                <ThreatPing pos="top-1/4 left-1/4" color="red" label="Ransomware" />
                <ThreatPing pos="bottom-1/3 right-1/3" color="orange" label="Brute Force" delay="1s" />
                <ThreatPing pos="top-1/2 right-1/8" color="red" label="SQL Injection" delay="2s" />
                <ThreatPing pos="top-1/3 right-1/6" color="red" label="phishing" delay="2s" />
                <ThreatPing pos="top-1/2 right-1/2" color="yellow" label="Malware" delay="2s" /> 
                 <ThreatPing pos="top-1/9 right-1/3" color="yellow" label="Brute Force" delay="2s" /> 
<ThreatPing pos="top-1/8 right-1/2" color="yellow" label="Botnet" delay="2s" /> 

                {/* Central Status */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617]/90 border border-white/20 px-4 py-2 rounded text-center backdrop-blur-xl shadow-2xl">
                   <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Threats Neutralized</div>
                   <div className="text-xl font-mono font-bold text-[#dc1e25]">{threatsNeutralized.toLocaleString()}</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW: Active Defense */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
            
            {/* Visual: Radar Target */}
            <div className="relative flex justify-center">
               <div className="w-80 h-80 rounded-full border-[20px] border-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 border-2 border-[#dc1e25]/20 rounded-full animate-ping-slow"></div>
                  <div className="w-48 h-48 bg-[#203253] rounded-full flex items-center justify-center text-white shadow-xl relative overflow-hidden">
                     <Radar size={64} className="text-[#dc1e25] animate-spin-slow"/>
                     <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#dc1e25]/40 to-transparent"></div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce">
                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                     <span className="text-xs font-bold text-gray-600">Normal Traffic</span>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-[#dc1e25] p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce delay-100">
                     <AlertTriangle size={14} className="text-white"/>
                     <span className="text-xs font-bold text-white">Threat Locked</span>
                  </div>
               </div>
            </div>

            <div>
               <h2 className="text-4xl font-bold text-primary mb-6">Active Defense, <span className="text-[#dc1e25]">Not Passive Logging</span></h2>
               <p className="text-base text-secondary mb-6 leading-relaxed">
                  Many organizations suffer from "alert fatigue." XPACE cuts through the noise. We don't just stare at dashboards; we perform active <strong>Threat Hunting</strong>.
               </p>
               <p className="text-base text-secondary leading-relaxed">
                  We search for hidden indicators of compromise (IoCs) that automated tools might miss. When a genuine threat is confirmed, we don't just email you—we take immediate action to contain the endpoint and kick the attacker out.
               </p>
               
               <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 bg-red-50 border border-red-100 text-[#dc1e25] text-sm font-bold rounded flex items-center gap-2">
                     <Crosshair size={16}/> Hunter Teams
                  </div>
                  <div className="px-4 py-2 bg-blue-50 border border-blue-100 text-[#203253] text-sm font-bold rounded flex items-center gap-2">
                     <Zap size={16}/> Instant Response
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 3. CORE FEATURES: Tactical Grid */}
      <div className="py-24 bg-[#0f172a] text-white relative">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Capabilities</span>
               <h2 className="text-4xl font-bold text-white">Full Spectrum Response</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <TacticalCard 
                  icon={<Eye size={32}/>} 
                  title="24/7/365 SOC" 
                  desc="Certified analysts monitoring your environment every second, ensuring no attack goes unnoticed."
               />
               <TacticalCard 
                  icon={<ShieldAlert size={32}/>} 
                  title="SIEM & SOAR" 
                  desc="Managing event logs and automating remediation workflows to neutralize threats instantly."
               />
               <TacticalCard 
                  icon={<Crosshair size={32}/>} 
                  title="Threat Hunting" 
                  desc="Proactive searches for subtle signs of deep infiltration, lateral movement, or C2 beacons."
               />
               <TacticalCard 
                  icon={<Laptop size={32}/>} 
                  title="Endpoint EDR" 
                  desc="Real-time monitoring of workstations to stop malware and ransomware at the device level."
               />
               <TacticalCard 
                  icon={<Search size={32}/>} 
                  title="Digital Forensics" 
                  desc="Post-incident analysis to determine exactly how the breach happened and what was stolen."
               />
               <TacticalCard 
                  icon={<Cloud size={32}/>} 
                  title="Cloud Monitoring" 
                  desc="Watching AWS/Azure environments for unauthorized access or configuration changes."
               />
            </div>
         </div>
      </div>

      {/* 4. BUSINESS BENEFITS: Speed Comparison */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-primary mb-4">The Value of Speed</h2>
               <p className="text-gray-500">In cyber warfare, time is the only metric that matters.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Visual: Time Bar Chart */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <h3 className="font-bold text-[#203253] mb-6">Mean Time to Detect (MTTD)</h3>
                  
                  {/* Industry Average */}
                  <div className="mb-6">
                     <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                        <span>INDUSTRY AVG</span>
                        <span>21 DAYS</span>
                     </div>
                     <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div className="w-full h-full bg-gray-400 striped-bar"></div>
                     </div>
                  </div>

                  {/* XPACE */}
                  <div>
                     <div className="flex justify-between text-xs font-bold text-[#dc1e25] mb-1">
                        <span>XPACE TECHNOLOGIES</span>
                        <span>15 MINUTES</span>
                     </div>
                     <div className="w-full bg-red-100 rounded-full h-4 relative">
                        <div className="w-[5%] h-full bg-[#dc1e25] rounded-full shadow-[0_0_15px_#dc1e25]"></div>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4 text-sm font-medium text-gray-600">
                     <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16}/> Reduced Dwell Time</div>
                     <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16}/> Zero False Positives</div>
                  </div>
               </div>

               <div className="space-y-5">
                  <BenefitRow 
                     title="Drastically Reduced Dwell Time" 
                     desc="We aim to detect and contain threats in minutes. Less time in network = Less damage done."
                  />
                  <BenefitRow 
                     title="Regulatory Assurance" 
                     desc="Meet strict monitoring requirements for GDPR, HIPAA, and PCI-DSS with detailed reporting."
                  />
                  <BenefitRow 
                     title="Cost Efficiency" 
                     desc="Building an internal 24/7 SOC is expensive. XPACE provides enterprise capability for a fraction of the cost."
                  />
               </div>
            </div>
         </div>
      </div>

      {/* 5. USE CASES: "Incident Log" Cards */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Real-World Protection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <IncidentCard 
                  title="Ransomware" 
                  alert="Mass Encryption"
                  action="Connection Severed"
                  icon={<FileText size={20}/>}
                  status="SAVED"
               />
               <IncidentCard 
                  title="Insider Threat" 
                  alert="Bulk Download"
                  action="User Locked"
                  icon={<UserIcon size={20}/>}
                  status="CONTAINED"
               />
               <IncidentCard 
                  title="Cloud Breach" 
                  alert="Public Bucket"
                  action="Config Reset"
                  icon={<Cloud size={20}/>}
                  status="SECURED"
               />
               <IncidentCard 
                  title="Supply Chain" 
                  alert="Vendor Backdoor"
                  action="Traffic Blocked"
                  icon={<Network size={20}/>}
                  status="ISOLATED"
               />
            </div>
         </div>
      </div>

      {/* 6. DELIVERY APPROACH: Circular Cycle */}
      <div className="py-24 bg-[#1e293b] text-white relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-16">Incident Response Lifecycle</h2>
           
           <div className="flex flex-wrap justify-center gap-4 lg:gap-8 items-center">
              <CycleStep num="1" title="Prepare" />
              <ArrowRight className="text-[#dc1e25]" />
              <CycleStep num="2" title="Detect" highlight />
              <ArrowRight className="text-[#dc1e25]" />
              <CycleStep num="3" title="Contain" />
              <ArrowRight className="text-[#dc1e25]" />
              <CycleStep num="4" title="Eradicate" />
              <ArrowRight className="text-[#dc1e25]" />
              <CycleStep num="5" title="Recover" />
           </div>
        </div>
      </div>

      {/* 7. FUTURE FOCUS: Predictive AI */}
      <div className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-blue-50 rounded-full w-24 h-24 flex items-center justify-center">
                  <Radar size={48} className="text-[#203253]"/>
               </div>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Predictive Threat Intelligence</h2>
            <p className="text-base text-secondary leading-relaxed">
               XPACE is moving from "Response" to "Pre-emption." By utilizing Predictive AI, we analyze dark web trends to anticipate targeted campaigns against your industry, hardening your defenses before the first packet hits.
            </p>
         </div>
      </div>

      {/* 8. CTA */}
      <div className="bg-accent py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-4xl font-bold mb-8">Sleep Soundly While We Watch</h2>
           <p className="text-lg text-white/90 mb-12">Don't face the hackers alone. Military-grade threat monitoring is just a click away.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-3 bg-white text-accent font-bold rounded shadow-xl hover:scale-105 transition-transform">Get Threat Assessment</button>
              <button className="px-8 py-3 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Tour Virtual SOC</button>
           </div>
        </div>
      </div>

     
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const ThreatPing = ({ pos, color, label, delay }) => (
  <div className={`absolute ${pos} flex flex-col items-center animate-pulse`} style={{animationDelay: delay}}>
     <div className={`w-4 h-4 rounded-full bg-${color}-500 shadow-[0_0_15px_${color}]`}></div>
     <div className={`text-[10px] font-bold text-${color}-500 bg-black/50 px-2 rounded mt-1`}>{label}</div>
  </div>
);

const TacticalCard = ({ icon, title, desc }) => (
  <div className="bg-[#1e293b] border-l-4 border-[#dc1e25] p-8 rounded-r-xl hover:bg-[#253248] transition-all group hover:-translate-y-1 relative overflow-hidden">
     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Crosshair size={64}/></div>
     <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-[#dc1e25] mb-4 shadow-lg">
        {icon}
     </div>
     <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
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

const IncidentCard = ({ title, alert, action, icon, status }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group overflow-hidden">
     <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
        <div className="text-[#203253]">{icon}</div>
        <div className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">{status}</div>
     </div>
     <div className="p-4">
        <h3 className="font-bold text-[#203253] mb-1">{title}</h3>
        <div className="text-xs text-red-500 font-bold mb-2 flex items-center gap-1"><AlertTriangle size={10}/> {alert}</div>
        <div className="text-xs text-gray-500 bg-slate-100 p-2 rounded font-mono">
           &gt; Action: {action}
        </div>
     </div>
  </div>
);

const CycleStep = ({ num, title, highlight }) => (
  <div className={`flex flex-col items-center gap-2 group cursor-default`}>
     <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all ${highlight ? 'border-[#dc1e25] bg-[#dc1e25] text-white shadow-[0_0_20px_#dc1e25]' : 'border-white/20 text-gray-400 group-hover:border-white group-hover:text-white'}`}>
        {num}
     </div>
     <span className={`text-sm font-bold uppercase tracking-wider ${highlight ? 'text-white' : 'text-gray-500'}`}>{title}</span>
  </div>
);

// Lucide Icon Helper
const UserIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Network = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>;

export default ThreatMonitoringPage;