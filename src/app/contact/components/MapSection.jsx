"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative w-full h-80 md:h-120">
      {/* 1. Google Map (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          title="Office Location"
          // Aapka naya iframe link yahan update kar diya gaya hai
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.183878210844!2d67.0411866903305!3d24.857568673484522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0d6b6fbb77%3A0x66892707beacda62!2sXPACE%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2s!4v1766755151153!5m2!1sen!2s"
          className="w-full h-full grayscale-[0.3] contrast-[1.1]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
