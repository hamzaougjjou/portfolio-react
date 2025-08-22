"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Send } from "lucide-react"

function ContactForm() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSubmitted(false)

    try {
      const res = await fetch("https://back-end.ougjjou.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      const result = await res.json()

      if (!res.ok) throw new Error(result.error || "Something went wrong")
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError(err.message);
      console.log(err);
      
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 p-8 rounded-lg border border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-8 text-red-500">
        {t("contact.sendMessage")}
      </h2>

      {error && (
        <p className="text-red-400 font-medium mb-4">
          ❌ {t("contact.form.error")}: {error}
        </p>
      )}

      {submitted && (
        <p className="text-green-400 font-medium mb-4">
          ✅ {t("contact.form.success")}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder={t("contact.form.name")}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
        />

        <input
          type="email"
          name="email"
          placeholder={t("contact.form.email")}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
        />

        <input
          type="text"
          name="subject"
          placeholder={t("contact.form.subject")}
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
        />

        <textarea
          name="message"
          placeholder={t("contact.form.message")}
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors disabled:opacity-60"
        >
          {loading ? (
            <span>{t("contact.form.loading") || "Sending..."}</span>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              {t("contact.form.submit")}
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}

export default ContactForm
