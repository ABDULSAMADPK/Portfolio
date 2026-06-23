import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaDatabase } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const projects = portfolioData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: "rgba(6, 182, 212, 0.3)" }}
              className="rounded-3xl overflow-hidden bg-cardDark/40 border border-white/5 shadow-2xl flex flex-col group transition-all duration-300 backdrop-blur-md"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback block color if thumbnails are missing or fail
                    e.target.style.display = "none";
                  }}
                />
                
                {/* Tech Glow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Floating Dataset Badge */}
                <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5 shadow-md">
                  <FaDatabase className="text-primary text-[10px]" />
                  <span className="text-[10px] font-semibold text-slate-200 uppercase tracking-wider">{project.dataset}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Bullet Highlight Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech pill tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 border border-white/5 text-slate-300 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-primary transition-colors duration-300 group/btn"
                  >
                    <FaGithub size={18} className="group-hover/btn:rotate-[360deg] transition-transform duration-500" />
                    Source Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Live Demo
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
