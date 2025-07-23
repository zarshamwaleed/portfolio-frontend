import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiArrowRight,
  FiCode,
  FiGlobe,
  FiAward,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code,
  Database,
  Palette,
  Users,
  ArrowRight,
  Star,
  Trophy,
  Briefcase,
  Award,
  Clock,
} from "lucide-react";

const ProfessionalHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const roles = [
    "Full-Stack Developer",
    "App Developer",
    "Web-Developer",
    "React.js Specialist",
    "UI/UX Designer",
    "Team Leader",
  ];

  const rotatingStats = [
    {
      number: "10+",
      label: "Projects Delivered",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Star className="w-4 h-4" />,
    },
    {
      number: "24/7",
      label: "Availability",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      number: "15+",
      label: "Technologies",
      icon: <Code className="w-4 h-4" />,
    },
  ];

  const expertise = [
    {
      name: "Frontend Development",
      level: "99%",
      icon: <Code className="w-5 h-5 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Systems",
      level: "95%",
      icon: <Database className="w-5 h-5 text-white" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Database",
      level: "97%",
      icon: <Palette className="w-5 h-5 text-white" />,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "App Development",
      level: "85%",
      icon: <Users className="w-5 h-5 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const recentWork = [
    {
      title: "Invoice Generator",
      tech: "React, Node.js, Express, MongoDB",
      status: "Recently Completed",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Traffic Simulation System",
      tech: "C++, Raylib, DSA, AI",
      status: "Completed",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Learning Management System",
      tech: "React, Node.js, Express, MongoDB",
      status: "Backend in progress",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "10+ Projects",
      color: "text-yellow-400",
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "4.9/5 Rating",
      color: "text-blue-400",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "BSc in CS",
      color: "text-blue-400",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Rotate roles
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Rotate stats
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % rotatingStats.length);
    }, 2000);

    // Scroll listener for scroll indicator visibility
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition > heroHeight - 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(roleInterval);
      clearInterval(statInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden text-[90%] m-0 p-0 mt-0 pt-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-50'></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {/* Greeting */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-semibold">
                      Available for Work
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Gujranwala / Islamabad, PK
                    </span>
                  </div>
                </div>

                <h5 className="text-2xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Hello, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  <i>Zarsham Waleed</i>  
                  </span>
                </h5>

                <div className="text-2xl lg:text-3xl text-slate-300 mb-6 min-h-[2.5rem]">
                  <span className="inline-block">
                    {roles[currentRole]}
                    <span className="animate-pulse"></span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-6">
                  Versatile full-stack web and mobile app developer specializing
                  in building robust, scalable, and user-focused digital
                  solutions. With a strong foundation in modern technologies and
                  clean architecture, I deliver high-performance applications
                  that drive impact and elevate user experience. Dedicated to
                  continuous improvement and innovation in every line of code.
                </p>

                {/* Rotating Stat */}
                <div className="inline-flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                  <div className="text-blue-400">
                    {rotatingStats[currentStat].icon}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {rotatingStats[currentStat].number}
                    </span>
                    <span className="text-slate-400 ml-2">
                      {rotatingStats[currentStat].label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={achievement.color}>
                        {achievement.icon}
                      </div>
                      <span className="text-white font-medium text-sm">
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Work */}
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      Recent Work
                    </h3>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group">
                      View All
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {recentWork.map((work, index) => (
                      <div
                        key={index}
                        className="group p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                              {work.title}
                            </h4>
                            <p className="text-slate-400 text-sm">
                              {work.tech}
                            </p>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${work.gradient} text-white`}
                          >
                            {work.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Link to="/projects">
                  <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                <a
                  href="/Zarsham-Resume.pdf"
                  download
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-white/30 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div
                className={`flex items-center gap-6 transition-all duration-1000 delay-1100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-slate-400 text-sm font-medium">
                  Connect with me:
                </span>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      color: "hover:text-gray-400",
                      href: "https://github.com/",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      color: "hover:text-blue-400",
                      href: "https://www.linkedin.com/in/zarsham-waleed-8376bb35b/",
                    },
                   {
  icon: <Mail className="w-5 h-5" />,
  color: "hover:text-green-400",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=zarshamwaleedbutt@gmail.com&su=Let's%20Connect&body=Hi%20Zarsham%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0ARegards%2C"
},

                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 text-slate-400 ${social.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-3 bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 text-slate-400 ${social.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg -translate-y-1`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative">
                  {/* Profile Section */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <FiCode className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4">
                      Available for Projects
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Open to new opportunities
                    </p>
                  </div>

                  {/* Expertise Levels */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Core Expertise
                  </h3>
                  <div className="space-y-5">
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient}`}
                            >
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-slate-400 text-sm font-medium">
                            {skill.level}
                          </span>
                        </div>
                        <div className="relative w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: skill.level }}
                            transition={{
                              duration: 1,
                              delay: 0.6 + index * 0.2,
                            }}
                            className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.gradient}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Certification Badge */}
                  {/* Bottom Info Badges */}
                  <div className="mt-8 space-y-3">
                    {/* CS Degree */}
                    <div className="p-4 bg-gradient-to-r from-green-50/10 to-teal-50/10 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-200/20 dark:border-green-700/30">
                      <div className="flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-sm font-medium text-green-200">
                          Pursuing Bachelor's in Computer Science
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50/10 to-pink-50/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-pink-200/20 dark:border-pink-700/30">
                      <div className="flex items-center justify-center">
                        <FiTrendingUp className="w-5 h-5 text-pink-400 mr-2" />
                        <span className="text-sm font-medium text-pink-200">
                          Lifelong Learner & Problem Solver
                        </span>
                      </div>
                    </div>

                    {/* MERN Stack */}
                    <div className="p-4 bg-gradient-to-r from-indigo-50/10 to-cyan-50/10 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-xl border border-cyan-200/20 dark:border-cyan-700/30">
                      <div className="flex items-center justify-center">
                        <FiCode className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-sm font-medium text-cyan-200">
                          MERN Stack Developer
                        </span>
                      </div>
                    </div>

                    {/* Lifelong Learner */}
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -left-4 
    bg-gradient-to-r from-green-400/80 via-emerald-500/80 to-teal-500/80
    backdrop-blur-md 
    p-4 rounded-xl shadow-2xl border border-white/20 
    dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></div>
                      <span className="text-sm font-medium text-white drop-shadow-sm">
                        Currently building
                      </span>
                    </div>
                    <p className="text-xs text-white/80 mt-1 ml-4">
                      MERN Project
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 
    bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-fuchsia-500/90
    backdrop-blur-md 
    p-4 rounded-xl shadow-2xl border border-white/20 
    dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-2">
                      <FiTrendingUp className="w-4 h-4 text-white drop-shadow-sm" />
                      <span className="text-sm font-medium text-white drop-shadow-sm">
                        Keep Building
                      </span>
                    </div>
                    <p className="text-xs text-white/80 mt-1 ml-2">
                      Every line of code counts
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (only shows in hero section) */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
        >
       
         
         
        </button>
      </div>
    </div>
  );
};

export default ProfessionalHero;
