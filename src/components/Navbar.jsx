"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import LanguageSwitcher from "./LanguageSwitcher"
import logo from "./../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const getLocalizedPath = (path) => {
    if (i18n.language === "en") {
      return path
    }
    return `/${i18n.language}${path}`
  }

  const navItems = [
    { name: t("nav.home"), path: getLocalizedPath("/") },
    { name: t("nav.projects"), path: getLocalizedPath("/projects") },
    { name: t("nav.about"), path: getLocalizedPath("/about") },
    { name: t("nav.contact"), path: getLocalizedPath("/contact") },
    { name: t("nav.blog") , path: getLocalizedPath("/blog") },
  ]

  return (
    <nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="nav-bar bg-black text-white px-2 py-4 fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to={getLocalizedPath("/")} className="text-2xl font-bold text-blue-400">
          <img src={logo || "/placeholder.svg"} className="w-10" alt="H" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-400 font-bold transition-colors ${
                location.pathname === item.path ? "text-blue-400" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
         className="md:hidden bg-green-900 rounded-md mt-2 px-2 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 hover:text-blue-400 font-bold transition-colors ${
                location.pathname === item.path ? "text-blue-400" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
