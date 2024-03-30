/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#E83667",
        primaryDark:"#bb2c51",
        secondary:"#21D4B9",
        dark:"#303030",
      },
      container:{
       center:true,
       padding:{
        default:"1rem",
        sm:"2rem",
        lg:"3rem",
        xl:"4rem",
       },
      }

    },
  },
  plugins: [],
}