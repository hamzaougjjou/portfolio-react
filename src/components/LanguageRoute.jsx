"use client"

import { useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const LanguageRoute = ({ children }) => {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    const supportedLanguages = ["en", "ar", "fr"]
    const currentLang = lang || localStorage.getItem("i18nextLng") || "en";

    if (supportedLanguages.includes(currentLang)) {
      if (i18n.language !== currentLang) {
        i18n.changeLanguage(currentLang)
      }

      // Set document direction and language
      const isRTL = currentLang === "ar"
      document.documentElement.dir = isRTL ? "rtl" : "ltr"
      document.documentElement.lang = currentLang

      // Add RTL class to body for Arabic
      if (isRTL) {
        document.body.classList.add("rtl")
      } else {
        document.body.classList.remove("rtl")
      }
    }
  }, [lang, i18n])

  // Redirect invalid language codes
  if (lang && !["ar", "fr"].includes(lang)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default LanguageRoute
