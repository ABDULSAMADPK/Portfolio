import { motion } from "framer-motion";
import { FaReact, FaBrain, FaCalendarAlt } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const experiences = portfolioData.experience;

  // Icon mapping based on role
  const getExperienceIcon = (role) => {
    if (role.toLowerCase().includes("react")) {
      return <FaReact className="text-primary text-xl" />;
    }
    return <FaBrain className="text-secondary text-xl" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-slate-800 ml-4 md:ml-32 py-4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-lg shadow-black/50 z-20 group-hover:border-primary transition-all duration-300">
                <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                {getExperienceIcon(exp.role)}
              </div>

              {/* Time Badge (Desktop Left) */}
              <div className="hidden md:block absolute -left-36 top-2 w-28 text-right text-xs md:text-sm font-semibold text-slate-400">
                {exp.duration.split(" – ").map((date, idx) => (
                  <span key={idx} className="block last:text-slate-500 last:font-normal">
                    {date}
                  </span>
                ))}
              </div>

              {/* Timeline Card */}
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.3)" }}
                className="p-6 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Mobile Duration */}
                <div className="md:hidden flex items-center gap-1 text-slate-400 text-xs font-semibold mb-2">
                  <FaCalendarAlt className="text-primary text-[10px]" />
                  <span>{exp.duration}</span>
                </div>

                <div className="flex flex-wrap justify-between items-baseline mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-slate-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-outside pl-4 space-y-2 text-slate-400 text-sm leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="hover:text-slate-300 transition-colors duration-200">
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
