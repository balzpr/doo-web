/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        avenir: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        burn: "burn 2s ease-in-out infinite",
        handshake: "handshake 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      colors: {
        dark: {
          primary: "#0f172a",
          secondary: "#1e293b",
          accent: "#334155",
          text: {
            primary: "#f8fafc",
            secondary: "#cbd5e1",
            muted: "#94a3b8",
          },
        },
      },
    },
  },
  plugins: [],
};
