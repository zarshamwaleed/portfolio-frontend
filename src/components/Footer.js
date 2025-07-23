import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zarsham-waleed-8376bb35b/',
      icon: <FaLinkedin size={20} />,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: <FaGithub size={20} />,
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
    },
 
  {
  name: 'Email',
  url: 'https://mail.google.com/mail/?view=cm&fs=1&to=zarshamwaleedbutt@gmail.com&su=Let%27s%20Connect&body=Hi%20Zarsham%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0ARegards%2C%0A',
  icon: <FaEnvelope size={20} />,
  color: 'hover:text-red-600 dark:hover:text-red-400',
}

  ];

  const footerLinks = [
   {
  title: 'Quick Links',
  links: [
    // Column 1
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    
    // Column 2
    
    { name: 'Reviews', href: '/reviews' },
    { name: 'Experience', href: '/experience' },
    { name: 'Certifications', href: '/certificates' },
    
  ],
},
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: '/Zarsham-Resume.pdf' },
        { name: 'Services', href: '/services' },
       
      ],
    },
  ];

  return (
    <footer className="dark:bg-gray-900 bg-gray-100 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand info */}
        <div className="space-y-4">
  <h3 className="text-xl font-bold dark:text-white text-gray-900">
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      &lt;ZarshamWaleed /&gt;
    </span>
  </h3>
  <p className="text-sm">
    A passionate developer creating modern web applications with
    cutting-edge technologies.
  </p>

  <div className="flex space-x-4 ">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${link.color} transition-colors duration-300`}
        aria-label={link.name}
      >
        {link.icon}
      </a>
    ))}
      <p className="text-sm text-slate-400">
    📞 +92 304 2825000
  </p>
  </div>
  
  {/* ✅ Contact Number */}
  
</div>


          {/* Footer links */}
         {footerLinks.map((section) => (
  <div
  key={section.title}
  className={`space-y-4 ${
    section.title === 'Quick Links'
      ? 'flex justify-center w-full'
      : section.title === 'Resources'
      ? 'pl-16' // Increased left padding for more right shift
      : ''
  }`}
>
  {/* Quick Links section with 2-column grid */}
  {section.title === 'Quick Links' ? (
    <div>
      <h3 className="text-white font-semibold mb-4 text-left pl-6">Quick Links</h3>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {section.links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  ) : (
    <>
      <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-gray-200 text-gray-800">
        {section.title}
      </h4>
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )}
</div>
))}

        
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Zarsham Waleed. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy&terms"
              className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy&terms"
              className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
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