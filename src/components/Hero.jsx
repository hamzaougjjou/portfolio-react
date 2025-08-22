"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import code_hero from "./../assets/code_hero.svg"

function Hero() {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-blue-400 mb-4">{t("hero.greeting")}</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">{t("hero.description")}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ca1b28] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("hero.downloadCV")}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="hidden lg:block w-100 h-100 flex items-center justify-center">
            <img src={code_hero || "/placeholder.svg"} alt="code hero image" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
