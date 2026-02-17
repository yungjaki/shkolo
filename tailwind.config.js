/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
  colors: {
    appBlue: "#1486C9",
    appBg: "#F2F4F7",
    divider: "#E5E7EB",

    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF", // 👈 IMPORTANT for "Няма оценки"
  },
},
  },
  plugins: [],
};
