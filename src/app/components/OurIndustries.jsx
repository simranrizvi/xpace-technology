import React from "react";
import {
  BsBank,
  BsHeartPulse,
  BsBook,
  BsGear,
  BsHouseDoor,
  BsShare,
} from "react-icons/bs";

const industries = [
  { id: 1, title: "Banking", icon: <BsBank className="w-8 h-8 md:w-10 md:h-10" /> },
  { id: 2, title: "Healthcare", icon: <BsHeartPulse className="w-8 h-8 md:w-10 md:h-10" /> },
  { id: 3, title: "Education", icon: <BsBook className="w-8 h-8 md:w-10 md:h-10" /> },
  { id: 4, title: "Manufacturing", icon: <BsGear className="w-8 h-8 md:w-10 md:h-10" /> },
  { id: 5, title: "Real Estate", icon: <BsHouseDoor className="w-8 h-8 md:w-10 md:h-10" /> },
  { id: 6, title: "Networking", icon: <BsShare className="w-8 h-8 md:w-10 md:h-10" /> },
];

export default function OurIndustries() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('homepage/pattern-16.png')" }}
      />

      <div className="container mx-auto px-4 lg:max-w-7xl relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12 md:mb-16">
          
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[11px] md:text-[13px]">
                Our Industries
              </span>
              <div className="w-10 h-[2px] bg-red-600" />
            </div>

            <h2 className="text-white font-extrabold leading-tight 
              text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
              We're Dedicated to <br /> Serve you All Time
            </h2>

            <p className="text-secondary text-[15px] md:text-lg max-w-xl">
              Our commitment to excellence extends across sectors like health,
              education, and banking.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative shadow-2xl">
              <figure className="overflow-hidden border border-white/10">
                <img
                  src="homepage/indus.jpg"
                  alt="Industries"
                  className="w-full h-[240px] md:h-[320px] lg:h-full object-cover"
                />
              </figure>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-[70%] bg-red-600" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {industries.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#2c2e33] border border-white/10 
              p-5 md:p-8 flex flex-col items-center justify-center
              transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Fill */}
              <div className="absolute inset-0 bg-red-600 origin-bottom scale-y-0 
              transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative z-10 text-red-600 mb-3 
              group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <h6 className="relative z-10 text-white text-[14px] md:text-[16px] 
              font-bold text-center group-hover:text-primary transition-colors">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
