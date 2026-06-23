import { motion } from "framer-motion";
import { FaBrain, FaCalculator, FaChartBar, FaRobot, FaCode } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { bio, highlights } = portfolioData.about;
  const { fallbackImage, name } = portfolioData.personalInfo;

  // Icon mapping helper
  const getHighlightIcon = (title) => {
    switch (title) {
      case "Mathematics Background":
        return <FaCalculator className="text-primary text-3xl" />;
      case "Machine Learning Enthusiast":
        return <FaBrain className="text-secondary text-3xl" />;
      case "Data Analytics":
        return <FaChartBar className="text-accent text-3xl" />;
      case "AI Solutions Development":
        return <FaRobot className="text-secondary text-3xl" />;
      case "Full Stack Development Experience":
      case "Full Stack Development":
        return <FaCode className="text-primary text-3xl" />;
      default:
        return <FaBrain className="text-primary text-3xl" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
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
    <section id="about" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Secondary Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm">
              {/* Outer Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-cardDark/50 p-3 shadow-2xl backdrop-blur-md">
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <img 
                    src={fallbackImage} 
                    alt={name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Analytics Graphic Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 py-2 px-3 glass rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Education Background</p>
                      <p className="text-sm font-semibold text-textLight">BSc Mathematics</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <FaCalculator className="text-primary text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Biography & Highlights */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-slate-200 mb-4">
                Aspiring Data Analyst & AI Engineer
              </h3>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                {bio}
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)" }}
                  className="p-5 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 flex gap-4 transition-all duration-300 shadow-md group"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center h-12 w-12 group-hover:bg-bgDark transition-colors duration-300">
                    {getHighlightIcon(highlight.title)}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-200 mb-1 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
