"use client"

import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Ghost } from "lucide-react"

const Error404 = () => {
  const location = useLocation()
  const lang = location.pathname.split("/")[1]
  const supportedLangs = ["ar", "en", "fr"]
  const basePath = supportedLangs.includes(lang) ? `/${lang}` : "/"

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Ghost className="w-20 h-20 text-red-500 mb-6 animate-pulse" />
      <h1 className="text-6xl font-extrabold text-white tracking-wider mb-2">404</h1>
      <p className="text-lg text-gray-400 mb-6 max-w-md">
        الصفحة التي تحاول الوصول إليها غير موجودة. ربما تم حذفها أو تم تغيير عنوانها.
      </p>
      <Link
        to={basePath}
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 shadow-lg"
      >
        العودة للصفحة الرئيسية
      </Link>
    </motion.div>
  )
}

export default Error404
