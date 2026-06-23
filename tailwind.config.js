/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",      // Cyan
        secondary: "#8B5CF6",    // Purple
        accent: "#38BDF8",       // Sky
        bgDark: "#0F172A",       // Slate 900
        cardDark: "#1E293B",     // Slate 800
        textLight: "#F8FAFC",    // Slate 50
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
