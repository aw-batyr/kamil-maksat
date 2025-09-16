// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // подставь свои пути
    "./public/**/*.html",
  ],
  darkMode: "class", // <--- важное: переключение через .dark класс
  theme: {
    extend: {
      colors: {
        // связываем имена цветов с CSS-переменными
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-blue": "var(--color-accent-blue)",
        "accent-light-blue": "var(--accent-light-blue)",
        "input-border": "var(--input-border)",
        // добавь другие переменные по необходимости
      },
      boxShadow: {
        card: "var(--card-shadow)", // если нужен
      },
      borderRadius: {
        xl: "var(--radius)",
      },
    },
  },
  plugins: [],
};
