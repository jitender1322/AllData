/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        textColor: "#4B5563",
        Color: " #E5E7EB99",
        bgColor: "#4F46E5",
        bgColor2: " #EEF2FF",
        light: "#6B7280"
      },
    },
  },
  plugins: [],
}