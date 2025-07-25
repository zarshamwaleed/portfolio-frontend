import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Clock,
  CalendarDays,
  Contact2,
  Globe,
   Code,
   Briefcase
} from 'lucide-react';
import Swal from 'sweetalert2';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const handleCallClick = () => {
  if (isMobile) {
    window.location.href = 'tel:+923042825000';
  } else {
    Swal.fire({
      title: 'Use Your Mobile to Call',
      text: 'Calling is only supported on mobile devices or if a calling app is configured.',
      icon: 'info',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#2563EB',
      backdrop: true,
    });
  }
};
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const contactChannels = [
    { 
      icon: Mail, 
      title: 'Electronic Mail', 
      value: 'zarsham@example.com', 
      action: 'Drop a line',
      href: 'mailto:zarsham@example.com',
      bg: 'bg-gradient-to-br from-rose-100 to-pink-200 dark:from-rose-900/50 dark:to-pink-900/50'
    },
  {
  icon: Phone,
  title: 'Voice Communication',
  value: '+92 304 2825000',
  action: 'Call directly',
  href: 'tel:+923042825000',
  bg: 'bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-900/50 dark:to-cyan-900/50'
}
,
 {
  icon: Phone, // or FaWhatsapp if using react-icons
  title: 'WhatsApp',
  value: '+92 304 2825000',
  action: 'Chat Now',
  href: 'https://wa.me/923042825000?text=Hello%20Zarsham,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!',
  bg: 'bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/50 dark:to-emerald-900/50'
}

  ];

  const digitalPresence = [
    { 
      icon: Github, 
      platform: 'Code Repository', 
      handle: '@zarsham', 
      href: 'https://github.com/zarsham',
      color: 'text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white'
    },
    { 
      icon: Linkedin, 
      platform: 'Professional Network', 
      handle: '/in/zarsham', 
      href: 'https://linkedin.com/in/zarsham',
      color: 'text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white'
    },
  {
  icon: Briefcase, // or use FaFiverr
  platform: 'Fiverr',
  handle: 'zarsham_designs',
  href: 'https://www.fiverr.com/zarshamwaleed',
  color: 'text-green-600 dark:text-green-500 hover:bg-green-600 hover:text-white'
},
    { 
      icon: Globe, 
      platform: 'Personal Website', 
      handle: 'zarsham.dev', 
      href: 'https://portfolio-frontend-alpha-livid.vercel.app/',
      color: 'text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white'
    }
  ];

  const availability = [
    { day: 'Monday - Thursday', hours: '9:00 - 17:00 PKT' },
    { day: 'Friday', hours: '9:00 - 12:00 PKT' },
    { day: 'Weekend', hours: 'By appointment' }
  ];

  return (
   <section
  id="contact"
  className="min-h-screen py-20 text-white"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>
  <div className="max-w-5xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div
      className={`text-center mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
        {'<LetsWorkTogether />'}
      </h2>
      <p className="text-lg text-gray-300 mt-4">
        Let’s connect and build something remarkable together.
      </p>
      <div className="w-24 h-1 mt-6 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
    </div>

    {/* Contact Cards */}
    <div
      className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {contactChannels.map((channel, index) => {
        const isVoice = channel.title === 'Voice Communication';

        const handleClick = (e) => {
          e.preventDefault();
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          if (isMobile) {
            window.location.href = channel.href;
          } else {
            Swal.fire({
              title: 'Use Your Mobile to Call',
              text: 'Calling is only supported on mobile devices or if a calling app is configured.',
              icon: 'info',
              confirmButtonText: 'Got it!',
              confirmButtonColor: '#2563EB',
            });
          }
        };

        return isVoice ? (
          <div
            key={index}
            onClick={handleClick}
            className={`${channel.bg} p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gray-800/40`}
          >
            <div className="flex items-center mb-4">
              <channel.icon className="w-8 h-8 mr-3 text-gray-200" />
              <h3 className="text-lg font-medium text-gray-200">{channel.title}</h3>
            </div>
            <p className="text-2xl font-bold mb-3 text-white">{channel.value}</p>
            <div className="flex items-center text-sm font-medium text-gray-400">
              {channel.action} →
            </div>
          </div>
        ) : (
          <a
            key={index}
            href={channel.href}
            className={`${channel.bg} p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-800/40`}
          >
            <div className="flex items-center mb-4">
              <channel.icon className="w-8 h-8 mr-3 text-gray-200" />
              <h3 className="text-lg font-medium text-gray-200">{channel.title}</h3>
            </div>
            <p className="text-2xl font-bold mb-3 text-white">{channel.value}</p>
            <div className="flex items-center text-sm font-medium text-gray-400">
              {channel.action} →
            </div>
          </a>
        );
      })}
    </div>

    {/* Digital Presence */}
    <div
      className={`mb-16 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center">
        <Contact2 className="w-5 h-5 mr-2" />
        Digital Presence
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {digitalPresence.map((platform, index) => (
          <a
            key={index}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${platform.color} p-4 rounded-lg border border-gray-700 transition-all duration-300 flex flex-col items-center text-center bg-gray-800/40`}
          >
            <platform.icon className="w-6 h-6 mb-2 text-gray-200" />
            <span className="text-xs font-medium text-gray-300">{platform.platform}</span>
            <span className="text-sm font-bold text-white">{platform.handle}</span>
          </a>
        ))}
      </div>
    </div>

    {/* Tech Stack */}
    <div
      className={`transition-all duration-1000 delay-450 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center">
        <Code className="w-5 h-5 mr-2" />
        My Tech Stack
      </h3>

      <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Python', 'C++', 'C'].map(
            (tech, index) => (
              <div
                key={index}
                className="text-sm font-medium text-gray-300 bg-gray-900/50 py-2 px-4 rounded-lg shadow-sm hover:scale-105 transition"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;