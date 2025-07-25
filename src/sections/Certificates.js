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
      description:
        "This certification covers the fundamentals of C programming, including data types, control structures, functions, and pointers. It equips learners with the skills to build efficient and structured programs in C.",
      certificate: "C_certificate.pdf",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["Artificial Intelligence (AI)"],
      description:
        "This certification provides a foundational understanding of Artificial Intelligence, including key concepts like machine learning, neural networks, and intelligent systems.",
      certificate: "AI_Certificate.pdf",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 3,
      title: "Python",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["Python (Programming Language)"],
      description:
        "This certification provides a beginner-friendly introduction to Python, covering basic syntax, data structures, and programming concepts.",
      certificate: "python_certificate.pdf",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
    },
    {
      id: 4,
      title: "UI/UX Design",
      issuer: "Simplilearn",
      issueDate: "December 2023",
      skills: ["User Interface Design", "Graphic Design"],
      description:
        "This certification introduces the principles of graphic design along with UI/UX basics, focusing on layout, color theory, and user-centered design.",
      certificate: "UI_Certificate.pdf",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-pink-700",
    },
  ];

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(30,30,30), rgb(45,45,45), rgb(10,10,10))",
      }}
    >
      {/* ✅ HEADER */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Certifications.jsx
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my commitment to continuous learning and professional
            development through industry-recognized certifications.
          </p>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 mx-auto rounded-full" />
        </div>
      </section>

      {/* ✅ CERTIFICATIONS GRID */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-xl border border-white/10 bg-gray-900/50 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-500 p-6 backdrop-blur-sm"
            >
              {/* Gradient Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} rounded-t-xl`}
              ></div>

              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.issueDate}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Bottom Section */}
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div className="flex items-center text-gray-400 text-xs">
                  <FileText className="w-4 h-4 mr-1" />
                  {cert.certificate}
                </div>
                <a
                  href={`/${cert.certificate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white text-sm font-semibold hover:shadow-md hover:scale-105 transition-all duration-300`}
                >
                  <Download className="w-4 h-4" />
                  <span>View Certificate</span>
                </a>
              </div>

              {/* Hover Glow */}
              {hoveredCard === cert.id && (
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.color} opacity-10 blur-xl transition`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ SUMMARY STATS */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/40 p-8 rounded-xl border border-white/10">
            <h3 className="text-4xl font-bold text-white">{certifications.length}</h3>
            <p className="text-gray-400 mt-2">Professional Certifications</p>
          </div>
          <div className="bg-gray-800/40 p-8 rounded-xl border border-white/10">
            <h3 className="text-4xl font-bold text-white">4+</h3>
            <p className="text-gray-400 mt-2">Technical Skills</p>
          </div>
          <div className="bg-gray-800/40 p-8 rounded-xl border border-white/10">
            <h3 className="text-4xl font-bold text-white">2023</h3>
            <p className="text-gray-400 mt-2">Latest Certification Year</p>
          </div>
        </div>
      </section>

      {/* ✅ CALL TO ACTION */}
      <section className="relative py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to See How I Apply These Skills?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          My certifications reflect a continuous journey of learning and
          improvement. Check out my projects to see these skills in action.
        </p>
        <Link to="/projects">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-700 to-black-300 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300">
            View My Projects
          </button>
        </Link>
      </section>
    </div>
  );
};

export default CertificationPage;
