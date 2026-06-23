import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { email, phone, linkedin, github, instagram } = portfolioData.personalInfo; // phone used in contact card
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: portfolioData.personalInfo.web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bgDark border-t border-white/5 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

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
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Have an interesting data science project, machine learning problem, or recruitment opportunity? Feel free to reach out, and I will get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-md hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 text-primary border border-white/5 group-hover:bg-bgDark transition-colors duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</p>
                    <p className="text-sm md:text-base font-semibold text-slate-300 group-hover:text-primary transition-colors duration-300">{email}</p>
                  </div>
                </a>

                {/* Phone card */}
                <a 
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-md hover:border-secondary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 text-secondary border border-white/5 group-hover:bg-bgDark transition-colors duration-300">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone Number</p>
                    <p className="text-sm md:text-base font-semibold text-slate-300 group-hover:text-secondary transition-colors duration-300">{phone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social media connections */}
            <div>
              <p className="text-slate-500 font-medium text-sm tracking-wider uppercase mb-3">Or connect via social networks:</p>
              <div className="flex gap-4">
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-xl bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={22} />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-xl bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={22} />
                </a>
                <a 
                  href={instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-xl bg-cardDark border border-white/5 hover:border-primary text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-cardDark/40 backdrop-blur-md border border-white/5 shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-900/60 border ${
                      errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary"
                    } text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1.5 pl-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-900/60 border ${
                      errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary"
                    } text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-300`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1.5 pl-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`w-full px-5 py-4 rounded-xl bg-slate-900/60 border ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-primary"
                    } text-slate-200 placeholder-slate-500 focus:outline-none resize-none transition-all duration-300`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5 pl-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl font-bold text-bgDark bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {/* Status Alert Modal Overlays */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-3xl bg-bgDark/90 backdrop-blur-md flex flex-col items-center justify-center p-8 z-30"
                  >
                    <FaCheckCircle className="text-primary text-6xl mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-center max-w-sm">
                      Thank you! Your message has been received. I will review it and connect with you shortly.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-3xl bg-bgDark/90 backdrop-blur-md flex flex-col items-center justify-center p-8 z-30"
                  >
                    <FaTimesCircle className="text-red-400 text-6xl mb-4" />
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">Something went wrong!</h3>
                    <p className="text-slate-400 text-center max-w-sm">
                      Unable to send your message. Please try again or contact me directly at abdulsamadpk9072@gmail.com
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
