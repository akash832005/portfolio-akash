import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { education, certifications, achievements } from '../data/portfolioData'

export default function EducationSection() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Education & Achievements" title="Academic background and milestones" description="A concise view of my education, certifications, and strengths highlighted in the resume." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="mt-2 text-slate-300">{item.institution}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.article>
          <div className="space-y-6">
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.07 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />{item}</li>
                ))}
              </ul>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.14 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Highlights</h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />{item}</li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
