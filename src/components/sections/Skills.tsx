import { useState } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, BrainCircuit, ChevronDown, Code2, Cpu, Database, MonitorSmartphone, ScanEye, Server, Wrench, type LucideIcon } from 'lucide-react'
import { skillCategories } from '../../data/skills'

const iconMap: Record<string, LucideIcon> = {
  code: Code2, 'monitor-smartphone': MonitorSmartphone, server: Server,
  'brain-circuit': BrainCircuit, 'scan-eye': ScanEye, database: Database,
  cpu: Cpu, wrench: Wrench,
}

export default function Skills() {
  const { t } = useTranslation()
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 6)
  return (
    <section id="skills" className="relative scroll-mt-20 bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">{t('skills.eyebrow')}</span>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{t('skills.headingStart')} <span className="text-blue-500">{t('skills.headingAccent')}</span></h2>
          <div className="mt-5 h-1 w-20 rounded-full bg-blue-500" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{t('skills.intro')}</p>
        </motion.div>
        <div id="skills-categories" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCategories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Code2
            return (
              <motion.div key={category.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: Math.min(index % 3, 2) * 0.1 }} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-blue-500/40 hover:bg-slate-900">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400 transition-colors group-hover:bg-blue-500/20"><Icon size={25} /></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-white">{t(`skills.categories.${category.id}.title`, { defaultValue: category.title })}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{t(`skills.categories.${category.id}.description`, { defaultValue: category.description })}</p>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {category.skills.map((skill) => <span key={skill} className="rounded-lg border border-blue-500/15 bg-blue-500/5 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300">{skill}</span>)}
                </div>
                <div className="mt-auto pt-7"><div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-500">{t('skills.count', { count: category.skills.length })}</span>
                  <ArrowUpRight size={17} className="text-slate-600 transition-colors group-hover:text-blue-400" />
                </div></div>
              </motion.div>
            )
          })}
        </div>
        {skillCategories.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(current => !current)}
              aria-expanded={showAll}
              aria-controls="skills-categories"
              className="inline-flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 font-medium text-blue-300 transition-colors hover:border-blue-400/60 hover:bg-blue-500/20"
            >
              {showAll ? t('skills.showLess') : t('skills.showMore')}
              <ChevronDown size={18} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
