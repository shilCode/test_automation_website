/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#6366f1', // indigo-500
  				dark: '#4f46e5',   // indigo-600
  			},
  			secondary: {
  				DEFAULT: '#06b6d4', // cyan-500
  			},
  			accent: {
  				DEFAULT: '#f43f5e', // rose-500
  			},
  			background: {
  				DEFAULT: '#f8fafc', // slate-50
  				dark: '#18181b',    // zinc-900
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
