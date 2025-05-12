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
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
};
