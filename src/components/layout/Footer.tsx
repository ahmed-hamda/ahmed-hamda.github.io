import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ArrowUp, Heart, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()

  const scrollToTop = () => {
    if (location.pathname === '/' && !location.search) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-xl font-bold tracking-tight text-white"
            >
              Ahmed<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-2 text-sm text-slate-400">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ahmed-hamda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-hamda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
            <Link
              to="/contact"
              aria-label={t('footer.contact')}
              className="text-slate-400 transition hover:text-blue-400"
            >
              <Mail size={20} />
            </Link>
          </div>

          <Link
            to="/"
            onClick={scrollToTop}
            aria-label={t('footer.backToTop')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          >
            <ArrowUp size={18} />
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} Ahmed Hamda. {t('footer.rights')}</p>
          <p className="flex items-center gap-1">
            {t('footer.builtWith')} <Heart size={14} className="text-red-500" /> {t('footer.using')}
          </p>
        </div>
      </div>
    </footer>
  )
}
