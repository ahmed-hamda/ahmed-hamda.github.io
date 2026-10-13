

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { motion } from 'motion/react'

import { useTranslation } from 'react-i18next'

import {

  ArrowUpRight,

  ChevronLeft,

  ChevronRight,

  ImageOff,
  Maximize2,
  X,

  Layers3,

  Play,

  Sparkles,

} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'



import { projects, type Project, type ProjectMedia } from '../../data/projects'



interface ProjectGalleryProps {

  project: Project

}



function ProjectGallery({ project }: ProjectGalleryProps) {
  const { t, i18n } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const media = project.media
  const activeMedia: ProjectMedia | undefined = media[activeIndex]
  const isFrench = i18n.language.startsWith('fr')

  const previous = useCallback(() => {
    if (media.length > 0) {
      setActiveIndex((index) => (index - 1 + media.length) % media.length)
    }
  }, [media.length])

  const next = useCallback(() => {
    if (media.length > 0) {
      setActiveIndex((index) => (index + 1) % media.length)
    }
  }, [media.length])

  useEffect(() => {
    if (!isExpanded) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false)
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previous()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isExpanded, previous, next])

  if (media.length === 0) {
    return (
      <div className="relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950/50 p-8 text-center sm:h-80">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
          <ImageOff size={28} className="text-blue-400" />
        </div>
        <p className="relative text-lg font-semibold text-slate-200">{project.title}</p>
        <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{t('projects.galleryEmpty')}</p>
        <span className="relative mt-6 rounded-full border border-slate-700 px-4 py-1.5 text-xs text-slate-400">{t('projects.gallery')}</span>
      </div>
    )
  }

  return (
    <div className="w-full min-w-0 max-w-full space-y-2 overflow-hidden">
      <div className="relative flex h-[210px] w-full min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 sm:h-[250px] lg:h-[300px]">
        {activeMedia?.type === 'image' ? (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label={isFrench ? 'Agrandir l’image' : 'Enlarge image'}
            className="flex h-full w-full cursor-zoom-in items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          >
            <img key={activeMedia.src} src={activeMedia.src} alt={activeMedia.alt} loading="lazy" className="h-full w-full object-contain" />
          </button>
        ) : activeMedia?.type === 'video' ? (
          <video key={activeMedia.src} src={activeMedia.src} poster={activeMedia.poster} controls preload="metadata" playsInline className="h-full w-full object-contain">
            {t('projects.videoUnsupported')}
          </video>
        ) : null}

        {activeMedia?.type === 'image' && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label={isFrench ? 'Afficher en plein écran' : 'View full screen'}
            title={isFrench ? 'Agrandir' : 'Enlarge'}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-950/85 text-white backdrop-blur transition hover:bg-blue-600"
          >
            <Maximize2 size={17} />
          </button>
        )}

        {media.length > 1 && (
          <>
            <button type="button" onClick={previous} aria-label={t('projects.previousMedia')} className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white backdrop-blur transition hover:bg-blue-600">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={next} aria-label={t('projects.nextMedia')} className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white backdrop-blur transition hover:bg-blue-600">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs text-white backdrop-blur">{activeIndex + 1} / {media.length}</div>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="flex w-full min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin]">
          {media.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${t('projects.viewMedia')} ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={`relative h-12 w-[72px] shrink-0 overflow-hidden rounded-lg border-2 bg-slate-800 transition ${index === activeIndex ? 'border-blue-500' : 'border-transparent hover:border-slate-500'}`}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
              ) : item.poster ? (
                <img src={item.poster} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center"><Play size={20} className="text-blue-400" /></div>
              )}
            </button>
          ))}
        </div>
      )}

      {isExpanded && activeMedia?.type === 'image' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isFrench ? `Aperçu de ${project.title}` : `${project.title} image preview`}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsExpanded(false)
          }}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label={isFrench ? 'Fermer l’aperçu' : 'Close preview'}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-blue-600"
          >
            <X size={23} />
          </button>
          <img src={activeMedia.src} alt={activeMedia.alt} className="max-h-[88vh] max-w-[94vw] select-none object-contain" />
          {media.length > 1 && (
            <>
              <button type="button" onClick={previous} aria-label={t('projects.previousMedia')} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/90 text-white transition hover:bg-blue-600 sm:left-6">
                <ChevronLeft size={25} />
              </button>
              <button type="button" onClick={next} aria-label={t('projects.nextMedia')} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/90 text-white transition hover:bg-blue-600 sm:right-6">
                <ChevronRight size={25} />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-800/90 px-4 py-1.5 text-sm text-white">{activeIndex + 1} / {media.length}</span>
            </>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {

  const { t } = useTranslation()

  const itemKey = `projects.items.${project.id}`

  const contributions = t(`${itemKey}.contributions`, { returnObjects: true }) as string[]

  return (

    <motion.article

      id={project.id}

      initial={{ opacity: 0, y: 30 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.08 }}

      transition={{ duration: 0.5 }}

      className="min-w-0 max-w-full scroll-mt-28 border-b border-slate-800/70 py-12 first:pt-8 last:border-b-0"

    >

      <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">

        {/* Left: project details */}

        <div className="min-w-0">

          <div className="mb-5 flex flex-wrap items-center gap-3">

            <span className="text-sm font-semibold text-blue-400">

              {String(index + 1).padStart(2, '0')}

            </span>



            <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300">

              {t(`projects.categories.${project.category}`)}

            </span>



            {project.featured && (

              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">

                <Sparkles size={13} />

                {t('projects.featured')}

              </span>

            )}



            {project.year && (

              <span className="text-xs text-slate-500">{project.year}</span>

            )}

          </div>



          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">

            {t(`${itemKey}.title`)}

          </h3>



          <p className="mt-2 text-base font-medium text-blue-400">

            {t(`${itemKey}.subtitle`)}

          </p>



          <p className="mt-6 leading-relaxed text-slate-400">

            {t(`${itemKey}.description`)}

          </p>



          {contributions.length > 0 && (

            <div className="mt-7">

              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-200">

                <Layers3 size={17} className="text-blue-400" />

                {t('projects.contributions')}

              </h4>



              <ul className="space-y-3">

                {contributions.map((contribution) => (

                  <li

                    key={contribution}

                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"

                  >

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                    <span>{contribution}</span>

                  </li>

                ))}

              </ul>

            </div>

          )}



          <div className="mt-7 flex flex-wrap gap-2">

            {project.technologies.map((technology) => (

              <span

                key={technology}

                className="rounded-lg border border-slate-700/70 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300"

              >

                {technology}

              </span>

            ))}

          </div>



          {(project.github || project.linkedin) && (

            <div className="mt-8 flex flex-wrap gap-4">

              {project.github && (

                <a

                  href={project.github}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10"

                >



                <FaGithub size={18} />

                  {t('projects.github')}

                  <ArrowUpRight size={16} />

                </a>

              )}



              {project.linkedin && (

                <a

                  href={project.linkedin}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/20"

                >

                  {t('projects.linkedin')}

                  <ArrowUpRight size={16} />

                </a>

              )}

            </div>

          )}

        </div>



        {/* Right: media gallery */}

        <div className="min-w-0 w-full max-w-full lg:sticky lg:top-28">

          <ProjectGallery project={project} />

        </div>

      </div>

    </motion.article>

  )

}



export default function ProjectsSection() {

  const { t } = useTranslation()

  return (

    <section

      id="projects"

      className="min-w-0 max-w-full overflow-x-clip scroll-mt-24 border-t border-slate-800/60 px-4 py-20 sm:px-8 lg:px-12"

    >

      <div className="mx-auto w-full min-w-0 max-w-6xl">

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5 }}

          className="mb-8"

        >

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">

            {t('projects.eyebrow')}

          </p>



          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">

            {t('projects.title')}

          </h2>



          <p className="max-w-3xl leading-relaxed text-slate-400">

            {t('projects.intro')}

          </p>

        </motion.div>



        <div>

          {projects.map((project, index) => (

            <ProjectCard

              key={project.id}

              project={project}

              index={index}

            />

          ))}

        </div>

      </div>

    </section>

  )

}
