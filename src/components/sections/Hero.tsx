import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCvDownload } from '../../hooks/useCvDownload'
import EngineeringVisual from './EngineeringVisual'

export default function Hero() {
  const { t } = useTranslation()
  const { cvUrl, cvFilename } = useCvDownload()
  const navigate = useNavigate()
  const expertise = ['softwareEngineering', 'fullStack', 'aiMl', 'dataScience'] as const

  return (
    <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="hero-layout relative mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="hero-copy max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            {t('hero.availability')}
          </div>

          <p className="mb-4 text-lg font-medium text-blue-400">{t('hero.greeting')}</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl">
            Ahmed{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hamda.</span>
          </h1>

          <h2 className="mt-7 text-xl font-semibold leading-snug text-slate-200 sm:text-2xl lg:text-3xl">{t('hero.title')}</h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-blue-400 sm:text-lg">
            {t('hero.specialties.ai')}<span className="mx-2 text-slate-600">|</span>
            {t('hero.specialties.ml')}<span className="mx-2 text-slate-600">|</span>
            {t('hero.specialties.software')}
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{t('hero.description')}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {expertise.map((key) => (
              <span key={key} className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
                {t(`hero.expertise.${key}`)}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={17} className="text-blue-400" />{t('hero.location')}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => navigate('/?section=projects')} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500">
              {t('hero.exploreProjects')}<ArrowRight size={18} />
            </button>
            <a href={cvUrl} download={cvFilename} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400">
              {t('nav.downloadCV')}<Download size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/ahmed-hamda" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-400 transition hover:text-white"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/ahmed-hamda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-400 transition hover:text-blue-400"><FaLinkedin size={24} /></a>
          </div>
        </motion.div>
        <EngineeringVisual />
      </div>

      <button type="button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} aria-label={t('hero.scrollToAbout')} className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 transition hover:text-blue-400">
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
