"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Calendar, User, ArrowRight } from "lucide-react"
import SEOHead from "../components/SEOHead"

const Blog = () => {
  const { t } = useTranslation()

  // Keep blog articles untranslated as requested
  const blogPosts = [
    // {
    //   id: 1,
    //   title: "The Future of Web Development",
    //   excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    //   author: "hamza ougjjou",
    //   date: "2024-01-15",
    //   image: "https://mostaql.hsoubcdn.com/uploads/thumbnails/3815125/6852f062731d7/Untitled-1.png",
    //   category: "Technology",
    // }
  ]

  return (
    <>
      <SEOHead
        title={t("blog.title")}
        description={t("blog.subtitle")}
        keywords="Hamza Ougjjou, حمزة اكجو, Blog, Web Development, React, JavaScript, Programming, Tutorials, Tech Articles"
        type="blog"
      />
      <div className="pt-20">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">{t("blog.title")}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("blog.subtitle")}</p>
            </motion.div>

            {blogPosts.length === 0 && <h2 className="p-4 bg-red-100 text-black font-semibold text-center">No Articles Found</h2>}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-black rounded-lg shadow-lg overflow-hidden"
                >
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {t("blog.category")}: {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User size={16} className="mr-1" />
                        {t("blog.author")}: {post.author}
                      </div>
                      <button className="text-green-500 hover:text-green-600 font-semibold flex items-center">
                        {t("blog.readMore")}
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {blogPosts.length > 0 && <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center mt-12"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t("blog.loadMore")}
              </button>
            </motion.div>}
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Blog
