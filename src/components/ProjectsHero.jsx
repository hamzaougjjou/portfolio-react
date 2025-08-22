"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Search, Filter, Grid, List, Code, Palette, Smartphone, ShoppingCart, BarChart3, Database } from "lucide-react"
import { projectCategories } from "../data/projectCategories"

const categoryIcons = {
  "web-development": Code,
  "mobile-development": Smartphone,
  "ui-ux-design": Palette,
  "e-commerce": ShoppingCart,
  dashboard: BarChart3,
  api: Database,
}

const ProjectsHero = ({ onCategoryChange, onSearchChange, onViewChange, activeCategory, viewMode }) => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId)
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 border border-blue-400 rounded-lg opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-40 right-20 w-16 h-16 border border-red-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-blue-500 bg-opacity-20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Code size={16} className="mr-2" />
            {t("hero.portfolioShowcase")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
          >
            {t("projects.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {t("projects.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-gray-400"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span>7+ {t("projects.stats.totalProjects")}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
              <span>{t("projects.stats.technologiesUsed")}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Open Source Available</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t("projects.searchPlaceholder")}
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => onViewChange("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => onViewChange("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
            >
              <Filter size={20} className="mr-2" />
              {t("projects.filters")}
            </button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={`transition-all duration-300 ${
            isFilterOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-12">
            {projectCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.id] || Code
              const isActive = activeCategory === category.id

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`relative p-4 rounded-xl border transition-all duration-300 group ${
                    isActive
                      ? "bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-2 rounded-lg mb-2 transition-colors ${
                        isActive
                          ? "bg-white bg-opacity-20"
                          : "bg-gray-700 group-hover:bg-blue-500 group-hover:bg-opacity-20"
                      }`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">
                      {t(`projects.categories.${category.id}`) || category.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? "bg-white bg-opacity-20 text-white"
                          : "bg-gray-700 text-gray-400 group-hover:bg-blue-500 group-hover:bg-opacity-20 group-hover:text-blue-300"
                      }`}
                    >
                      {category.count} {category.count === 1 ? "project" : "projects"}
                    </span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 border-2 border-blue-400 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: t("projects.stats.totalProjects"), value: "7+", color: "text-blue-400" },
            { label: t("projects.stats.technologiesUsed"), value: "15+", color: "text-red-400" },
            { label: t("projects.stats.yearsExperience"), value: "3+", color: "text-green-400" },
            { label: t("projects.stats.happyClients"), value: "10+", color: "text-yellow-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
            >
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsHero
