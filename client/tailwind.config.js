module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F5233",
        background: "#F5EEE4",
        secondary: "#1E3821",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
