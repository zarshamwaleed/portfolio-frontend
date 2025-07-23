import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { FiDownload, FiArrowRight, FiCode, FiServer, FiGlobe, FiAward, FiTrendingUp, FiUsers, FiTarget, FiZap } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from "react-icons/fa";
import { 
  ChevronDown, 
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
  Calendar,
  Award,
  TrendingUp,
  Coffee,
  Clock,
  CheckCircle
} from 'lucide-react';

const ProfessionalHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React.js Specialist",
    "UI/UX Designer",
    "Team Leader"
  ];

  const rotatingStats = [
    { number: "50+", label: "Projects Delivered", icon: <Briefcase className="w-4 h-4" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-4 h-4" /> },
    { number: "24/7", label: "Availability", icon: <Clock className="w-4 h-4" /> },
    { number: "15+", label: "Technologies", icon: <Code className="w-4 h-4" /> }
  ];

const expertise = [
  {
    name: "Frontend Development",
    level: "95%",
    icon: <Code className="w-5 h-5 text-white" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Backend Systems",
    level: "88%",
    icon: <Database className="w-5 h-5 text-white" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "UI/UX Design",
    level: "85%",
    icon: <Palette className="w-5 h-5 text-white" />,
    gradient: "from-pink-500 to-purple-500"
  },
  {
    name: "Team Leadership",
    level: "82%",
    icon: <Users className="w-5 h-5 text-white" />,
    gradient: "from-orange-500 to-red-500"
  }
];

  const recentWork = [
    {
      title: "E-Commerce Platform",
      tech: "React, Node.js, PostgreSQL",
      status: "Recently Completed",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "SaaS Dashboard",
      tech: "Next.js, TypeScript, Prisma",
      status: "In Development",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Mobile App Design",
      tech: "React Native, Figma",
      status: "Design Phase",
      gradient: "from-pink-500 to-rose-600"
    }
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

    return () => {
      clearInterval(roleInterval);
      clearInterval(statInterval);
    };
  }, []);

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, text: "50+ Projects", color: "text-yellow-400" },
    { icon: <Star className="w-6 h-6" />, text: "4.9/5 Rating", color: "text-blue-400" },
    { icon: <Award className="w-6 h-6" />, text: "AWS Certified", color: "text-green-400" }
  ];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Greeting */}
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-semibold">Available for Work</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Gujranwala, PK</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  Hello, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Alex Chen
                  </span>
                </h1>
                
                <div className="text-2xl lg:text-3xl text-slate-300 mb-6 min-h-[2.5rem]">
                  <span className="inline-block">
                    {roles[currentRole]}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-6">
                  Passionate full-stack developer with expertise in modern web technologies. 
                  I create exceptional digital experiences through clean code, innovative design, 
                  and strategic thinking. Currently building the future, one line of code at a time.
                </p>
                
                {/* Rotating Stat */}
                <div className="inline-flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                  <div className="text-blue-400">
                    {rotatingStats[currentStat].icon}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">{rotatingStats[currentStat].number}</span>
                    <span className="text-slate-400 ml-2">{rotatingStats[currentStat].label}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className={achievement.color}>
                        {achievement.icon}
                      </div>
                      <span className="text-white font-medium text-sm">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Work Preview */}
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Recent Work</h3>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group">
                      View All
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {recentWork.map((work, index) => (
                      <div key={index} className="group p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{work.title}</h4>
                            <p className="text-slate-400 text-sm">{work.tech}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${work.gradient} text-white`}>
                            {work.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-white/30 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className={`flex items-center gap-6 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-slate-400 text-sm font-medium">Connect with me:</span>
                <div className="flex gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, color: "hover:text-gray-400" },
                    { icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-400" },
                    { icon: <Mail className="w-5 h-5" />, color: "hover:text-green-400" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-3 bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 text-slate-400 ${social.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Skills & Visual */}
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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
    <p className="text-slate-300 text-sm">Open to new opportunities</p>
  </div>

 {/* Expertise Levels */}
<h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>

<div className="space-y-5">
  {expertise.map((skill, index) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
      className="space-y-2"
    >
      {/* Skill Title + Expert Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Icon with gradient background */}
          <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient}`}>
            {skill.icon}
          </div>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-slate-400 text-sm font-medium">{skill.level}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: skill.level }}
          transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
          className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.gradient}`}
        />
      </div>
    </motion.div>
  ))}
</div>

  {/* Bottom Certification Badge */}
  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50/10 to-purple-50/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/20 dark:border-blue-700/30">
    <div className="flex items-center justify-center">
      <FiAward className="w-5 h-5 text-blue-400 mr-2" />
      <span className="text-sm font-medium text-blue-200">
        Certified AWS Solutions Architect
      </span>
    </div>
  </div>

  {/* Floating Badges */}
  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -bottom-4 -left-4 bg-white/5 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-white/10"
  >
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm font-medium text-white">Currently building</span>
    </div>
    <p className="text-xs text-slate-400 mt-1">Next.js 14 Project</p>
  </motion.div>

  <motion.div
    animate={{ y: [10, -10, 10] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-4 -right-4 bg-white/5 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-white/10"
  >
    <div className="flex items-center space-x-2">
      <FiTrendingUp className="w-4 h-4 text-purple-400" />
      <span className="text-sm font-medium text-white">Growth Rate</span>
    </div>
    <p className="text-xs text-slate-400 mt-1">150% YoY</p>
  </motion.div>
</div>
                {/* Floating Elements */}
                {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl opacity-80 animate-bounce delay-1000"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-60 animate-pulse"></div> */}
              </div>
            </div>
          </div>

          {/* Bottom Preview Section - What's Coming Next */}
          <div className={`mt-16 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30 mb-6">
                <FiZap className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 font-medium">What's Next?</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Portfolio Showcase</h3>
                  <p className="text-slate-400 text-sm">Explore my latest projects and case studies</p>
                </div>
                
                <div className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Client Testimonials</h3>
                  <p className="text-slate-400 text-sm">See what clients say about working with me</p>
                </div>
                
                <div className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Success Metrics</h3>
                  <p className="text-slate-400 text-sm">Discover the impact of my work with real data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={scrollToContent}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">More amazing content below</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
              </div>
              <div className="p-3 rounded-full border-2 border-slate-600 group-hover:border-slate-400 transition-all duration-300 group-hover:bg-white/5">
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
              <div className="text-xs text-slate-500 mt-1">Portfolio • Testimonials • Process</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHero;