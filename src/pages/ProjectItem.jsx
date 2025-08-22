"use client"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react"
import { portfolioProjects } from "../data/projects"
import SEOHead from "../components/SEOHead"

const ProjectItem = () => {
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const project = portfolioProjects.find((p) => p.id === Number.parseInt(id))

  const getLocalizedPath = (path) => {
    if (i18n.language === "en") {
      return path
    }
    return `/${i18n.language}${path}`
  }

  if (!project) {
    return (
      <>
        <SEOHead
          title={t("projects.projectNotFound")}
          description="The requested project could not be found."
          type="website"
        />
        <div className="pt-20 min-h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t("projects.projectNotFound")}</h1>
            <Link to={getLocalizedPath("/projects")} className="text-blue-400 hover:text-blue-300">
              {t("projects.backToProjects")}
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEOHead
        title={`${project.title} - ${t("projects.title")}`}
        description={`${project.description} - Built with ${project.technologies.join(", ")} by Hamza Ougjjou`}
        keywords={`Hamza Ougjjou, حمزة اكجو, ${project.title}, ${project.technologies.join(", ")}, ${project.category}, Web Development Project`}
        image={project.image}
        type="article"
      />
      <div className="pt-20 bg-gray-900 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <Link
                to={getLocalizedPath("/projects")}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
              >
                <ArrowLeft size={20} className="mr-2" />
                {t("projects.backToProjects")}
              </Link>

              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                      <p className="text-gray-300 text-lg">{project.description}</p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {t("projects.liveDemo")}
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        {t("projects.code")}
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-500">{t("projects.projectDetails")}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-400" />
                          <span>
                            {t("blog.category")}: {project.category}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <User size={16} className="mr-2 text-gray-400" />
                          <span>Type: {project.description}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-500">{t("projects.technologiesUsed")}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-500 bg-opacity-20 text-blue-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-red-500">{t("projects.projectOverview")}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {t("projects.projectOverviewDescription", {
                        technologies: project.technologies.join(", "),
                      })}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-red-500">{t("projects.keyFeatures")}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {t("projects.keyFeaturesList", { returnObjects: true }).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default ProjectItem
