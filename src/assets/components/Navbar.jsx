import { useState } from "react";
import gig from './gig.png';

const navLinkClasses =
  "px-3 py-3 rounded text-white hover:bg-white hover:text-blue-500 transition block";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-700 border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <a href="https://getgigflow.com/" className="flex items-center">
          <img src={gig} alt="GigFloww Logo" className="h-10 w-auto" />
        </a>        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className={navLinkClasses}>Home</a>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={navLinkClasses}>Services</button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-blue-700 text-white border rounded-md shadow-md">
                {["Design", "Development", "Marketing"].map((item) => (
                  <a key={item} href="#" className={navLinkClasses}>{item}</a>
                ))}
              </div>
            )}
          </div>

          {["About", "Contact"].map((item) => (
            <a key={item} href="#" className={navLinkClasses}>{item}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-blue-700 font-semibold text-lg"
          onClick={toggleMenu}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 font-medium text-white space-y-2">
          <a href="#" className={navLinkClasses}>Home</a>
          <details className="group">
            <summary className={navLinkClasses + " cursor-pointer"}>Services</summary>
            <div className="pl-4 mt-2 space-y-1">
              {["Design", "Development", "Marketing"].map((item) => (
                <a key={item} href="#" className={navLinkClasses}>{item}</a>
              ))}
            </div>
          </details>
          {["About", "Contact"].map((item) => (
            <a key={item} href="#" className={navLinkClasses}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
