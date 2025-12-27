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
  { id: 1, title: "Banking", icon: <BsBank size={40} /> },
  { id: 2, title: "Healthcare", icon: <BsHeartPulse size={40} /> },
  { id: 3, title: "Education", icon: <BsBook size={40} /> },
  { id: 4, title: "Manufacturing", icon: <BsGear size={40} /> },
  { id: 5, title: "Real Estate", icon: <BsHouseDoor size={40} /> },
  { id: 6, title: "Networking", icon: <BsShare size={40} /> },
];

export default function OurIndustries() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      
      {/* --- Background Pattern Image (Fixed) --- */}
      <div
        className="absolute inset-0 pointer-events-none bg-repeat"
        style={{ 
          backgroundImage: "url('homepage/pattern-16.png')",
          backgroundSize: "cover", // Pattern ka size adjust karne ke liye
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      ></div>

      <div className="container mx-auto px-4 lg:max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          
          {/* --- Left Column --- */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[13px]">
                Our Industries
              </span>
              <div className="w-12 h-[2px] bg-red-600"></div>
            </div>

            <h2 className="!text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              We're Dedicated to <br /> Serve you All Time
            </h2>

            <p className="text-secondary text-lg leading-relaxed max-w-xl">
              Our commitment to excellence extends across sectors like health,
              education, and banking, ensuring tailored solutions and
              round-the-clock support.
            </p>
          </div>

          {/* --- Right Column --- */}
          <div className="w-full lg:w-1/2">
            <div className="relative group shadow-2xl">
              <figure className="m-0 overflow-hidden rounded-sm border border-white/10">
                <img
                  src="homepage/indus.jpg"
                  alt="Industries"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-[80%] bg-red-600 z-10"></div>
            </div>
          </div>
        </div>

        {/* --- Industry Feature Cards Row --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#2c2e33] border border-white/10 p-8 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg overflow-hidden"
            >
              {/* --- Red Fill Overlay --- */}
              <div className="absolute inset-0 bg-red-600 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-0"></div>

              {/* Icon Container */}
              <div className="relative z-10 text-red-600 mb-4 transition-all duration-500 group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h6 className="relative z-10 text-white group-hover:text-primary font-bold text-center text-[16px] transition-colors duration-500">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}