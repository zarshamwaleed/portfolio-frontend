import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Force dark mode on mount
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
    scrolled ? "bg-black shadow-md" : "bg-black"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Desktop Layout */}
    <div className="hidden md:flex relative h-16 items-center justify-center">
      {/* Logo */}
<div className="absolute -left-20 flex-shrink-0">
  <a href="/" className="flex items-center gap-3">
    {/* Minimal Logo Icon */}
    <div className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 bg-gradient-to-br from-blue-600 to-purple-700 shadow-sm">
      <span className="text-xs font-bold text-white tracking-tight">
        Z
      </span>
    </div>

    {/* Brand Name */}
    <span className="text-lg font-semibold tracking-wide text-white font-[Inter]">
      Zarsham<span className="text-blue-400">Tech</span>
    </span>
  </a>
</div>





      {/* Navigation Links */}
      <div className="flex space-x-8 pl-28">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="absolute -right-20 flex items-center space-x-4">
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
    <div className="md:hidden flex h-16 items-center justify-between">
      <a href="/" className="text-xl font-bold text-white">
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold tracking-wide font-[JetBrains Mono]">
          &lt;ZarshamTech /&gt;
        </span>
      </a>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-300"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 pt-3 pb-4 space-y-2 bg-black">
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

        {/* Socials inside mobile menu */}
        <div className="flex space-x-4 px-4 pt-4 border-t border-gray-800">
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
