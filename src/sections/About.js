import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Coffee, BookOpen, Music, Award, Globe, Layers } from 'lucide-react';
import profilePic from "../images/profilebgRemove.png";
import {
  Code,
  Cpu,
  Monitor,
  Server,
  Cloud,
  GitBranch,
  Bug
} from "lucide-react";
const About = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const personalityTraits = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Deep knowledge of modern web technologies with a focus on performance and maintainability."
    },
    {
      icon: Palette,
      title: "Design Sensibility",
      description: "Eye for aesthetics with the ability to translate designs into functional, pixel-perfect interfaces."
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "Continuously exploring emerging technologies to deliver cutting-edge solutions."
    }
  ];

const interests = [
 

  { icon: Cloud, label: "Cloud Deployment (AWS/Vercel)" },
  { icon: GitBranch, label: "Version Control (Git/GitHub)" },
   { icon: Code, label: "Clean Code & Refactoring" },
    { icon: BookOpen, label: "Learning New Frameworks" },
      { icon: Monitor, label: "UI/UX Design" },
  { icon: Server, label: "Backend Architecture" }


];


  const stats = [
    { number: "2+", label: "Years Experience", icon: <Award className="text-blue-500" /> },
    { number: "10+", label: "Projects", icon: <Layers className="text-purple-500" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Globe className="text-indigo-500" /> },
    { number: "∞", label: "Problems Solved", icon: <Code2 className="text-blue-400" /> }
  ];

  return (
 <section id="about" className="relative min-h-screen py-24 overflow-hidden">
  {/* Base Light/Dark Gradient */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-1000"></div>

    {/* ✅ Extra Light Mode Professional Effects */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Radial vignette glow (light mode only) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent_70%)] dark:hidden"></div>

      {/* Soft blurred blobs for light mode */}
      <div className="hidden dark:block"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-200/20 blur-3xl rounded-full dark:hidden animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full dark:hidden animate-float-slow delay-2000"></div>

      {/* Small particle sparkles */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-blue-300/30 blur-[1px] dark:hidden"></div>
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-purple-300/30 blur-[1px] dark:hidden"></div>
      <div className="absolute bottom-32 left-1/2 w-2 h-2 rounded-full bg-indigo-300/30 blur-[1px] dark:hidden"></div>
    </div>

    {/* Geometric Grid Pattern (still for both modes) */}
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <pattern
          id="grid-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <rect width="80" height="80" fill="transparent" />
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-300 dark:text-gray-600"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>

    {/* Floating Orbs (for both modes but lighter on light mode) */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-15 dark:opacity-10 blur-3xl animate-float-slow"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-15 dark:opacity-10 blur-3xl animate-float-slow" style={{ animationDelay: "3s" }}></div>

    {/* Corner Accents */}
    <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-blue-300 dark:border-blue-600 opacity-20 rounded-tl-3xl"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-purple-300 dark:border-purple-600 opacity-20 rounded-br-3xl"></div>
  </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 font-[tracking-widest]">
  WhoAmI()
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile with Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Photo Container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-xl -rotate-12"></div>
              
              {/* Profile Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <img 
                 src={profilePic}
                  alt="Professional Headshot" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-6">
  <h3 className="text-2xl font-extrabold text-[#0073ff] font-[Orbitron] drop-shadow-md">
    Zarsham Waleed
  </h3>
  <p className="text-lg font-semibold text-[#0073ff] tracking-wide font-[Poppins] drop-shadow-sm">
    Full-Stack | App Developer
  </p>
</div>

              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Available</span>
                </div>
              </motion.div>
            </div>

            {/* Personality Traits */}
            <div className="mt-12 space-y-4">
              {personalityTraits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`p-5 rounded-xl transition-all duration-300 ${
                      activeCard === index 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 shadow-md'
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        activeCard === index 
                          ? 'bg-white/20' 
                          : 'bg-blue-100/50 dark:bg-blue-900/20'
                      }`}>
                        <IconComponent size={24} className={activeCard === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{trait.title}</h4>
                        <p className={`text-sm ${
                          activeCard === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {trait.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Stats and Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                 Overview
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
               Passionate full-stack developer with 2+ years of hands-on experience designing, developing, and deploying dynamic web and mobile applications. Proficient in JavaScript frameworks including React and Node.js, with strong knowledge of REST APIs, MongoDB, and modern cloud technologies.
                </p>
              <p className="text-slate-300 leading-relaxed">
  Successfully contributed to high-impact projects at{" "}
  <span className="text-yellow-400 font-semibold">TecnoSphere</span>,{" "}
  <span className="text-pink-400 font-semibold">DevelopersHub</span>, and{" "}
  <span className="text-cyan-400 font-semibold">WALEE</span>, delivering scalable and maintainable solutions in agile, fast-paced environments.
</p>

                <p>
                  Committed to building clean, performant, and user-centric applications with a focus on usability, performance, and long-term growth.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3 mx-auto">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Personal Interests
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent size={18} />
                      <span className="font-medium text-sm">{interest.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Professional Quote */}
          
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5%, 5%) rotate(2deg); }
          50% { transform: translate(10%, 0) rotate(0deg); }
          75% { transform: translate(5%, -5%) rotate(-2deg); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;