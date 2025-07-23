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
        scrolled
          ? "dark:bg-gray-900/90 backdrop-blur-sm shadow-sm"
          : "dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex relative h-16 items-center justify-center">
          {/* Logo */}
          <div className="absolute -left-20 flex-shrink-0">
            <a href="/" className="text-xl font-bold dark:text-white text-gray-900 flex items-center">
            
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold tracking-wide font-[JetBrains Mono]">
                &lt;ZarshamTech /&gt;
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 pl-28">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="dark:text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="absolute -right-20 flex items-center space-x-4 ">
            <a
              href="https://www.linkedin.com/in/zarsham-waleed-8376bb35b/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold tracking-wide font-[JetBrains Mono]">
                &lt;ZarshamTech /&gt;
              </span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 hover:bg-gray-700 transition-colors duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
      {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-4 pt-3 pb-4 space-y-2">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block dark:text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
      >
        {link.name}
      </a>
    ))}

    {/* Socials - moved inside mobile menu properly */}
    <div className="flex space-x-4 px-4 pt-4 border-t border-gray-700">
      <a
        href="https://linkedin.com/in/zarsham-waleed-8376bb35b/"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-gray-300 hover:text-purple-400 transition-colors duration-300"
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
