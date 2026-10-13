import { motion } from 'motion/react'
import { ArrowDown, BriefcaseBusiness, FolderGit2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'

function WorkPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const scrollToSection = (sectionId: 'experience' | 'projects') => {
    const targetUrl = `/?section=${sectionId}`
    if (window.location.hash === `#${targetUrl}`) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else {
      navigate(targetUrl)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl"
        >
          <span className="mb-5 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            {t('workPage.badge')}
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t('workPage.titleFirst')}{' '}
            <span className="text-blue-400">&amp;</span>{' '}
            {t('workPage.titleLast')}
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            {t('workPage.description')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('experience')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              <BriefcaseBusiness size={18} />
              {t('workPage.myExperience')}
              <ArrowDown size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              <FolderGit2 size={18} />
              {t('workPage.exploreProjects')}
              <ArrowDown size={16} />
            </button>
          </div>
        </motion.div>
      </section>

      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default WorkPage
