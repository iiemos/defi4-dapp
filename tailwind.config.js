/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          black: "#000000",
          panel: "#0A0A0A",
          elevated: "#111111",
          line: "#1F1F1F",
          muted: "#666666",
          text: "#CCCCCC",
          gold: "#D4AF37",
          "gold-dark": "#B8962E",
          success: "#27AE60",
          warning: "#F39C12",
          danger: "#E74C3C",
        },
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.8)",
        gold: "0 0 0 1px rgba(212,175,55,0.18), 0 18px 48px rgba(0,0,0,0.55)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
