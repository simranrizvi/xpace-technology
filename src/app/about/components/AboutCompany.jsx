"use client";

import React from "react";
import Button from "./../../../components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function AboutCompany() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT COLUMN: IMAGE BOX --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-125">
              {/* 1. Top-Left Dots Pattern */}
              <div
                className="absolute -left-8 top-12 w-16 h-24 z-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(#1a2b4e 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
              ></div>

              {/* 2. Top-Right Red Border Frame */}
              <div className="absolute -top-6 -right-6 w-48 h-48 border-[3px] border-red-600 z-0"></div>

              {/* 3. Main Image Container */}
              <div className="relative z-10 ">
                <img
                  src="about/about-12.jpg"
                  alt="Team working"
                  className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />

                {/* --- Experience Box Group --- */}
                <div className="absolute bottom-0 left-0 w-50 h-50 flex items-end justify-start">
                  {/* WHITE BOX (Background - 20px Larger) */}
                  <div
                    className="absolute bottom-0 left-0 bg-white w-45 h-45 z-10"
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
                  ></div>

                  {/* RED BOX (Foreground) */}
                  <div
                    className="absolute bottom-0 left-0 bg-red-600 text-white p-6 md:p-8 pl-2 md:pl-4 pb-2 md:pb-4 flex flex-col items-start justify-end w-40 h-40 z-20"
                    style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
                  >
                    <div className="relative z-10 mr-16">
                      <strong className="text-2xl md:text-3xl font-black block leading-none">
                        5+
                      </strong>
                      <span className="text-xs md:text-sm font-bold uppercase leading-tight mt-1 block">
                        Years <br /> Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT BOX --- */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col space-y-6">
              {/* Section Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
                    About Our Company
                  </span>
                  <div className="w-10 h-0.5 bg-red-600"></div>
                </div>
                <h2 className="text-primary text-4xl md:text-5xl font-extrabold leading-tight">
                  Introduction
                </h2>
              </div>

              {/* Description Text */}
              <div className="text-secondary leading-relaxed text-lg space-y-4">
                <p>
                  Founded in 2021, XPACE TECHNOLOGIES PVT LTD stands at the
                  forefront of reshaping the landscape of advanced IT solutions.
                  Our expertise spans a spectrum of services, specializing in IT
                  consulting, cloud solutions, AI, IoT, ERP, HRMS, CRM, and web
                  development.
                </p>
                <p>
                  At XPACE TECHNOLOGIES, our commitment extends far beyond
                  conventional solutions. We champion the infusion of innovation
                  into every facet of our operations, aiming to steer businesses
                  towards unparalleled success by leveraging cutting-edge
                  technological advancements.
                </p>
              </div>

              {/* Button & Phone Info */}
              <div className="flex flex-wrap items-center gap-8 pt-6">
                <Button className="w-50 h-15 text-white uppercase tracking-widest text-sm shadow-lg">
                  Discover More
                </Button>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-red-600 shadow-inner">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block font-medium">
                      Call Anytime
                    </span>
                    <a
                      href="tel:+923172144424"
                      className="text-[#1a2b4e] font-bold text-lg hover:text-red-600 transition-colors"
                    >
                      +92 317 2144424
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
