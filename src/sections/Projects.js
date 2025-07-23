import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Cpu, Palette, ShoppingCart, GraduationCap, Car, Plane, Utensils, X } from 'lucide-react';
// ✅ Hijab PK Images
import hijab1 from "../images/hijab1.png";
import hijab2 from "../images/hijab2.png";
import hijab3 from "../images/hijab3.png";
import hijab4 from "../images/hijab4.png";

// ✅ Invoice Generator Images
import invoice1 from "../images/invoice1.png";
import invoice2 from "../images/invoice2.png";
import invoice3 from "../images/invoice3.png";
import invoice4 from "../images/invoice4.png";
import invoice5 from "../images/invoice5.png";
import invoice6 from "../images/invoice6.png";
import invoice7 from "../images/invoice7.png";

// ✅ EduLearn Images
import edu1 from "../images/lms1.jpeg";
import edu2 from "../images/lms2.jpeg";
import edu3 from "../images/lms3.jpeg";
import edu4 from "../images/lms4.jpeg";
import edu5 from "../images/lms5.jpeg";

// ✅ Traffic Simulation Images
import traffic1 from "../images/traffic1.jpeg";
import traffic2 from "../images/traffic2.jpeg";
import traffic3 from "../images/traffic3.jpeg";

// ✅ Flight Management Images
import flight1 from "../images/flight1.jpeg";
import flight2 from "../images/flight2.jpeg";
import flight3 from "../images/flight3.jpeg";
import flight4 from "../images/flight4.jpeg";
import flight5 from "../images/flight5.jpeg";
import flight6 from "../images/flight6.jpeg";
import flight7 from "../images/flight7.jpeg";

// ✅ E-Commerce Platform Images
import ecom1 from "../images/ecom1.jpeg";
import ecom2 from "../images/ecom2.jpeg";
import ecom3 from "../images/ecom3.jpeg";
import ecom4 from "../images/ecom4.jpeg";
import ecom5 from "../images/ecom5.jpeg";

const ProjectsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample image URLs - replace these with your actual image URLs
 const projectImages = {
  1: [hijab1, hijab2, hijab3, hijab4],
  2: [invoice1, invoice2, invoice3, invoice4, invoice5, invoice6,invoice7],
  3: [edu1, edu2, edu3, edu4, edu5],
  4: [traffic1, traffic2, traffic3],
  5: [flight1, flight2, flight3, flight4, flight5, flight6, flight7],
  6: [ecom1, ecom2, ecom3, ecom4, ecom5]
};


  const imageDescriptions = {
    1: [
      "The Home page of Hijab PK serves as a visually appealing landing page, welcoming users with featured collections, highlighted products, and promotional banners. It provides quick navigation to different categories, ensuring a smooth shopping experience right from the start. Designed with React and Tailwind CSS, it is fully responsive, offering an elegant and user-friendly interface across all devices.",
      "The Shop page of Hijab PK offers a clean and organized product display with filter options to help users browse by categories, styles, or preferences. Shoppers can easily view product details, add items to their wishlist, or directly to the cart. Built with React and Tailwind CSS, the page ensures a seamless, responsive, and user-friendly shopping experience across all devices.",
      "The About page of Hijab PK introduces the brand’s vision of providing stylish and modest fashion for everyone. It highlights the platform’s mission, core values, and commitment to quality. Designed with a clean and minimal layout, it creates a professional and welcoming feel, ensuring users connect with the brand’s story. Built with React and Tailwind CSS, it maintains full responsiveness across all devices.",
      "The Contact page of Hijab PK provides users with an easy way to get in touch for inquiries, feedback, or support. It features a simple and responsive contact form, along with essential contact details and social media links for quick communication."
    ],
    2: [
      "The Home page of Invoice Generator is a simple, user-friendly interface dedicated to creating new invoices. It allows users to enter client details, add products or services, apply taxes, and generate an invoice instantly. Users can also customize dynamic labels and upload logos for branding. Once completed, the invoice can be saved, edited later, or downloaded as a PDF. Designed with a clean and responsive layout, it ensures a smooth and efficient invoice creation process across all devices.",
      "The History page lets users view and manage all invoices in one place. They can edit existing invoices, delete unwanted ones, and see detailed product information. It also allows exporting invoice details to Excel sheets for easy record-keeping. With quick search and filter options, users can efficiently find and manage invoices. The page is clean, responsive, and easy to use.",
      "The PDF feature lets users generate professional, printable invoices instantly. It includes client details, product lists, totals, and dynamic labels with a customizable layout. Users can also add company logos (JPEG, PNG, AVIF) for branding. The PDF is clean, well-structured, and can be saved or shared easily for quick invoicing.",
      "The Thank You page appears after creating an invoice, allowing users to share the invoice across multiple apps, quickly edit the invoice if needed, or navigate to the History page to view and manage all invoices. It provides a smooth post-creation workflow with clear options for next actions.",
      "The PDF reflects all custom label changes made on the Home page, ensuring the generated invoice matches the user’s preferred terminology. Whether renaming fields like “Client Name” or “Service Details,” the PDF updates dynamically, maintaining a professional and personalized look for each invoice.",
      "The PDF reflects all custom label changes made on the Home page, ensuring the generated invoice matches the user’s preferred terminology. Whether renaming fields like “Client Name” or “Service Details,” the PDF updates dynamically, maintaining a professional and personalized look for each invoice.",
      "The My Invoices page lets users easily view all created invoices, with options to edit details, delete unwanted invoices, download them as PDFs, and mark them as paid or unpaid. It provides a clear, organized layout with quick actions for efficient invoice management."
    ],
   3: [
    "This is a student dashboard interface from the EduLearn platform. It shows user profile details, course statistics (enrolled, in progress, completed), and a list of enrolled courses with progress indicators.",
    "Developed an interactive Instructor Dashboard for EduLearn to manage courses, track student engagement, revenue, and course performance.Features real-time analytics, course management options, and personalized greetings for an enhanced teaching experience.",
    "Designed the About/Intro page for EduLearn to highlight the platform’s mission, instructor quality, and flexible learning benefits.",
    "Built a responsive course listing page for EduLearn, showcasing featured courses with categories, pricing, ratings, and enrollment options.",
    "The EduLearn home page provides easy access to login, explore available courses, and learn more through the About section.It offers a user-friendly gateway to start learning, track progress, and connect with educational opportunities."
    ],
    4: [
    "This visual module displays a real-time traffic simulation map with dynamic vehicle movement, traffic lights, and weighted routes between intersections. It supports intelligent routing and signal coordination for enhanced traffic flow analysis.",
    "This module prompts users to select a starting location from a list of 24 predefined areas to initiate the traffic simulation. It supports route configuration for accurate and location-based traffic flow modeling.",
    "This module enables users to select their vehicle type for traffic flow simulation, supporting various vehicle categories. It forms the input interface for dynamic traffic management in the Traffic Congestion Control System."
    ],
      5: [
    "Flights schedule page where admin can add, remove or update flights",
    "Admin page where admin can see flights schedule, registered account and much more.",
    "Flight Schedule page displays real-time flight timings, routes, and availability for easy planning and management.",
    "account page where passenger can either book flights, flight schedule, already booked flights and much more.",
    "signup page where new users can create account.",
    "Home page where user can gain access through as admin or passenger .",
    "login page where already registered accounts can login."
    ],
      6: [
  "Sellers can input product details like name, ID, price, and image to list new items. A simple form ensures easy and efficient product uploads.",
  "This page provides sellers with quick navigation to add, manage, and view remaining products. It's a central hub for all product-related actions.",
  "New users can register by providing their email, password, and full name. It includes a terms agreement checkbox and a link to the login page for existing users.",
  "This page allows existing users to securely log in using their email and password. It includes options for remember me, password recovery, and a link to sign up.",
  "This is the homepage of ShopSphere, an intuitive e-commerce platform offering a seamless shopping experience. Users can explore products, shop instantly, or register as sellers to start selling online."
    ],
  };

const projects = [
    {
      id: 1,
      title: "Hijab PK",
      subtitle: "E-Commerce Platform for Modest Fashion",
      description: "A modern web-based eCommerce platform designed for selling hijabs and modest fashion items. Features a comprehensive shopping experience with product filters, wishlist functionality, and seamless cart management.",
      longDescription: "Built with React and Tailwind CSS, this fully responsive platform includes a modern homepage showcasing collections, advanced product filtering for easy browsing, wishlist management, and an intuitive right-side cart drawer for seamless shopping experience.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML"],
      category: "fullstack",
      type: "E-Commerce",
      duration: "Jul 2025",
      liveUrl: "https://hijabhouse.netlify.app/",
      features: ["Responsive Design", "Product Filters", "Wishlist System", "Cart Management", "Modern UI/UX"],
      icon: ShoppingCart,
      gradient: "from-pink-500 to-purple-600",
      images: ["hijab_contact.png", "hijab_about.png", "hijab_shop.png"]
    },
    {
      id: 2,
      title: "InvoiceGenerator.com",
      subtitle: "Full-Stack Invoice Management System",
      description: "A comprehensive invoice management solution that simplifies invoice creation, customization, and handling for businesses and freelancers with dynamic features and PDF generation.",
      longDescription: "Full-stack MERN application featuring dynamic invoice labels, multiple invoice types (Invoices, Credit Notes, Quotes, Purchase Orders), smart filtering, payment tracking, and professional PDF generation with company logos.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "PDF Generation"],
      category: "fullstack",
      type: "Business Tool",
      duration: "Jul 2025",
      liveUrl: "https://invoice-generator-frontend-ypf8.vercel.app/",
      features: ["Dynamic Labels", "PDF Export", "Payment Tracking", "Multi-format Support", "Secure Data Handling"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-600",
      images: ["myinvoices.png", "label_change_download.png", "labelChanged_home.png"]
    },
    {
      id: 3,
      title: "EDULEARN",
      subtitle: "Learning Management System",
      description: "A comprehensive LMS designed for both instructors and students, enabling course creation, management, and interactive learning through assignments, quizzes, and exams.",
      longDescription: "Web-based Learning Management System that allows instructors to create, manage, and sell online courses while students can browse, purchase, and enroll instantly. Features interactive dashboards for both user types.",
      tech: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "MySQL"],
      category: "fullstack",
      type: "Education Platform",
      duration: "May 2025",
      features: ["Course Management", "Student Enrollment", "Interactive Dashboards", "Assessment Tools", "Revenue Tracking"],
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600",
      images: ["student dashboard", "instructor dashboard", "about page"]
    },
    {
      id: 4,
      title: "Traffic Simulation System",
      subtitle: "AI-Powered Traffic Flow Optimization",
      description: "Advanced traffic simulation system that models and optimizes intersection traffic flow with AI integration for autonomous vehicle compatibility.",
      longDescription: "Built with C++ and Raylib, this system uses real-time routing, intelligent signal control, and advanced data structures to simulate and analyze smart traffic behavior in a dynamic visual environment.",
      tech: ["C++", "Raylib", "Artificial Intelligence", "Data Structures"],
      category: "ai",
      type: "Simulation System",
      duration: "Jan 2025",
      features: ["Real-time Routing", "AI Integration", "Signal Optimization", "Visual Simulation", "Performance Analytics"],
      icon: Car,
      gradient: "from-orange-500 to-red-600",
      images: ["map.png", "vehicles.png", "locations.png"]
    },
    {
      id: 5,
      title: "Flight Management System",
      subtitle: "Airline Operations Management",
      description: "Comprehensive web-based application for managing airline operations with passenger and admin portals, flight scheduling, and booking systems.",
      longDescription: "Java-based system featuring dual-role access (Passenger/Admin), real-time flight updates, comprehensive scheduling tools, and streamlined booking process for efficient airline operations management.",
      tech: ["Java", "Object-Oriented Programming", "Java Swing", "GUI Development"],
      category: "desktop",
      type: "Management System",
      duration: "May 2024",
      features: ["Dual Access Levels", "Real-time Updates", "Flight Scheduling", "Booking System", "Admin Dashboard"],
      icon: Plane,
      gradient: "from-indigo-500 to-purple-600",
      images: ["adminSchedule.png", "admin.png", "schedule.png"]
    },
    {
      id: 6,
      title: "E-commerce Platform",
      subtitle: "Dynamic Online Marketplace",
      description: "A dynamic online marketplace system facilitating seamless buying and selling with secure authentication, cart management, and feedback systems.",
      longDescription: "PHP and MySQL-powered platform featuring secure user authentication, flexible buying/selling modules, streamlined cart and payment processing, and comprehensive feedback system for enhanced user trust.",
      tech: ["PHP", "MySQL", "Web Development", "Database Design"],
      category: "web",
      type: "E-Commerce",
      duration: "Apr 2024",
      features: ["User Authentication", "Product Management", "Cart System", "Payment Processing", "Feedback System"],
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-blue-600",
      images: ["ERD.png", "addProduct.png", "sellerDashboard.png"]
    },
    {
      id: 7,
      title: "Restaurant Billing System",
      subtitle: "Console-Based Ordering System",
      description: "Console-based application streamlining restaurant food ordering and billing processes with interactive menu navigation and receipt generation.",
      longDescription: "C-based console application featuring user-friendly menu navigation, quantity input with dynamic cost calculation, multiple payment options, and optional receipt generation with detailed order summaries.",
      tech: ["C Programming", "Raylib", "Console Development", "Data Structures"],
      category: "desktop",
      type: "Point of Sale",
      duration: "Dec 2023",
      features: ["Interactive Menu", "Dynamic Billing", "Payment Options", "Receipt Generation", "Order Management"],
      icon: Utensils,
      gradient: "from-amber-500 to-orange-600",
      images: []
    }
  ];

const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI & Simulation', count: projects.filter(p => p.category === 'ai').length },
    { id: 'desktop', name: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openGallery = (projectId) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % projectImages[selectedProject].length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      (prev - 1 + projectImages[selectedProject].length) % projectImages[selectedProject].length
    );
  };

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <div 
        className="group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20 hover:border-white/40"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Gradient Header */}
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
        
        {/* Card Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                <IconComponent size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 font-medium">{project.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-400 bg-black/20 px-2 py-1 rounded-full">
              <Calendar size={12} />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              {hoveredProject === project.id ? project.longDescription : project.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h5 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2">
              Key Features
            </h5>
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-white/10 text-gray-200 rounded-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h5 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2">
              Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 text-xs bg-gradient-to-r ${project.gradient} text-white rounded-md font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2`}
              >
                <ExternalLink size={16} />
                <span>View Live</span>
              </a>
            )}
            <button 
              onClick={() => openGallery(project.id)}
              className="flex-1 px-4 py-2 bg-white/10 text-gray-200 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors"
            >
              <Palette size={16} />
              <span>View Glimpse</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-mono mb-4">
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    projectList[]
  </span>
</h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of innovative solutions spanning full-stack web development, AI-powered systems, and enterprise applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
          <button 
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="max-w-6xl w-full bg-gray-900/80 rounded-xl overflow-hidden border border-white/20">
            {/* Main Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <img 
                src={projectImages[selectedProject][currentImageIndex]} 
                alt={`Project ${selectedProject} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Image Description */}
            <div className="p-6 border-t border-white/10">
              <p className="text-white text-lg font-medium">
                {imageDescriptions[selectedProject]?.[currentImageIndex] || "Project screenshot"}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex overflow-x-auto p-4 space-x-2 bg-gray-900/50">
              {projectImages[selectedProject].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="px-6 py-3 text-center text-gray-300 text-sm">
              {currentImageIndex + 1} / {projectImages[selectedProject].length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPortfolio;