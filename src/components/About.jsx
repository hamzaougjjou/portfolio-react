import { motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function About({getLocalizedPath}) {
   const { t } = useTranslation()
  return (
     <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-red-500">{t("about.title")}</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">{t("about.storyDescription")}</p>
            <Link to={getLocalizedPath("/contact")}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ca1b28] hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors mt-6"
              >
                {t("contact.title")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
  )
}

export default About