import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Certifications", href: "/certificates" },
    { name: "Reviews", href: "/reviews" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / Tablet Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo and Text Logo (Left Side) */}
          <div className="flex items-center justify-start space-x-2 ml-[-50px]">
            {/* Mono Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="ZarshamTech Logo"
                className="w-auto h-[60px] object-contain"
              />
              <img
                src={logo2}
                alt="ZarshamTech Name"
                className="h-[220px] w-auto object-contain"
                style={{ transform: "translateX(-30px)" }} // Using transform to move logo2 to the left
              />
            </a>
          </div>

          {/* Navigation Links (Centered) */}
          <div className="flex-1 flex justify-center ml-[-40px]">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-500 px-2 py-2 text-sm font-medium transition-colors duration-300"

                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons (Right Side) */}
          <div
            className="flex items-center space-x-4"
            style={{ transform: "translateX(40px)" }}
          >
            <a
              href="https://www.linkedin.com/in/zarsham-waleed-8376bb35b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Logo and Text Logo (Left Side) */}
          <div className="flex items-center justify-start space-x-2 ml-[-50px]">
            {/* Mono Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="ZarshamTech Logo"
                className="w-auto h-[60px] object-contain"
              />
              <img
                src={logo2}
                alt="ZarshamTech Name"
                className="h-[220px] w-auto object-contain"
                style={{ transform: "translateX(-30px)" }} // Using transform to move logo2 to the left
              />
            </a>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2 bg-black">
            {/* Scrollable menu if too tall */}
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Socials inside mobile menu */}
            <div className="flex space-x-4 px-4 pt-4 border-t border-gray-800 pt-10">
              <a
                href="https://linkedin.com/in/zarsham-waleed-8376bb35b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
