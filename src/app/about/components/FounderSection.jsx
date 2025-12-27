"use client";

import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function FounderSection() {
  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      id="raheel_text"
    >
      {/* Background Decorative Tech Pattern (Right Side) */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/icons/circuit-pattern.png')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* --- LEFT COLUMN: IMAGE WITH PERFECT SHAPE MATCH --- */}
          <div className="w-full lg:w-6/12 relative flex justify-center lg:justify-start">
            <div className="relative w-full pl-20 pt-10">
              {/* 1. Large Dark Blue Vertical Shape (Half Rounded) */}
              <div className="absolute top-0 left-0 w-[40%] h-full bg-primary -z-10"></div>

              {/* 2. The White Circular Cutout (The key design element) */}
              <div className="absolute top-[6%] left-[20%] w-80 h-80 bg-white rounded-full -z-10"></div>

              {/* 3. Founder Image (Positioned to overlap shapes) */}
              <figure className="relative z-10 pt-10">
                <img
                  src="about/men.png"
                  alt="Muhammad Raheel - CEO"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </figure>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT (SAME AS BEFORE) --- */}
          <div className="w-full lg:w-6/12">
            <div className="flex flex-col space-y-4">
              {/* Sub Title with Line */}
              <div className="flex items-center gap-3">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
                  Meet Our Founder
                </span>
                <div className="w-10 h-[2px] bg-red-600"></div>
              </div>

              {/* Name & Title */}
              <div className="space-y-1">
                <h2 className="text-[#1a2b4e] text-4xl md:text-5xl font-extrabold">
                  Muhammad Raheel
                </h2>
                <p className="text-gray-500 font-semibold text-lg italic">
                  Director & CEO
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 py-2">
                {[
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://www.linkedin.com/in/muhammadraheel42/",
                  },
                  {
                    icon: <FaFacebookF />,
                    link: "https://www.facebook.com/mraheelnasim",
                  },
                  { icon: <FaWhatsapp />, link: "https://wa.me/+923172144424" },
                  {
                    icon: <FaEnvelope />,
                    link: "mailto:info@xpacetechnologies.com",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a2b4e] text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Biography Text */}
              <div className="text-gray-500 leading-relaxed text-lg space-y-6 pt-4 text-justify">
                <p>
                  XPACE TECHNOLOGIES PVT LTD was founded by Muhammad Raheel, a
                  seasoned entrepreneur wielding profound expertise in the IT
                  sector. Raheel's journey encompasses an astute understanding
                  of successful business launches and effective management,
                  rooted in superior team leadership and service excellence.
                </p>
                <p>
                  Beyond conventional IT paradigms, Raheel perceives technology
                  as more than just a tool—it's the seamless integration of
                  devices across networks, embodying not only innovation but
                  also a passionately advocated way of life.
                </p>
                <p>
                  Raheel's fervent passion lies in cultivating dream teams,
                  fostering growth, and facilitating global scaling for aspiring
                  startups. Leveraging his extensive professional network, he
                  empowers startups to materialize their aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
