import { motion } from 'framer-motion'
import { BriefcaseBusiness, BadgeCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Professional experience" description="A timeline of full-stack delivery, product support, and deployment improvements." />
        <div className="mt-12 space-y-8">
          {experience.map((item, index) => (
            <motion.article key={item.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <BriefcaseBusiness size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="text-cyan-300">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.duration}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Responsibilities</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {item.responsibilities.map((entry) => (
                      <li key={entry} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Achievements</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {item.achievements.map((entry) => (
                      <li key={entry} className="flex gap-2"><BadgeCheck className="mt-1 shrink-0 text-cyan-300" size={16} />{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
