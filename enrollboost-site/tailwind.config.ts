import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // EnrollBoost brand
        ink: {
          DEFAULT: "#14213D", // navy
          soft: "#2A3A5E",
          muted: "#5B6B8C",
        },
        accent: {
          DEFAULT: "#F5821F", // orange
          soft: "#FF9A3D",
          dark: "#D96B0C",
        },
        brand: {
          blue: "#2C7BE5",
          blueSoft: "#5A9BF0",
        },
        paper: {
          DEFAULT: "#FAF9F6",
          soft: "#F4F2ED",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,33,61,0.04), 0 8px 30px rgba(20,33,61,0.06)",
        lift: "0 20px 60px -20px rgba(20,33,61,0.25)",
        glow: "0 20px 60px -15px rgba(245,130,31,0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(20,33,61,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,33,61,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
