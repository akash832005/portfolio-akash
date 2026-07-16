import { motion } from 'framer-motion'
import { Target, Sparkles, Cpu, ShieldCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Career Focus',
      text: 'I am building a career in full-stack development by creating secure, scalable, and high-performance applications.',
    },
    {
      icon: Cpu,
      title: 'Core Strengths',
      text: 'My work blends frontend engineering, backend API development, database optimization, deployment, and testing.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional Edge',
      text: 'I bring a strong foundation in problem solving, object-oriented programming, and application performance tuning.',
    },
  ]

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="Crafting reliable digital experiences" description="A developer focused on delivering thoughtful interfaces and robust backend systems from concept to deployment." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <p className="text-lg leading-8 text-slate-300">
              I am a Full Stack Developer with experience in designing scalable, secure, and responsive web applications using Python, Django, Flask, React.js, JavaScript, REST APIs, MySQL, AWS, Docker, CI/CD pipelines, and Linux. I enjoy turning product ideas into production-ready features that balance usability, performance, and maintainability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Agile Delivery</span>
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">JWT Security</span>
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Cloud Deployment</span>
            </div>
          </motion.div>
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
