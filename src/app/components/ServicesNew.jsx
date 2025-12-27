import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react"; // Icon import kiya

const services = [
  {
    title: "IT Consulting",
    text: "Strategic tech guidance for efficient business growth and innovation.",
    image: "homepage/service 11.jpg",
    icon: "homepage/favicon/consultant.png",
    link: "it_consulting",
  },
  {
    title: "Software Development",
    text: "Tailored software solutions meeting your unique business needs.",
    image: "homepage/service 12.jpg",
    icon: "homepage/favicon/graph.png",
    link: "software_development",
  },
  {
    title: "Web Development",
    text: "Building engaging websites that mirror your brand's essence.",
    image: "homepage/service 13.png",
    icon: "homepage/favicon/coding.png",
    link: "website_development",
  },
  {
    title: "AI Solutions",
    text: "Efficient innovations powered by AI for enhanced productivity.",
    image: "homepage/service 14.png",
    icon: "homepage/favicon/ai-brain.png",
    link: "ai_solution",
  },
  {
    title: "IoT Solutions",
    text: "Connecting devices, optimizing operations for transformation.",
    image: "homepage/service 15.png",
    icon: "homepage/favicon/iot.png",
    link: "iot_solutions",
  },
  {
    title: "ERP Solutions",
    text: "Streamlined business operations through integrated solutions.",
    image: "homepage/service 16.png",
    icon: "homepage/favicon/erp.png",
    link: "erp_solutions",
  },
  {
    title: "Cybersecurity Solutions",
    text: "Protect your digital assets with our robust cybersecurity solutions.",
    image: "homepage/service 17.png",
    icon: "homepage/favicon/security.png",
    link: "cybersecurity_solutions",
  },
  {
    title: "Talent Incubation",
    text: "Nurturing talent for industry readiness and innovative solutions.",
    image: "homepage/service 18.png",
    icon: "homepage/favicon/user (1).png",
    link: "comingsoon",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4">
        {/* --- Section Top Title --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[13px]">
              Services we're offering
            </span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-[#0e2244] text-4xl md:text-5xl font-extrabold leading-tight">
            High quality services <br /> that we stand behind
          </h2>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 group flex flex-col h-full shadow-sm hover:shadow-md transition-all"
            >
              {/* 1. Image Section */}
              <div className="relative">
                <div className="relative h-52.5 w-full overflow-hidden">
                  {/* Main Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />

                  {/* Center Flash Layer */}
                  <div
                    className="absolute top-0 left-0 h-full w-full bg-[#ffffff4d] 
                      pointer-events-none
                      origin-center 
                      scale-x-0 
                      opacity-100 
                      
                      /* Hover States */
                      group-hover:scale-x-100 
                      group-hover:opacity-0 
                      
                      /* Transition Logic */
                      transition-all duration-500"
                  ></div>
                </div>

                {/* 2. Red Icon Box Wrapper */}
                <div className="absolute -bottom-2.5 left-6.25 z-10">
                  <div className="relative">
                    <div className="bg-[#dc1f26] w-22.5 h-22.5 flex items-center justify-center shadow-lg relative z-20">
                      <img
                        src={service.icon}
                        className="w-14 h-14 invert brightness-0"
                        alt="icon"
                      />
                    </div>
                    {/* Left Triangle */}
                    <div className="absolute bottom-0 -left-2.5 w-0 h-0 border-t-10 border-t-[#b11a1f] border-l-10 border-l-transparent z-10"></div>
                    {/* Right Triangle */}
                    <div className="absolute bottom-0 -right-2.5 w-0 h-0 border-t-10 border-t-[#b11a1f] border-r-10 border-r-transparent z-10"></div>
                  </div>
                </div>
              </div>

              {/* 3. Content Section */}
              <div className="p-8 pt-14 flex flex-col grow">
                <h3 className="text-[#0e2244] text-xl font-bold mb-4 leading-snug group-hover:text-red-600 transition-colors">
                  <Link href={service.link}>{service.title}</Link>
                </h3>

                <p className="text-gray-500 text-[15px] leading-[1.6] mb-8 grow">
                  {service.text}
                </p>

                {/* --- Read More Button with Animation --- */}
                <Link
                  href={service.link}
                  className="relative text-secondary hover:text-red-600 text-[12px] font-black uppercase tracking-[2px] flex items-center group/btn w-fit"
                >
                  <span className="relative z-10 transition-colors duration-300">
                    READ MORE
                  </span>

                  {/* Arrow Icon Animation Logic */}
                  <span
                    className="ml-2 transform transition-all duration-300 ease-in-out 
                    opacity-100 translate-x-0 text-red-600
                    group-hover/btn:opacity-0 group-hover/btn:-translate-x-5"
                  >
                    <MoveRight size={18} strokeWidth={3} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
