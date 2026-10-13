import { motion } from 'motion/react'
import { BrainCircuit, Database, GraduationCap, Code2, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: Code2, key: 'software' },
  { icon: BrainCircuit, key: 'ai' },
  { icon: Database, key: 'data' },
] as const

const education = [
  { key: 'engineering', periodKey: 'engineeringPeriod' },
  { key: 'bachelor', periodKey: 'bachelorPeriod' },
] as const

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative scroll-mt-20 bg-slate-900/50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">{t('about.eyebrow')}</span>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            {t('about.headingStart')} <span className="text-blue-500">{t('about.headingAccent')}</span>
          </h2>
          <div className="mt-5 h-1 w-20 rounded-full bg-blue-500" />
        </motion.div>

        <div className="grid items-start gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold leading-snug text-white">
              {t('about.headlineStart')} <span className="text-blue-400">{t('about.headlineAccent')}</span>
            </h3>
            {(['intro', 'background', 'interests', 'motivation'] as const).map((key, index) => (
              <p key={key} className={`${index === 0 ? 'mt-6' : 'mt-5'} leading-8 text-slate-400`}>{t(`about.paragraphs.${key}`)}</p>
            ))}
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300">
              {t('about.connect')}<ArrowUpRight size={18} />
            </Link>

            <div className="mt-10">
              <h4 className="mb-5 flex items-center gap-3 text-xl font-semibold text-white"><GraduationCap className="text-blue-400" size={24} />{t('about.educationTitle')}</h4>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.key} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h5 className="max-w-sm font-semibold text-white">{t(`about.education.${item.key}.degree`)}</h5>
                      <span className="text-xs font-medium text-blue-400">{t(`about.education.${item.periodKey}`)}</span>
                    </div>
                    {item.key === 'bachelor' && <p className="mt-2 text-sm text-slate-300">{t('about.education.bachelor.specialization')}</p>}
                    <p className="mt-2 text-sm text-slate-400">{t(`about.education.${item.key}.institution`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.key} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.12 }} className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition hover:border-blue-500/40">
                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400 transition group-hover:bg-blue-500/20"><Icon size={26} /></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{t(`about.highlights.${item.key}.title`)}</h4>
                      <p className="mt-2 leading-7 text-slate-400">{t(`about.highlights.${item.key}.description`)}</p>
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
