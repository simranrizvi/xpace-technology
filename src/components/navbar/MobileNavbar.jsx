"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { companyLinks, solutionsData } from "./navbar.data";

const MobileNavbar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="bg-white w-80 h-full p-6">
        <button onClick={onClose}><X /></button>

        <Link href="/" onClick={onClose}>Home</Link>

        {companyLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.title}
          </Link>
        ))}

        {solutionsData.map(s => (
          <Link key={s.href} href={s.href} onClick={onClose}>
            {s.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
