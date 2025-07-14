/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode with 'dark' class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: {
          50: "#EBF1FF",
          100: "#C8DAFF",
          300: "#7B9ACC",
          400: "#3B66D4",
          600: "#274BB5",
          700: "#1D3C8A",
          900: "#14245B",
        },
        rweBlack: "#000000",
        rweWhite: "#FFFFFF",
      },
      backgroundImage: {
        'rwe-logo': "url('/relaypoint-logo-transparent.png')",
      },
    },
  },
  plugins: [],
};
