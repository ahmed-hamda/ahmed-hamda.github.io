
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'motion/react'
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Languages,
  Maximize2,
  X,
  type LucideIcon,
} from 'lucide-react'

import {
  featuredCertifications,
  additionalCertifications,
  type Certification,
  type CredentialType,
} from '../../data/certifications'

const visibleCertifications = featuredCertifications.slice(0, 3)
const remainingCertifications = [
  ...featuredCertifications.slice(3),
  ...additionalCertifications,
]

const credentialConfig: Record<
  CredentialType,
  { labelKey: string; icon: LucideIcon }
> = {
  certification: {
    labelKey: 'certifications.types.certification',
    icon: Award,
  },
  course: {
    labelKey: 'certifications.types.course',
    icon: BookOpen,
  },
  language: {
    labelKey: 'certifications.types.language',
    icon: Languages,
  },
  participation: {
    labelKey: 'certifications.types.participation',
    icon: GraduationCap,
  },
}

interface CertificationCardProps {
  certification: Certification
  onPreview: (certification: Certification) => void
}

function CertificationCard({
  certification,
  onPreview,
}: CertificationCardProps) {
  const { t } = useTranslation()
  const config = credentialConfig[certification.type]
  const Icon = config.icon
  const itemKey = `certifications.items.${certification.id}`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition-colors duration-300 hover:border-blue-500/40 hover:bg-slate-900">
      {/* Certificate image preview */}
      <button
        type="button"
        onClick={() => onPreview(certification)}
        aria-label={t('certifications.previewLabel', { title: certification.title })}
        className="relative block w-full cursor-zoom-in overflow-hidden bg-white/5"
      >
        <div className="flex aspect-[4/3] items-center justify-center p-4">
          <img
            src={certification.image}
            alt={t('certifications.imageAlt', { title: certification.title })}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 py-2 text-sm font-medium text-white">
            <Maximize2 size={16} />
            {t('certifications.viewCertificate')}
          </span>
        </div>
      </button>

      {/* Certificate details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-blue-400">
            <Icon size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {t(config.labelKey)}
            </span>
          </div>

          <CheckCircle2
            size={18}
            className="shrink-0 text-blue-400/60"
            aria-hidden="true"
          />
        </div>

        <h3 className="text-lg font-semibold leading-snug text-white">
          {certification.title}
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-300">
          {certification.issuer}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {t(`${itemKey}.date`, { defaultValue: certification.date })}
        </p>

        {certification.description && (
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {t(`${itemKey}.description`, { defaultValue: certification.description })}
          </p>
        )}

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => onPreview(certification)}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              <Maximize2 size={15} />
              {t('certifications.preview')}
            </button>

            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {t('certifications.verify')}
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

interface CertificateModalProps {
  certification: Certification
  onClose: () => void
}

function CertificateModal({
  certification,
  onClose,
}: CertificateModalProps) {
  const { t } = useTranslation()
  const itemKey = `certifications.items.${certification.id}`
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${t('certifications.certificate')}: ${certification.title}`}
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25 }}
        className="flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {certification.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {certification.issuer} · {t(`${itemKey}.date`, { defaultValue: certification.date })}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t('certifications.closePreview')}
            className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Enlarged certificate */}
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-950/70 p-3 sm:p-6">
          <img
            src={certification.image}
            alt={t('certifications.fullPreview', { title: certification.title })}
            className="max-h-[75vh] max-w-full object-contain"
          />
        </div>

        {/* Modal footer */}
        {certification.credentialUrl && (
          <div className="flex justify-end border-t border-white/10 px-4 py-3 sm:px-6">
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              {t('certifications.verify')}
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const [showAll, setShowAll] = useState(false)
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certification | null>(null)

  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 bg-slate-950 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            {t('certifications.eyebrow')}
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            {t('certifications.headingStart')}{' '}
            <span className="text-blue-500">{t('certifications.headingAccent')}</span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t('certifications.intro')}
          </p>
        </motion.div>

        {/* Featured certificates */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
            >
              <CertificationCard
                certification={certification}
                onPreview={setSelectedCertificate}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional certificates */}
        {remainingCertifications.length > 0 && (
          <div>


            <AnimatePresence initial={false}>
              {showAll && (
                <motion.div
                  id="additional-certifications"
                  key="additional-certifications"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pt-8 md:grid-cols-2 xl:grid-cols-3">
                    {remainingCertifications.map((certification) => (
                      <CertificationCard
                        key={certification.id}
                        certification={certification}
                        onPreview={setSelectedCertificate}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                aria-expanded={showAll}
                aria-controls="additional-certifications"
                className="inline-flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 font-medium text-blue-300 transition-colors hover:border-blue-400/60 hover:bg-blue-500/20"
              >
                {showAll ? t('certifications.showLess') : t('certifications.viewAll')}

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showAll ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Certificate lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            key={selectedCertificate.id}
            certification={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
