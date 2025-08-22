import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Import translation files
import enTranslations from "./locales/en.json"
import arTranslations from "./locales/ar.json"
import frTranslations from "./locales/fr.json"

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  fr: {
    translation: frTranslations,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["path", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
