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
  Globe
} from 'lucide-react';

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
    },
    { 
      icon: MapPin, 
      title: 'Geographical Presence', 
      value: 'Pakistan', 
      action: 'View map',
      href: 'https://maps.google.com/?q=Pakistan',
      bg: 'bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-900/50 dark:to-blue-900/50'
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
      icon: Twitter, 
      platform: 'Microblogging', 
      handle: '@zarsham', 
      href: 'https://twitter.com/zarsham',
      color: 'text-sky-500 dark:text-sky-400 hover:bg-sky-500 hover:text-white'
    },
    { 
      icon: Globe, 
      platform: 'Personal Website', 
      handle: 'zarsham.dev', 
      href: 'https://zarsham.dev',
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
      className="min-h-screen py-20 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
   {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-mono bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {'<LetsWorkTogether />'}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Let’s connect and build something remarkable together.
          </p>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {contactChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.href}
              className={`${channel.bg} p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <channel.icon className="w-8 h-8 mr-3 text-gray-700 dark:text-gray-300" />
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{channel.title}</h3>
              </div>
              <p className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{channel.value}</p>
              <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
                {channel.action} →
              </div>
            </a>
          ))}
        </div>

        {/* Digital Presence */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
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
                className={`${platform.color} p-4 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col items-center text-center`}
              >
                <platform.icon className="w-6 h-6 mb-2" />
                <span className="text-xs font-medium">{platform.platform}</span>
                <span className="text-sm font-bold">{platform.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className={`transition-all duration-1000 delay-450 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Operational Hours
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <CalendarDays className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">Pakistan Standard Time (UTC+5)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current time: {new Date().toLocaleTimeString('en-PK')}</p>
              </div>
            </div>
            <div className="space-y-3">
              {availability.map((slot, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800 last:border-0">
                  <span className="text-gray-700 dark:text-gray-300">{slot.day}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{slot.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;