
"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Code, Server, Database, Cloud,
  Cpu, Layers, Smartphone, Globe,
  Shield, Zap, Terminal, Box,
  Lock, Activity, GitBranch, Share2
} from 'lucide-react';





/* --- MAIN CONTENT --- */
const TechnologyStackPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
 
  // Expanded Categories
  const categories = [
    'All', 'Frontend', 'Backend', 'Mobile',
    'Database', 'Cloud & DevOps', 'AI & ML',
    'Cybersecurity', 'Blockchain'
  ];
 
  // Comprehensive Tech Stack Data
  const techStack = [
    // --- FRONTEND ---
    { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'UI Library' },
    { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', desc: 'React Framework' },
    { name: 'Vue.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', desc: 'Progressive Framework' },
    { name: 'Angular', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', desc: 'Enterprise Scale' },
    { name: 'Svelte', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', desc: 'Cybernetically Enhanced' },
    { name: 'TypeScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', desc: 'Typed JS' },
    { name: 'Tailwind', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', desc: 'Utility CSS' },
    { name: 'Bootstrap', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', desc: 'Responsive Design' },
    { name: 'Sass', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', desc: 'CSS Extension' },
    { name: 'Redux', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', desc: 'State Management' },
    { name: 'Vite', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', desc: 'Next Gen Tooling' },
    { name: 'Webpack', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', desc: 'Module Bundler' },
   
    // --- BACKEND ---
    { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'JS Runtime' },
    { name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Versatile Language' },
    { name: 'Java', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Enterprise Standard' },
    { name: 'Go', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', desc: 'High Concurrency' },
    { name: 'Rust', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg', desc: 'Memory Safety' },
    { name: 'C#', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', desc: '.NET Core' },
    { name: 'PHP', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', desc: 'Web Scripting' },
    { name: 'Spring', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', desc: 'Java Framework' },
    { name: 'Django', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', desc: 'Python Framework' },
    { name: 'Flask', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', desc: 'Microframework' },
    { name: 'GraphQL', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', desc: 'Data Query' },
    { name: 'NestJS', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', desc: 'Node Framework' },


    // --- DATABASE ---
    { name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: 'Relational SQL' },
    { name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'NoSQL Document' },
    { name: 'MySQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Popular SQL' },
    { name: 'Redis', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'In-Memory Cache' },
    { name: 'Oracle', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', desc: 'Enterprise DB' },
    { name: 'Microsoft SQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', desc: 'SQL Server' },
    { name: 'Cassandra', category: 'Database', icon: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg', desc: 'Wide Column' },
    { name: 'Firebase', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', desc: 'Realtime DB' },
    { name: 'SQLite', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', desc: 'Embedded SQL' },


    // --- MOBILE ---
    { name: 'Flutter', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', desc: 'Google UI' },
    { name: 'React Native', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'JS Native' },
    { name: 'Swift', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', desc: 'iOS Native' },
    { name: 'Kotlin', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', desc: 'Android Native' },
    { name: 'Dart', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', desc: 'Client Optmized' },
    { name: 'Android', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', desc: 'Platform' },
    { name: 'iOS', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', desc: 'Platform' },


    // --- CLOUD & DEVOPS ---
    { name: 'AWS', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', desc: 'Cloud Leader' },
    { name: 'Azure', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', desc: 'Microsoft Cloud' },
    { name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', desc: 'GCP' },
    { name: 'Docker', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Containers' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', desc: 'K8s Orchestration' },
    { name: 'Terraform', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', desc: 'IaC' },
    { name: 'Ansible', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', desc: 'Automation' },
    { name: 'Jenkins', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', desc: 'CI/CD' },
    { name: 'GitLab', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', desc: 'DevOps Platform' },
    { name: 'Linux', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', desc: 'OS Kernel' },
    { name: 'Prometheus', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', desc: 'Monitoring' },
    { name: 'Grafana', category: 'Cloud & DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', desc: 'Visualization' },


    // --- AI & ML & MLOPS ---
    { name: 'TensorFlow', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', desc: 'ML Library' },
    { name: 'PyTorch', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', desc: 'Deep Learning' },
    { name: 'OpenAI', category: 'AI & ML', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', desc: 'LLMs & GPT' },
    { name: 'Pandas', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', desc: 'Data Analysis' },
    { name: 'NumPy', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', desc: 'Scientific Compute' },
    { name: 'Scikit-learn', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', desc: 'Predictive Analysis' },
    { name: 'OpenCV', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', desc: 'Computer Vision' },
    { name: 'Hadoop', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg', desc: 'Big Data' },
    { name: 'Apache Spark', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', desc: 'Analytics Engine' },
    { name: 'Jupyter', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg', desc: 'Data Science NB' },
    { name: 'Matlab', category: 'AI & ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg', desc: 'Numeric Compute' },
   
    // --- CYBERSECURITY ---
    { name: 'Kali Linux', category: 'Cybersecurity', icon: 'https://www.vectorlogo.zone/logos/kali/kali-icon.svg', desc: 'Pen Testing' },
    { name: 'Wireshark', category: 'Cybersecurity', icon: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg', desc: 'Packet Analysis' },
    { name: 'Metasploit', category: 'Cybersecurity', icon: 'https://www.vectorlogo.zone/logos/metasploit/metasploit-icon.svg', desc: 'Exploitation' },
    { name: 'OWASP', category: 'Cybersecurity', icon: 'https://www.vectorlogo.zone/logos/owasp/owasp-icon.svg', desc: 'Security Standard' },
    { name: 'Splunk', category: 'Cybersecurity', icon: 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg', desc: 'SIEM' },
    { name: 'CrowdStrike', category: 'Cybersecurity', icon: 'https://logo.clearbit.com/crowdstrike.com', desc: 'Endpoint Protection' },
    { name: 'Burp Suite', category: 'Cybersecurity', icon: 'https://portswigger.net/burp/documentation/images/burpsuite_icon_32x32.png', desc: 'Web Sec Scanner' },
    { name: 'Nessus', category: 'Cybersecurity', icon: 'https://logo.clearbit.com/tenable.com', desc: 'Vulnerability Scan' },
    { name: 'Snort', category: 'Cybersecurity', icon: 'https://logo.clearbit.com/snort.org', desc: 'IDS/IPS' },


    // --- BLOCKCHAIN ---
    { name: 'Solidity', category: 'Blockchain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', desc: 'Smart Contracts' },
    { name: 'Ethereum', category: 'Blockchain', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg', desc: 'DApp Platform' },
    { name: 'Hyperledger', category: 'Blockchain', icon: 'https://www.vectorlogo.zone/logos/hyperledger/hyperledger-icon.svg', desc: 'Private Chain' },
    { name: 'Polygon', category: 'Blockchain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg', desc: 'Scaling Sol' },
    { name: 'Web3.js', category: 'Blockchain', icon: 'https://raw.githubusercontent.com/ChainSafe/web3.js/master/assets/logo/web3js.jpg', desc: 'Ethereum API' },
    { name: 'Truffle', category: 'Blockchain', icon: 'https://trufflesuite.com/img/truffle-logo-dark.svg', desc: 'Dev Framework' },
    { name: 'IPFS', category: 'Blockchain', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png', desc: 'Storage' },
    { name: 'Hardhat', category: 'Blockchain', icon: 'https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg', desc: 'Eth Dev Env' },
  ];


  const filteredStack = activeCategory === 'All' ? techStack : techStack.filter(item => item.category === activeCategory);


  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
    


      {/* 1. HERO SECTION: The Tech Arsenal */}
      <div className="relative min-h-[600px] flex items-center overflow-hidden bg-[#203253]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] animate-pulse-slow"></div>
           
           {/* Floating Code Particles */}
           {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute text-[#dc1e25] opacity-20 font-mono text-xs animate-float"
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 5 + 3}s`,
                     animationDelay: `${i * 0.2}s`
                   }}>
                 {['</>', '{}', '//', '=>', '0x', '&&'][i % 6]}
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-8">
              <Cpu size={14} className="text-[#dc1e25] animate-spin-slow" />
              <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Our Digital Foundry</span>
           </div>
           
           <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
             Powered by the <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-[#dc1e25]">Best in Class.</span>
           </h1>
           
           <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
             We master the tools that build the future. From neural networks to quantum-resistant encryption, our stack is engineered for scale, security, and speed.
           </p>
        </div>
      </div>


      {/* 2. TECH STACK FILTER SECTION */}
      <div className="py-24 bg-white relative min-h-screen">
         <div className="max-w-7xl mx-auto px-6">
           
            {/* Sticky Filter Tabs */}
            <div className="sticky top-24 z-30 bg-white/95 backdrop-blur-sm py-4 mb-12 border-b border-gray-100">
                <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                            activeCategory === cat
                            ? 'bg-[#203253] text-white border-[#203253] shadow-md'
                            : 'bg-slate-50 text-gray-500 border-gray-200 hover:border-[#dc1e25] hover:text-[#dc1e25]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
                </div>
            </div>


            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
               {filteredStack.map((tech, idx) => (
                  <TechCard key={idx} tech={tech} />
               ))}
            </div>


            {/* Empty State */}
            {filteredStack.length === 0 && (
               <div className="text-center text-gray-400 py-20 flex flex-col items-center">
                  <Box size={48} className="mb-4 opacity-50"/>
                  <p>No technologies found in this category.</p>
               </div>
            )}
         </div>
      </div>


      {/* 3. EXPERTISE SHOWCASE */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Why These Tools?</span>
               <h2 className="text-4xl font-bold text-white">Engineered for Excellence</h2>
            </div>


            <div className="grid md:grid-cols-3 gap-8">
               <ExpertiseCard
                  icon={<Zap size={40}/>}
                  title="High Performance"
                  desc="We select frameworks like Go and Rust for critical backend services that demand sub-millisecond latency."
               />
               <ExpertiseCard
                  icon={<Shield size={40}/>}
                  title="Enterprise Security"
                  desc="Our stack includes industry-standard security tools (SonarQube, Snyk) integrated directly into the CI/CD pipeline."
               />
               <ExpertiseCard
                  icon={<Layers size={40}/>}
                  title="Scalability First"
                  desc="Cloud-native architectures using Kubernetes and Serverless ensure your application grows with your user base."
               />
            </div>
         </div>
      </div>


      {/* 4. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Ready to Build?</h2>
           <p className="text-xl text-white/90 mb-12">Leverage our tech stack to build your next big idea. Let's discuss your architecture.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Consult Our Architects</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Download Tech Radar</button>
           </div>
        </div>
      </div>


    </div>
  );
};


/* --- SUB COMPONENTS --- */


const TechCard = ({ tech }) => (
  <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#dc1e25]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
     {/* Tech Icon */}
     <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 relative z-10">
        {/* Using standard img tag for simplicity with external URLs */}
        <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"; // Fallback
            }}
        />
     </div>
     
     <h3 className="font-bold text-[#203253] text-lg mb-1 relative z-10">{tech.name}</h3>
     <p className="text-[10px] uppercase font-bold text-gray-400 text-center group-hover:text-[#dc1e25] transition-colors relative z-10">{tech.desc}</p>
     
     {/* Category Badge */}
     <div className="absolute top-2 right-2 text-[8px] font-bold text-gray-300 bg-gray-50 px-2 py-0.5 rounded-full group-hover:bg-[#203253] group-hover:text-white transition-colors">
        {tech.category}
     </div>


     {/* Subtle Glow on Hover */}
     <div className="absolute inset-0 bg-gradient-to-tr from-[#dc1e25]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
  </div>
);


const ExpertiseCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden">
     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">{icon}</div>
     <div className="w-16 h-16 bg-[#dc1e25] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform">
        {icon}
     </div>
     <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
     <p className="text-base text-gray-300 leading-relaxed">{desc}</p>
  </div>
);


export default TechnologyStackPage;

