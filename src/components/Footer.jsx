import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white pt-20 overflow-hidden font-sans">
      {/* Background Overlay (Dotted Map jaisa effect dene ke liye) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/2.jpg')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="w-48">
              <img
                src="/xpace white logo.png"
                alt="XPACE Logo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              XPACE TECHNOLOGIES PVT LTD, established in 2021, pioneers
              cutting-edge IT solutions across diverse industries, crafting
              transformative digital experiences.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: <Twitter size={18} />,
                  url: "https://twitter.com/xpacetechnology",
                },
                {
                  icon: <Facebook size={18} />,
                  url: "https://facebook.com/xpacetechno1ogies/",
                },
                {
                  icon: <Linkedin size={18} />,
                  url: "https://www.linkedin.com/company/xpacetechnologies",
                },
                {
                  icon: <Instagram size={18} />,
                  url: "https://www.instagram.com/xpacetechnologies/",
                },
                {
                  icon: <Youtube size={18} />,
                  url: "https://www.youtube.com/@xpacetechnologies",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="bg-[#2c2e33] hover:bg-red-600 p-2 rounded-full transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Explore
              <span className="block w-full h-0.5 bg-gray-600 mt-2"></span>
              <span className="block w-10 h-0.5 bg-red-600 -mt-0.5"></span>
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/about" className="hover:text-red-500 transition">
                  About Company
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-red-500 transition">
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/appointment"
                  className="hover:text-red-500 transition"
                >
                  Collaboration
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-red-500 transition">
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/appointment"
                  className="hover:text-red-500 transition"
                >
                  Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Contact
              <span className="block w-full h-0.5 bg-gray-600 mt-2"></span>
              <span className="block w-10 h-0.5 bg-red-600 -mt-0.5"></span>
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="leading-relaxed">
                Office No. 406, 4th floor, Ceasers tower, Shahrah E Faisal{" "}
                <br />
                Karachi, Pakistan
              </p>
              <div className="flex items-center gap-3 group text-white">
                <Mail size={16} className="text-red-600" />
                <a
                  href="mailto:info@xpacetechnologies.com"
                  className="group-hover:text-red-500 transition"
                >
                  info@xpacetechnologies.com
                </a>
              </div>
              <div className="flex items-center gap-3 group text-white">
                <Phone size={16} className="text-red-600" />
                <a
                  href="tel:+923172144424"
                  className="group-hover:text-red-500 transition"
                >
                  +92 317 2144424
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Our Location
              <span className="block w-full h-0.5 bg-gray-600 mt-2"></span>
              <span className="block w-10 h-0.5 bg-red-600 -mt-0.5"></span>
            </h3>
            <div className="relative mt-4">
              <img
                src="/dotted-map.png"
                alt="World Map Location"
                className="w-full opacity-50 filter brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t bg-[#2c2e33] border-gray-800 mt-16 py-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
          <p>
            Copyright © {currentYear} by{" "}
            <a
              href="https://xpacetechnologies.com"
              className="text-white hover:text-red-500 transition ml-0.5"
            >
              XPACE TECHNOLOGIES Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
