"use client";
import Link from "next/link";

const NavLink = ({ href, children, className = "" }) => (
  <Link href={href} className={`text-sm font-medium ${className}`}>
    {children}
  </Link>
);

export default NavLink;
