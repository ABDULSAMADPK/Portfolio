import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const educationList = portfolioData.education;

  // Icon selector based on degrees
  const getEducationIcon = (degree) => {
    if (degree.toLowerCase().includes("bachelor") || degree.toLowerCase().includes("mathematics")) {
      return <FaUniversity className="text-primary text-2xl" />;
    }
    return <FaGraduationCap className="text-secondary text-2xl" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Decorative Glow */}
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.3)" }}
              className="p-8 rounded-3xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-2xl flex flex-col md:flex-row gap-6 transition-all duration-300 group text-left"
            >
              {/* Icon Capsule */}
              <div className="flex-shrink-0 p-4 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center h-16 w-16 group-hover:bg-bgDark transition-colors duration-300">
                {getEducationIcon(edu.degree)}
              </div>

              {/* Card Body */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-xl text-xs font-semibold text-primary bg-primary/10 border border-primary/20 uppercase tracking-wider">
                    {edu.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 mb-1 group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
                
                <p className="text-base font-semibold text-slate-400 mb-4">
                  {edu.institution}
                </p>
                
                <p className="text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
