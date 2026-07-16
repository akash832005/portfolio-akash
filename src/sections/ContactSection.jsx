import { motion } from 'framer-motion'
import { Mail, BadgeCheck, Send, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/portfolioData'

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contact" title="Let’s build something meaningful" description="I’m open to collaborations, internships, and full-time opportunities in modern web development." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"><Mail size={18} /></div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-slate-200 transition hover:text-cyan-300">{profile.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"><BadgeCheck size={18} /></div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-cyan-300">linkedin.com/in/akashpt</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300"><ArrowRight size={18} /></div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-cyan-300">github.com/akashpt</a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: 0.08 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40" placeholder="Your name" />
              </label>
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Email</span>
                <input type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40" placeholder="you@email.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40" placeholder="Tell me about your idea..." />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
