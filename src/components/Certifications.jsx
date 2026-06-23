import { motion } from "framer-motion";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const certifications = portfolioData.certifications;

  // Icon mapping helper
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case "GiArtificialIntelligence":
        return <GiArtificialIntelligence className="text-secondary text-3xl" />;
      case "BsGraphUp":
        return <BsGraphUp className="text-accent text-3xl" />;
      case "FiAward":
        return <FiAward className="text-primary text-3xl" />;
      case "MdOutlineVerified":
        return <MdOutlineVerified className="text-primary text-3xl" />;
      default:
        return <FiAward className="text-primary text-3xl" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.3)" }}
              className="p-6 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-xl flex flex-col transition-all duration-300 group"
            >
              {/* Certification Icon Bubble */}
              <div className="mb-6 flex-shrink-0 p-4 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center h-14 w-14 group-hover:bg-bgDark transition-colors duration-300">
                {getCertIcon(cert.icon)}
              </div>

              {/* Certification Info */}
              <div className="flex-grow text-left">
                <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
