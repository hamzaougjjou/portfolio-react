"use client"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇲🇦", dir: "rtl" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode) => {
    const currentPath = location.pathname
    let newPath = currentPath

    // Remove current language prefix if exists
    const langPattern = /^\/(ar|fr)/
    const pathWithoutLang = currentPath.replace(langPattern, "") || "/"

    // Add new language prefix if not English
    if (langCode !== "en") {
      newPath = `/${langCode}${pathWithoutLang === "/" ? "" : pathWithoutLang}`
    } else {
      newPath = pathWithoutLang
    }

    // Change language and navigate
    i18n.changeLanguage(langCode)

    // Set document direction
    const selectedLang = languages.find((lang) => lang.code === langCode)
    document.documentElement.dir = selectedLang?.dir || "ltr"
    document.documentElement.lang = langCode

    navigate(newPath)
    setIsOpen(false)
    window.location.reload();

  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors border border-gray-700"
      >
        <Globe size={16} />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="hidden md:block text-sm">{currentLanguage.name}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${currentLanguage.code === language.code
                    ? "bg-blue-500 bg-opacity-20 text-blue-400"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {currentLanguage.code === language.code && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}

export default LanguageSwitcher
