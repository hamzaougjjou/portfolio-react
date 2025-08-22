"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { technicalSkills } from "../data/skills"
import { HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon, LaravelIcon, NodeIcon, TailwindIcon } from "./icons/TechIcons"

const iconMap = {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  LaravelIcon,
  NodeIcon,
  TailwindIcon,
}

const TechnicalSkills = ({ className = "" }) => {
  const { t } = useTranslation()

  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">{t("skills.title")}</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technicalSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon]
            return (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 p-3 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors"
                  >
                    <IconComponent size={40} color={skill.color} />
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">{t("skills.proficiency")}</span>
                      <span className="text-sm font-semibold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>

                  {/* Skill Level Text */}
                  <div className="text-xs text-gray-500 mt-2">
                    {skill.level >= 90 && t("skills.levels.expert")}
                    {skill.level >= 80 && skill.level < 90 && t("skills.levels.advanced")}
                    {skill.level >= 70 && skill.level < 80 && t("skills.levels.intermediate")}
                    {skill.level < 70 && t("skills.levels.beginner")}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">{t("skills.categories.frontend.title")}</h4>
              <p className="text-gray-400">{t("skills.categories.frontend.description")}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-red-500 mb-2">{t("skills.categories.backend.title")}</h4>
              <p className="text-gray-400">{t("skills.categories.backend.description")}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-green-500 mb-2">{t("skills.categories.tools.title")}</h4>
              <p className="text-gray-400">{t("skills.categories.tools.description")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills
