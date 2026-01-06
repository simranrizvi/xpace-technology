"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const SimpleDropdown = ({ title, links }) => {
  return (
    <div className="relative group h-full flex items-center">
      <button className="flex items-center gap-1 font-medium text-[15px]">
        {title}
        <ChevronDown size={14} />
      </button>

      <div className="absolute top-full left-0 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm hover:text-red-600"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimpleDropdown;
