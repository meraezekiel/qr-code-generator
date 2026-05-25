/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f5f1e8",
        "cream-deep": "#ede7d6",
        paper: "#fbf8f0",
        ink: "#1a1817",
        "ink-soft": "#3a342f",
        muted: "#8a8478",
        "muted-deep": "#5c574e",
        hairline: "#e2dac5",
        "hairline-dim": "#ebe4d1",
        forest: "#1b5e3a",
        "forest-deep": "#134529",
        "forest-soft": "#e7efe8",
        lime: "#dffc60",
        "lime-deep": "#b8e235",
        clay: "#c8542a",
        sun: "#f0b429",
      },
      fontFamily: {
        serif: [
          "Instrument Serif",
          "Cormorant Garamond",
          "Times New Roman",
          "Georgia",
          "serif",
        ],
        sans: [
          "Manrope",
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
