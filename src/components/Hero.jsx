import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { name, titles, tagline, email, linkedin, github, instagram, profileImage } = portfolioData.personalInfo;
  
  // Custom Typewriter Hook Logic
  const [textIndex, setTextIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const activeWord = titles[textIndex % titles.length];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentWord(activeWord.substring(0, currentWord.length + 1));
        setTypingSpeed(100);
        
        if (currentWord === activeWord) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2s
        }
      } else {
        // Deleting
        setCurrentWord(activeWord.substring(0, currentWord.length - 1));
        setTypingSpeed(50);
        
        if (currentWord === "") {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
          setTypingSpeed(500); // Short pause before next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, textIndex, titles, typingSpeed]);

  // Interactive Neural-Net/Data-Mesh Canvas background
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    // Nodes Configuration
    const nodeCount = Math.min(60, Math.floor((width * height) / 25000));
    const nodes = [];
    const maxDistance = 120;
    
    const mouse = {
      x: null,
      y: null,
      radius: 180
    };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    // Create random nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5
      });
    }
    
    // Animating Nodes & Lines
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update & Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce check
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        
        // Draw Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
        ctx.fill();
        
        // Attraction to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x += (dx / dist) * force * 0.8;
            node.y += (dy / dist) * force * 0.8;
          }
        }
      });
      
      // Draw Connections (Neural Network effect)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDistance) {
            const alpha = (maxDistance - dist) / maxDistance;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Connect nodes to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (mouse.radius - dist) / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.25})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="relative min-height-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-bgDark bg-grid-pattern">
      {/* Interactive Mesh Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-primary font-semibold text-lg md:text-xl tracking-wider mb-2">
              HELLO, IT'S ME
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-textLight leading-tight">
              {name}
            </h1>
            
            {/* Dynamic Typewriter Role */}
            <div className="h-10 md:h-12 flex items-center mb-6">
              <h2 className="text-xl md:text-3xl font-medium text-slate-300">
                I'm a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold border-r-2 border-primary animate-pulse pr-1">
                  {currentWord}
                </span>
              </h2>
            </div>
            
            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              {tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full font-semibold text-bgDark bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full font-semibold border border-slate-700 hover:border-primary text-textLight hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full font-semibold text-textLight bg-cardDark/50 backdrop-blur-md border border-white/5 hover:border-secondary transition-all duration-300 shadow-md"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <span className="text-slate-500 font-medium text-sm tracking-wider uppercase">Find me on:</span>
              <div className="flex gap-3">
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://wa.me/916238765021" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content Profile Image */}
        <div className="col-span-1 md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative"
          >
            {/* Glow Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[30px] opacity-35 animate-pulse" />
            
            {/* Main Circle Frame with profile picture */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-[6px] bg-gradient-to-tr from-primary via-slate-800 to-secondary shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-full bg-bgDark overflow-hidden relative flex items-center justify-center">
                {/* Visual Glassmorphic Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:scale-105 transition-transform duration-500" />
                
                {/* Profile photo */}
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                  onError={(e) => {
                    e.target.src = "/images/Samad2-removebg-preview.png";
                  }}
                />
                
                {/* Decorative Circular Border inside */}
                <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none group-hover:border-primary/20 transition-all duration-500" />
              </div>
            </div>

            {/* Floating UI Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-semibold text-slate-200 tracking-wider">AI ENGINEER</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 tracking-wider">DATA ANALYST</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
