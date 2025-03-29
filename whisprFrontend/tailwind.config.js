/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767.5px" },
        mobileSm: { max: "639.5px" },
        tabletmini: { min: "640px", max: "767.5px" },
        tablet: { min: "768px", max: "1023.5px" },
        tabmax: { min: "640px", max: "1023.5px" },
      },
      fontFamily: {
        monte: "Montserrat",
        pops: "Poppins",
        sans: "Open-sans",
      },
      colors: {
        mypurple: "#7741f4",
      },
    },
  },
};
