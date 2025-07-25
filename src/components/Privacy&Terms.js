import React, { useState } from 'react';
import { Shield, FileText, Eye, Lock, Users, AlertCircle, Check, ChevronRight, Calendar, Mail, Globe } from 'lucide-react';

const PrivacyTermsPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  const [activeSection, setActiveSection] = useState('');

  const privacySections = [
    { id: 'information-collection', title: 'Information We Collect', icon: Eye },
    { id: 'information-use', title: 'How We Use Information', icon: Users },
    { id: 'information-sharing', title: 'Information Sharing', icon: Globe },
    { id: 'data-security', title: 'Data Security', icon: Lock },
    { id: 'cookies', title: 'Cookies & Tracking', icon: FileText },
    { id: 'rights', title: 'Your Rights', icon: Shield },
    { id: 'contact', title: 'Contact Information', icon: Mail }
  ];

  const termsSections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: Check },
    { id: 'services', title: 'Description of Services', icon: Globe },
    { id: 'user-conduct', title: 'User Conduct', icon: Users },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Shield },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: AlertCircle },
    { id: 'termination', title: 'Termination', icon: FileText },
    { id: 'governing-law', title: 'Governing Law', icon: Lock }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
  <div
  className="min-h-screen text-white"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>

      {/* Header */}
     <header
  className="shadow-sm border-b border-slate-700 text-white"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-center">
     <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
  Legal Information
</h1>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Your privacy and trust are important to us. Please review our policies carefully.
      </p>
    </div>
  </div>
</header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       {/* Tab Navigation */}
<div className="mb-12">
  <div
    className="flex flex-col sm:flex-row rounded-xl shadow-lg overflow-hidden"
    style={{
      background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
    }}
  >
    <button
      onClick={() => setActiveTab('privacy')}
      className={`flex items-center justify-center gap-3 px-8 py-6 text-lg font-semibold transition-all ${
        activeTab === 'privacy'
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'text-gray-200 hover:bg-gray-700'
      }`}
    >
      <Shield className="w-6 h-6" />
      Privacy Policy
    </button>
    <button
      onClick={() => setActiveTab('terms')}
      className={`flex items-center justify-center gap-3 px-8 py-6 text-lg font-semibold transition-all ${
        activeTab === 'terms'
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'text-gray-200 hover:bg-gray-700'
      }`}
    >
      <FileText className="w-6 h-6" />
      Terms of Service
    </button>
  </div>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Table of Contents */}
<div className="lg:col-span-1">
  <div
    className="rounded-xl shadow-lg p-6 sticky top-8 text-white"
    style={{
      background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
    }}
  >
    <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
    <nav className="space-y-2">
      {(activeTab === 'privacy' ? privacySections : termsSections).map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all ${
              activeSection === section.id
                ? 'bg-blue-600/20 text-blue-300 border-l-4 border-blue-500'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{section.title}</span>
            <ChevronRight className="w-4 h-4 ml-auto" />
          </button>
        );
      })}
    </nav>
  </div>
</div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {activeTab === 'privacy' ? (
                <PrivacyPolicyContent />
              ) : (
                <TermsOfServiceContent />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Policies?</h2>
          <p className="text-slate-300 text-lg mb-8">
            If you have any questions or concerns about our privacy policy or terms of service, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=zarshamwaleedbutt@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
>
  <Mail className="w-5 h-5" />
  Email Us
</a>

          <a
  href="/Zarsham-Resume.pdf"
  download
  className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-900 transition-colors"
>
  <FileText className="w-5 h-5" />
  Download Resume
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyContent = () => (
 <div
  className="p-8 lg:p-12 space-y-12 text-white rounded-xl shadow-xl"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>
  {/* Header */}
  <div className="border-b border-gray-700 pb-8">
    <h2 className="text-3xl font-bold text-white mb-4">Privacy Policy</h2>
    <div className="flex items-center gap-6 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        Last Updated: July 24, 2025
      </div>
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        Effective Date: July 24, 2025
      </div>
    </div>
  </div>

  {/* Information Collection */}
  <section id="information-collection" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Eye className="w-6 h-6 text-blue-400" />
      Information We Collect
    </h3>
    <div className="space-y-6">
      <div className="bg-blue-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Personal Information</h4>
        <p className="text-gray-300 leading-relaxed mb-4">
          We collect information you provide directly to us, such as when you create an account, contact us, or subscribe to our newsletter. This may include:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            Name and email address
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            Professional information and portfolio details
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            Messages and correspondence
          </li>
        </ul>
      </div>

      <div className="bg-purple-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h4>
        <p className="text-gray-300 leading-relaxed">
          We automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages visited. This information helps us improve our services and user experience.
        </p>
      </div>
    </div>
  </section>

  {/* Information Use */}
  <section id="information-use" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Users className="w-6 h-6 text-blue-400" />
      How We Use Information
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Service Provision</h4>
        <p className="text-gray-300">
          To provide, maintain, and improve our website and services, respond to your inquiries, and send you technical notices and support messages.
        </p>
      </div>
      <div className="bg-blue-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Communication</h4>
        <p className="text-gray-300">
          To communicate with you about products, services, offers, and provide news and information we think will be of interest to you.
        </p>
      </div>
    </div>
  </section>

  {/* Information Sharing */}
  <section id="information-sharing" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Globe className="w-6 h-6 text-blue-400" />
      Information Sharing
    </h3>
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">We Do Not Sell Your Information</h4>
          <p className="text-gray-300 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information in the following limited circumstances:
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• With your explicit consent</li>
            <li>• To comply with legal obligations</li>
            <li>• To protect our rights and safety</li>
            <li>• With trusted service providers under strict confidentiality agreements</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Data Security */}
  <section id="data-security" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Lock className="w-6 h-6 text-blue-400" />
      Data Security
    </h3>
    <p className="text-gray-300 leading-relaxed mb-6">
      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {['SSL Encryption', 'Secure Servers', 'Regular Audits'].map((measure, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
          <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="font-medium text-white">{measure}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Cookies */}
  <section id="cookies" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <FileText className="w-6 h-6 text-blue-400" />
      Cookies & Tracking Technologies
    </h3>
    <p className="text-gray-300 leading-relaxed mb-6">
      We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
    </p>
    <div className="bg-yellow-900/10 border border-yellow-600/20 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-white mb-3">Types of Cookies We Use</h4>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <span className="font-medium text-white">Essential Cookies:</span>
            <span className="text-gray-300"> Required for website functionality</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <span className="font-medium text-white">Analytics Cookies:</span>
            <span className="text-gray-300"> Help us understand how visitors interact with our website</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Rights */}
  <section id="rights" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Shield className="w-6 h-6 text-blue-400" />
      Your Rights
    </h3>
    <p className="text-gray-300 leading-relaxed mb-6">
      Depending on your location, you may have certain rights regarding your personal information:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        'Access your personal data',
        'Correct inaccurate information',
        'Delete your personal data',
        'Restrict processing of your data',
        'Data portability',
        'Object to processing'
      ].map((right, index) => (
        <div key={index} className="flex items-center gap-3 bg-gray-800 rounded-lg p-4">
          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
          <span className="text-gray-300">{right}</span>
        </div>
      ))}
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Mail className="w-6 h-6 text-blue-400" />
      Contact Information
    </h3>
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
      </p>
      <div className="space-y-2 text-gray-300">
        <p><strong>Email:</strong> zarshamwaleedbutt@gmail.com</p>
       
        <p><strong>Phone:</strong> +92 304 2825000</p>
      </div>
    </div>
  </section>
</div>

);

const TermsOfServiceContent = () => (
<div
  className="p-8 lg:p-12 space-y-12 text-white rounded-xl shadow-xl"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>
  {/* Header */}
  <div className="border-b border-gray-700 pb-8">
    <h2 className="text-3xl font-bold text-white mb-4">Terms of Service</h2>
    <div className="flex items-center gap-6 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        Last Updated: July 24, 2025
      </div>
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        Effective Date: July 24, 2025
      </div>
    </div>
  </div>

  {/* Acceptance */}
  <section id="acceptance" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Check className="w-6 h-6 text-blue-400" />
      Acceptance of Terms
    </h3>
    <div className="bg-blue-900/20 rounded-lg p-6">
      <p className="text-gray-300 leading-relaxed">
        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement...
      </p>
    </div>
  </section>

  {/* Services */}
  <section id="services" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Globe className="w-6 h-6 text-blue-400" />
      Description of Services
    </h3>
    <p className="text-gray-300 leading-relaxed mb-6">
      This website serves as a professional portfolio showcasing our work...
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Portfolio Display</h4>
        <p className="text-gray-300">
          Showcasing professional work, projects, and creative outputs...
        </p>
      </div>
      <div className="bg-purple-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Contact Services</h4>
        <p className="text-gray-300">
          Facilitating professional communication and inquiries...
        </p>
      </div>
    </div>
  </section>

  {/* User Conduct */}
  <section id="user-conduct" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Users className="w-6 h-6 text-blue-400" />
      User Conduct
    </h3>
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-white mb-3">Prohibited Activities</h4>
      <p className="text-gray-300 leading-relaxed mb-4">
        You agree not to use our website for any unlawful purpose or prohibited activity, including but not limited to:
      </p>
      <ul className="space-y-2 text-gray-300">
        {[
          'Violating any applicable laws or regulations',
          'Infringing on intellectual property rights',
          'Transmitting harmful or malicious code',
          'Attempting to gain unauthorized access',
          'Harassing or threatening other users',
          'Distributing spam or unsolicited content'
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>

  {/* Intellectual Property */}
  <section id="intellectual-property" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Shield className="w-6 h-6 text-blue-400" />
      Intellectual Property Rights
    </h3>
    <div className="space-y-6">
      <div className="bg-blue-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">Our Content</h4>
        <p className="text-gray-300 leading-relaxed">
          All content on this website is the property of the website owner...
        </p>
      </div>
      <div className="bg-green-900/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-white mb-3">User-Generated Content</h4>
        <p className="text-gray-300 leading-relaxed">
          By submitting content to our website, you grant us a license to use...
        </p>
      </div>
    </div>
  </section>

  {/* Limitation of Liability */}
  <section id="limitation-liability" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <AlertCircle className="w-6 h-6 text-blue-400" />
      Limitation of Liability
    </h3>
    <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-lg p-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        We shall not be liable for any indirect, incidental, special, consequential, or punitive damages...
      </p>
      <ul className="space-y-2 text-gray-300">
        <li>• Your use of or inability to use our services</li>
        <li>• Unauthorized access to your information</li>
        <li>• Service interruptions or outages</li>
        <li>• Third-party viruses or bugs</li>
      </ul>
    </div>
  </section>

  {/* Termination */}
  <section id="termination" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <FileText className="w-6 h-6 text-blue-400" />
      Termination
    </h3>
    <p className="text-gray-300 leading-relaxed mb-6">
      We may terminate or suspend your access immediately without notice if you breach the Terms...
    </p>
    <div className="bg-gray-800 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-white mb-3">Effect of Termination</h4>
      <p className="text-gray-300">
        Provisions such as ownership rights and disclaimers shall survive termination...
      </p>
    </div>
  </section>

  {/* Governing Law */}
  <section id="governing-law" className="scroll-mt-8">
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <Lock className="w-6 h-6 text-blue-400" />
      Governing Law
    </h3>
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        These Terms shall be governed by the laws of [Your Jurisdiction]...
      </p>
      <div className="border-t border-gray-700 pt-4 mt-4">
        <h4 className="text-lg font-semibold text-white mb-2">Changes to Terms</h4>
        <p className="text-gray-300">
          We may modify these terms at any time. Changes will be posted with a revised date.
        </p>
      </div>
    </div>
  </section>
</div>

);

export default PrivacyTermsPage;