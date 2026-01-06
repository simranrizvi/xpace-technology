import React from 'react';

const FutureProofSection = () => {
  // Online placeholder images from Unsplash (Technology & Circuit theme)
  const circuitImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000";

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        
        {/* Left Side: Image and Floating Quote */}
        <div className="relative group">
          {/* Main Image Container */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-[1.01]">
            <img 
              src={circuitImage} 
              alt="Legacy System Circuit" 
              className="w-full h-[380px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </div>

          {/* Floating Dark Quote Box */}
          <div className="absolute -bottom-9 -right-4 md:right-5 bg-[#1e293b] text-white p-5 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] max-w-[300px] z-10 border-t-4 border-red-600">
            <p className="text-xl font-bold leading-tight italic">
              "If it ain't broke, don't fix it" is a dangerous strategy.
            </p>
            <div className="w-16 h-1.5 bg-red-600 mt-5"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:pl-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
            Future-Proofing Your <span className="text-red-600">Heritage</span>
          </h2>

          <div className="space-y-4 text-secondary text-sm md:text-base leading-relaxed">
            <p>
              Many organizations rely on systems built decades ago. While stable, 
              these systems are vulnerable anchors. XPACE provides a safe path out of 
              the "legacy trap."
            </p>
            <p>
              We don't just patch old code; we reimagine it. Whether it's moving a mainframe to 
              the cloud or wrapping legacy databases with modern APIs, we ensure your core 
              technology is ready for the next decade.
            </p>
          </div>

          {/* Bottom Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            
            {/* Card 1: Eliminate Risk */}
            <div className="flex flex-col gap-2 p-5 py-3 bg-slate-50 border-l-[4px] border-red-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary text-xl ">Eliminate Risk</h4>
              <p className="text-secondary  text-sm leading-snug">Close security gaps in old protocols.</p>
            </div>

            {/* Card 2: Unlock Data */}
            <div className="flex flex-col gap-2 p-5 py-3 bg-slate-50 border-l-[4px] border-blue-600 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-primary text-xl ">Unlock Data</h4>
              <p className="text-slate-500 text-base leading-snug">Free data for AI & BI analytics.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FutureProofSection;