import { useEffect } from "react";
import i18n from "./i18n";
import { useLangStore } from "./store/lang";

export const LanguageSync = () => {
  const locale = useLangStore((state) => state.locale);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return null;
};
