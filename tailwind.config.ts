import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Pirata One'", "serif"],
      },
      colors: {
        primary: "#8B0000", // Rosso scuro
        secondary: "#D3D3D3", // Grigio chiaro
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerBG: "#808080", // Questo codice colore per il footer è già presente
      },
    },
  },
  plugins: [],
} satisfies Config;
