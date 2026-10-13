import { motion } from 'motion/react'
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { experiences } from '../../data/experiences'

export default function ExperienceSection() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleViewProject = (projectId: string) => {
    navigate(`/?section=${encodeURIComponent(projectId)}`)
  }
  return (
    <section id="experience" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t('experience.eyebrow')}</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{t('experience.title')}</h2>
          <p className="max-w-2xl leading-relaxed text-slate-400">{t('experience.intro')}</p>
        </motion.div>
        <div className="relative space-y-8 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-blue-500/40 before:to-transparent sm:before:left-[23px]">
          {experiences.map((experience, index) => {
            const isInternship = experience.type === 'Internship'
            const itemKey = `experience.items.${experience.id}`
            const highlights = t(`${itemKey}.highlights`, { returnObjects: true }) as string[]
            return (
              <motion.div key={experience.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative pl-14 sm:pl-18">
                <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/40 bg-slate-900 text-blue-400 shadow-lg shadow-blue-500/10 sm:h-12 sm:w-12">
                  {isInternship ? <BriefcaseBusiness size={20} /> : <GraduationCap size={21} />}
                </div>
                <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2"><span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">{t(isInternship ? 'experience.internship' : 'experience.research')}</span></div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">{t(`${itemKey}.role`)}</h3>
                      <p className="mt-2 text-base font-semibold text-blue-400">{experience.organization}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400"><CalendarDays size={16} /><span>{t(`${itemKey}.period`)}</span></div>
                  </div>
                  <div className="mb-5 flex items-start gap-2 text-sm text-slate-300"><MapPin size={17} className="mt-0.5 shrink-0 text-blue-400"/><span>{t('experience.projectLabel')}: <strong>{t(`projects.items.${experience.projectId}.title`)}</strong></span></div>
                  <p className="mb-6 leading-relaxed text-slate-400">{t(`${itemKey}.description`)}</p>
                  <h4 className="mb-3 text-sm font-semibold text-slate-200">{t('experience.contributions')}</h4>
                  <ul className="mb-7 space-y-3">{highlights.map((highlight, i) => <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"/><span>{highlight}</span></li>)}</ul>
                  <div className="mb-7 flex flex-wrap gap-2">{experience.technologies.map(technology => <span key={technology} className="rounded-lg border border-slate-700/70 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300">{technology}</span>)}</div>
                  <button type="button" onClick={() => handleViewProject(experience.projectId)} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3 hover:text-blue-300">{t('experience.viewProject')}<ArrowUpRight size={17}/></button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
