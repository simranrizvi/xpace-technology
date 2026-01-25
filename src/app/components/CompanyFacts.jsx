import React from "react";
import { BsGraphUp, BsHeadset, BsPeople, BsLightbulb } from "react-icons/bs";

const facts = [
  { id: 1, count: "40+", title: "PROJECT COMPLETED", icon: <BsGraphUp size={30} /> },
  { id: 2, count: "50+", title: "IT SPECIALISTS", icon: <BsHeadset size={30} /> },
  { id: 3, count: "110+", title: "SATISFIED CLIENTS", icon: <BsPeople size={30} /> },
  { id: 4, count: "25", title: "SMART SOLUTIONS", icon: <BsLightbulb size={30} /> },
];

export default function CompanyFacts() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-red-600"></div>
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[13px]">
              Our Satisfaction
            </span>
            <div className="w-12 h-[2px] bg-red-600"></div>
          </div>
          <h2 className="text-primary text-2xl md:text-5xl font-extrabold leading-tight">
            Some of Our Company Real Facts
          </h2>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group relative flex flex-col items-center transition-all"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 bg-[#e6e8ed] flex items-center justify-center relative z-10 transition-all duration-500 rounded-none group-hover:rounded-full group-hover:bg-primary text-primary group-hover:text-red-600 shadow-md mb-[-40px]">
                {fact.icon}
              </div>

              {/* White Card */}
              <div className="w-full pt-20 pb-10 px-6 shadow-lg border border-gray-100 flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-2 bg-white z-1 rounded-lg">
                <span className="text-primary text-4xl md:text-5xl font-black mb-4">
                  {fact.count}
                </span>

                <div className="bg-red-600 text-white text-[12px] font-bold py-2 px-6 uppercase tracking-wider rounded-md">
                  {fact.title}
                </div>
              </div>

              {/* Decorative Background Pattern */}
              <div
                className="absolute inset-0 pointer-events-none bg-repeat z-0 opacity-10"
                style={{
                  backgroundImage: "url('homepage/pattern-1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
