import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useLangStore = create<Store>()(
  persist(
    (set) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
    }),
    { name: "lang-store" }
  )
);
