import React from "react";
import {
  LayoutGrid,
  CheckCircle2,
  Link2,
  Box,
  Shield,
} from "lucide-react";

export const InfrastructureSection = () => {
  const steps = [
    { id: "01", title: "Assess", icon: <CheckCircle2 size={20} /> },
    { id: "02", title: "Connect", icon: <Link2 size={20} /> },
    { id: "03", title: "Containerize", icon: <Box size={20} />, active: true },
    { id: "04", title: "Govern", icon: <Shield size={20} /> },
    { id: "05", title: "Manage", icon: <LayoutGrid size={20} /> },
  ];

  return (
    <section className="bg-[#111827] py-24 px-6 relative">
      <h2 className="text-white text-3xl font-bold text-center mb-20">
        Integration Framework
      </h2>

      <div className="max-w-6xl mx-auto relative flex justify-between items-center">
        {/* Center line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-700 -translate-y-1/2" />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`z-10 w-32 h-32 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer border border-gray-700/50
              ${
                step.active
                  ? "bg-red-600 scale-110"
                  : "bg-[#1a2333] hover:bg-red-600 hover:scale-110"
              }
            `}
          >
            <div className="text-white mb-2">{step.icon}</div>
            <span className="text-white font-bold text-sm">
              Step {step.id}
            </span>
            <span className="text-gray-300 text-[12px]">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
