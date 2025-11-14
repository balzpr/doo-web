/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        burn: "burn 2s ease-in-out infinite",
        handshake: "handshake 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      colors: {
        dark: {
          primary: "#000000",
          secondary: "#0a0a0a",
          accent: "#1a1a1a",
          text: {
            primary: "#ffffff",
            secondary: "#e5e5e5",
            muted: "#a3a3a3",
          },
        },
      },
    },
  },
  plugins: [],
};
