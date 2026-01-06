"use client";

import { Menu, Search } from "lucide-react";
import NavLink from "./NavLink";
import SimpleDropdown from "./SimpleDropdown";
import MegaMenu from "./MegaMenu";
import { companyLinks, insightsLinks } from "./navbar.data";

const DesktopNavbar = ({ isScrolled, onMobileOpen }) => {
  return (
    <nav className={`sticky top-0 z-50 ${isScrolled ? "bg-white shadow" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <NavLink href="/" className="font-bold text-xl">XPACE</NavLink>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <SimpleDropdown title="Company" links={companyLinks} />
          <MegaMenu />
          <NavLink href="/industries">Industries</NavLink>
          <SimpleDropdown title="Insights" links={insightsLinks} />
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="hidden lg:flex gap-4">
          <Search />
        </div>

        <button className="lg:hidden" onClick={onMobileOpen}>
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
