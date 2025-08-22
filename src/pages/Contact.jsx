"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Mail, Phone, MapPin } from "lucide-react"
import { personalInfo } from "../data/personalInfo"
import SEOHead from "../components/SEOHead"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
       <SEOHead
        title={t("contact.title")}
        description={t("contact.subtitle")}
        keywords="Hamza Ougjjou, حمزة اكجو, Contact, Hire, Web Developer, Full Stack Developer, Morocco, Email, Phone"
        type="website"
      />

      <div className="pt-20  text-white">
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
              <h1 className="text-5xl font-bold mb-6">{t("contact.title")}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl font-bold mb-8 text-red-500">{t("contact.getInTouch")}</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("about.email")}</h3>
                      <p className="text-gray-300">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("about.phone")}</h3>
                      <p className="text-gray-300">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{t("about.location")}</h3>
                      <p className="text-gray-300">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-500">{t("contact.whyWorkWithMe")}</h3>
                  <ul className="text-gray-300 space-y-2">
                    {t("contact.reasons", { returnObjects: true }).map((reason, index) => (
                      <li key={index}>• {reason}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

             <ContactForm />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Contact
