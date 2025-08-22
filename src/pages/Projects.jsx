"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ExternalLink, Github } from "lucide-react"
import { portfolioProjects } from "../data/projects"
import ProjectsHero from "../components/ProjectsHero"
import SEOHead from "../components/SEOHead"

const Projects = () => {
  const { t, i18n } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  const getLocalizedPath = (path) => {
    if (i18n.language === "en") {
      return path
    }
    return `/${i18n.language}${path}`
  }

  // Filter projects based on category and search term
  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" ||
      project.category.toLowerCase().replace(/\s+/g, "-") === activeCategory ||
      project.category.toLowerCase().includes(activeCategory.replace("-", " "))

    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <>
      <SEOHead
        title={t("projects.title")}
        description={t("projects.description")}
        keywords="Hamza Ougjjou, حمزة اكجو, Projects, Portfolio, Web Development, React, Node.js, Laravel, JavaScript, Full Stack Projects"
        type="website"
      />

      <div className="pt-20 text-white">
        {/* Hero Section */}
        <ProjectsHero
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchTerm}
          onViewChange={setViewMode}
          activeCategory={activeCategory}
          viewMode={viewMode}
        />

        {/* Projects Grid/List */}
        <section className="py-20 px-6 bg-[#121212]">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {activeCategory === "all"
                    ? t("projects.categories.all")
                    : t(`projects.categories.${activeCategory}`) ||
                    activeCategory
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                </h2>
                <p className="text-gray-400">
                  {t("projects.showingResults", {
                    count: filteredProjects.length,
                    total: portfolioProjects.length,
                  })}
                  {searchTerm && t("projects.forSearch", { term: searchTerm })}
                </p>
              </div>
            </motion.div>

            {/* Projects Display */}
            {filteredProjects.length === 0 ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-4">{t("projects.noProjectsFound")}</h3>
                <p className="text-gray-400 mb-8">{t("projects.noProjectsDescription")}</p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchTerm("")
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  {t("projects.clearFilters")}
                </button>
              </motion.div>
            ) : (
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    whileHover={{ y: -10 }}
                    className={`bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all ${viewMode === "list" ? "flex" : ""
                      }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`object-cover ${viewMode === "list" ? "w-48 h-32" : "w-full h-48"}`}
                    />
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-400 mb-4">{project.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-500 bg-opacity-20 text-blue-400 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <Link
                          to={getLocalizedPath(`/project/${project.id}`)}
                          className="text-red-500 hover:text-red-400 font-semibold"
                        >
                          {t("projects.viewDetails")}
                        </Link>
                        <div className="flex space-x-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
