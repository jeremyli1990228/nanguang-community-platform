/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'primary-hover': '#2563eb',
        danger: '#ef4444',
        warning: '#f59e0b',
        success: '#10b981',
      }
    },
  },
  plugins: [],
}
