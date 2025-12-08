import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Terminal, 
  Cpu, 
  Database, 
  Layout, 
  Github, 
  Linkedin, 
  Send,
  Menu,
  X,
  ExternalLink,
  Award,
  BookOpen,
  Target,
  Map,
  Server,
  ChevronUp
} from 'lucide-react';

import profilePic from './photo.jpg';

// --- HOOKS PERSONNALISÉS POUR L'INTERACTIVITÉ ---

// Hook pour l'effet machine à écrire
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};

// Hook pour détecter si un élément est visible (Scroll Reveal)
const useOnScreen = (ref, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // On ne l'anime qu'une fois
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isIntersecting;
};

// Composant pour l'animation d'apparition
const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Effet de suivi de la souris (Spotlight)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Gestion du scroll (Scroll Spy & Back to Top)
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button visibility
      setShowScrollTop(window.scrollY > 300);

      // Scroll Spy Logic
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const subtitle = useTypewriter("Étudiant en Informatique & Passionné de Tech", 50);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <User size={18} /> },
    { id: 'about', label: 'À propos', icon: <User size={18} /> },
    { id: 'skills', label: 'Compétences', icon: <Code size={18} /> },
    { id: 'projects', label: 'Projets', icon: <Terminal size={18} /> },
    { id: 'experience', label: 'Parcours', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  // --- DONNÉES ---
  const skills = [
    {
      category: "Langages & Programmation",
      icon: <Cpu className="text-cyan-400" />,
      items: ["Java (POO)", "Python (Scripting, Backend)", "Dart / Flutter", "JavaScript"]
    },
    {
      category: "Développement Web & Mobile",
      icon: <Layout className="text-cyan-400" />,
      items: ["Flutter (Clean Arch)", "React.js", "HTML5 / CSS3", "WebSocket", "Tailwind CSS"]
    },
    {
      category: "Bases de données & Backend",
      icon: <Database className="text-cyan-400" />,
      items: ["MongoDB (NoSQL)", "Redis (Pub/Sub)", "SQL (MariaDB/PostgreSQL)", "SQLite"]
    },
    {
      category: "DevOps & Outils",
      icon: <Server className="text-cyan-400" />,
      items: ["Git / GitHub", "Docker", "Jira / Confluence", "Linux", "Méthodes Agiles"]
    }
  ];

  const projects = [
    {
      title: "Simulation Uber Eats",
      type: "Projet 3ème année - Backend & Distribué",
      description: "Développement d'une simulation de plateforme de livraison temps réel. Architecture événementielle couplant Redis (Pub/Sub) pour la communication instantanée Manager-Livreurs et MongoDB (Change Streams) pour la persistance.",
      tags: ["Python", "Redis", "MongoDB", "Systèmes Distribués"],
      link: "https://github.com/Cheick6/mongoDB.git"
    },
    {
      title: "App Mobile de Cuisine & Frigo",
      type: "Projet 3ème année - Flutter / Mobile",
      description: "Application mobile de recommandation de recettes adaptative et gestion de frigo anti-gaspillage. Fonctionne 100% hors-ligne (SQLite) pour la confidentialité. Architecture Clean Architecture avec Pattern Repository.",
      tags: ["Flutter", "Dart", "SQLite", "Clean Arch"],
      link: "https://github.com/DevKosX/S501_Developpement.git"
    },
    {
      title: "Application PingMe",
      type: "Projet de Groupe (2ème année)",
      description: "Application de messagerie instantanée dyadique pour service client avec annotation d'émotions obligatoire. Utilisation de WebSockets pour le temps réel et MySQL.",
      tags: ["Java", "WebSocket", "MySQL", "Travail d'équipe"],
      link: "https://github.com/Cheick6/SAE_S1.git"
    },
    {
      title: "Calculatrice Java",
      type: "Projet Binôme (1ère année)",
      description: "Programme console permettant les 4 opérations arithmétiques. Utilisation intensive de la POO : héritage, polymorphisme et gestion d'erreurs (try-catch).",
      tags: ["Java", "POO", "Polymorphisme", "Algorithmique"],
      link: "https://github.com/Cheick6/java_calculatrice-.git"
    },
    {
      title: "Organisation des 24H de l’Info",
      type: "Hackathon / Événementiel",
      description: "Coordination d'un hackathon national. Gestion de la logistique, communication, et distribution des ressources. Expérience de leadership et gestion de crise.",
      tags: ["Leadership", "Organisation", "Logistique"],
      link: "24h_Info-main/index.html"
    },
    {
      title: "Portfolio Personnel",
      type: "Développement Web",
      description: "Création et évolution de mon portfolio, passant du HTML/CSS pur à une application React moderne, interactive et animée.",
      tags: ["React", "Tailwind", "Design", "Animations"],
      link: "#"
    }
  ];

  const experiences = [
    {
      title: "Stage en Entreprise",
      company: "J’origine SAS",
      role: "Stagiaire Développeur-backend",
      period: "2024 - 2025",
      description: "Première immersion professionnelle dans un environnement moderne.",
      details: [
        "Autonomie : Organisation des tâches via schémas visuels.",
        "Collaboration : Utilisation quotidienne de Slack, Zoom, Jira.",
        "Technique : Génération de rapports DOCX via l’extraction d’information Firebase en Node.js.",
        "Nettoyage et optimisation de la base de données Firebase.",
        "Contribution à la documentation technique.",
        "Culture : Intégration aux rituels d'équipe."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Background Ambience & Spotlight */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                C
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Cheick-Oumar Sow
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                      activeSection === item.id
                        ? 'text-white bg-cyan-600/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400 animate-slide-in-left"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-slate-900 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl text-base font-medium flex items-center gap-3 transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-900/20 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        
        {/* --- HOME SECTION --- */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 py-20">
          <RevealOnScroll>
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 rounded-full p-1.5 border-2 border-cyan-500/30 w-40 h-40 md:w-56 md:h-56 overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Cheick-Oumar Sow" 
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="space-y-4 pt-4 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 pb-2 animate-gradient-x">
                Cheick-Oumar Sow
              </h1>
              <p className="text-xl md:text-3xl text-slate-300 font-light h-16 md:h-auto">
                {subtitle}<span className="animate-blink">|</span>
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8 pt-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-1"
                >
                  Voir mes projets
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-full font-bold transition-all hover:bg-slate-800/50 hover:-translate-y-1"
                >
                  Me contacter
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-20 scroll-mt-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-12">
              <BookOpen className="text-cyan-400 animate-bounce-slow" size={32} />
              <h2 className="text-3xl font-bold text-white">À propos de moi</h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll delay={100}>
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-900/20 group">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                    <User size={20}/> Qui suis-je ?
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Je m'appelle Cheick-Oumar Sow, étudiant en BUT Informatique à l'IUT de Villetaneuse. 
                    Je suis quelqu’un de très impliqué, avec une forte capacité d’écoute. J’aime travailler en groupe et je m’épanouis quand je peux aider les autres à progresser.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-900/20 group">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                    <Map size={20}/> Mon Parcours
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    J'ai découvert la programmation en arrivant à l'IUT. Depuis, j'ai appris à coder avec Java, Python, JS et Flutter à travers de nombreuses SAÉ.
                    J’ai acquis des compétences solides en architecture logicielle, admin système et BDD.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-900/20 group">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                    <Target size={20}/> Mes Objectifs
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Mon objectif est de devenir ingénieur informatique. Je souhaite intégrer une école d’ingénieur pour me spécialiser en <strong>IA, cybersécurité ou systèmes embarqués</strong>.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-900/20 group">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                    <Award size={20}/> Valeurs & Intérêts
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span><strong>Basket-ball :</strong> Discipline et collectif.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span><strong>Cinéphile :</strong> séries policières et dystopique.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span><strong>Valeurs :</strong> Bienveillance et transparence.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-20 scroll-mt-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-12">
              <Code className="text-cyan-400 animate-bounce-slow" size={32} />
              <h2 className="text-3xl font-bold text-white">Mes Compétences</h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group cursor-default">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-900/20 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-cyan-900/20 text-cyan-200 rounded-lg text-sm border border-cyan-800/30 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-20 scroll-mt-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-12">
              <Terminal className="text-cyan-400 animate-bounce-slow" size={32} />
              <h2 className="text-3xl font-bold text-white">Projets</h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    </div>
                    <span className="inline-block w-fit mb-4 text-xs font-bold px-3 py-1 bg-slate-700 text-cyan-300 rounded-full uppercase tracking-wider group-hover:bg-cyan-900/30 transition-colors">{project.type}</span>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow text-sm group-hover:text-slate-300 transition-colors">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded transition-colors group-hover:border-cyan-500/50">#{tag}</span>
                        ))}
                      </div>
                      {project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold hover:underline transition-all transform hover:translate-x-2">
                          Voir le code <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-slate-600 text-sm italic">Code non public</span>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-20 scroll-mt-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-12">
              <Briefcase className="text-cyan-400 animate-bounce-slow" size={32} />
              <h2 className="text-3xl font-bold text-white">Parcours Professionnel</h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-8 relative">
            <div className="hidden md:block absolute left-[27px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent opacity-30"></div>

            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={200}>
                <div className="relative pl-0 md:pl-16 group">
                  <div className="hidden md:block absolute left-[18px] top-8 w-5 h-5 rounded-full bg-slate-900 border-4 border-cyan-500 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-all hover:bg-slate-800/80 hover:border-cyan-500/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 border-b border-slate-700 pb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                      </div>
                      <span className="mt-2 md:mt-0 px-4 py-1 bg-cyan-900/30 text-cyan-200 rounded-full text-sm font-mono border border-cyan-800/30">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-6 italic text-lg">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-1 gap-3">
                      {exp.details.map((detail, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                          <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-20 scroll-mt-20 mb-20">
          <RevealOnScroll>
            <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-12">
              <Mail className="text-cyan-400 animate-bounce-slow" size={32} />
              <h2 className="text-3xl font-bold text-white">Me Contacter</h2>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

              <p className="text-slate-400 mb-8 text-center text-lg">
                N'hésitez pas à me contacter pour un projet, une opportunité ou simplement pour échanger !
              </p>

              <form action="https://formspree.io/f/xnndawpa" method="post" className="space-y-6 max-w-2xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-slate-300 mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder-slate-600"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder-slate-600"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none placeholder-slate-600"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>

              <div className="mt-12 flex justify-center gap-8 pt-8 border-t border-slate-700">
                <a href="mailto:cheicksow384@gmail.com" className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-900/20 transition-all transform group-hover:-translate-y-2">
                    <Mail size={24} />
                  </div>
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/cheick-oumar-sow-6434192ab" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-900/20 transition-all transform group-hover:-translate-y-2">
                    <Linkedin size={24} />
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com/Cheick6" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                  <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-900/20 transition-all transform group-hover:-translate-y-2">
                    <Github size={24} />
                  </div>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      {/* Bouton Scroll Top */}
      <button 
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 p-3 bg-cyan-600 text-white rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-cyan-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050505] py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Cheick-Oumar Sow. Tous droits réservés.
        </p>
        <p className="text-slate-600 text-xs mt-2 flex items-center justify-center gap-1">
          Développé avec <span className="text-red-500">❤</span> et React
        </p>
      </footer>

      {/* Global CSS for custom animations that Tailwind lacks by default */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-in-left {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.4s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-blink { animation: blink 1s infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-slide-in-left { animation: slide-in-left 0.3s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Portfolio;