/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-cl':'#025162',
      },
      backgroundColor:{
        'light':'#EADFD8',
        'dark':'#025162'
      },
      height:{
        myheight:'510px'
      }
    },
  },
  plugins: [],
}

