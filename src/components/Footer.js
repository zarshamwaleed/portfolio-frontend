import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zarsham-waleed-8376bb35b/",
      icon: <FaLinkedin size={22} />,
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: <FaGithub size={22} />,
      color: "hover:text-gray-300",
    },
    {
      name: "Email",
      url: "mailto:zarshamwaleedbutt@gmail.com",
      icon: <FaEnvelope size={22} />,
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
  ];

  // ✅ Fetch GitHub & LinkedIn URLs directly from socialLinks
  const githubLink = socialLinks.find((link) => link.name === "GitHub")?.url;
  const linkedinLink = socialLinks.find((link) => link.name === "LinkedIn")?.url;

  const resources = [
    { name: "Resume", href: "/Zarsham-Resume.pdf" },
    { name: "Services", href: "/services" },
    { name: "GitHub", href: githubLink },
    { name: "LinkedIn", href: linkedinLink },
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
           <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
  &lt;ZarshamWaleed /&gt;
</span>

            </h2>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Passionate web developer crafting modern, scalable applications
              with cutting-edge technologies.
            </p>

            {/* Contact */}
            <p className="text-sm mt-3">
              <span className="text-gray-500">📞</span> +92 304 2825000
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} text-gray-400 hover:scale-110 transition-transform duration-200`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-gray-800 pb-2 w-fit">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-gray-800 pb-2 w-fit">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map(
                (link) =>
                  link.href && (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        {/* Divider Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {currentYear} Zarsham Waleed. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy&terms"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy&terms"
              className="hover:text-orange-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
