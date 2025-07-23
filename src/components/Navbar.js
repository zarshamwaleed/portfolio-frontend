import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Always default to dark mode if no saved theme
  const savedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(savedTheme ? savedTheme === "dark" : true);

  // ✅ Apply theme on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Certifications", href: "/certificates" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
  <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
  scrolled
    ? "dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm shadow-sm"
    : "dark:bg-gray-900 bg-white"
}`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / Large Screen Layout */}
        <div className="hidden md:flex relative h-16 items-center justify-center">
          {/* LEFT - Logo (extreme left) */}
          <div className="absolute -left-20 flex-shrink-0">
            <a
              href="/"
              className="text-xl font-bold dark:text-white text-gray-900 flex items-center"
            >
   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold tracking-wide font-[JetBrains Mono]">
  &lt;ZarshamTech /&gt;
</span>


            </a>
          </div>

          {/* CENTER - Navigation Links */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="dark:text-gray-300 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT - Theme Toggle + Socials */}
          <div className="absolute -right-20 flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full dark:text-gray-300 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Socials */}
            <a
              href="https://www.linkedin.com/in/zarsham-waleed-8376bb35b/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-300 text-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Mobile / Small Screen Layout */}
        <div className="md:hidden flex h-16 items-center justify-between">
          {/* LEFT - Logo (normal position for mobile) */}
          <a
            href="/"
            className="text-xl font-bold dark:text-white text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>

          {/* RIGHT - Theme toggle + Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full dark:text-gray-300 text-gray-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block dark:text-gray-300 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Socials on mobile */}
            <div className="flex space-x-4 px-4 pt-3">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
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
