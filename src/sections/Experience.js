import React, { useState, useEffect } from 'react';
import { Calendar, Code, Users, Palette, Building, Star, Award, Clock } from 'lucide-react';

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const experiences = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Tecno Sphere",
    type: "Internship",
    duration: "Jul 2025 - Present · 1 mo",
    current: true,
    description:
      "Worked on developing scalable web applications using the MERN stack. Focused on backend APIs, database design, and frontend integration with React.",
    skills: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
    ],
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "DevelopersHub Corporation©",
    type: "Internship",
    duration: "Jul 2025 - Present · 1 mo",
    current: true,
    description:
      "Contributing to full-stack development projects, handling both frontend (React.js + Tailwind) and backend APIs with Node.js and MongoDB.",
    skills: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
    ],
    icon: <Code className="w-5 h-5" />,
    color: "from-green-500 to-blue-600",
  },
  {
    id: 3,
    title: "Human Resources Executive",
    company: "NUST Adventure Club",
    type: "Leadership Role",
    duration: "Sep 2024 - Present · 11 mos",
    current: true,
    description:
      "As an HR representative at the NUST Adventure Club, I am responsible for managing member engagement, facilitating communication between the executive team and members, and coordinating recruitment and onboarding processes. I contribute to organizing events, maintaining a positive team culture, and ensuring smooth internal operations. My role focuses on promoting collaboration, enhancing team dynamics, and supporting the club's mission to foster adventure, exploration, and student involvement.",
    skills: [
      "Team Leadership",
      "Event Management",
      "Communication",
      "Recruitment",
      "Team Building",
    ],
    icon: <Users className="w-5 h-5" />,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WALEE",
    type: "Internship",
    duration: "Jun 2024 - Aug 2024 · 3 mos",
    current: false,
    description:
      "Worked on building and optimizing user interfaces using React.js, HTML, and CSS. Collaborated with the development team to implement responsive designs, improve UI/UX, and maintain component-based architecture for web applications.",
    skills: ["React.js", "HTML", "CSS", "UI/UX Design", "Responsive Design"],
    icon: <Palette className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
  },
];


  const stats = [
    { number: 4, label: "Positions Held", icon: <Building className="w-6 h-6" /> },
    { number: 3, label: "Current Roles", icon: <Star className="w-6 h-6" /> },
    { number: 11, label: "Months Experience", icon: <Clock className="w-6 h-6" /> },
    { number: 4, label: "Companies", icon: <Award className="w-6 h-6" /> }
  ];

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, value, duration]);

    return <span>{count}</span>;
  };

return (
  <div 
  className="relative min-h-screen py-12 text-white"
  style={{
    background: "linear-gradient(to bottom right, rgb(30,30,30), rgb(45,45,45), rgb(10,10,10))"
  }}
>
  {/* Decorative Blurred Background Blobs (exact same style as first snippet) */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
<header className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mb-4 tracking-tight font-mono">
    fetchExperience()
  </h1>

  <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
    Showcasing expertise in full-stack development and leadership
  </p>
</header>


    {/* Stats Section */}
    <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.number} />
              </div>
              <div className="text-slate-400 uppercase text-sm font-medium tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Experience Cards */}
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${500 + index * 150}ms` }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

            {/* Current role indicator */}
            {exp.current && (
              <div className="absolute top-20 right-9 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Current
                </span>
              </div>
            )}

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                    <div className="text-white">
                      {exp.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-xl text-slate-300 font-semibold mb-2">{exp.company}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${exp.color} shadow-lg`}>
                  {exp.type}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-slate-300 bg-slate-800/50 border border-slate-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* Description */}
            {exp.description && (
              <div className="mb-6">
                <p className="text-slate-300 leading-relaxed text-base">
                  {exp.description}
                </p>
              </div>
            )}

            {/* Skills */}
            {exp.skills && (
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium hover:from-pink-500/30 hover:to-violet-500/30 hover:border-pink-500/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-8"></div>
      <p className="text-slate-400 text-sm">
        Crafted with passion and precision • Always learning, always growing
      </p>
    </div>
  </div>
</div>

);

};

export default ExperiencePage;