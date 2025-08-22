"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { personalInfo } from "../data/personalInfo"
import TechnicalSkills from "../components/TechnicalSkills"
import SEOHead from "../components/SEOHead"

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEOHead
        title={t("about.title")}
        description={t("about.subtitle")}
        keywords="Hamza Ougjjou, حمزة اكجو, About, Full Stack Developer, Web Developer Morocco, Experience, Education, Skills"
        type="profile"
      />

      <div className="pt-20 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">{t("about.title")}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("about.subtitle")}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <div className="w-full max-w-md mx-auto">
                  <div className="w-80 h-80 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-64 h-64 border-4 border-blue-300 rounded-lg flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">H</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl font-bold mb-6 text-red-500">{t("about.myStory")}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("hero.description")}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("about.storyDescription")}</p>
                <div className="space-y-2">
                  <p>
                    <span className="text-blue-400 font-semibold">{t("about.location")}:</span> {personalInfo.location}
                  </p>
                  <p>
                    <span className="text-blue-400 font-semibold">{t("about.email")}:</span> {personalInfo.email}
                  </p>
                  <p>
                    <span className="text-blue-400 font-semibold">{t("about.phone")}:</span> {personalInfo.phone}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Technical Skills */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="mx-auto">
                <TechnicalSkills />
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <h3 className="text-2xl font-bold mb-8 text-red-500">{t("about.experience")}</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold mb-2">{t("about.jobs.fullStackDeveloper.title")}</h4>
                    <p className="text-blue-400 mb-2">
                      {t("about.jobs.fullStackDeveloper.company")} • {t("about.jobs.fullStackDeveloper.period")}
                    </p>
                    <p className="text-gray-300">{t("about.jobs.fullStackDeveloper.description")}</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold mb-2">{t("about.jobs.frontendDeveloper.title")}</h4>
                    <p className="text-blue-400 mb-2">
                      {t("about.jobs.frontendDeveloper.company")} • {t("about.jobs.frontendDeveloper.period")}
                    </p>
                    <p className="text-gray-300">{t("about.jobs.frontendDeveloper.description")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <h3 className="text-2xl font-bold mb-8 text-red-500">{t("about.education")}</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold mb-2">{t("about.educations.computerScience.title")}</h4>
                    <p className="text-blue-400 mb-2">
                      {t("about.educations.computerScience.school")} • {t("about.educations.computerScience.period")}
                    </p>
                    <p className="text-gray-300">{t("about.educations.computerScience.description")}</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold mb-2">{t("about.educations.webBootcamp.title")}</h4>
                    <p className="text-blue-400 mb-2">
                      {t("about.educations.webBootcamp.school")} • {t("about.educations.webBootcamp.period")}
                    </p>
                    <p className="text-gray-300">{t("about.educations.webBootcamp.description")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default About
