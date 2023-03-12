module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather"],
      },
      boxShadow: {
        "3xl": "5px 5px 10px #29292a , -5px -5px 10px #181919",
      },
      colors: {
        //cblack: "#0d0b0e",
        cblue: "#94a3b8",
        clight: "#d4d4d8",
        dark: "#010101",
        dark100: "#0a0b0e",
        dark200: "#16181d",
        dark300: "#16181d",
        dark500: "#0f1115",
        dark700: "#202125",
      },
    },
  },
  plugins: [],
};
