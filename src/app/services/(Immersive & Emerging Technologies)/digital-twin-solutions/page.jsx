
import {
  Menu, X, ChevronDown, ArrowRight,
  Box, Layers, Activity, Zap,
  Settings, Globe, Map, Cpu,
  BarChart3, RefreshCw, Eye, Shield,
  Play, Factory, Building, Thermometer,
  CloudLightning, Search, Workflow, Database,
  Repeat, FileText // Added FileText to imports
} from 'lucide-react';




/* --- MAIN CONTENT --- */
const DigitalTwinPage = () => {
 

  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">



      {/* 1. HERO SECTION: The Living Replica */}
      <div className="relative min-h-screen -mt-20 flex items-center overflow-hidden bg-[#203253]">
        {/* Wireframe Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] animate-pulse-slow"></div>
           
           {/* Moving Data Streams */}
           {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute h-[1px] bg-cyan-400 opacity-30 animate-scan-horizontal"
                   style={{
                     top: `${Math.random() * 100}%`,
                     width: `${Math.random() * 20 + 10}%`,
                     left: `-${Math.random() * 20}%`,
                     animationDuration: `${Math.random() * 3 + 2}s`,
                     animationDelay: `${i * 0.5}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Repeat size={14} className="text-[#dc1e25] animate-spin-slow" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Mirror Reality System</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Simulate <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-500">Success.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               Create high-fidelity virtual replicas of your physical assets. Monitor, analyze, and optimize performance in real-time without risking live operations.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Play size={20} className="group-hover:scale-110 transition-transform"/> Request Twin Demo
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <FileText size={20} /> Read Whitepaper
                </button>
             </div>
          </div>


          {/* Visual: The Split Engine */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div
               className="relative w-full max-w-lg aspect-video flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* Engine Container */}
                <div className="relative w-full h-64 bg-[#0f172a] rounded-xl border border-gray-700 shadow-2xl overflow-hidden flex">
                   
                   {/* Left: Physical (Real) */}
                   <div className="w-1/2 h-full bg-gray-800 relative border-r border-cyan-500/50">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 grayscale"></div>
                      <div className="absolute top-4 left-4 text-[10px] font-bold text-white bg-black/50 px-2 py-1 rounded">PHYSICAL ASSET</div>
                     
                      {/* Engine Part (Real) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Settings size={80} className="text-gray-400 animate-spin-ultra-slow"/>
                      </div>
                   </div>


                   {/* Right: Digital (Twin) */}
                   <div className="w-1/2 h-full bg-[#0f172a] relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-500/30">DIGITAL TWIN</div>


                      {/* Engine Part (Wireframe) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Settings size={80} className="text-cyan-400 animate-spin-ultra-slow opacity-80" strokeWidth={1}/>
                      </div>


                      {/* Data Points */}
                      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                         <DataPoint pos="top-10 right-10" val="98°C" color="text-red-400" delay="0s"/>
                         <DataPoint pos="bottom-10 right-20" val="1200 RPM" color="text-green-400" delay="1s"/>
                      </div>
                   </div>
                   
                   {/* Scanning Bar */}
                   <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-cyan-400 shadow-[0_0_20px_cyan] z-20"></div>
                </div>


                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 scale-110">
                   <path d="M50,150 Q250,300 450,150" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="5,5" className="animate-dash-slow" opacity="0.3"/>
                </svg>


                {/* Floating Stats */}
                <FloatCard label="Sync Latency" val="2ms" pos="-top-8 right-0" color="green" />
                <FloatCard label="Predictive Alert" val="Wear Detected" pos="bottom-0 -left-8" color="red" />
             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Feedback Loop */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: Operator Dashboard */}
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl">
               <div className="flex flex-col gap-6">
                  {/* Real World Input */}
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-gray-200 rounded-xl"><Factory size={24} className="text-gray-600"/></div>
                     <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gray-400 animate-pulse"></div>
                     </div>
                     <span className="text-xs font-bold text-gray-500">IOT SENSORS</span>
                  </div>


                  {/* Digital Twin Core */}
                  <div className="h-32 bg-[#203253] rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg border-2 border-cyan-500">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>
                     <Activity size={48} className="text-cyan-400 animate-pulse-slow"/>
                     <div className="absolute bottom-2 right-2 text-[10px] text-white bg-cyan-600 px-2 rounded">SIMULATION RUNNING</div>
                  </div>


                  {/* Action Output */}
                  <div className="flex items-center gap-4">
                     <span className="text-xs font-bold text-[#dc1e25]">OPTIMIZATION</span>
                     <div className="flex-1 h-2 bg-red-100 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#dc1e25] animate-slide-right"></div>
                     </div>
                     <div className="p-3 bg-red-100 rounded-xl"><Zap size={24} className="text-[#dc1e25]"/></div>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">The Mirror World <span className="text-[#dc1e25]">Advantage</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  In complex environments, trial and error is too expensive. Digital Twins allow you to "fail fast" virtually so you can succeed instantly in reality.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  We integrate IoT, AI, and Big Data to build living digital counterparts. Whether monitoring a bridge or optimizing a factory, our twins give you deep visibility and predictive foresight.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Visibility" val="Deep" />
                  <StatBox label="Risk" val="Zero" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Holographic Grid (Dark) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Twin Capabilities</span>
               <h2 className="text-4xl font-bold text-white">Simulation Suite</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <HoloCard
                  icon={<Settings size={32}/>}
                  title="Asset Twins"
                  desc="Replicas of individual high-value assets (turbines, MRI) to monitor health and vibration."
               />
               <HoloCard
                  icon={<Workflow size={32}/>}
                  title="Process Twins"
                  desc="Simulating end-to-end workflows to identify bottlenecks and test efficiency."
               />
               <HoloCard
                  icon={<Globe size={32}/>}
                  title="System Twins"
                  desc="Modeling complex interconnected systems like power grids or traffic networks."
               />
               <HoloCard
                  icon={<Activity size={32}/>}
                  title="Predictive Maintenance"
                  desc="Using ML to predict exactly when a part will fail, fixing it before it breaks."
               />
               <HoloCard
                  icon={<Layers size={32}/>}
                  title="Scenario Testing"
                  desc="Running 'What-If' simulations to see impact without risking hardware."
               />
               <HoloCard
                  icon={<Shield size={32}/>}
                  title="Secure Data Link"
                  desc="Encrypted streams flowing between physical assets and digital cloud."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: The Optimization Graph */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Virtualization</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Cost vs Lifespan */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="font-bold text-[#203253]">Operational Impact</h3>
                     <div className="text-xs font-bold text-gray-400">YEAR 1 - YEAR 5</div>
                  </div>
                 
                  <div className="relative h-64 w-full">
                     {/* Cost Line (Down) */}
                     <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M0,50 Q150,50 300,150" fill="none" stroke="#22c55e" strokeWidth="4" />
                        <text x="250" y="140" className="text-xs fill-green-600 font-bold">Costs (-30%)</text>
                     </svg>
                     
                     {/* Lifespan Line (Up) */}
                     <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M0,150 Q150,150 300,50" fill="none" stroke="#3b82f6" strokeWidth="4" />
                        <text x="250" y="60" className="text-xs fill-blue-600 font-bold">Lifespan (+50%)</text>
                     </svg>


                     {/* Grid */}
                     <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 border-l border-b border-gray-200 opacity-50"></div>
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Reduced Downtime"
                     desc="Predict failures before they happen. Schedule maintenance during non-peak hours."
                  />
                  <BenefitRow
                     title="Lower R&D Costs"
                     desc="Prototype and test new designs virtually before committing to expensive manufacturing."
                  />
                  <BenefitRow
                     title="Operational Optimization"
                     desc="Uncover hidden inefficiencies invisible to the naked eye but obvious in data."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Strategic Maps */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Where We Apply This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <MapCard
                  title="Smart Cities"
                  desc="Traffic & Energy"
                  sub="Urban Modeling"
                  icon={<Building size={24}/>}
                  type="Macro"
               />
               <MapCard
                  title="Manufacturing"
                  desc="Factory Floor"
                  sub="Robot Optimization"
                  icon={<Factory size={24}/>}
                  type="Micro"
               />
               <MapCard
                  title="Energy"
                  desc="Wind Farms"
                  sub="Remote Monitoring"
                  icon={<Zap size={24}/>}
                  type="Field"
               />
               <MapCard
                  title="Healthcare"
                  desc="Patient Organs"
                  sub="Surgical Planning"
                  icon={<Thermometer size={24}/>} // Replaced HeartPulse with Thermometer
                  type="Bio"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Construction Lifecycle */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">Twin Construction</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Connect" icon={<Link size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Model" icon={<Box size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Map" icon={<Map size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Analyze" icon={<Search size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Visualize" icon={<Eye size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Industrial Metaverse */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <CloudLightning size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">The Industrial Metaverse</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE is preparing for the convergence of Digital Twins and the Metaverse. We build immersive collaborative environments where global teams can walk inside a running jet engine or factory in VR.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Clone Your Success</h2>
           <p className="text-xl text-white/90 mb-12">Stop guessing and start simulating. Build the Digital Twins that power the future of industry.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Request Twin Demo</button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors">Read Whitepaper</button>
           </div>
        </div>
      </div>


    </div>
  );
};


/* --- SUB COMPONENTS --- */


const DataPoint = ({ pos, val, color, delay }) => (
  <div className={`absolute ${pos} flex flex-col items-center animate-fade-in-up`} style={{animationDelay: delay}}>
     <div className="w-1 h-8 bg-white/20 mb-1"></div>
     <div className={`text-[10px] font-bold ${color} bg-black/80 px-2 py-1 rounded`}>{val}</div>
  </div>
);


const FloatCard = ({ label, val, pos, color }) => {
  const colors = {
    green: 'border-green-400 text-green-400',
    red: 'border-red-400 text-red-400',
  };
  return (
    <div className={`absolute ${pos} bg-[#0f172a]/90 backdrop-blur-md px-4 py-2 rounded-xl border-l-4 ${colors[color]} shadow-xl animate-float`}>
       <div className="text-[10px] text-gray-400 uppercase">{label}</div>
       <div className="text-sm font-bold text-white">{val}</div>
    </div>
  );
};


const HoloCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-1 hover:border-[#dc1e25]/50">
     <div className="w-12 h-12 bg-[#dc1e25] rounded-lg flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
     <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
  </div>
);


const BenefitRow = ({ title, desc }) => (
  <div className="flex gap-4">
     <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600 h-fit"><Repeat size={16}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);


const MapCard = ({ title, desc, sub, icon, type }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
        <div className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded flex items-center gap-1">
           {type}
        </div>
     </div>
     <h3 className="text-lg font-bold text-[#203253] mb-1">{title}</h3>
     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{desc}</div>
     <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100">{sub}</p>
  </div>
);


const StepNode = ({ num, title, icon, highlight }) => (
  <div className={`relative z-10 flex flex-col items-center p-4 rounded-xl w-32 transition-all duration-500 ${highlight ? 'bg-[#dc1e25] shadow-lg scale-110' : 'bg-[#1a2b4b] border border-white/10 hover:border-white/30'}`}>
     <div className={`mb-2 ${highlight ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
     <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-white/80' : 'text-gray-500'}`}>Step {num}</div>
     <div className="font-bold text-white text-sm">{title}</div>
  </div>
);


const StatBox = ({ label, val }) => (
  <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
     <div className="text-2xl font-bold text-[#203253]">{val}</div>
     <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
  </div>
);


// Lucide Helpers
const Link = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const CheckCircle2 = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;


export default DigitalTwinPage;
