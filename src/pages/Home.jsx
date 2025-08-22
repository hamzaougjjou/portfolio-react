"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Monitor, Code, ExternalLink ,Github ,Smartphone, Mail, Phone, MapPin } from "lucide-react"
import { personalInfo } from "../data/personalInfo"
import { portfolioProjects } from "../data/projects"
import { Link } from "react-router-dom"
import TechnicalSkills from "../components/TechnicalSkills"
import Hero from "../components/Hero"
import About from "../components/About"
import SEOHead from "../components/SEOHead"
import ContactForm from "../components/ContactForm"

const iconMap = {
  Monitor,
  Code,
  Smartphone,
}

const Home = () => {
  const { t, i18n } = useTranslation()

  const getLocalizedPath = (path) => {
    if (i18n.language === "en") {
      return path
    }
    return `/${i18n.language}${path}`
  }

  return (
    <>
      <SEOHead
        title={t("hero.title")}
        description={t("hero.description")}
        keywords="Hamza Ougjjou, حمزة اكجو, Full Stack Developer, Web Developer Morocco, React Developer, Node.js, Laravel, JavaScript, Frontend Developer, Backend Developer, Portfolio"
        type="website"
      />
      <div className="pt-20 text-white">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-500">{t("services.title")}</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Monitor",
                  title: t("services.webDesign.title"),
                  description: t("services.webDesign.description"),
                },
                {
                  icon: "Code",
                  title: t("services.webDevelopment.title"),
                  description: t("services.webDevelopment.description"),
                },
                {
                  icon: "Smartphone",
                  title: t("services.mobileApp.title"),
                  description: t("services.mobileApp.description"),
                },
              ].map((service, index) => {
                const IconComponent = iconMap[service.icon]
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                  >
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <Link target="_blank" to="#" className="text-red-500 hover:text-red-400 font-semibold">
                      {t("services.readMore")} →
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <About getLocalizedPath={getLocalizedPath} />

        {/* Technical Skills */}
        <TechnicalSkills />

        {/* Portfolio Projects */}
        <section className="py-20 px-6 border-white m-2 border-[1px] rounded-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[#ca1b28] text-4xl font-bold mb-8">{t("projects.featuresTitle")}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={getLocalizedPath("/project/" + project.id)}
                      className="text-red-500 hover:text-red-400 font-semibold"
                    >
                      {t("projects.viewProject")} →
                    </Link>
                    <div className="flex space-x-2">
                      <Link target="_blank" to={project.liveUrl} className="text-gray-400 hover:text-blue-400">
                        <ExternalLink size={20} />
                      </Link>
                      <Link target="_blank" to={project.githubUrl} className="text-gray-400 hover:text-blue-400">
                        <Github size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link to={getLocalizedPath("/projects")}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                {t("projects.viewAllProjects")}
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-[#ca1b28]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
              <p className="text-xl mb-8 opacity-90">{t("cta.description")}</p>
              <Link to={getLocalizedPath("/contact")}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#ca1b28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t("cta.button")}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
       <section className="py-20 px-4 overflow-x-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8">{t("contact.getInTouch")}</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-blue-400 mr-4" size={24} />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-400 mr-4" size={24} />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-400 mr-4" size={24} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >

                <ContactForm />

              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
