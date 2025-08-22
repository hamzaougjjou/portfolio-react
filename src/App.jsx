import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LanguageRoute from "./components/LanguageRoute"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectItem from "./pages/ProjectItem"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import "./i18n"
import "./App.css"
import ScrollToTop from "./components/ScrollToTop"
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange"
import Error404 from "./pages/errors/Error404"
import ConsentPopup from "./components/ConsentPopup"

function App() {
  const { i18n } = useTranslation()

  return (
    <Router>
      <div className={`App text-white min-h-screen ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
        <Navbar />

        <section className="min-h-[calc(100vh-110px)]">
          <Routes>
            {/* English routes (default) */}
            <Route
              path="/"
              element={
                <LanguageRoute>
                  <Home />
                </LanguageRoute>
              }
            />
            <Route
              path="/about"
              element={
                <LanguageRoute>
                  <About />
                </LanguageRoute>
              }
            />
            <Route
              path="/projects"
              element={
                <LanguageRoute>
                  <Projects />
                </LanguageRoute>
              }
            />
            <Route
              path="/project/:id"
              element={
                <LanguageRoute>
                  <ProjectItem />
                </LanguageRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <LanguageRoute>
                  <Contact />
                </LanguageRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <LanguageRoute>
                  <Blog />
                </LanguageRoute>
              }
            />

            {/* Arabic routes */}
            <Route
              path="/ar"
              element={
                <LanguageRoute>
                  <Home />
                </LanguageRoute>
              }
            />
            <Route
              path="/ar/about"
              element={
                <LanguageRoute>
                  <About />
                </LanguageRoute>
              }
            />
            <Route
              path="/ar/projects"
              element={
                <LanguageRoute>
                  <Projects />
                </LanguageRoute>
              }
            />
            <Route
              path="/ar/project/:id"
              element={
                <LanguageRoute>
                  <ProjectItem />
                </LanguageRoute>
              }
            />
            <Route
              path="/ar/contact"
              element={
                <LanguageRoute>
                  <Contact />
                </LanguageRoute>
              }
            />
            <Route
              path="/ar/blog"
              element={
                <LanguageRoute>
                  <Blog />
                </LanguageRoute>
              }
            />

            {/* French routes */}
            <Route
              path="/fr"
              element={
                <LanguageRoute>
                  <Home />
                </LanguageRoute>
              }
            />
            <Route
              path="/fr/about"
              element={
                <LanguageRoute>
                  <About />
                </LanguageRoute>
              }
            />
            <Route
              path="/fr/projects"
              element={
                <LanguageRoute>
                  <Projects />
                </LanguageRoute>
              }
            />
            <Route
              path="/fr/project/:id"
              element={
                <LanguageRoute>
                  <ProjectItem />
                </LanguageRoute>
              }
            />
            <Route
              path="/fr/contact"
              element={
                <LanguageRoute>
                  <Contact />
                </LanguageRoute>
              }
            />
            <Route
              path="/fr/blog"
              element={
                <LanguageRoute>
                  <Blog />
                </LanguageRoute>
              }
            />
            <Route
              path="/*"
              element={<Error404 />}
            />

          </Routes>
        </section>
        
        <ConsentPopup />

        <ScrollToTop />
        <ScrollToTopOnRouteChange />
        <Footer />
      </div>
    </Router>
  )
}

export default App
