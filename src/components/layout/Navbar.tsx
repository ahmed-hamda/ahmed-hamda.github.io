import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Download, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useCvDownload } from '../../hooks/useCvDownload'

import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { labelKey: 'nav.home', path: '/', section: 'home' },
  { labelKey: 'nav.about', path: '/', section: 'about' },
  { labelKey: 'nav.skills', path: '/', section: 'skills' },
  {
    labelKey: 'nav.certifications',
    path: '/',
    section: 'certifications',
  },
  {
    labelKey: 'nav.experience',
    path: '/',
    section: 'experience',
  },
  {
    labelKey: 'nav.projects',
    path: '/',
    section: 'projects',
  },
  {
    labelKey: 'nav.contact',
    path: '/',
    section: 'contact',
  },
]

export default function Navbar() {
  const { t } = useTranslation()
  const { cvUrl, cvFilename } = useCvDownload()

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to the requested section after navigation.
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('section') ?? (location.pathname === '/work' ? 'experience' : location.pathname === '/contact' ? 'contact' : null)

    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' })


      return
    }

    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.search])

  // Keep the menu aligned with the section visible while scrolling.
  useEffect(() => {
    let frame = 0
    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const current = [...navigation].reverse().find(item => {
          const element = document.getElementById(item.section)
          return element && element.getBoundingClientRect().top <= 140
        })
        setActiveSection(current?.section ?? 'home')
      })
    }
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      cancelAnimationFrame(frame)
    }
  }, [])

  const handleNavigation = (path: string, section: string) => {
    setIsOpen(false)
    setActiveSection(section)

    const destination = section === 'home'
      ? '/'
      : `${path}?section=${encodeURIComponent(section)}`

    const currentDestination =
      `${location.pathname}${location.search}`

    if (currentDestination === destination) {
      const element = document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      } else if (section === 'home' || section === 'contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      return
    }

    navigate(destination)
  }

  const isActive = (path: string, section: string) => {
    return (
      path === '/' && activeSection === section
    )
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 lg:px-6 xl:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false)
            setActiveSection('home')

            if (location.pathname === '/') {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          }}
          className="shrink-0 text-xl font-bold tracking-tight text-white"
        >
          Ahmed
          <span className="text-blue-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          {navigation.map((item) => (
            <button
              key={`${item.path}-${item.section}`}
              type="button"
              onClick={() =>
                handleNavigation(item.path, item.section)
              }
              className={`whitespace-nowrap text-xs font-medium transition xl:text-sm ${
                isActive(item.path, item.section)
                  ? 'text-blue-400'
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        {/* Desktop social links, language and CV */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">

          <a
            href="https://github.com/ahmed-hamda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-300 transition hover:text-white"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-hamda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={19} />
          </a>

          {/* Desktop language switcher */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <LanguageSwitcher />

          <a
            href={cvUrl}
            download={cvFilename}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 xl:px-4 xl:text-sm"
          >
            <Download size={16} />
            {t('nav.downloadCV')}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="mobile-nav-actions flex items-center gap-3 lg:hidden">

          {/* Mobile language switcher */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <LanguageSwitcher />

          <a
            href={cvUrl}
            download={cvFilename}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:text-sm"
            aria-label={t('nav.downloadCV')}
          >
            <Download size={16} />
            <span>CV</span>
          </a>

          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
            aria-label={
              isOpen ? t('nav.closeMenu') : t('nav.openMenu')
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <button
                key={`${item.path}-${item.section}`}
                type="button"
                onClick={() =>
                  handleNavigation(item.path, item.section)
                }
                className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  isActive(item.path, item.section)
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-blue-400'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>

          {/* Mobile social links */}
          <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-5">

            <a
              href="https://github.com/ahmed-hamda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 transition hover:text-white"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmed-hamda/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 transition hover:text-blue-400"
            >
              <FaLinkedin size={22} />
            </a>

            <span className="text-xs text-slate-500">
              {t('nav.contact')}
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
