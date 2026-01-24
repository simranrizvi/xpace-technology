
import {
  Menu, X, ChevronDown, ArrowRight,
  Glasses, Box, Scan, MapPin,
  Monitor, Play, Layers, Eye,
  Gamepad2, Hammer, HeartPulse, ShoppingBag,
  Zap, Code, Cpu, Smartphone, Settings,
  Rotate3d, Globe, LayoutGrid, Maximize,
  Cast, Move3d, Compass, Cuboid, LocateFixed
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const ARVRPage = () => {
 


  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
 


      {/* 1. HERO SECTION: The Digital Twin */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Cuboid size={14} className="text-[#dc1e25] animate-pulse" />
                <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">Industrial Spatial Computing</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Reshape <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Reality.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               We build enterprise-grade AR & VR applications. From immersive training simulators to digital twins, we transform how businesses visualize and operate.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Glasses size={20} className="group-hover:scale-110 transition-transform"/> Book Demo
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Settings size={20} /> View Use Cases
                </button>
             </div>
          </div>


          {/* Visual: The Blueprint Hologram */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1200px]">
             <div
               className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* HUD Frame */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-lg bg-[#0f172a]/40 backdrop-blur-sm flex flex-col p-6 shadow-2xl">
                   
                   {/* Top Bar */}
                   <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                         <LocateFixed size={14}/> TRACKING: ACTIVE
                      </div>
                      <div className="flex gap-1">
                         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                         <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                         <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                      </div>
                   </div>


                   {/* Central Object (Wireframe Engine) */}
                   <div className="flex-1 relative flex items-center justify-center border border-white/5 rounded bg-white/5">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
                      <Box size={120} className="text-white opacity-80 animate-float drop-shadow-[0_0_15px_white]" strokeWidth={0.5} />
                     
                      {/* Scanning Laser */}
                      <div className="absolute top-0 w-full h-1 bg-[#dc1e25] shadow-[0_0_20px_#dc1e25] animate-scan-vertical"></div>
                     
                      {/* Data Points */}
                      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#dc1e25] rounded-full animate-ping delay-700"></div>
                   </div>


                   {/* Bottom Stats */}
                   <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-[#203253] p-3 rounded border border-white/10">
                         <div className="text-[10px] text-gray-400 uppercase">Poly Count</div>
                         <div className="text-lg font-bold text-white">1.2M</div>
                      </div>
                      <div className="bg-[#203253] p-3 rounded border border-white/10">
                         <div className="text-[10px] text-gray-400 uppercase">Latency</div>
                         <div className="text-lg font-bold text-green-400">4ms</div>
                      </div>
                   </div>
                </div>


                {/* Floating AR Tags */}
                <ARTag label="Dimensions" val="2.4m x 1.8m" pos="top-20 -right-12" delay="0s" />
                <ARTag label="Material" val="Titanium Alloy" pos="bottom-40 -left-12" delay="1s" />
             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Pass-Through Lens */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
           
            {/* Visual: Augmented Reality Overlay */}
            <div className="relative group cursor-crosshair">
               <div className="relative rounded-3xl overflow-hidden border-8 border-gray-100 shadow-2xl h-[400px]">
                  {/* Real World Background (B&W) */}
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60" alt="Factory Floor"/>
                 
                  {/* The Lens (Color + Data) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-[#dc1e25] overflow-hidden shadow-[0_0_0_9999px_rgba(255,255,255,0.8)] z-20 animate-pulse-slow">
                     {/* Color World Inside Lens */}
                     <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-none h-auto object-cover" alt="Factory Color"/>
                     
                     {/* AR Data Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#203253]/90 backdrop-blur-md px-4 py-2 rounded border border-white/20 text-white text-xs font-bold shadow-lg">
                           Status: Operational <br/> <span className="text-green-400 font-mono">Temp: Normal</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">Bridging Physical & <span className="text-[#dc1e25]">Digital</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Augmented Reality (AR) overlays critical data onto the real world. Virtual Reality (VR) immerses users in simulated environments. Both are essential for modern industry.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  We specialize in **Spatial Computing**. We build custom applications for headsets (Apple Vision Pro, Meta Quest) and mobile devices that solve real challenges—like remote assistance for field technicians or safety training.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Efficiency" val="+40%" />
                  <StatBox label="Error Rate" val="-90%" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Technical Spec Grid */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Our Toolkit</span>
               <h2 className="text-4xl font-bold text-white">Spatial Capabilities</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <SpecCard
                  icon={<Glasses size={32}/>}
                  title="VR Simulators"
                  desc="Hyper-realistic environments for practicing high-risk tasks safely (e.g., fire safety, surgery)."
               />
               <SpecCard
                  icon={<Scan size={32}/>}
                  title="Remote Assist"
                  desc="Smart glass apps allowing experts to see what field workers see and annotate live."
               />
               <SpecCard
                  icon={<Box size={32}/>}
                  title="3D Visualization"
                  desc="WebAR experiences letting customers place virtual products in real space via phone."
               />
               <SpecCard
                  icon={<Monitor size={32}/>}
                  title="Virtual Retail"
                  desc="Immersive 3D showrooms where global customers can inspect and buy products."
               />
               <SpecCard
                  icon={<MapPin size={32}/>}
                  title="Location AR"
                  desc="Navigation apps overlaying directional arrows and info points onto the real world."
               />
               <SpecCard
                  icon={<Layers size={32}/>}
                  title="Digital Twins"
                  desc="Creating exact 3D replicas of physical assets for real-time monitoring."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Performance Graph */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Immersion</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Bar Chart */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                  <h3 className="font-bold text-[#203253] mb-8">Training Retention Rate</h3>
                 
                  <div className="space-y-8">
                     {/* 2D */}
                     <div>
                        <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                           <span>TRADITIONAL LECTURE</span>
                           <span>10%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-6 rounded-sm overflow-hidden">
                           <div className="h-full bg-gray-400 w-[10%]"></div>
                        </div>
                     </div>


                     {/* 3D */}
                     <div className="relative">
                        <div className="flex justify-between text-xs font-bold text-[#203253] mb-1">
                           <span>VR SIMULATION</span>
                           <span className="text-[#dc1e25]">75%</span>
                        </div>
                        <div className="w-full bg-[#203253]/10 h-8 rounded-sm overflow-hidden relative shadow-inner">
                           <div className="absolute top-0 left-0 h-full w-[75%] bg-[#203253] shadow-[0_0_20px_#203253] animate-slide-right"></div>
                        </div>
                     </div>
                  </div>
                 
                  <div className="mt-8 text-center text-sm text-gray-500 font-medium">
                     "Doing" beats "Watching". Muscle memory builds faster in VR.
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Accelerated Learning"
                     desc="Reduce training time and costs significantly while boosting retention rates."
                  />
                  <BenefitRow
                     title="Reduced Error Rates"
                     desc="AR provides 'Just-in-Time' info to workers, reducing mistakes on the assembly line."
                  />
                  <BenefitRow
                     title="Remote Collaboration"
                     desc="Meet in a shared VR workspace to manipulate 3D models together, saving travel costs."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Blueprint Cards */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <BlueprintCard
                  title="Manufacturing"
                  desc="Assembly Training"
                  sub="Safety w/o Risk"
                  icon={<Hammer size={24}/>}
               />
               <BlueprintCard
                  title="Real Estate"
                  desc="Virtual Tours"
                  sub="Pre-Build Walk"
                  icon={<LayoutGrid size={24}/>}
               />
               <BlueprintCard
                  title="Retail"
                  desc="Magic Mirrors"
                  sub="Virtual Try-On"
                  icon={<ShoppingBag size={24}/>}
               />
               <BlueprintCard
                  title="Healthcare"
                  desc="Surgical Prep"
                  sub="MRI Overlay"
                  icon={<HeartPulse size={24}/>}
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Horizontal Pipeline */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">Development Lifecycle</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Design" icon={<Eye size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Model" icon={<Box size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Code" icon={<Code size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Tune" icon={<Cpu size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Deploy" icon={<Smartphone size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Mixed Reality */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Rotate3d size={40} className="text-[#dc1e25] animate-spin-slow"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">Mixed Reality Future</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE is preparing for Mixed Reality (MR) pass-through technology. We build apps for Apple Vision Pro where digital objects interact physically with the real world.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Step Into the Future</h2>
           <p className="text-xl text-white/90 mb-12">The world is 3D. Your software should be too. Build immersive experiences that deliver real results.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Book AR/VR Demo</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Discuss Use Case</button>
           </div>
        </div>
      </div>


      
    </div>
  );
};


/* --- SUB COMPONENTS --- */


const ARTag = ({ label, val, pos, delay }) => (
  <div className={`absolute ${pos} bg-[#203253]/90 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-[#dc1e25] shadow-xl animate-float`} style={{animationDelay: delay}}>
     <div className="text-[8px] text-gray-300 uppercase tracking-widest">{label}</div>
     <div className="text-sm font-bold text-white">{val}</div>
  </div>
);


const SpecCard = ({ icon, title, desc }) => (
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
     <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600 h-fit"><CheckCircle2 size={16}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);


const BlueprintCard = ({ title, desc, sub, icon }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25] relative">
     {/* Blueprint Grid BG */}
     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 pointer-events-none"></div>
     
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
     </div>
     <h3 className="text-lg font-bold text-[#203253] mb-1">{title}</h3>
     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{desc}</div>
     <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100 font-mono">{sub}</p>
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
const CheckCircle2 = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;


export default ARVRPage;
