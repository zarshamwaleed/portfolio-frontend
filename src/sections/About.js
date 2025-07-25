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
    <section
      id="about"
      className="relative min-h-screen py-24 overflow-hidden text-white"
      style={{
        background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
      }}
    >
      {/* 🎨 Full Background: Clean Dark Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background: "linear-gradient(to bottom right, #1e1e1e, #2d2d2d, #0a0a0a)"
          }}
        ></div>

        {/* 🔲 Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
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
                className="text-gray-700"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* 💠 Corner Accents */}
        <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-blue-800 opacity-20 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-purple-800 opacity-20 rounded-br-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
  WhoAmI()
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Photo + Traits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-xl -rotate-12"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800">
                <img src={profilePic} alt="Professional Headshot" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-extrabold text-orange-600 font-[Orbitron] drop-shadow-md">
                    Zarsham Waleed
                  </h3>
                  <p className="text-lg font-semibold text-orange-600 tracking-wide font-[Poppins] drop-shadow-sm">
                    Full-Stack | App Developer
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-200">Available</span>
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
    ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white shadow-lg'
    : 'bg-gray-800 hover:bg-gray-700 text-gray-200 shadow-md'
}`}
onMouseEnter={() => setActiveCard(index)}

                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        activeCard === index ? 'bg-white/20' : 'bg-blue-900/30'
                      }`}>
                        <IconComponent size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{trait.title}</h4>
                        <p className="text-sm">{trait.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Interests + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Interests */}
            <div className="space-y-4">
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
  Areas of Interest
</h3>

              <ul className="space-y-3">
                {interests.map((interest, index) => (
                  <li key={index} className="flex items-center space-x-3 text-lg text-gray-300">
                    <interest.icon size={22} className="text-orange-500" />
                    <span>{interest.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-gray-800 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="text-4xl text-blue-500">{stat.icon}</div>
                  <div className="text-3xl font-semibold">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
