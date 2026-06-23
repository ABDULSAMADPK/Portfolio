export const portfolioData = {
  personalInfo: {
    name: "Abdul Samad PK",
    titles: ["Data Analyst", "AI Engineer", "Python Developer"],
    tagline: "Passionate Data Analyst and AI Engineer specializing in Machine Learning, Data Analytics, Predictive Modeling, and AI-powered solutions.",
    email: "abdulsamadpk9072@gmail.com",
    phone: "+91 6238765021",
    linkedin: "https://www.linkedin.com/in/abdulsamadpk-ai/",
    github: "https://github.com/ABDULSAMADPK",
    instagram: "https://www.instagram.com/abd_samad_pk/",
    profileImage: "/images/Profile.png",        // Hero section image
    fallbackImage: "/images/Profile.png",        // About section image
    resumeUrl: "#", // Placeholder for resume download
    web3FormsAccessKey: "YOUR_ACCESS_KEY_HERE", // Go to https://web3forms.com/ to get your free key
  },
  about: {
    bio: "I am an aspiring Data Analyst and AI Engineer with a strong foundation in Mathematics, Machine Learning, Data Analysis, Artificial Intelligence, and Software Development. I have hands-on experience with Python, Scikit-learn, Pandas, NumPy, SQL, React.js, and MERN Stack development. I enjoy solving real-world problems using data-driven insights and AI-powered solutions. I am passionate about continuous learning, innovation, and building impactful technology.",
    highlights: [
      { title: "Mathematics Background", desc: "Graduated in BSc Mathematics, equipping me with strong logical, statistical, and analytical reasoning skills." },
      { title: "Machine Learning Enthusiast", desc: "Experienced in building, evaluating, and fine-tuning predictive algorithms." },
      { title: "Data Analytics Specialist", desc: "Skilled in extracting, transforming, and visualizing data to drive actionable business decisions." },
      { title: "AI Solutions Development", desc: "Passionate about creating intelligent systems that automate and optimize workflows." },
      { title: "Full Stack Development", desc: "Equipped with React.js and MERN stack capabilities to deploy interactive frontends for AI models." }
    ]
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Feature Engineering", level: 80 },
        { name: "Predictive Modeling", level: 85 }
      ]
    },
    {
      category: "Frontend & Backend",
      items: [
        { name: "React.js", level: 80 },
        { name: "HTML5 & CSS3", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js & Express.js", level: 70 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      category: "Tools & BI",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Excel", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Tableau", level: 75 }
      ]
    }
  ],
  experience: [
    {
      role: "Data Science & AI Consultant Intern",
      company: "Rubixe Technologies",
      duration: "Sep 2024 – Present",
      responsibilities: [
        "Perform extensive data preprocessing, cleaning, and transformation on complex datasets.",
        "Develop and evaluate Machine Learning models for predictive analytics and classification tasks.",
        "Create custom data visualizations using Matplotlib, Seaborn, and BI tools to convey business insights.",
        "Collaborate in the development and deployment of end-to-end AI solutions."
      ]
    },
    {
      role: "React Developer Intern",
      company: "ERE Business Solutions",
      duration: "Nov 2023 – Mar 2024",
      responsibilities: [
        "Developed responsive and interactive web applications using React.js and modern JavaScript.",
        "Created reusable, self-contained UI components to optimize project scalability and code quality.",
        "Improved overall user experience (UX) by tuning site responsiveness and accessibility.",
        "Worked with modern frontend build pipelines, version control (Git), and team collaboration boards."
      ]
    }
  ],
  projects: [
    {
      title: "FIFA Analytics Project",
      description: "A comprehensive football player analytics project using Machine Learning and Advanced Data Science techniques. Conducted player segmentation and wage analysis to gain deep performance insights.",
      dataset: "18,278 Players × 104 Features",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      features: [
        "K-Means Clustering for Player Roles",
        "Principal Component Analysis (PCA)",
        "Player Segmentation and Value Mapping",
        "Country-wise Analytics Dashboard",
        "Wage Analysis & Regression Insights"
      ],
      image: "/images/portfolio1.jpg",
      github: "https://github.com/ABDULSAMADPK",
      demo: "#"
    },
    {
      title: "Insurance Cost Prediction",
      description: "A predictive modeling project built to estimate healthcare insurance charges based on individual demographic and health factors. Successfully evaluated regression algorithms to optimize prediction accuracy.",
      dataset: "1,338 Records",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      features: [
        "Linear Regression model baseline",
        "Random Forest Regressor integration",
        "Gradient Boosting Regressor optimization",
        "Achieved an outstanding R² score of 87.35%"
      ],
      image: "/images/portfolio2.jpg",
      github: "https://github.com/ABDULSAMADPK",
      demo: "#"
    },
    {
      title: "Nanma Store Website",
      description: "A responsive React-based web application developed with modern UI components and user authentication pages.",
      dataset: "Frontend Developer",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      features: [
        "User Registration & Login System",
        "Forgot Password Page flows",
        "Home, About, and Contact pages",
        "Fully Responsive Web Design"
      ],
      image: "/images/portfolio3.jpg",
      github: "https://github.com/ABDULSAMADPK/nanma-samad",
      demo: "https://nanma-samad.netlify.app/"
    }
  ],
  certifications: [
    {
      name: "IABAC AI Expert",
      issuer: "International Association for Business Analytics Certification (IABAC)",
      desc: "Validates mastery in building and deploying advanced Artificial Intelligence frameworks and Neural Networks.",
      icon: "GiArtificialIntelligence"
    },
    {
      name: "IABAC Data Scientist",
      issuer: "International Association for Business Analytics Certification (IABAC)",
      desc: "Demonstrates core proficiency in advanced statistics, data preprocessing, machine learning algorithms, and predictive modeling.",
      icon: "BsGraphUp"
    },
    {
      name: "Datamites Certified Data Scientist",
      issuer: "Datamites Global Training Institute",
      desc: "Comprehensive certification covering end-to-end data science projects, model evaluation, and deployment techniques.",
      icon: "FiAward"
    },
    {
      name: "NASSCOM Certification",
      issuer: "NASSCOM FutureSkills",
      desc: "Aligned with industry standards, validating competency in digital tech fields including Python scripting and data operations.",
      icon: "MdOutlineVerified"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "University of Calicut",
      status: "Academic background",
      details: "Equipped with comprehensive studies in Calculus, Linear Algebra, Statistics, and Numerical Analysis."
    },
    {
      degree: "Data Science & AI Program",
      institution: "Datamites Global Training Institute",
      status: "Professional Training",
      details: "Practical hands-on training focusing on Machine Learning models, Deep Learning, SQL database connections, and business intelligence."
    }
  ]
};
