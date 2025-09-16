import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useLangStore } from "./store/lang";

import indexEn from "./locales/en/index.json";
import indexRu from "./locales/ru/index.json";
import indexTm from "./locales/tm/index.json";

const initialLanguage = useLangStore.getState().locale;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      index: indexEn,
    },
    ru: {
      index: indexRu,
    },
    tm: {
      index: indexTm,
    },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  ns: ["index"],
  defaultNS: "index",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
