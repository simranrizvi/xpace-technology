"use client";

import React, { useState } from "react";
import Button from "../../../components/ui/Button";

import {
  User,
  Mail,
  Phone,
  HelpCircle,
  Building,
  Paperclip,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [budget, setBudget] = useState(1000);

  return (
    <section className="bg-white py-16 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side - Form */}

        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="text-red-500 font-semibold uppercase text-sm tracking-wider">
              Send us email
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
              Feel free to write
            </h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-red-500">
                  <User size={18} />
                </span>

                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Email */}

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-red-500">
                  <Mail size={18} />
                </span>

                <input
                  type="email"
                  placeholder="E-mail*"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Contact Number */}

              <div className="flex gap-2">
                <select className="bg-[#f4f5f8] border border-gray-300 rounded px-2 focus:outline-none">
                  <option>+1</option>

                  <option>+92</option>
                </select>

                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Contact*"
                    required
                    className="w-full px-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Whatsapp */}

              <div className="flex gap-2">
                <select className="bg-[#f4f5f8] border border-gray-300 rounded px-2 focus:outline-none">
                  <option>+1</option>

                  <option>+92</option>
                </select>

                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="w-full px-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Identity Dropdown */}

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-red-500">
                  <HelpCircle size={18} />
                </span>

                <select className="w-full pl-10 pr-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none appearance-none text-gray-500">
                  <option>How do you identify yourself?</option>

                  <option>Developer</option>

                  <option>Business Owner</option>
                </select>
              </div>

              {/* Company Name */}

              <div className="relative">
                <span className="absolute left-3 top-3.5 text-red-500">
                  <Building size={18} />
                </span>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full pl-10 pr-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Budget Slider */}

              <div className="md:col-span-1 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-600 font-bold flex items-center gap-1">
                    <Building size={16} /> Project Budget:
                  </span>

                  <span className="text-[#0A2540] font-bold">${budget}</span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-2 bg-[#f4f5f8] border border-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* File Upload */}

              <div className="flex items-center gap-3">
                <label className="bg-[#D92D20] text-white px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:bg-red-700 transition">
                  <Paperclip size={16} /> Choose File
                </label>

                <span className="text-gray-400 text-sm italic">
                  Upload Document (Optional)
                </span>
              </div>
            </div>

            {/* Message Area */}

            <div className="relative mt-4">
              <span className="absolute left-3 top-4 text-red-500">
                <MessageSquare size={18} />
              </span>

              <textarea
                placeholder="Your Message*"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-[#f4f5f8] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <p className="text-gray-500 text-sm mt-2 italic">
              For every project, we sign NDA to ensure your ideas are protected
            </p>

            {/* Buttons */}

            <div className="flex gap-4 mt-6">
              <Button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded font-bold uppercase transition-all duration-500 tracking-widertransition hover:-translate-y-1"
              >
                Send Message
              </Button>

              <Button
                type="reset"
                className="bg-[#D92D20]! text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-red-700 transition duration-500 hover:-translate-y-1"
              >
                Reset
              </Button>
            </div>
          </form>
        </div>

        {/* Right Side - Info */}

        <div className="lg:col-span-5 lg:pl-10">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-0.5 bg-red-500"></div>

              <span className="text-red-500 font-semibold uppercase text-sm tracking-wider">
                Need any help?
              </span>
            </div>

            <h2 className="text-5xl font-bold text-primary mt-2">
              Get in touch with us
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-10">
            Experience innovation at XPACE TECHNOLOGIES, where we pioneer
            cutting-edge IT solutions across diverse sectors. Elevate your
            business with transformative digital experiences reach out to us and
            redefine possibilities today.
          </p>

          <div className="space-y-6">
            {/* Phone */}

            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-primary transition-all duration-300 flex items-center justify-center rounded group-hover:bg-red-600">
                <Phone className="text-white" size={28} />
              </div>

              <div>
                <h6 className="text-lg font-bold text-primary">
                  Have any question?
                </h6>

                <a
                  href="tel:+923172144424"
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  +92 317 2144424
                </a>
              </div>
            </div>

            {/* Email Box */}

            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-primary flex items-center justify-center rounded transition-all duration-300  group-hover:bg-red-600">
                <Mail className="text-white" size={28} />
              </div>

              <div>
                <h6 className="text-lg font-bold text-primary">Write email</h6>

                <a
                  href="mailto:info@xpacetechnologies.com"
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  info@xpacetechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
