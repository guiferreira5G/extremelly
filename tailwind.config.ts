import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#E91E8C",
        "pink-light": "#F472B6",
        "pink-pale": "#FCE7F3",
        "off-white": "#FAF9F6",
        "blue-royal": "#1A3A8F",
        "yellow-gold": "#F5C518",
        "gray-dark": "#1A1A1A",
        "gray-mid": "#6B7280",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "Sora", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "slide-in": "slide-in 0.4s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        "pink-sm": "0 2px 12px rgba(233,30,140,0.12)",
        "pink-md": "0 4px 24px rgba(233,30,140,0.18)",
        "pink-lg": "0 8px 40px rgba(233,30,140,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
