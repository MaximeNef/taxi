import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("public/locales/en/translation.json"),
      },

      fr: {
        translation: require("public/locales/fr/translation.json"),
      },

      nl: {
        translation: require("public/locales/nl/translation.json"),
      },
    },
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
