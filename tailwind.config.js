/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quirk: ["Quirk"],
        marine: ["Mighty Marine"],
        cellofy: ["Cellofy"],
        poppins: ["Poppins"],
        cormorant: ["Cormorant"],
      },
      boxShadow: {
        sh1: ["rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"],
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
