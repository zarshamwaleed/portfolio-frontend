import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Globe, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web applications using MongoDB, Express.js, React, and Node.js",
      features: ["Responsive Design", "API Integration", "Real-time Features", "Database Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with React Native and modern frameworks",
      features: ["iOS & Android", "Native Performance", "Push Notifications", "Offline Support"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Solutions",
      description: "Scalable server architecture with Node.js, Express, and MongoDB",
      features: ["RESTful APIs", "Authentication", "Data Analytics", "Cloud Deployment"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Excellence",
      description: "Modern React applications with state-of-the-art UI/UX design",
      features: ["Component Libraries", "State Management", "Performance Optimization", "Testing"]
    }
  ];

  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Express.js", color: "bg-gray-700" },
    { name: "Java", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Python", color: "bg-blue-600" },
    { name: "C / C++", color: "bg-orange-500" }
  ];

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background: "linear-gradient(to bottom right, rgb(30,30,30), rgb(45,45,45), rgb(10,10,10))"
      }}
    >
      {/* ✅ HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">Professional Development Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            MERN Stack & 
            <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              App Development
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful, scalable applications with our expert MERN stack development, 
            React solutions, and cutting-edge mobile app development services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/experience">
              <button className="group bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>See My Experience</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link to="/projects">
              <button className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                My Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES SECTION */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  activeService === index ? 'ring-2 ring-cyan-400/50 bg-white/10' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ TECHNOLOGIES SECTION */}
      <section id="technologies" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for modern development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${tech.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Scalable</h3>
                <p className="text-gray-300">Built with security best practices and scalable architecture</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">High Performance</h3>
                <p className="text-gray-300">Optimized for speed and efficiency across all platforms</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">User-Centric Design</h3>
                <p className="text-gray-300">Intuitive interfaces that deliver exceptional user experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CALL TO ACTION SECTION */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
