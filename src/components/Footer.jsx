import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { name, linkedin, github, instagram } = portfolioData.personalInfo;
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-bgDark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Logo/Name */}
        <div className="text-left">
          <a href="#home" className="text-xl font-bold tracking-wider text-textLight flex items-center gap-1 group">
            <span className="text-primary group-hover:text-secondary transition-colors duration-300">&lt;</span>
            {name}
            <span className="text-secondary group-hover:text-primary transition-colors duration-300">/&gt;</span>
          </a>
          <p className="text-xs text-slate-500 mt-1">Data Analyst | AI Engineer</p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm">
          <a href="#home" className="text-slate-400 hover:text-primary transition-colors duration-300">Home</a>
          <a href="#about" className="text-slate-400 hover:text-primary transition-colors duration-300">About</a>
          <a href="#skills" className="text-slate-400 hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#experience" className="text-slate-400 hover:text-primary transition-colors duration-300">Experience</a>
          <a href="#projects" className="text-slate-400 hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#certifications" className="text-slate-400 hover:text-primary transition-colors duration-300">Certifications</a>
          <a href="#education" className="text-slate-400 hover:text-primary transition-colors duration-300">Education</a>
          <a href="#contact" className="text-slate-400 hover:text-primary transition-colors duration-300">Contact</a>
        </div>

        {/* Social media connections */}
        <div className="flex gap-4">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Copyright Notice - centered */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 flex items-center justify-center text-xs text-slate-500 relative z-10">
        <p>Copyright &copy; {new Date().getFullYear()} by Abdul Samad PK. All Rights Reserved.</p>
      </div>

      {/* Floating Scroll to Top Arrow */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/35 text-bgDark z-50 transition-all duration-300 animate-bounce hover:scale-110 cursor-pointer"
          aria-label="Back to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </footer>
  );
}
