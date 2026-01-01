"use client";
import React, { useEffect, useRef } from "react";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaShieldAlt, 
  FaChartLine, 
  FaLayerGroup,
  FaPuzzlePiece,
  FaCloud,
  FaIndustry,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

const SolutionArchitecturePage = () => {
  // Scroll animation helper
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return [ref, isVisible];
  };

  return (
    <div className="bg-white">
      {/* ===============================
          1️⃣ HERO SECTION - VIP Design
      =============================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a3556] via-[#0d2847] to-[#1a3556]">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Circles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#dc1e25] rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#dc1e25] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Strategic Solution Architecture Planning for <span className="text-[#dc1e25]">Sustainable Growth</span>
            </h1>
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-3xl text-white/90 mb-8 font-light max-w-4xl mx-auto">
              We bridge the gap between business vision and technical reality, designing robust roadmaps for scalable, future-proof enterprise systems.
            </h2>
          </div>

          <div className="animate-fadeInUp max-w-4xl mx-auto mb-12" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
              In a rapidly evolving digital landscape, technology must drive business goals, not hinder them. XPACE Technologies provides comprehensive Solution Architecture Planning to transform complex business requirements into clear, actionable technical blueprints. We ensure your technology stack is optimized for performance, security, and long-term scalability before a single line of code is written.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="px-10 py-4 bg-[#dc1e25] text-white rounded-full font-semibold text-lg hover:bg-[#b81820] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Request a Strategy Consultation
            </button>
            <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#1a3556] transform hover:-translate-y-1 transition-all duration-300">
              View Our Case Studies
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===============================
          2️⃣ SERVICE OVERVIEW SECTION
      =============================== */}
      <Section title="Turning Strategy into Technical Reality" bgColor="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-[#818388] leading-relaxed">
              Solution Architecture Planning is the foundational step in any successful digital initiative. It is the strategic process of defining how software, infrastructure, and data will interact to solve specific business problems. Without a solid architectural plan, organizations risk creating siloed systems, incurring high technical debt, and facing costly scalability issues.
            </p>
            <p className="text-lg text-[#818388] leading-relaxed">
              At XPACE Technologies, we design architectures that are not just technically sound but commercially viable. We assess your current IT landscape, identify gaps, and design a holistic solution that aligns with your budget, timeline, and strategic objectives. Whether you are launching a new product or modernizing legacy systems, our planning ensures your technology foundation is solid.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a3556] to-[#0d2847] p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Business Strategy</h3>
                  <p className="text-white/70">Vision & Goals</p>
                </div>
                <FaLightbulb className="text-[#dc1e25] text-5xl" />
              </div>
              <div className="flex justify-center my-8">
                <div className="w-full h-1 bg-[#dc1e25] rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <FaRocket className="text-[#dc1e25] text-5xl" />
                <div className="text-white text-right">
                  <h3 className="text-2xl font-bold mb-2">Technical Execution</h3>
                  <p className="text-white/70">Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===============================
          3️⃣ CORE FEATURES & CAPABILITIES
      =============================== */}
      <Section title="What We Deliver" bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaLayerGroup />}
            title="Strategic Technology Selection"
            description="We evaluate and select the optimal tools, frameworks, and platforms (Cloud, SaaS, Open Source) that best fit your specific business use case and budget."
            delay={0}
          />
          <FeatureCard 
            icon={<FaPuzzlePiece />}
            title="Integration Strategy & APIs"
            description="We design seamless integration patterns to ensure your new solutions talk perfectly with your existing ERP, CRM, and third-party systems."
            delay={0.1}
          />
          <FeatureCard 
            icon={<FaChartLine />}
            title="Scalability & Performance Modeling"
            description="We architect systems designed to handle growth, planning for high availability and load balancing from day one."
            delay={0.2}
          />
          <FeatureCard 
            icon={<FaShieldAlt />}
            title="Security-by-Design"
            description="We embed security protocols, identity management, and compliance standards directly into the architectural blueprint."
            delay={0.3}
          />
          <FeatureCard 
            icon={<FaRocket />}
            title="Technical Roadmap Development"
            description="We provide a phased implementation plan that prioritizes critical features and minimizes business disruption."
            delay={0.4}
          />
          <FeatureCard 
            icon={<FaCloud />}
            title="Cloud-Native Design"
            description="We architect solutions that leverage the full potential of modern cloud platforms for maximum efficiency and scalability."
            delay={0.5}
          />
        </div>
      </Section>

      {/* ===============================
          4️⃣ BUSINESS BENEFITS
      =============================== */}
      <Section title="The Value of Strategic Architecture" bgColor="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <BenefitCard 
            title="Reduced Total Cost of Ownership (TCO)"
            description="By selecting the right technologies and avoiding redundancy, we prevent costly rework and reduce long-term maintenance costs."
            stat="40%"
            statLabel="Cost Reduction"
          />
          <BenefitCard 
            title="Accelerated Time-to-Market"
            description="A clear architectural roadmap eliminates guesswork for developers, significantly speeding up the development and deployment cycles."
            stat="3x"
            statLabel="Faster Delivery"
          />
          <BenefitCard 
            title="Risk Mitigation"
            description="We identify potential technical bottlenecks and security vulnerabilities early in the planning phase, reducing project risk."
            stat="85%"
            statLabel="Risk Reduction"
          />
          <BenefitCard 
            title="Business Agility"
            description="Our modular architecture designs allow your business to pivot, adapt, and integrate new features quickly as market demands change."
            stat="2x"
            statLabel="Faster Adaptation"
          />
        </div>
      </Section>

      {/* ===============================
          5️⃣ USE CASES & INDUSTRY APPLICATIONS
      =============================== */}
      <Section title="Where We Apply This Expertise" bgColor="bg-gradient-to-br from-[#1a3556] to-[#0d2847]" textColor="text-white">
        <div className="grid md:grid-cols-2 gap-8">
          <UseCaseCard 
            title="Enterprise Digital Transformation"
            description="Helping large organizations migrate from monolithic legacy systems to agile, modern microservices architectures."
            icon={<FaIndustry />}
          />
          <UseCaseCard 
            title="Mergers & Acquisitions (M&A)"
            description="Planning the integration of disparate IT systems following a corporate merger to ensure data continuity and operational efficiency."
            icon={<FaUsers />}
          />
          <UseCaseCard 
            title="SaaS Product Development"
            description="Designing the multi-tenant architecture for startups and enterprises launching scalable software products."
            icon={<FaCloud />}
          />
          <UseCaseCard 
            title="Cloud Migration Strategy"
            description="Creating the blueprint for moving on-premise infrastructure to AWS, Azure, or Google Cloud with minimal downtime."
            icon={<FaRocket />}
          />
        </div>
      </Section>

      {/* ===============================
          6️⃣ OUR DELIVERY APPROACH
      =============================== */}
      <Section title="Our Architecture Planning Framework" bgColor="bg-white">
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-6">
            <ProcessStep 
              number="01"
              title="Discovery & Assessment"
              description="We conduct deep-dive workshops with stakeholders to understand business goals, constraints, and current technical capabilities."
            />
            <ProcessStep 
              number="02"
              title="Gap Analysis"
              description="We identify the disconnect between your current state and your desired future state."
            />
            <ProcessStep 
              number="03"
              title="Drafting the Blueprint"
              description="Our architects create high-level diagrams, data flow models, and technology specifications."
            />
            <ProcessStep 
              number="04"
              title="Validation & Review"
              description="We stress-test the proposed architecture against real-world scenarios, security standards, and budget limits."
            />
            <ProcessStep 
              number="05"
              title="Final Roadmap Handoff"
              description="You receive a comprehensive architecture document (SAD) ready for your development team to execute."
            />
          </div>
        </div>
      </Section>

      {/* ===============================
          7️⃣ WHY CHOOSE US
      =============================== */}
      <Section title="Why XPACE for Architecture Planning?" bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyChooseCard 
            title="Vendor-Agnostic Approach"
            description="We recommend solutions that are best for you, not what is convenient for us. We are not tied to a single vendor."
          />
          <WhyChooseCard 
            title="Business-First Mindset"
            description="Our architects speak both 'code' and 'business,' ensuring technology serves the bottom line."
          />
          <WhyChooseCard 
            title="Deep Industry Experience"
            description="We bring architectural best practices from FinTech, Healthcare, and Enterprise sectors to your project."
          />
          <WhyChooseCard 
            title="Holistic Perspective"
            description="We don't just look at the software; we consider infrastructure, security, data, and human processes."
          />
        </div>
      </Section>

      {/* ===============================
          8️⃣ FUTURE-READY & INNOVATION FOCUS
      =============================== */}
      <Section title="Architecting for Tomorrow" bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-[#818388] leading-relaxed mb-12">
            At XPACE, we believe in building for the future. Our Solution Architecture Planning doesn't just solve today's problems; it prepares you for tomorrow's opportunities. We incorporate principles of composable enterprise design and modularity, ensuring that as technologies like AI, Blockchain, and Edge Computing evolve, your system is ready to integrate them without a complete rebuild.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <InnovationCard title="AI-Ready" icon="🤖" />
            <InnovationCard title="Blockchain-Compatible" icon="⛓️" />
            <InnovationCard title="Edge Computing" icon="⚡" />
          </div>
        </div>
      </Section>

      {/* ===============================
          9️⃣ CALL TO ACTION - VIP Section
      =============================== */}
      <section className="relative py-24 bg-gradient-to-r from-[#dc1e25] to-[#b81820] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build on a Solid Foundation
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Don't leave your technology success to chance. Partner with XPACE Technologies to design a roadmap that guarantees scalability, security, and success.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="px-12 py-5 bg-white text-[#dc1e25] rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              Request a Strategy Consultation
            </button>
            <button className="px-12 py-5 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-[#dc1e25] transform hover:-translate-y-1 transition-all duration-300">
              View Our Case Studies
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children, bgColor = "bg-white", textColor = "text-[#1a3556]" }) => {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold ${textColor} text-center mb-16`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-[#dc1e25] text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-[#1a3556] mb-4">{title}</h3>
      <p className="text-[#818388] leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitCard = ({ title, description, stat, statLabel }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#1a3556] flex-1">{title}</h3>
        <div className="text-right ml-4">
          <div className="text-4xl font-bold text-[#dc1e25]">{stat}</div>
          <div className="text-sm text-[#818388]">{statLabel}</div>
        </div>
      </div>
      <p className="text-[#818388] leading-relaxed">{description}</p>
    </div>
  );
};

const UseCaseCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="text-[#dc1e25] text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-[#1a3556] to-[#0d2847] p-6 rounded-2xl h-full hover:scale-105 transition-transform duration-300">
        <div className="text-[#dc1e25] text-4xl font-bold mb-4">{number}</div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#dc1e25]">
      <div className="w-12 h-12 bg-[#dc1e25] rounded-full flex items-center justify-center mb-4">
        <FaCheckCircle className="text-white text-2xl" />
      </div>
      <h4 className="text-xl font-bold text-[#1a3556] mb-3">{title}</h4>
      <p className="text-[#818388] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const InnovationCard = ({ title, icon }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
      <div className="text-6xl mb-4">{icon}</div>
      <h4 className="text-2xl font-bold text-[#1a3556]">{title}</h4>
    </div>
  );
};

export default SolutionArchitecturePage;