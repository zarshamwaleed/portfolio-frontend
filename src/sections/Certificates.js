import React, { useState } from 'react';
import { Calendar, Download, Award, Code, Brain, Palette, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
const CertificationPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "C Programming",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["C (Programming Language)"],
      description: "This certification covers the fundamentals of C programming, including data types, control structures, functions, and pointers. It equips learners with the skills to build efficient and structured programs in C.",
      certificate: "C_certificate.pdf",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["Artificial Intelligence (AI)"],
      description: "This certification provides a foundational understanding of Artificial Intelligence, including key concepts like machine learning, neural networks, and intelligent systems. It equips learners with the skills to apply AI techniques in real-world scenarios.",
      certificate: "AI_Certificate.pdf",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 3,
      title: "Python",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["Python (Programming Language)"],
      description: "This certification provides a beginner-friendly introduction to Python, covering basic syntax, data structures, and programming concepts. It helps learners build a strong foundation for writing and understanding Python code.",
      certificate: "python_certificate.pdf",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 4,
      title: "UI/UX Design",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["User Interface Design", "Graphic Design"],
      description: "This certification introduces the principles of graphic design along with the basics of UI/UX, focusing on layout, color theory, and user-centered design. It prepares learners to create visually appealing and user-friendly digital interfaces.",
      certificate:"UI_Certificate.pdf",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-600 to-pink-800",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Certifications.jsx
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing my commitment to continuous learning and professional development 
              through industry-recognized certifications and specialized training programs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Certifications Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-slate-300 rotate-45"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 border border-slate-300 rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 border border-slate-200 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 border border-slate-200 rotate-45"></div>
          
          {/* Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 right-10 w-6 h-6 bg-blue-100 rounded-full animate-pulse"></div>
          <div className="absolute bottom-60 left-40 w-4 h-4 bg-purple-100 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 right-60 w-5 h-5 bg-green-100 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-pink-100 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${cert.borderColor} overflow-hidden`}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 bg-white/95 backdrop-blur-sm">
                {/* Subtle Pattern Overlay for Each Card */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${cert.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${cert.id})`} className="text-slate-400"/>
                  </svg>
                </div>
                {/* Icon and Title */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${cert.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-gradient bg-gradient-to-r ${cert.color} bg-clip-text`}>
                        {cert.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  {/* Certificate Badge */}
                  <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-700">{cert.issueDate}</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="relative mb-6">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${cert.color} text-white shadow-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="relative text-slate-600 leading-relaxed mb-8 text-base z-10">
                  {cert.description}
                </p>

                {/* Certificate Download */}
                <div className="relative flex items-center justify-between pt-6 border-t border-slate-200 z-10">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">{cert.certificate}</span>
                  </div>
                  
                <a
  href={`/${cert.certificate}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
>
  <Download className="w-4 h-4" />
  <span className="font-medium">View Certificate</span>
</a>

                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">{certifications.length}</div>
              <div className="text-slate-300 font-medium">Professional Certifications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-slate-300 font-medium">Technical Skills</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-2">2023</div>
              <div className="text-slate-300 font-medium">Latest Certification Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Committed to Continuous Learning
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            These certifications represent my dedication to staying current with industry standards 
            and best practices in technology and design.
          </p>
         <Link to="/projects">
  <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    View All Projects
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;