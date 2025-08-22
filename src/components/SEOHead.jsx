"use client"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

const SEOHead = ({
  title,
  description,
  keywords,
  image = "https://hamzaougjjou.com/og-image.jpg",
  type = "website",
}) => {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    // Update document title
    const pageTitle = title ? `${title} | Hamza Ougjjou` : t("hero.title") + " | Hamza Ougjjou"
    document.title = pageTitle

    // Update meta description
    const metaDescription = description || t("hero.description")
    updateMetaTag("description", metaDescription)

    // Update keywords
    const metaKeywords =
      keywords ||
      "Hamza Ougjjou, حمزة اكجو, Full Stack Developer, Web Developer Morocco, React Developer, Node.js, Laravel"
    updateMetaTag("keywords", metaKeywords)

    // Update Open Graph tags
    updateMetaTag("og:title", pageTitle, "property")
    updateMetaTag("og:description", metaDescription, "property")
    updateMetaTag("og:url", `https://hamzaougjjou.com${location.pathname}`, "property")
    updateMetaTag("og:image", image, "property")
    updateMetaTag("og:type", type, "property")

    // Update Twitter tags
    updateMetaTag("twitter:title", pageTitle, "property")
    updateMetaTag("twitter:description", metaDescription, "property")
    updateMetaTag("twitter:image", image, "property")

    // Update language-specific tags
    document.documentElement.lang = i18n.language
    updateMetaTag("og:locale", getOGLocale(i18n.language), "property")

    // Update canonical URL
    updateCanonicalURL(`https://hamzaougjjou.com${location.pathname}`)

    // Update alternate language links
    updateAlternateLanguages(location.pathname)
  }, [title, description, keywords, image, type, t, i18n.language, location.pathname])

  const updateMetaTag = (name, content, attribute = "name") => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    if (element) {
      element.setAttribute("content", content)
    } else {
      element = document.createElement("meta")
      element.setAttribute(attribute, name)
      element.setAttribute("content", content)
      document.head.appendChild(element)
    }
  }

  const updateCanonicalURL = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute("href", url)
    } else {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      canonical.setAttribute("href", url)
      document.head.appendChild(canonical)
    }
  }

  const updateAlternateLanguages = (pathname) => {
    // Remove existing alternate links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingAlternates.forEach((link) => link.remove())

    // Add new alternate links
    const languages = [
      { code: "en", url: pathname.replace(/^\/(ar|fr)/, "") || "/" },
      { code: "ar", url: `/ar${pathname.replace(/^\/(ar|fr)/, "") || ""}` },
      { code: "fr", url: `/fr${pathname.replace(/^\/(ar|fr)/, "") || ""}` },
      { code: "x-default", url: pathname.replace(/^\/(ar|fr)/, "") || "/" },
    ]

    languages.forEach(({ code, url }) => {
      const link = document.createElement("link")
      link.setAttribute("rel", "alternate")
      link.setAttribute("hreflang", code)
      link.setAttribute("href", `https://hamzaougjjou.com${url}`)
      document.head.appendChild(link)
    })
  }

  const getOGLocale = (language) => {
    const locales = {
      en: "en_US",
      ar: "ar_MA",
      fr: "fr_FR",
    }
    return locales[language] || "en_US"
  }

  return null // This component doesn't render anything
}

export default SEOHead
