
import {
  Menu, X, ChevronDown, ArrowRight,
  Globe, Users, Gamepad2, ShoppingBag,
  Shirt, Music, Map, Box, Zap,
  Code, Layers, Monitor, Play,
  LayoutGrid, Smile, TrendingUp, CheckCircle2,
  Ticket, Briefcase, GraduationCap, Building,
  Move3d, Cast, Hexagon
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const MetaversePage = () => {



  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
     


      {/* 1. HERO SECTION: The Portal to Virtual Worlds */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]">
        {/* Animated Stardust Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse-slow"></div>
           
           {/* Floating Avatars/Particles */}
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-purple-400 rounded-full animate-rise"
                   style={{
                     left: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 4 + 3}s`,
                     animationDelay: `${i * 0.3}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Globe size={14} className="text-[#dc1e25] animate-spin-slow" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Immersive Virtual Worlds</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Build Your <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-pink-500">Presence.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               Design and develop immersive, persistent virtual worlds. Connect, collaborate, and transact in ways never before possible.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Move3d size={20} className="group-hover:scale-110 transition-transform"/> Design Virtual World
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Cast size={20} /> View Case Studies
                </button>
             </div>
          </div>


          {/* Visual: The Metaverse Portal */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* Portal Ring */}
                <div className="absolute inset-0 border-[20px] border-[#203253] rounded-full shadow-[0_0_80px_rgba(168,85,247,0.4)] bg-gradient-to-tr from-purple-900 to-[#dc1e25] p-1 animate-spin-ultra-slow">
                    <div className="w-full h-full bg-[#0f172a] rounded-full"></div>
                </div>


                {/* Inner World */}
                <div className="absolute w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-white/10 shadow-inner">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800')] bg-cover animate-pulse-slow opacity-80"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                   
                   {/* Floating Elements inside Portal */}
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                         <Users size={24} className="text-[#203253]"/>
                      </div>
                      <span className="text-white text-[10px] font-bold mt-2 bg-black/50 px-2 py-1 rounded">50k+ Live Users</span>
                   </div>
                </div>


                {/* Orbiting Elements */}
                <OrbitItem icon={<Shirt size={20}/>} label="Wearables" angle={0} color="purple"/>
                <OrbitItem icon={<Music size={20}/>} label="Events" angle={120} color="pink"/>
                <OrbitItem icon={<ShoppingBag size={20}/>} label="Commerce" angle={240} color="orange"/>
             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Portal Bridge */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: Physical Store to Digital World */}
            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center">
               <div className="flex items-center gap-2 md:gap-8 relative z-10">
                  {/* Physical World */}
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center shadow-inner">
                        <Building size={40} className="text-gray-500"/>
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase">Physical Store</span>
                  </div>


                  {/* The Bridge */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-24 h-[2px] bg-gradient-to-r from-gray-300 via-[#dc1e25] to-purple-500 relative">
                        <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 animate-pulse"></div>
                     </div>
                     <div className="text-[10px] font-mono text-[#dc1e25] bg-red-50 px-2 py-1 rounded border border-red-100">CONNECT</div>
                  </div>


                  {/* Digital World */}
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-24 h-24 bg-[#203253] rounded-xl flex items-center justify-center shadow-2xl border-2 border-purple-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-500/20 animate-pulse"></div>
                        <Gamepad2 size={40} className="text-white relative z-10"/>
                     </div>
                     <span className="text-xs font-bold text-[#203253] uppercase">Virtual Flagship</span>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">The Next Frontier of <span className="text-[#dc1e25]">Engagement</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  The Metaverse represents a shift in how we interact online. For brands, it's a new channel for acquisition and retention.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  XPACE creates purpose-built experiences. Whether building on Decentraland or a private Unreal Engine world, we ensure your entry is strategic, scalable, and on-brand.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Dwell Time" val="High" />
                  <StatBox label="Interaction" val="Deep" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Holographic Grid (Dark) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">World Building Suite</span>
               <h2 className="text-4xl font-bold text-white">Metaverse Capabilities</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <FeatureCard
                  icon={<Map size={32}/>}
                  title="Virtual Land Dev"
                  desc="Designing architectural masterpieces on Decentraland, Sandbox, or Otherside parcels."
               />
               <FeatureCard
                  icon={<Shirt size={32}/>}
                  title="Custom Avatars"
                  desc="Designing branded wearables and skins that turn customers into brand ambassadors."
               />
               <FeatureCard
                  icon={<Music size={32}/>}
                  title="Immersive Events"
                  desc="Hosting virtual concerts and launches with spatial audio to reach global audiences."
               />
               <FeatureCard
                  icon={<Gamepad2 size={32}/>}
                  title="Gamified Brand Exp"
                  desc="Play-to-Earn quests that reward users with tokens or NFTs for engagement."
               />
               <FeatureCard
                  icon={<ShoppingBag size={32}/>}
                  title="Commerce Integration"
                  desc="Virtual storefronts where users buy digital assets or physical goods directly inside the world."
               />
               <FeatureCard
                  icon={<Code size={32}/>}
                  title="Web3 Interaction"
                  desc="Connecting the experience to the blockchain for token gating and asset ownership."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Engagement Comparison */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Virtual Worlds</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Web2 vs Web3 Store */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex flex-col gap-6">
                     {/* Web 2.0 Store */}
                     <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl opacity-60">
                        <div className="flex items-center gap-3">
                           <LayoutGrid size={24} className="text-gray-500"/>
                           <span className="font-bold text-gray-500">Web 2.0 Store</span>
                        </div>
                        <div className="text-xs font-bold text-gray-400 bg-white px-2 py-1 rounded">FLAT SCROLL</div>
                     </div>


                     {/* Arrow */}
                     <div className="flex justify-center -my-2"><ArrowRight className="text-gray-300 rotate-90"/></div>


                     {/* Web 3.0 Store */}
                     <div className="flex items-center justify-between p-6 bg-[#203253] rounded-xl shadow-lg border-2 border-purple-500 transform scale-105">
                        <div className="flex items-center gap-3">
                           <Box size={24} className="text-white"/>
                           <span className="font-bold text-white">Metaverse Store</span>
                        </div>
                        <div className="text-xs font-bold text-purple-200 bg-purple-900/50 px-2 py-1 rounded">3D IMMERSIVE</div>
                     </div>
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Global Reach"
                     desc="Host events for 50,000+ people simultaneously without physical venue limitations."
                  />
                  <BenefitRow
                     title="Deep Engagement"
                     desc="Users spend minutes on a website but hours in the metaverse. Immersive experiences drive connection."
                  />
                  <BenefitRow
                     title="New Revenue Streams"
                     desc="Monetize virtual goods, tickets to VIP areas, or lease digital advertising space."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Holographic Scene Cards */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Where We Apply This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <HoloSceneCard
                  title="Corporate"
                  desc="Virtual HQ"
                  sub="Remote Onboarding"
                  icon={<Building size={20}/>}
                  color="bg-blue-100 text-blue-700"
               />
               <HoloSceneCard
                  title="Fashion"
                  desc="Digital Clothing"
                  sub="Wearable Lines"
                  icon={<Shirt size={20}/>}
                  color="bg-purple-100 text-purple-700"
               />
               <HoloSceneCard
                  title="Education"
                  desc="Virtual Campus"
                  sub="3D Collaboration"
                  icon={<GraduationCap size={20}/>}
                  color="bg-green-100 text-green-700"
               />
               <HoloSceneCard
                  title="Events"
                  desc="Fan Meetups"
                  sub="Persistent Spaces"
                  icon={<Ticket size={20}/>}
                  color="bg-orange-100 text-orange-700"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Horizontal Pipeline */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">World-Building Lifecycle</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Strategy" icon={<Zap size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Design" icon={<Layers size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Build" icon={<Box size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Code" icon={<Code size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Launch" icon={<Rocket size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Interoperability */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Hexagon size={40} className="text-[#dc1e25] animate-spin-slow"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">The Interoperable Future</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE prepares you for the Open Metaverse. We use open standards (USD, glTF) to ensure assets and avatars are portable across the interconnected virtual worlds of tomorrow.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Claim Your Virtual Territory</h2>
           <p className="text-xl text-white/90 mb-12">The digital land grab is happening now. Build a destination that defines your future.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Design Virtual World</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Explore Case Studies</button>
           </div>
        </div>
      </div>

    </div>
  );
};


/* --- SUB COMPONENTS --- */


const OrbitItem = ({ label, icon, angle, color }) => {
  const radius = 180;
  const rad = (angle * Math.PI) / 180;
  const colors = {
     purple: 'border-purple-500 text-purple-400',
     pink: 'border-pink-500 text-pink-400',
     orange: 'border-orange-500 text-orange-400',
  };


  return (
    <div
      className={`absolute w-16 h-16 bg-[#0f172a] rounded-full flex flex-col items-center justify-center shadow-2xl border-2 ${colors[color]} z-20 animate-float`}
      style={{
        top: `calc(50% + ${Math.sin(rad) * radius}px)`,
        left: `calc(50% + ${Math.cos(rad) * radius}px)`,
        transform: 'translate(-50%, -50%)'
      }}
    >
       <div>{icon}</div>
       <span className="text-[8px] font-bold text-white uppercase mt-1">{label}</span>
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


const HoloSceneCard = ({ title, desc, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
        <div className={`px-2 py-1 text-[10px] font-bold rounded flex items-center gap-1 ${color}`}>
           <Globe size={10}/> Virtual
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
const Rocket = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;


export default MetaversePage;
