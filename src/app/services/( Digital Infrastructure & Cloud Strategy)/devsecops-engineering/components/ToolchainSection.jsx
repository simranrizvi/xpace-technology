import React from 'react';

const ToolchainSection = () => {
  const capabilities = [
    {
      title: "Automated CI/CD",
      description: "Resilient pipelines (Jenkins, GitLab) that automate building, testing, and deploying code.",
      // SVG for CI/CD
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M20 11a8.1 8.1 0 0 0-15.5-2m-.5-4v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
    },
    {
      title: "IaC Management",
      description: "Managing infra as code (Terraform, Ansible) for consistency and rapid disaster recovery.",
      // SVG for Code
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
      highlight: true 
    },
    {
      title: "Security Testing",
      description: "Integrated SAST & DAST tools to scan code for vulnerabilities automatically on every commit.",
      // SVG for Shield
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    },
    {
      title: "Container Security",
      description: "Scanning Docker images and Kubernetes clusters to ensure no vulnerable components go live.",
      // SVG for Box
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
    },
    {
      title: "Compliance as Code",
      description: "Automating regulatory checks (GDPR, PCI) within the pipeline to prevent non-compliant builds.",
      // SVG for Check-circle
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time visibility into application health and security posture post-deployment.",
      // SVG for Activity/Pulse
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    }
  ];

  return (
    <section className="bg-[#0b1120] py-20 px-6 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h4 className="text-red-500 uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Our Capabilities
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold ">
            The DevSecOps Toolchain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl bg-[#1a2333] transition-all duration-300 group
                ${item.highlight ? 'border-2 border-red-600/50' : 'border border-slate-800'}`}
            >
              {/* Icon Container with White Icon Color */}
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/40 text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-100">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolchainSection;