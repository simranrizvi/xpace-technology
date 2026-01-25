import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
    <section className="bg-[#f8f9fa] py-12 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ===== Section Heading ===== */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 lg:mb-4">
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[13px]">
              Services we're offering
            </span>
            <div className="w-10 lg:w-12 h-0.5 bg-red-600"></div>
          </div>

          <h2 className="text-primary text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            High quality services <br /> that we stand behind
          </h2>
        </div>

        {/* ===== Services Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 group flex flex-col h-full shadow-sm hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="relative">
                <div className="relative h-44 sm:h-48 lg:h-52.5 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />

                  {/* Flash overlay */}
                  <div className="absolute inset-0 bg-[#ffffff4d] scale-x-0 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-500 origin-center pointer-events-none"></div>
                </div>

                {/* Icon Box */}
                <div className="absolute -bottom-2 left-5 sm:left-6 z-10">
                  <div className="relative">
                    <div className="bg-[#dc1f26] w-16 h-16 sm:w-20 sm:h-20 lg:w-22.5 lg:h-22.5 flex items-center justify-center shadow-lg z-20">
                      <img
                        src={service.icon}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 invert brightness-0"
                        alt="icon"
                      />
                    </div>

                    {/* Triangles */}
                    <div className="absolute bottom-0 -left-2 w-0 h-0 border-t-8 lg:border-t-10 border-t-[#b11a1f] border-l-8 lg:border-l-10 border-l-transparent"></div>
                    <div className="absolute bottom-0 -right-2 w-0 h-0 border-t-8 lg:border-t-10 border-t-[#b11a1f] border-r-8 lg:border-r-10 border-r-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 lg:p-8 pt-12 lg:pt-14 flex flex-col grow">
                <h3 className="text-[#0e2244] text-lg lg:text-xl font-bold mb-3 lg:mb-4 leading-snug group-hover:text-red-600 transition-colors">
                  <Link href={service.link}>{service.title}</Link>
                </h3>

                <p className="text-gray-500 text-[14px] lg:text-[15px] leading-[1.6] mb-6 lg:mb-8 grow">
                  {service.text}
                </p>

                {/* Read More */}
                <Link
                  href={service.link}
                  className="text-secondary hover:text-red-600 text-[11px] lg:text-[12px] font-black uppercase tracking-[2px] flex items-center group/btn w-fit"
                >
                  READ MORE
                  <span className="ml-2 text-red-600 transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:-translate-x-4">
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
