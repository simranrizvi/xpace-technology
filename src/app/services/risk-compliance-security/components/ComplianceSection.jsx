import React from 'react';
import { CreditCard, Stethoscope, Cloud, Landmark } from 'lucide-react'; // Using Lucide for icons

const cards = [
  {
    title: "Payment Processing",
    tag: "PCI-DSS",
    tagColor: "bg-blue-600",
    description: "Segmenting networks to isolate Cardholder Data Environments.",
    Icon: CreditCard,
  },
  {
    title: "Healthcare",
    tag: "HIPAA",
    tagColor: "bg-green-600",
    description: "Strict access controls on workstations for authorized doctors.",
    Icon: Stethoscope,
  },
  {
    title: "Cloud Enterprise",
    tag: "SOC 2",
    tagColor: "bg-purple-600",
    description: "Ensuring developers cannot spin up non-compliant servers.",
    Icon: Cloud,
  },
  {
    title: "Government",
    tag: "CMMC / NIST",
    tagColor: "bg-gray-700",
    description: "Hardening systems to meet strict maturity models for defense contracts.",
    Icon: Landmark,
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-22">
          Where We Apply This
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative px-8 py-4 border-2 border-slate-100 rounded-xl transition-all duration-300 hover:border-red-500 cursor-pointer shadow-sm"
            >
              {/* Badge */}
              <div className={`absolute top-0 right-0 ${card.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg`}>
                {card.tag}
              </div>

              {/* Icon - Changes to red on group hover */}
              <div className="mb-6">
                <card.Icon className="w-8 h-8 text-slate-700 transition-colors duration-300 group-hover:text-red-500" />
              </div>

              {/* Text Content */}
              <h3 className="text-md font-bold text-slate-800 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}