import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/portfolioData'

const filters = ['All', ...new Set(projects.flatMap((project) => project.technologies))]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.technologies.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Selected work" description="A few of the full-stack and AI-powered applications I’ve built and contributed to." />
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-8 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{tech}</span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:text-cyan-300">
                  <Send size={16} /> GitHub
                </a>
                <a href={project.demo} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition hover:text-cyan-100">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
