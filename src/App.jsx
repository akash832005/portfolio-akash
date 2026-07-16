import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <motion.footer initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="border-t border-white/10 bg-slate-950/80 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AKASH P. T. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/akashpt" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
            <a href="https://github.com/akashpt" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
            <a href="https://akashpt.github.io" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">Portfolio</a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
