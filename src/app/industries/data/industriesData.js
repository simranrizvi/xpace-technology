import React from "react";
import {
  Activity,
  Ambulance,
  ArrowLeftRight,
  Banknote,
  BarChart,
  BarChart3,
  BarChart4,
  Blocks,
  BookMarked,
  BookOpen,
  Bot,
  Boxes,
  BrainCircuit,
  Calculator,
  CalendarCheck,
  CalendarDays,
  Camera,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  CloudSun,
  Coins,
  Combine,
  Construction,
  Container,
  Cpu,
  CreditCard,
  Database,
  Droplets,
  Drone,
  Eye,
  Factory,
  FileCheck,
  FileText,
  GraduationCap,
  Hammer,
  HandCoins,
  HardHat,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  Link,
  LockKeyhole,
  Map,
  MapPin,
  MessageSquare,
  MessagesSquare,
  MonitorCheck,
  MonitorSmartphone,
  Package,
  PackageSearch,
  PieChart,
  Presentation,
  Receipt,
  Route,
  Ruler,
  Scan,
  ScanLine,
  School,
  Send,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Smile,
  Sprout,
  Stethoscope,
  Store,
  Tags,
  Tractor,
  TrendingUp,
  Truck,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
  Warehouse,
  Wheat,
  Wrench,
  Zap,
  Pill,
} from "lucide-react";

export const industriesData = [
  // Healthcare Solutions Object
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    frontDesc:
      "Advanced technology solutions for modern healthcare providers and facilities.",
    backTitle: "Healthcare Innovation",
    backDesc:
      "We provide innovative IT solutions tailored for healthcare institutions to improve patient care, streamline operations, and enhance data security. Our healthcare solutions are designed to meet the complex needs of modern medical practices.",
    popupSubtitle:
      "Transforming healthcare delivery through innovative technology",
    popupBody2:
      "Our healthcare technology solutions help medical providers deliver better patient outcomes while reducing operational costs and improving efficiency across all departments.",
    // Is array mein wahi icons hain jo aapne HTML mein maange thay
    detailedFeatures: [
      {
        title: "Electronic Health Record (EHR) Systems Integration",
        icon: <MonitorSmartphone className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Telemedicine Platform Development",
        icon: <Video className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Patient Management & Appointment Systems",
        icon: <UserRound className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Health Analytics & Reporting Tools",
        icon: <TrendingUp className="w-5 h-5 text-red-600" />,
      },
      {
        title: "HIPAA-Compliant Data Security Solutions",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Medical Imaging Software Integration",
        icon: <ScanLine className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Pharmacy Management Systems",
        icon: <Pill className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Emergency Response Coordination Platforms",
        icon: <Ambulance className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Digital Documentation and Compliance Management",
        icon: <FileText className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Remote Patient Monitoring Solutions",
        icon: <Activity className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["EHR Systems", "Telemedicine", "Patient Management"],
    icon: <HeartPulse className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1740479050129-7fef21254518?q=80&w=1170&auto=format&fit=crop",
    ctaText: "Request a Healthcare Consultation",
  },

  // FinTech Solutions Object
  {
    id: "fintech",
    title: "FinTech Solutions",
    frontDesc:
      "Revolutionizing financial services through cutting-edge technology and secure innovation.",
    backTitle: "Financial Innovation",
    backDesc:
      "Our financial technology solutions empower banking and financial institutions with secure, scalable platforms that enhance customer experience and comply with regulatory requirements. We help financial organizations stay competitive in the digital age.",
    popupSubtitle:
      "Revolutionizing financial services through technology innovation",
    popupBody2:
      "Our FinTech solutions are designed to enhance operational efficiency, improve customer engagement, and ensure regulatory compliance while reducing costs and mitigating risks.",
    detailedFeatures: [
      {
        title: "Core Banking System Modernization",
        icon: <Landmark className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Mobile Banking Applications",
        icon: <Smartphone className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Fraud Detection & Prevention Systems",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Blockchain-Based Transaction Solutions",
        icon: <Link className="w-5 h-5 text-red-600" />,
      },
      {
        title: "AI-Powered Credit Scoring Models",
        icon: <BrainCircuit className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Digital Wallet & Payment Gateway Integration",
        icon: <Wallet className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Wealth Management Platforms",
        icon: <PieChart className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Trading Algorithm Development",
        icon: <ArrowLeftRight className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Automated Invoice Processing Systems",
        icon: <Receipt className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Peer-to-Peer Lending Platforms",
        icon: <HandCoins className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Core Banking", "Mobile Apps", "Fraud Detection"],
    icon: <Banknote className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a FinTech Solution Quote",
  },

  // Construction Solutions Object
  {
    id: "construction",
    title: "Construction Solutions",
    frontDesc:
      "Building the future with digital construction technology and smart project management.",
    backTitle: "Construction Innovation",
    backDesc:
      "Our construction technology solutions help builders, contractors, and architects manage projects more efficiently, reduce costs, and improve collaboration across all stakeholders. We bring digital transformation to the construction industry.",
    popupSubtitle: "Building the future with digital construction technology",
    popupBody2:
      "Our construction technology solutions help reduce project delays, control costs, improve safety, and enhance collaboration between architects, engineers, contractors, and clients.",
    detailedFeatures: [
      {
        title: "Project Management Software",
        icon: <Hammer className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Construction Site Safety Monitoring Systems",
        icon: <HardHat className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Building Information Modeling (BIM) Integration",
        icon: <Ruler className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Supply Chain and Inventory Management",
        icon: <Truck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Automated Billing and Estimation Tools",
        icon: <Calculator className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Drone-based Site Surveying and Monitoring",
        icon: <FileText className="w-5 h-5 text-red-600" />,
      }, // Substitute for drone if needed
      {
        title: "Resource Scheduling and Allocation Systems",
        icon: <CalendarDays className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Quality Control and Compliance Tracking",
        icon: <ClipboardCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Digital Blueprint and Document Management",
        icon: <FileText className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Cost Control and Budget Management Solutions",
        icon: <Coins className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Project Management", "BIM Integration", "Site Safety"],
    icon: <Construction className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a Construction Solution Demo",
  },

  // AgriTech Solutions Object
  {
    id: "agritech",
    title: "AgriTech Solutions",
    frontDesc:
      "Empowering agriculture with smart farming technology and data-driven crop management.",
    backTitle: "Agricultural Innovation",
    backDesc:
      "Our AgriTech solutions help farmers, agribusinesses, and agricultural researchers manage crops more efficiently, increase yields, and improve sustainability through digital tools. We bring digital transformation to the traditional farming landscape.",
    popupSubtitle: "Cultivating the future with smart agricultural technology",
    popupBody2:
      "Our AgriTech solutions help optimize water usage, monitor soil health in real-time, control production costs, and enhance collaboration across the entire food supply chain.",
    detailedFeatures: [
      {
        title: "Smart Irrigation Management Systems",
        icon: <Droplets className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Precision Farming & Soil Health Monitoring",
        icon: <Sprout className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Crop Yield Prediction & Analytics",
        icon: <BarChart3 className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Automated Greenhouse Control Systems",
        icon: <CloudSun className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Livestock Tracking & Health Management",
        icon: <MonitorCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Drone-based Crop Scouting & Mapping",
        icon: <Map className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Supply Chain & Farm Inventory Management",
        icon: <Combine className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Pest and Disease Detection Tools",
        icon: <Leaf className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Weather Forecasting & Risk Assessment",
        icon: <Database className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Market Price Tracking & Budget Management",
        icon: <TrendingUp className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Precision Farming", "Smart Irrigation", "Yield Analytics"],
    icon: <Wheat className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?q=80&w=1170&auto=format&fit=crop&w=800&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Request an AgriTech Solution Demo",
  },

  // Dental Industry Solutions Object
  {
    id: "dental",
    title: "Dental Industry Solutions",
    frontDesc:
      "Transforming dental practices with innovative technology and streamlined patient care.",
    backTitle: "Dental Innovation",
    backDesc:
      "Our dental practice solutions streamline operations, enhance patient experience, and improve clinical outcomes through specialized software designed specifically for dental professionals.",
    popupSubtitle: "Transforming dental practices with innovative technology",
    popupBody2:
      "Our dental practice management solutions help clinics of all sizes improve efficiency, reduce administrative burdens, enhance patient care, and grow their practice through technology innovation.",
    detailedFeatures: [
      {
        title: "Digital Patient Records and Charting",
        icon: <ClipboardList className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Appointment Scheduling and Reminders",
        icon: <CalendarCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Intraoral Camera Integration",
        icon: <Camera className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Digital X-ray and Imaging Solutions",
        icon: <Scan className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Billing and Insurance Claim Processing",
        icon: <CreditCard className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Inventory and Supply Management",
        icon: <Package className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Treatment Planning and Presentation",
        icon: <Smile className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Clinical Workflow Automation",
        icon: <Zap className="w-5 h-5 text-red-600" />,
      },
      {
        title: "HIPAA-Compliant Data Security",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Patient Communication Portals",
        icon: <MessageSquare className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Patient Records", "Digital X-ray", "Scheduling"],
    icon: <Stethoscope className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a Dental Solution Demo",
  },

  // Education Solutions Object
  {
    id: "education",
    title: "Education Solutions",
    frontDesc:
      "Shaping the future of learning through innovative technology and digital education tools.",
    backTitle: "Educational Innovation",
    backDesc:
      "Our education technology solutions help institutions, teachers, and students create engaging learning experiences, streamline administrative tasks, and improve educational outcomes through innovative digital tools.",
    popupSubtitle: "Shaping the future of learning through technology",
    popupBody2:
      "Our education technology solutions help institutions adapt to changing learning environments, personalize education, improve administrative efficiency, and prepare students for the digital future.",
    detailedFeatures: [
      {
        title: "Learning Management Systems (LMS)",
        icon: <GraduationCap className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Virtual Classroom Platforms",
        icon: <Presentation className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Digital Curriculum Development",
        icon: <BookOpen className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Student Information Systems",
        icon: <UserPlus className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Performance Analytics and Reporting",
        icon: <BarChart4 className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Campus Management Solutions",
        icon: <School className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Lecture Capture and Streaming",
        icon: <Video className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Educational App Integration",
        icon: <Blocks className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Secure Examination Platforms",
        icon: <LockKeyhole className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Parent-Teacher Communication Portals",
        icon: <MessagesSquare className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["LMS Platforms", "Virtual Classrooms", "Student Analytics"],
    icon: <BookMarked className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request an Education Solution Consultation",
  },

  // Retail Solutions Object
  {
    id: "retail",
    title: "Retail Solutions",
    frontDesc:
      "Revolutionizing the shopping experience with seamless omnichannel technology and data-driven retail tools.",
    backTitle: "Retail Innovation",
    backDesc:
      "Our retail technology solutions help businesses create seamless shopping experiences, optimize inventory management, and leverage customer data to drive sales and improve customer loyalty.",
    popupSubtitle: "Revolutionizing the shopping experience through technology",
    popupBody2:
      "Our retail solutions help businesses of all sizes create omnichannel shopping experiences, optimize operations, and leverage data to drive growth and customer satisfaction.",
    detailedFeatures: [
      {
        title: "E-commerce Platform Development",
        icon: <ShoppingCart className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Point of Sale (POS) Systems",
        icon: <Store className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Inventory Management Solutions",
        icon: <Boxes className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Sales Analytics and Reporting",
        icon: <LineChart className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Customer Relationship Management (CRM)",
        icon: <Users className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Mobile Shopping Applications",
        icon: <Smartphone className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Pricing and Promotion Management",
        icon: <Tags className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Supply Chain Optimization",
        icon: <Warehouse className="w-5 h-5 text-red-600" />,
      },
      {
        title: "AI-Powered Product Recommendations",
        icon: <Bot className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Payment Security Solutions",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["E-commerce", "POS Systems", "Inventory Management"],
    icon: <ShoppingBag className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a Retail Solution Demo",
  },

  // Logistics Solutions Object
  {
    id: "logistics",
    title: "Logistics Solutions",
    frontDesc:
      "Optimizing supply chains and fleet operations through advanced real-time tracking and technology.",
    backTitle: "Logistics Innovation",
    backDesc:
      "Our logistics technology solutions help businesses streamline their supply chain operations, reduce costs, improve delivery times, and enhance visibility across the entire logistics network.",
    popupSubtitle: "Optimizing supply chains through advanced technology",
    popupBody2:
      "Our logistics solutions help businesses optimize their supply chain operations, reduce costs, improve delivery efficiency, and enhance customer satisfaction through technology-driven innovations.",
    detailedFeatures: [
      {
        title: "Fleet Management Systems",
        icon: <Truck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Route Optimization Software",
        icon: <Route className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Real-time Tracking Solutions",
        icon: <MapPin className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Warehouse Management Systems",
        icon: <PackageSearch className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Inventory Tracking and Management",
        icon: <ClipboardList className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Automated Documentation Processing",
        icon: <FileCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Freight and Cost Management",
        icon: <CircleDollarSign className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Supply Chain Visibility Platforms",
        icon: <Eye className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Automated Dispatch Systems",
        icon: <Send className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Logistics Analytics and Reporting",
        icon: <BarChart className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Fleet Management", "Route Optimization", "Real-time Tracking"],
    icon: <Container className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a Logistics Consultation",
  },

  // Manufacturing Solutions Object
  {
    id: "manufacturing",
    title: "Manufacturing Solutions",
    frontDesc:
      "Driving the future of production with Industry 4.0 technology and smart automation systems.",
    backTitle: "Smart Manufacturing",
    backDesc:
      "Our manufacturing technology solutions help businesses optimize production processes, improve quality control, reduce waste, and implement Industry 4.0 innovations for smarter manufacturing.",
    popupSubtitle:
      "Driving the future of production with Industry 4.0 technology",
    popupBody2:
      "Our manufacturing solutions help businesses implement Industry 4.0 technologies to optimize production processes, improve product quality, reduce operational costs, and enhance overall manufacturing efficiency.",
    detailedFeatures: [
      {
        title: "Production Line Automation",
        icon: <Settings className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Manufacturing Execution Systems (MES)",
        icon: <Activity className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Quality Control and Assurance Systems",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Predictive Maintenance Solutions",
        icon: <Wrench className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Inventory and Supply Chain Management",
        icon: <Boxes className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Industrial IoT (IIoT) Implementation",
        icon: <Cpu className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Production Analytics and Optimization",
        icon: <TrendingUp className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Robotics Process Integration",
        icon: <Layers className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Energy Management Systems",
        icon: <Zap className="w-5 h-5 text-red-600" />,
      },
      {
        title: "Compliance and Safety Management",
        icon: <ClipboardCheck className="w-5 h-5 text-red-600" />,
      },
    ],
    features: ["Industry 4.0", "IIoT Implementation", "Process Automation"],
    icon: <Factory className="w-8 h-8" />,
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ctaText: "Request a Manufacturing Solution Quote",
  },
];
