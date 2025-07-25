import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaBrain, FaPalette } from "react-icons/fa"; // ✅ Palette & Brain from Font Awesome

import {
  FiCpu,
  FiCloud,
  FiSettings,
  FiCode,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiServer,
  FiGlobe,
  FiTool,
  FiAward,
  FiTrendingUp
} from "react-icons/fi";



const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: <FiMonitor />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, experience: "2+ years" },
        { name: "JavaScript", level: 93, experience: "2+ years" },
        { name: "HTML", level: 98, experience: "2+ years" },
        { name: "CSS", level: 97, experience: "2+ years" },
        { name: "Tailwind CSS", level: 96, experience: "2+ years" },
        { name: "Responsive Web Design", level: 100, experience: "2+ years" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <FiServer />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, experience: "2+ years" },
        { name: "Express.js", level: 95, experience: "2+ years" },
        { name: "Python", level: 93, experience: "2+ years" },
        { name: "Java", level: 91, experience: "2+ years" },
        { name: "C++", level: 94, experience: "2+ years" },
        { name: "C Programming", level: 94, experience: "2+ years" }
      ]
    },
    database: {
      title: "Database & Storage",
      icon: <FiDatabase />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 91, experience: "2+ years" },
        { name: "MySQL", level: 97, experience: "2+ years" },
        { name: "PL/SQL", level: 93, experience: "2+ years" }
      ]
    },

    technologies: {
      title: "Technologies & Frameworks",
      icon: <FiLayers />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Java Swing", level: 78, experience: "1+ years" },
        { name: "raylib", level: 88, experience: "1+ years" },
        { name: "Assembly Language", level: 68, experience: "1+ years" },
        { name: "Full-Stack Development", level: 97, experience: "2+ years" }
      ]
    },

  };

  const projects = [
  
    {
      name: "EDULEARN – Learning Management System",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full-Stack"
    },
       {
      name: "Invoice Generator",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Full-Stack"
    },
    {
      name: "Traffic Simulation System",
      technologies: ["C++", "Raylib"],
      category: "System Programming"
    },
    {
      name: "E-commerce Platform",
      technologies: ["PHP", "MySQL"],
      category: "Web Development"
    },
    {
      name: "Flight Management System",
      technologies: ["Java", "Java Swing"],
      category: "Desktop Application"
    },
    {
      name: "Restaurant Billing System",
      technologies: ["C Programming","Raylib"],
      category: "System Programming"
    }
  ];

  const experience = {
    company: "TecnoSphere & DevelopersHub",
    position: "Full-Stack Developer",
    duration: "Current Position",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"]
  };

  const education = {
    institution: "National University of Sciences and Technology (NUST)",
    degree: "Bachelor's in Computer Science",
    status: "Current Student"
  };

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FiGlobe /> },
    { id: 'frontend', name: 'Frontend', icon: <FiMonitor /> },
    { id: 'backend', name: 'Backend', icon: <FiServer /> },
    { id: 'database', name: 'Database', icon: <FiDatabase /> },
    { id: 'technologies', name: 'Tech Stack', icon: <FiLayers /> }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData);
    }
    return Object.entries(skillsData).filter(([key]) => key === activeCategory);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

return (
<section
  className="min-h-screen py-20 text-white relative"
  style={{
    background: "linear-gradient(to bottom right, #2a2a2a, #3a3a3a, #252525)"
  }}
>

    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-600/10 rounded-full filter blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-4">
  show
  <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
    Tech
  </span>
  <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
    Skills
  </span>()
</h1>


        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical expertise, developed through hands-on experience 
          in full-stack development, system programming, and modern web technologies.
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {/* Experience */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FiAward className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-white">Current Role</h3>
              <p className="text-sm text-gray-300">{experience.duration}</p>
            </div>
          </div>
          <h4 className="font-bold text-lg text-white">{experience.position}</h4>
          <p className="text-gray-300 mb-3">{experience.company}</p>
          <div className="flex flex-wrap gap-1">
            {experience.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <FiTool className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-white">Education</h3>
              <p className="text-sm text-gray-300">{education.status}</p>
            </div>
          </div>
          <h4 className="font-bold text-lg text-white">{education.degree}</h4>
          <p className="text-gray-300">{education.institution}</p>
        </div>

        {/* Projects */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <FiTrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-white">Portfolio</h3>
              <p className="text-sm text-gray-300">Major Projects</p>
            </div>
          </div>
          <h4 className="font-bold text-lg text-white">10+ Projects</h4>
          <p className="text-gray-300">Full-Stack & System Programming</p>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
       <button
  key={category.id}
  onClick={() => setActiveCategory(category.id)}
  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
    activeCategory === category.id
      ? 'bg-gradient-to-r from-orange-500 via-orange-700 to-black-300 text-white shadow-lg scale-105'
      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
  }`}
>

            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
      >
        {getFilteredSkills().map(([categoryKey, categoryData]) => (
          <motion.div
            key={categoryKey}
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center mb-8">
              <div className={`w-14 h-14 bg-gradient-to-r ${categoryData.color} rounded-2xl flex items-center justify-center text-white text-xl`}>
                {categoryData.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">
                  {categoryData.title}
                </h3>
                <p className="text-gray-300">
                  {categoryData.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {categoryData.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="ml-2 text-sm text-gray-400">
                        {skill.experience}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isMounted ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${categoryData.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl"
      >
        <div className="text-center mb-8">
         <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-700 to-blackbg-clip-text text-white">
  Featured Projects
</h2>

          <p className="text-gray-300">
            Some of Real-world applications built with these technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <h4 className="font-bold text-lg text-white mb-2">{project.name}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.category}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600  text-blue-300 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default Skills;