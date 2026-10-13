import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useCvDownload } from '../../hooks/useCvDownload'

const contactInfo = [
  { key: 'email', value: 'ahmedhamda0221@gmail.com', href: 'mailto:ahmedhamda0221@gmail.com', icon: Mail },
  { key: 'phone', value: '+216 52 304 356', href: 'tel:+21652304356', icon: Phone },
  { key: 'location', value: 'Sfax, Tunisia', href: null, icon: MapPin },
] as const

export default function Contact() {
  const { t } = useTranslation()
  const { cvUrl, cvFilename } = useCvDownload()

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-800/60 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t('contact.eyebrow')}</p>
          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('contact.headingStart')} <span className="text-blue-400">{t('contact.headingAccent')}</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{t('contact.intro')}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div key={item.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40 hover:bg-slate-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400"><Icon size={22} /></div>
                <h3 className="mb-2 text-sm font-semibold text-white">{t(`contact.info.${item.key}`)}</h3>
                {item.href ? (
                  <a href={item.href} className="inline-flex max-w-full items-center gap-2 break-all text-sm text-slate-400 transition hover:text-blue-400">{item.value}<ArrowUpRight size={15} className="shrink-0" /></a>
                ) : (
                  <p className="text-sm text-slate-400">{t('contact.locationValue')}</p>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 p-7 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{t('contact.opportunityTitle')}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{t('contact.opportunityDescription')}</p>
            </div>
            <a href="mailto:ahmedhamda0221@gmail.com?subject=Portfolio%20-%20Opportunity" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"><Send size={18} />{t('contact.sendEmail')}</a>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="https://github.com/ahmed-hamda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"><FaGithub size={18} />GitHub<ArrowUpRight size={15} /></a>
          <a href="https://www.linkedin.com/in/ahmed-hamda/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"><FaLinkedin size={18} />LinkedIn<ArrowUpRight size={15} /></a>
          <a href={cvUrl} download={cvFilename} className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"><Download size={18} />{t('nav.downloadCV')}</a>
        </div>
      </div>
    </section>
  )
}
