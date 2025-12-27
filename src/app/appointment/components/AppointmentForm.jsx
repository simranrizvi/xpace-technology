"use client";

import React, { useRef } from "react"; // 1. useRef import kiya
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  MessageSquare,
  CalendarCheck,
  RotateCcw,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function AppointmentForm() {
  // 2. Form ko target karne ke liye ref banaya
  const formRef = useRef(null);

  const inputStyle =
    "w-full pl-12 pr-4 py-4 bg-[#f4f7f9] border border-transparent text-[#212529] focus:bg-white focus:border-[#86b7fe] focus:ring-4 focus:ring-[#0d6efd]/25 transition-all outline-none";

  // 3. Reset function jo sab kuch clear kar dega
  const handleReset = (e) => {
    e.preventDefault(); // Default behavior ko rokne ke liye
    if (formRef.current) {
      formRef.current.reset(); // Ye line form ki saari fields ko khali kar degi
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
              Send us email
            </span>
            <div className="w-10 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-[#0b1d3a] max-w-[80%]">
            Make an Appointment with XPACE TECHNOLOGIES
          </h2>
        </div>

        {/* 4. Form tag mein ref={formRef} add kiya */}
        <form ref={formRef} id="appointment_form" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">First Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  name="first_name"
                  type="text"
                  placeholder="Enter First Name"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Last Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Enter Last Name"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">Phone</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone size={18} />
                </span>
                <input
                  name="phone"
                  type="text"
                  placeholder="Enter Phone"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">
                What date works best for you?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Calendar size={18} />
                </span>
                <input
                  name="appointment_date"
                  type="date"
                  className={inputStyle}
                  required
                  min="2025-12-26"
                />
              </div>
            </div>

            {/* Time Picker */}
            <div className="space-y-2">
              <label className="text-gray-600 font-medium">
                What time works best for you?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Clock size={18} />
                </span>
                <input
                  name="appointment_time"
                  type="time"
                  className={inputStyle}
                  required
                />
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-2">
            <label className="text-gray-600 font-medium">
              Reason For Appointment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-6 text-gray-400">
                <MessageSquare size={18} />
              </span>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Message"
                className={`${inputStyle} resize-none`}
                required
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              type="submit"
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors duration-300"
            >
              <CalendarCheck size={20} className="mr-2" />
              Book Appointment
            </Button>

            {/* 5. Reset button par onClick handleReset lagaya */}
            <Button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors duration-300"
            >
              <RotateCcw size={20} className="mr-2" />
              Reset
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
