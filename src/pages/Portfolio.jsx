import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Calendar,
  Building,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

// Personal Data
const personalInfo = {
  name: "Solomon Bhaskar",
  title: "AI Engineer & Full Stack Developer",
  tagline: "Building intelligent solutions that bridge AI innovation with exceptional user experiences",
  email: "Solomonbhaskar712@gmail.com",
  phone: "8073373016",
  location: "Dharwad, Karnataka, India",
  linkedin: "https://linkedin.com/in/solomon-bhaskar",
  github: "https://github.com/solomon712"
};

const aboutMe = "Passionate AI Engineer and Full Stack Developer with expertise in building scalable, high-performance applications. I specialize in AI/ML solutions, web development, and cloud computing, with a strong focus on solving real-world problems through innovative technology. Currently working as an AI Engineer – Associate at AcadSigma, where I contribute to production-grade AI/ML products and full-stack solutions.";

const skills = [
  { name: "Python", category: "Programming", level: 90, icon: "🐍" },
  { name: "JavaScript", category: "Programming", level: 85, icon: "⚡" },
  { name: "Java", category: "Programming", level: 80, icon: "☕" },
  { name: "React.js", category: "Frontend", level: 85, icon: "⚛️" },
  { name: "Django", category: "Backend", level: 80, icon: "🎸" },
  { name: "Spring Boot", category: "Backend", level: 75, icon: "🍃" },
  { name: "AI/ML", category: "AI", level: 80, icon: "🤖" },
  { name: "YOLOv5", category: "AI", level: 75, icon: "👁️" },
  { name: "SQL", category: "Database", level: 80, icon: "🗄️" },
  { name: "AWS", category: "Cloud", level: 70, icon: "☁️" },
  { name: "Docker", category: "DevOps", level: 70, icon: "🐳" },
  { name: "Git", category: "Tools", level: 85, icon: "📚" }
];

const experiences = [
  {
    company: "AcadSigma",
    role: "AI Engineer – Associate",
    duration: "Jul 2025 - Present",
    type: "Full-time",
    location: "Remote",
    description: "Contributing to real-time AI/ML products, web scraping pipelines, and UI/API integration in production-grade development environment.",
    achievements: [
      "Leading UI development for production-grade AI/ML applications",
      "Implementing NLP-driven features and web scraping solutions",
      "Working across data engineering and full-stack AI solutions"
    ]
  },
  {
    company: "AcadSigma",
    role: "Gen AI Developer Intern",
    duration: "Mar 2025 - Jun 2025",
    type: "Internship",
    location: "On-site",
    description: "Led UI development for GenAI-powered tools with dynamic interfaces and smooth user workflows.",
    achievements: [
      "Developed responsive interfaces using React.js and Tailwind CSS",
      "Integrated LLM APIs for intelligent frontend solutions",
      "Improved user workflow efficiency by 25%"
    ]
  },
  {
    company: "KodNest",
    role: "Java Full-Stack Intern",
    duration: "May 2024 - May 2025",
    type: "Internship",
    location: "Bengaluru, Karnataka",
    description: "Developed scalable full-stack web applications using modern technologies and cloud deployment.",
    achievements: [
      "Built and debugged scalable web applications",
      "Utilized Java, Spring Boot, React.js, and AWS",
      "Optimized system performance and user experience"
    ]
  }
];

const projects = [
  {
    title: "Google Business Reviews Analytics Dashboard",
    description: "Built a powerful analytics dashboard to extract and analyze Google Business Reviews using web scraping and NLP for sentiment classification.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    tech: ["Python", "Django", "BeautifulSoup", "SQL", "NLP", "Chart.js"],
    github: "#",
    live: "#",
    achievements: [
      "20% improvement in processing efficiency",
      "Automated sentiment analysis with 90% accuracy",
      "Interactive data visualization with dynamic charts"
    ]
  },
  {
    title: "Helmet Detection System",
    description: "AI-powered safety compliance system using YOLOv5 for real-time helmet detection with automated alerts.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    tech: ["Python", "YOLOv5", "Django", "Computer Vision", "AI/ML"],
    github: "https://github.com/solomon712/helmet-detection-yolov5",
    live: "#",
    achievements: [
      "20% improvement in safety compliance",
      "Real-time detection with 95% accuracy",
      "Scalable across multiple industries"
    ]
  },
  {
    title: "Custom PC Configuration Platform",
    description: "DBMS-driven platform for customizing and managing computer configurations with optimized user workflows.",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=250&fit=crop",
    tech: ["Python", "Django", "SQL", "JavaScript", "HTML/CSS"],
    github: "#",
    live: "#",
    achievements: [
      "25% reduction in customer setup time",
      "Streamlined configuration management",
      "Enhanced user experience design"
    ]
  }
];

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index, isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700 text-gray-100' 
    : 'bg-white border-gray-200 text-gray-800';
  
  const categoryClasses = isDark 
    ? 'text-gray-400' 
    : 'text-gray-600';
    
  const progressBg = isDark 
    ? 'bg-gray-700' 
    : 'bg-gray-200';

  return (
    <AnimatedSection>
      <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border ${cardClasses}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className={`text-sm ${categoryClasses}`}>{skill.category}</p>
            </div>
          </div>
        </div>
        <div className={`w-full rounded-full h-2 ${progressBg}`}>
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <p className={`text-right text-sm mt-2 ${categoryClasses}`}>{skill.level}%</p>
      </div>
    </AnimatedSection>
  );
};

// Experience Card Component
const ExperienceCard = ({ exp, isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';
  
  const textClasses = isDark 
    ? 'text-gray-100' 
    : 'text-gray-800';
    
  const subtextClasses = isDark 
    ? 'text-gray-300' 
    : 'text-gray-700';
    
  const metaClasses = isDark 
    ? 'text-gray-400' 
    : 'text-gray-600';

  return (
    <AnimatedSection>
      <div className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${cardClasses}`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className={`text-xl font-bold mb-1 ${textClasses}`}>{exp.role}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">{exp.company}</span>
            </div>
            <div className={`flex flex-wrap items-center gap-4 text-sm ${metaClasses}`}>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {exp.type}
              </span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
        </div>
        <p className={`mb-4 ${subtextClasses}`}>{exp.description}</p>
        <ul className="space-y-2">
          {exp.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <span className={subtextClasses}>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};

// Project Card Component
const ProjectCard = ({ project, isDark }) => {
  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200';
  
  const textClasses = isDark 
    ? 'text-gray-100' 
    : 'text-gray-800';
    
  const subtextClasses = isDark 
    ? 'text-gray-300' 
    : 'text-gray-600';
    
  const linkClasses = isDark 
    ? 'text-gray-400 hover:text-blue-400' 
    : 'text-gray-600 hover:text-blue-600';

  return (
    <AnimatedSection>
      <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border ${cardClasses}`}>
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-3 ${textClasses}`}>{project.title}</h3>
          <p className={`mb-4 ${subtextClasses}`}>{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          <ul className="space-y-1 mb-4">
            {project.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span className={subtextClasses}>{achievement}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4">
            <a 
              href={project.github}
              className={`flex items-center space-x-2 transition-colors ${linkClasses}`}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            <a 
              href={project.live}
              className={`flex items-center space-x-2 transition-colors ${linkClasses}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Contact Form Component
const ContactForm = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const inputClasses = isDark 
    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${inputClasses}`}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${inputClasses}`}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${inputClasses}`}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>
    </form>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setIsDark(!isDark);

  // Theme classes
  const bgGradient = isDark 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50';
  
  const navBg = isDark 
    ? 'bg-gray-900/90 border-gray-700' 
    : 'bg-white/90 border-gray-200';
    
  const textPrimary = isDark 
    ? 'text-gray-100' 
    : 'text-gray-900';
    
  const textSecondary = isDark 
    ? 'text-gray-300' 
    : 'text-gray-700';
    
  const textMuted = isDark 
    ? 'text-gray-400' 
    : 'text-gray-600';
    
  const sectionBg = isDark 
    ? 'bg-gray-800/20' 
    : 'bg-white/50';

  return (
    <div className={`min-h-screen transition-all duration-500 ${bgGradient}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solomon Bhaskar
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : isDark
                        ? 'text-gray-300 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-colors ${
                    isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${navBg}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium rounded-md w-full text-left transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${textPrimary}`}>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className={`text-xl md:text-2xl lg:text-3xl mb-6 ${textSecondary}`}>
                {personalInfo.title}
              </h2>
              <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${textMuted}`}>
                {personalInfo.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 ${
                    isDark ? 'text-blue-400 border-blue-400 hover:bg-blue-400' : 'text-blue-600'
                  }`}
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex justify-center space-x-6">
                <a href={personalInfo.linkedin} className={`transform hover:scale-110 transition-all ${textMuted} hover:text-blue-600`}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={personalInfo.github} className={`transform hover:scale-110 transition-all ${textMuted} hover:text-blue-600`}>
                  <Github className="w-6 h-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className={`transform hover:scale-110 transition-all ${textMuted} hover:text-blue-600`}>
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="mt-16 animate-bounce">
                <ChevronDown className={`w-8 h-8 mx-auto ${textMuted}`} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-12 ${textPrimary}`}>About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className={`rounded-2xl p-8 shadow-xl border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <p className={`text-lg leading-relaxed mb-6 ${textSecondary}`}>{aboutMe}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <Code className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                    <h3 className={`font-semibold ${textPrimary}`}>Full Stack Development</h3>
                    <p className={`text-sm ${textMuted}`}>Modern web applications with React, Django, and Spring Boot</p>
                  </div>
                  <div className="text-center p-4">
                    <Database className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                    <h3 className={`font-semibold ${textPrimary}`}>AI/ML Solutions</h3>
                    <p className={`text-sm ${textMuted}`}>Computer vision, NLP, and intelligent automation</p>
                  </div>
                  <div className="text-center p-4">
                    <Server className="w-8 h-8 mx-auto text-green-600 mb-2" />
                    <h3 className={`font-semibold ${textPrimary}`}>Cloud & DevOps</h3>
                    <p className={`text-sm ${textMuted}`}>AWS deployment, Docker containerization, and CI/CD</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-12 ${textPrimary}`}>Skills & Technologies</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-12 ${textPrimary}`}>Professional Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-12 ${textPrimary}`}>Featured Projects</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={`text-4xl font-bold text-center mb-12 ${textPrimary}`}>Get In Touch</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className={`rounded-xl p-8 shadow-lg border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${textPrimary}`}>Let's Connect!</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${personalInfo.email}`} className={`hover:text-blue-600 transition-colors ${textSecondary}`}>
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className={textSecondary}>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className={textSecondary}>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <a href={personalInfo.linkedin} className={`hover:text-blue-600 transition-colors ${textSecondary}`}>
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-800" />
                    <a href={personalInfo.github} className={`hover:text-blue-600 transition-colors ${textSecondary}`}>
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className={`rounded-xl p-8 shadow-lg border ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${textPrimary}`}>Send a Message</h3>
                <ContactForm isDark={isDark} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solomon Bhaskar
            </div>
            <p className="text-gray-400 mb-6">AI Engineer & Full Stack Developer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href={personalInfo.linkedin} className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={personalInfo.github} className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Solomon Bhaskar. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio