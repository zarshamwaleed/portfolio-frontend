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
