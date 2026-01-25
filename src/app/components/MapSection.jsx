"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px]">
      {/* 1. Google Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.183878210844!2d67.0411866903305!3d24.857568673484522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0d6b6fbb77%3A0x66892707beacda62!2sXPACE%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2s!4v1766755151153!5m2!1sen!2s"
          className="w-full h-full grayscale-[0.3] contrast-[1.1]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 2. Floating Branch Card */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container mx-auto px-4 lg:max-w-7xl">
          <div className="flex justify-center">
            <div className="group relative bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-lg max-w-xl w-full transition-all duration-500 ease-in-out hover:bg-red-600 cursor-default">
              
              {/* Title */}
              <h5 className="text-[#1a2b4e] text-2xl font-bold mb-6 transition-colors duration-500 group-hover:text-white">
                Pakistan (Head Office)
              </h5>

              {/* Info List */}
              <ul className="space-y-4">
                {/* Email */}
                <li className="flex items-center gap-4">
                  <div className="text-red-600 transition-colors duration-500 group-hover:text-white">
                    <FaEnvelope size={18} />
                  </div>
                  <a
                    href="mailto:info@xpacetechnologies.com"
                    className="text-gray-600 text-lg transition-colors duration-500 group-hover:text-white break-all"
                  >
                    info@xpacetechnologies.com
                  </a>
                </li>

                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-red-600 transition-colors duration-500 group-hover:text-white">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-500 group-hover:text-white">
                    Office No. 406, 4th Floor, Ceasers Tower,{" "}
                    <br className="hidden md:block" />
                    Shahrah E Faisal, Karachi, Pakistan
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
