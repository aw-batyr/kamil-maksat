// src/store/theme.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  isDark: boolean;
  setDark: (v: boolean) => void;
  toggleTheme: () => void;
  init: () => void; // optional: можно вызывать из корня приложения
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      isDark: false,
      setDark: (v: boolean) => {
        set({ isDark: v });
        // применяем класс сразу
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", v);
        }
      },
      toggleTheme: () => {
        const next = !get().isDark;
        get().setDark(next);
      },
      init: () => {
        // вызывай при старте приложения (опционально)
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("theme-preference"); // fallback если не используешь persist
        if (saved === "dark") {
          get().setDark(true);
        } else if (saved === "light") {
          get().setDark(false);
        } else {
          // если не было сохранения — используем системную настройку
          const prefers =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
          get().setDark(Boolean(prefers));
        }
      },
    }),
    {
      name: "theme-preference",
      // onRehydrateStorage — когда Zustand восстанавливает состояние, гарантируем применение класса
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const isDark = (state as any).isDark;
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", !!isDark);
        }
      },
    }
  )
);
