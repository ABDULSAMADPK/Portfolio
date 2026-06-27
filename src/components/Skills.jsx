import { motion } from "framer-motion";
import { FaCode, FaBrain, FaDatabase, FaLaptopCode, FaToolbox } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const categories = portfolioData.skills;

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "Programming Languages":
        return <FaCode className="text-primary text-2xl" />;
      case "Data Science & AI":
        return <FaBrain className="text-secondary text-2xl" />;
      case "Frontend & Backend":
        return <FaLaptopCode className="text-accent text-2xl" />;
      case "Databases":
        return <FaDatabase className="text-secondary text-2xl" />;
      case "Tools & BI":
        return <FaToolbox className="text-primary text-2xl" />;
      default:
        return <FaCode className="text-primary text-2xl" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="py-16 md:py-24 bg-bgDark border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Skills Dashboard Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.3)" }}
              className="p-6 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-xl flex flex-col transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/5">
                <div className="p-3 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center group-hover:bg-bgDark transition-colors duration-300">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-primary transition-colors duration-300">
                  {cat.category}
                </h3>
              </div>

              {/* Category Skills list */}
              <div className="flex flex-col space-y-4 flex-grow">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center mb-1 text-sm font-semibold">
                      <span className="text-slate-300 group-hover:text-textLight transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 group-hover:text-primary transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          catIdx % 2 === 0
                            ? "from-primary to-accent"
                            : "from-secondary to-accent"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
