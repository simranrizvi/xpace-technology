import React from 'react';
import { Key, Smartphone, ShieldCheck, UserCheck, Globe, RefreshCw } from 'lucide-react';

const IdentitySuite = () => {
  const capabilities = [
    {
      title: "Single Sign-On (SSO)",
      desc: "One set of credentials for all apps. Log in once, gain access to Office 365, Salesforce, and Slack instantly.",
      icon: <Key size={20} />,
    },
    {
      title: "Adaptive MFA",
      desc: "Deploy multi-factor authentication (biometrics, push) that steps up security based on risk context.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Privileged Access (PAM)",
      desc: "Strict monitoring of admin users accessing critical servers. 'Keys to the kingdom' are never abused.",
      icon: <ShieldCheck size={20} />,
    },
    {
      title: "Identity Governance",
      desc: "Automated workflows for access requests and approvals, ensuring compliance with 'Least Privilege'.",
      icon: <UserCheck size={20} />,
    },
    {
      title: "Customer IAM (CIAM)",
      desc: "Secure, scalable login experiences for your end-customers (B2C) with social login integration.",
      icon: <Globe size={20} />,
    },
    {
      title: "Lifecycle Automation",
      desc: "Automatically provision accounts for new hires and de-provision instantly when they leave.",
      icon: <RefreshCw size={20} />,
    },
  ];

  return (
    <section className="bg-[#0b1120] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-red-600 text-[10px] font-black tracking-[0.2em] uppercase mb-2">
            Our Capabilities
          </h4>
          <h2 className="text-white text-4xl font-bold">Identity Suite</h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#151f33] px-6 py-4 rounded-lg border border-gray-800 transition-all duration-300 hover:border-gray-700 cursor-pointer"
            >
              {/* Red Left Border Accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-red-600"></div>

              {/* Icon Container with Hover Effect */}
              <div className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600">
                <div className="text-red-500 transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentitySuite;