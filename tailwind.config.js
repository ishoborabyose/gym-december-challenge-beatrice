/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "font"
      },
      backgroundImage:{
        "video": "url('/images/20130828__Chakrabarti_Bockelmann_Interview_AE_24991_16x9 - Copy.jpeg')"
      }
      
    },
  },
  plugins: [],
}
