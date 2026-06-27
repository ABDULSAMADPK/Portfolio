# 🌟 Abdul Samad PK | Data Analyst & AI Engineer Portfolio

A premium, modern, and fully responsive developer portfolio built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It showcases data science expertise, machine learning projects, and professional certifications with dynamic animations and clean aesthetics.

---

## 🚀 Live Demo
You can view the live site here: **[https://nanma-samad.netlify.app/](https://nanma-samad.netlify.app/)** (or configure your own custom domain).

---

## ✨ Features

- **Interactive Neural Mesh Background**: A custom HTML5 Canvas particle network animation that interacts with mouse movements and dynamically resizes.
- **Dynamic Typewriter effect**: Displays rotating specialized roles (Data Analyst, AI Engineer, Python Developer).
- **Interactive Skills Dashboard**: Category-wise categorized list of skills complete with animated progress bars.
- **Work Experience & Education Timelines**: Sleek, responsive timelines showcasing professional consultant experience and educational background.
- **Projects Grid**: Showcases featured data science and web development projects with tech tags, source code links, and demo links.
- **Responsive Navigation**: Glassmorphic floating navbar with scroll spy support to highlight active sections and a clean mobile drawer.
- **Functional Contact Form**: Direct message delivery powered by the **Web3Forms API**.
- **Fully Responsive**: Optimized to render beautifully on all device viewports (mobile, tablet, laptop, and desktop).

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS v4, PostCSS, Custom Webkit Scrollbars, Glassmorphism utilities
- **Animations**: Framer Motion (staggered listings, hover lifts, fading entries, scale bounces)
- **Icons**: React Icons (Font Awesome, HiIcons, Github Icons)
- **Build Tool**: Vite v8

---

## 📁 Project Structure

```text
Portfolio/
├── public/                 # Static assets (images, profile pictures)
├── src/
│   ├── components/         # Reusable React components for each section
│   │   ├── Navbar.jsx      # Navigation bar (desktop/mobile)
│   │   ├── Hero.jsx        # Landing section with canvas background
│   │   ├── About.jsx       # Bio and highlight cards
│   │   ├── Skills.jsx      # Skills categories and progress bars
│   │   ├── Experience.jsx  # Interactive work experience timeline
│   │   ├── Projects.jsx    # Projects display grid
│   │   ├── Certifications.jsx # Certificate grid
│   │   ├── Education.jsx   # Education degree cards
│   │   ├── Contact.jsx     # Contact form & social media links
│   │   └── Footer.jsx      # Copyright footer & back-to-top button
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio text and configurations
│   ├── index.css           # Tailwind imports & custom utility classes
│   ├── main.jsx            # React root mount
│   └── App.jsx             # Main layout assembler
├── tailwind.config.js      # Tailwind configurations
├── vite.config.js          # Vite configurations
└── package.json            # Scripts and dependencies list
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/ABDULSAMADPK/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```
This generates a highly optimized `dist/` directory that is ready to be hosted on platforms like Netlify, Vercel, or GitHub Pages.

---

## 📧 Contact Form Setup

This portfolio uses **Web3Forms** for zero-backend form submissions. To receive emails directly:
1. Go to [Web3Forms](https://web3forms.com/) and request a free access key.
2. Open `src/data/portfolioData.js` and locate the `web3FormsAccessKey` field:
   ```javascript
   personalInfo: {
     // ...
     web3FormsAccessKey: "YOUR_ACCESS_KEY_HERE",
   }
   ```
3. Replace `"YOUR_ACCESS_KEY_HERE"` with your actual API key, and form submissions will be routed directly to your email inbox.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
