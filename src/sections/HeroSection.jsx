import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, BadgeCheck, Send, Briefcase } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_80%_10%,_rgba(168,85,247,0.2),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Briefcase size={16} />
            Available for full-stack opportunities
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <p className="text-xl font-medium text-cyan-200">{profile.title}</p>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{profile.summary}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-900/30 transition hover:scale-[1.02]">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume_july2026.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 backdrop-blur transition hover:border-cyan-400/40 hover:text-cyan-300">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-100 backdrop-blur transition hover:border-cyan-400/40 hover:text-cyan-300">
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <div className="flex gap-4 pt-2 text-slate-300">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-cyan-300"><BadgeCheck size={18} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-cyan-300"><Send size={18} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
          <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.92))] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Developer</span>
                <span className="text-sm text-slate-400">{profile.location}</span>
              </div>
              <div className="space-y-4">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/30 to-violet-500/20 text-4xl font-semibold text-white">AP</div>
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-semibold text-white">{profile.name}</h2>
                  <p className="text-slate-300">{profile.title}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
                Building secure, scalable, and user-focused web products with React and Python.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
