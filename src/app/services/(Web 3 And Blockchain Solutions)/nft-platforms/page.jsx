
import {
  Menu, X, ChevronDown, ArrowRight,
  Hexagon, ShoppingBag, Gavel, CreditCard,
  Crown, Lock, Globe, Share2, Ticket,
  Gamepad2, Gift, Code, Zap, RefreshCw,
  Leaf, ShieldCheck, Activity, Layers,
  Image as ImageIcon, DollarSign, Gem, CheckCircle2,
  Box, Key, Tag
} from 'lucide-react';



/* --- MAIN CONTENT --- */
const NFTPlatformsPage = () => {



  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
    


      {/* 1. HERO SECTION: The Infinite Gallery (Centered Layout) */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#203253]">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(220,30,37,0.15)_0%,transparent_60%)] animate-pulse-slow"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-float"></div>
        </div>


        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
         
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] border border-[#dc1e25]/50 rounded-full shadow-[0_0_30px_rgba(220,30,37,0.3)] mb-8 animate-fade-in-up">
             <Hexagon size={18} className="text-[#dc1e25] animate-spin-slow" />
             <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">Enterprise NFT Infrastructure</span>
          </div>


          <h1 className="text-6xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 drop-shadow-2xl">
            Mint The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc1e25] via-white to-blue-400">Future.</span>
          </h1>


          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-12 border-b-2 border-[#dc1e25]/30 pb-12">
            We build robust, scalable NFT marketplaces and tokenization platforms that drive engagement, authenticate products, and unlock new revenue streams.
          </p>


          <div className="flex flex-col sm:flex-row gap-6">
             <button className="px-12 py-5 bg-[#dc1e25] text-white font-bold rounded-full hover:bg-[#b0141a] transition-all flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(220,30,37,0.5)] hover:scale-105">
                <Rocket size={20} className="group-hover:-translate-y-1 transition-transform"/> Launch Platform
             </button>
             <button className="px-12 py-5 bg-white text-[#203253] font-bold rounded-full hover:bg-gray-100 flex items-center justify-center gap-3 group shadow-xl">
                <Gem size={20} className="text-[#203253]" /> Explore Utility
             </button>
          </div>


          {/* Floating 3D Elements behind/around */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}>
             <FloatingAsset icon={<Crown size={32}/>} color="bg-yellow-500" pos="top-20 left-10" delay="0s" />
             <FloatingAsset icon={<Ticket size={32}/>} color="bg-purple-500" pos="bottom-40 right-20" delay="1.5s" />
             <FloatingAsset icon={<ShieldCheck size={32}/>} color="bg-green-500" pos="top-40 right-10" delay="2.5s" />
             <FloatingAsset icon={<Gavel size={32}/>} color="bg-blue-500" pos="bottom-20 left-20" delay="3.5s" />
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: Phygital Bridge (Updated Visual) */}
      <div className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
           
            {/* Visual: The Digital Twin Scanner */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#203253] to-[#dc1e25] rounded-[3rem] transform rotate-3 opacity-10"></div>
               <div className="bg-slate-50 border border-slate-200 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                 
                  {/* Scan Animation */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#dc1e25] shadow-[0_0_20px_#dc1e25] animate-scan-vertical z-10"></div>
                 
                  <div className="flex justify-between items-center gap-8 opacity-90">
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-32 bg-gray-300 rounded-lg flex items-center justify-center shadow-inner">
                           <ShoppingBag size={40} className="text-gray-500"/>
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Physical</span>
                     </div>
                     
                     <ArrowRight size={32} className="text-[#dc1e25] animate-pulse"/>
                     
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-32 bg-gradient-to-br from-[#203253] to-black rounded-lg flex items-center justify-center shadow-2xl border-2 border-[#dc1e25]">
                           <Hexagon size={40} className="text-white drop-shadow-lg"/>
                        </div>
                        <span className="text-xs font-bold text-[#203253] uppercase">Digital Twin</span>
                     </div>
                  </div>


                  <div className="mt-8 p-4 bg-white rounded-xl border-l-4 border-green-500 shadow-sm">
                     <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 size={16} className="text-green-600"/>
                        <span className="text-sm font-bold text-[#203253]">Verification Complete</span>
                     </div>
                     <p className="text-xs text-gray-500 font-mono">Token ID: 0x8f...3a1</p>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">Beyond Hype: <span className="text-[#dc1e25]">Utility-Driven</span> NFTs</h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  For enterprises, the true power of NFTs lies in utility. An NFT can be a ticket, a certificate of authenticity, or a lifetime membership card.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  XPACE builds comprehensive ecosystems. From white-label marketplaces that feel like your brand to smart contracts enforcing royalties, we turn digital ownership into a tangible business asset.
               </p>
               
               <div className="grid grid-cols-2 gap-6">
                  <StatBox label="Brand Control" val="100%" />
                  <StatBox label="Revenue Stream" val="Perpetual" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Bento Grid (Dark & Sleek) */}
      <div className="py-32 bg-[#0f172a] text-white relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Platform Features</span>
               <h2 className="text-5xl font-bold text-white">The NFT Suite</h2>
            </div>


            <div className="grid md:grid-cols-3 gap-6">
               <FeatureBento
                  icon={<ShoppingBag/>}
                  title="Custom Marketplaces"
                  desc="White-label platforms like OpenSea but branded for you."
                  colSpan="md:col-span-2"
               />
               <FeatureBento
                  icon={<Gavel/>}
                  title="Smart Minting"
                  desc="Deploying secure ERC-721/1155 contracts with 'Lazy Minting'."
                  colSpan="md:col-span-1"
               />
               <FeatureBento
                  icon={<CreditCard/>}
                  title="Fiat On-Ramping"
                  desc="Integrate Stripe/MoonPay for easy credit card payments."
                  colSpan="md:col-span-1"
               />
               <FeatureBento
                  icon={<Crown/>}
                  title="Royalty Enforcement"
                  desc="Ensure original creators get a % of sales revenue forever."
                  colSpan="md:col-span-2"
               />
               <FeatureBento
                  icon={<Lock/>}
                  title="Token Gating"
                  desc="Access to exclusive merch or content for holders."
                  colSpan="md:col-span-1"
               />
               <FeatureBento
                  icon={<Layers/>}
                  title="Multi-Chain"
                  desc="Ethereum, Polygon, or Solana support."
                  colSpan="md:col-span-1"
               />
               <FeatureBento
                  icon={<Key/>}
                  title="Wallet Connect"
                  desc="Seamless login with MetaMask & Email."
                  colSpan="md:col-span-1"
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Revenue Stack Graph */}
      <div className="py-32 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold text-[#203253] mb-4">Value of Digital Scarcity</h2>
               <div className="w-24 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-20 items-center">
               
               {/* Visual: Revenue Graph */}
               <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-200 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-10">
                     <h3 className="font-bold text-[#203253] text-xl">Revenue Model</h3>
                     <div className="flex gap-4 text-xs font-bold">
                        <span className="flex items-center gap-1 text-blue-500"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Primary</span>
                        <span className="flex items-center gap-1 text-[#dc1e25]"><div className="w-3 h-3 bg-[#dc1e25] rounded-full"></div> Royalty</span>
                     </div>
                  </div>
                 
                  <div className="relative h-64 w-full flex items-end gap-3 px-4">
                     {[30, 45, 60, 50, 75, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full gap-1 group">
                           <div className="w-full bg-blue-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all" style={{height: `${h * 0.7}%`}}></div>
                           <div className="w-full bg-[#dc1e25] rounded-b-sm opacity-80 group-hover:opacity-100 transition-all" style={{height: `${h * 0.3}%`}}></div>
                        </div>
                     ))}
                  </div>
                  <div className="mt-6 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">Continuous Secondary Revenue</div>
               </div>


               <div className="space-y-10">
                  <BenefitRow
                     title="New Revenue Streams"
                     desc="Monetize digital IP. Sell digital collectibles, skins, or moments directly to your fanbase."
                  />
                  <BenefitRow
                     title="Perpetual Revenue"
                     desc="Unlike physical sales, NFTs generate revenue forever via secondary market royalties."
                  />
                  <BenefitRow
                     title="Community Building"
                     desc="NFT holders become invested stakeholders, creating a hyper-engaged super-fan community."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: "Marketplace Listing" Cards */}
      <div className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#203253] mb-20 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <MarketplaceCard
                  title="Fashion"
                  tag="Digital Twin"
                  price="0.5 ETH"
                  image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400"
               />
               <MarketplaceCard
                  title="Events"
                  tag="VIP Access"
                  price="200 USDC"
                  image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400"
               />
               <MarketplaceCard
                  title="Gaming"
                  tag="Rare Asset"
                  price="1.2 ETH"
                  image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400"
               />
               <MarketplaceCard
                  title="Real Estate"
                  tag="Fractional"
                  price="$50/Share"
                  image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Horizontal Launchpad */}
      <div className="py-32 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl font-bold mb-24 text-center">NFT Launchpad</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Strategy" icon={<Activity size={24}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Art Gen" icon={<ImageIcon size={24}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Contract" icon={<Code size={24}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Mint Site" icon={<Globe size={24}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Market" icon={<ShoppingBag size={24}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Dynamic & Soulbound */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-8 flex justify-center">
               <div className="p-5 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-2 border-gray-100">
                  <RefreshCw size={48} className="text-[#dc1e25] animate-spin-slow"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">Dynamic & Soulbound NFTs</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE is pioneering the next wave: Dynamic NFTs that update based on real-world data (weather, scores), and Soulbound Tokens (SBTs) that act as permanent digital certifications.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-6xl font-black mb-8">Mint Your Legacy</h2>
           <p className="text-2xl text-white/90 mb-12 font-light">The digital economy is waiting. Launch an NFT strategy that builds value and community.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-[#dc1e25] font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">Launch Marketplace</button>
              <button className="px-12 py-5 bg-[#203253]/30 border-2 border-white/30 text-white font-bold rounded-full hover:bg-[#203253]/50 transition-colors">Explore Use Cases</button>
           </div>
        </div>
      </div>


      <footer className="bg-[#0f172a] text-gray-500 py-12 text-center text-sm border-t border-white/10">
        <p>&copy; 2024 XPACE Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};


/* --- SUB COMPONENTS --- */


const FloatingAsset = ({ icon, color, pos, delay }) => (
   <div className={`absolute ${pos} w-20 h-20 rounded-2xl ${color} shadow-2xl flex items-center justify-center animate-float z-0 opacity-80`} style={{animationDelay: delay}}>
      <div className="text-white drop-shadow-md">{icon}</div>
   </div>
);


const FeatureBento = ({ icon, title, desc, colSpan }) => (
  <div className={`${colSpan} bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-[#dc1e25]/50 transition-all group hover:-translate-y-2`}>
     <div className="w-12 h-12 bg-[#dc1e25] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
     <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
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


const MarketplaceCard = ({ title, tag, price, image }) => (
   <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all group hover:-translate-y-2">
      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
         <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
         <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">{tag}</div>
      </div>
      <div className="flex justify-between items-center">
         <div>
            <h4 className="font-bold text-[#203253]">{title}</h4>
            <span className="text-xs text-gray-400">Current Bid</span>
         </div>
         <div className="text-right">
            <div className="font-bold text-[#dc1e25]">{price}</div>
            <button className="text-[10px] font-bold text-blue-600 hover:underline">Place Bid</button>
         </div>
      </div>
   </div>
);


const StepNode = ({ num, title, icon, highlight }) => (
  <div className={`relative z-10 flex flex-col items-center p-6 rounded-3xl w-40 transition-all duration-500 ${highlight ? 'bg-[#dc1e25] shadow-2xl scale-110' : 'bg-[#1a2b4b] border border-white/10 hover:border-white/30'}`}>
     <div className={`mb-3 ${highlight ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
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


export default NFTPlatformsPage;
