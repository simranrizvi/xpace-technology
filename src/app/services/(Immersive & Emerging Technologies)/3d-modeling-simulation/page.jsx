

import {
  Menu, X, ChevronDown, ArrowRight,
  Box, Layers, Wind, Camera, Palette,
  Monitor, Play, PenTool, Zap,
  Settings, Rotate3d, Image as ImageIcon,
  MousePointer2, Cuboid, Triangle,
  RefreshCw, CheckCircle2, Crosshair,
  Cpu, Aperture, Wand2, Building, Smartphone, Activity // Added Activity to imports
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const ThreeDModelingPage = () => {
  

  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
    


      {/* 1. HERO SECTION: The Digital Forge */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]">
        {/* Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] animate-pulse-slow"></div>
           
           {/* Rendering Particles */}
           {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-rise"
                   style={{
                     left: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 5 + 3}s`,
                     animationDelay: `${i * 0.2}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Cuboid size={14} className="text-[#dc1e25] animate-spin-slow" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">High-Fidelity Virtualization</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Visualize the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-gray-400">Impossible.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               We craft photorealistic 3D models and physics-based simulations. Design, test, and showcase products with absolute precision before they exist in the real world.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Box size={20} className="group-hover:scale-110 transition-transform"/> Request 3D Quote
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Play size={20} /> View Portfolio
                </button>
             </div>
          </div>


          {/* Visual: The Rendering Engine */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* 3D Object Container */}
                <div className="absolute w-80 h-80 flex items-center justify-center">
                   
                   {/* Wireframe Layer (Back) */}
                   <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-3xl transform -rotate-6 scale-95 flex items-center justify-center">
                      <Cuboid size={120} className="text-cyan-500/20" strokeWidth={0.5} />
                   </div>


                   {/* Solid Render Layer (Front) */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black border-2 border-white/10 rounded-3xl transform rotate-6 shadow-2xl flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)]"></div>
                      <Cuboid size={120} className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-float"/>
                     
                      {/* Scanning Laser */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#dc1e25]/20 to-transparent animate-scan-fast pointer-events-none"></div>
                   </div>
                </div>


                {/* Floating UI Tags */}
                <Tag3D label="Polygons" val="2.4M" pos="-top-10 left-0" color="blue" delay="0s"/>
                <Tag3D label="Texture" val="4K PBR" pos="bottom-10 -right-5" color="purple" delay="1s"/>
                <Tag3D label="Physics" val="Enabled" pos="top-1/2 -right-16" color="green" delay="2s"/>
               
                {/* Orbiting Axis */}
                <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-spin-ultra-slow pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: Art Meets Engineering */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: The Workflow Converter */}
            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center">
               <div className="flex items-center gap-4 relative z-10">
                  {/* Input: CAD */}
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-20 h-20 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-center shadow-sm">
                        <PenTool size={32} className="text-blue-600"/>
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase">CAD Data</span>
                  </div>


                  {/* Processing: XPACE Engine */}
                  <div className="flex flex-col items-center gap-1 relative">
                     <div className="h-1 w-16 bg-gray-200 rounded overflow-hidden">
                        <div className="h-full w-1/2 bg-[#dc1e25] animate-slide-right"></div>
                     </div>
                     <div className="w-12 h-12 bg-[#203253] rounded-full flex items-center justify-center shadow-lg border-2 border-[#dc1e25] z-10 animate-pulse-slow">
                        <Cpu size={20} className="text-white"/>
                     </div>
                     <div className="h-1 w-16 bg-gray-200 rounded overflow-hidden">
                        <div className="h-full w-1/2 bg-[#dc1e25] animate-slide-right delay-75"></div>
                     </div>
                  </div>


                  {/* Output: Render */}
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-20 h-20 bg-gray-900 rounded-xl border-2 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20"></div>
                        <ImageCard />
                     </div>
                     <span className="text-xs font-bold text-[#203253] uppercase">Photorealism</span>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">Art & Engineering <span className="text-[#dc1e25]">Converged</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Traditional photography and prototyping are slow and inflexible. 3D technology removes these barriers. XPACE serves as your digital production house.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  We support the entire lifecycle. For engineering, we stress-test designs with physics simulations. For marketing, we create "Virtual Photography"—rendering products in exotic environments without leaving the studio.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Visual Quality" val="Cinematic" />
                  <StatBox label="Precision" val="Sub-mm" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Modeling Suite (Dark Mode) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Our Toolkit</span>
               <h2 className="text-4xl font-bold text-white">Simulation Capabilities</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <FeatureCard
                  icon={<Box size={32}/>}
                  title="Hard Surface Modeling"
                  desc="Creating mathematically perfect models of cars, electronics, and machinery with accurate topology."
               />
               <FeatureCard
                  icon={<Wind size={32}/>}
                  title="Physics Simulation"
                  desc="Simulating real-world forces—gravity, fluid flow (CFD), and cloth dynamics—to test integrity."
               />
               <FeatureCard
                  icon={<Camera size={32}/>}
                  title="Photorealistic Rendering"
                  desc="Using ray-tracing technology (V-Ray, Unreal) to produce images indistinguishable from photos."
               />
               <FeatureCard
                  icon={<Palette size={32}/>}
                  title="3D Configurators"
                  desc="Interactive web tools where customers can rotate products, change colors, and swap parts."
               />
               <FeatureCard
                  icon={<Layers size={32}/>}
                  title="Organic Modeling"
                  desc="Sculpting complex shapes for medical or entertainment applications."
               />
               <FeatureCard
                  icon={<Triangle size={32}/>}
                  title="Topology Optimization"
                  desc="Reducing polygon counts for web and AR use without losing visual fidelity."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: The Studio Comparison */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Virtualization</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Photo Shoot vs 3D Render */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex flex-col gap-6">
                     {/* Physical Shoot */}
                     <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl opacity-60">
                        <div className="flex items-center gap-3">
                           <Camera size={24} className="text-gray-500"/>
                           <span className="font-bold text-gray-500">Physical Shoot</span>
                        </div>
                        <div className="text-xs font-bold text-red-500 border border-red-200 px-2 py-1 rounded">SLOW & COSTLY</div>
                     </div>


                     {/* Arrow */}
                     <div className="flex justify-center -my-2"><ArrowRight className="text-gray-300 rotate-90"/></div>


                     {/* 3D Render */}
                     <div className="flex items-center justify-between p-6 bg-[#203253] rounded-xl shadow-lg border-2 border-cyan-500 transform scale-105">
                        <div className="flex items-center gap-3">
                           <Box size={24} className="text-white"/>
                           <span className="font-bold text-white">3D Render</span>
                        </div>
                        <div className="text-xs font-bold text-cyan-200 bg-cyan-900/50 px-2 py-1 rounded border border-cyan-500/30">INSTANT & FLEXIBLE</div>
                     </div>
                  </div>
                 
                  <div className="mt-8 text-center text-sm text-gray-500">
                     "Change color, angle, or lighting in seconds."
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Zero Physical Waste"
                     desc="Test 100 variations virtually without manufacturing a single prototype. Save materials and time."
                  />
                  <BenefitRow
                     title="Marketing Agility"
                     desc="Launch campaigns before the product is manufactured. Change the product color in ads instantly."
                  />
                  <BenefitRow
                     title="Risk Reduction"
                     desc="Simulate extreme conditions (e.g., earthquake impact) to identify structural weaknesses safely."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Exploded Views */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <ExplodedCard
                  title="Automotive"
                  desc="Aerodynamics"
                  sub="Crash Simulation"
                  icon={<Wind size={20}/>}
                  color="bg-blue-100 text-blue-700"
               />
               <ExplodedCard
                  title="Real Estate"
                  desc="ArchViz"
                  sub="Pre-Sell Walkthrough"
                  icon={<Building size={20}/>}
                  color="bg-green-100 text-green-700"
               />
               <ExplodedCard
                  title="Electronics"
                  desc="Exploded View"
                  sub="Internal Components"
                  icon={<Smartphone size={20}/>}
                  color="bg-purple-100 text-purple-700"
               />
               <ExplodedCard
                  title="Medical"
                  desc="Surgical Sim"
                  sub="Anatomy Models"
                  icon={<Activity size={20}/>}
                  color="bg-red-100 text-red-700"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Horizontal Pipeline */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">Production Pipeline</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Reference" icon={<Search size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Model" icon={<Box size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Texture" icon={<Palette size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Rig" icon={<Settings size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Render" icon={<Aperture size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Generative 3D */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Wand2 size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">Generative 3D AI</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE is pioneering Generative AI for 3D creation. By using AI to generate textures and environments, we drastically reduce production time, delivering expansive 3D worlds at a fraction of the cost.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Visualize Your Vision</h2>
           <p className="text-xl text-white/90 mb-12">If you can imagine it, we can build it. Bring your concepts to life in high-definition 3D.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Request 3D Quote</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">View Portfolio</button>
           </div>
        </div>
      </div>

    </div>
  );
};


/* --- SUB COMPONENTS --- */


const Tag3D = ({ label, val, pos, color, delay }) => {
  const colors = {
    blue: 'border-blue-400 text-blue-300',
    purple: 'border-purple-400 text-purple-300',
    green: 'border-green-400 text-green-300',
  };
  return (
    <div className={`absolute ${pos} bg-[#0f172a]/80 backdrop-blur-md px-3 py-1.5 rounded border-l-2 ${colors[color]} shadow-lg animate-float`} style={{animationDelay: delay}}>
       <div className="text-[8px] text-gray-400 uppercase tracking-widest">{label}</div>
       <div className="text-xs font-bold text-white">{val}</div>
    </div>
  );
};


const FeatureCard = ({ icon, title, desc }) => (
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


const ExplodedCard = ({ title, desc, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
        <div className={`px-2 py-1 text-[10px] font-bold rounded flex items-center gap-1 ${color}`}>
           <Layers size={10}/> 3D Layer
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


// Helper for Image placeholder
const ImageCard = () => (
    <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center">
        <ImageIcon size={24} className="text-white"/>
    </div>
);


// Search icon for Pipeline
const Search = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;




export default ThreeDModelingPage;