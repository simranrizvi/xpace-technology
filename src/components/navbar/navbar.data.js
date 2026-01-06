// components/navbar/navbar.data.js
import {
  Cpu, ShieldCheck, Cloud, Globe, Layers
} from "lucide-react";

export const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Technology We Use", href: "/technology" },
  { title: "Research & Development", href: "/research" },
  { title: "Partnerships & Alliances", href: "/partners" },
  { title: "Careers", href: "/careers" },
];

export const insightsLinks = [
  { title: "Case Studies", href: "/case-studies" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQs", href: "/faqs" },
];

export const solutionsData = [
  {
    id: 0,
    title: "Enterprise Architecture",
    desc: "Scalable systems for modern businesses.",
    href: "/solutions/enterprise-architecture",
    icon: Layers,
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    items: [
      {
        name: "Solution Architecture Planning",
        href: "/solutions/enterprise-architecture/solution-planning",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      },
      {
        name: "System Design & Scalability",
        href: "/solutions/enterprise-architecture/system-design",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
    ],
  },
  {
    id: 1,
    title: "AI & Automation",
    desc: "Intelligent bots and process automation.",
    href: "/solutions/ai-automation",
    icon: Cpu,
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    items: [
      {
        name: "AI-Powered Chatbots",
        href: "/solutions/ai-automation/chatbots",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      },
    ],
  },
];
