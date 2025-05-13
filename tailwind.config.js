// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#845BB3",
        secondary: "#A0D2EB",
      },
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatHTML: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatJS: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatReact: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatTS: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatHTML: "floatHTML 3s ease-in-out infinite",
        floatJS: "floatJS 3s ease-in-out infinite",
        floatReact: "floatReact 4s ease-in-out infinite",
        floatTS: "floatTS 3s ease-in-out infinite",
      },
    },
  },
};
