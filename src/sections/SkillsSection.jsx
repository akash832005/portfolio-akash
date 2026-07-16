import { motion } from 'framer-motion'
import { Code2, LayoutGrid, ServerCog, Database, Boxes } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/portfolioData'

const icons = [Code2, LayoutGrid, ServerCog, Database, Boxes]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="Technologies I work with" description="A practical toolset across frontend, backend, databases, cloud, and delivery workflows." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index] || Boxes
            return (
              <motion.article key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-6 shadow-xl shadow-black/20 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
