import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { i18n } = useTranslation()
  const tooltipId = useId()
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const showTooltip = (isHovered || isFocused) && !isDismissed
  const isFrench = (i18n.resolvedLanguage ?? i18n.language).startsWith('fr')
  const label = theme === 'dark'
    ? (isFrench ? 'Passer au thème clair' : 'Switch to light theme')
    : (isFrench ? 'Passer au thème sombre' : 'Switch to dark theme')

  return (
    <div className="relative inline-flex shrink-0">
    <button type="button" onClick={() => { onToggle(); setIsDismissed(true) }} aria-label={label}
      aria-describedby={showTooltip ? tooltipId : undefined}
      onMouseEnter={() => { setIsHovered(true); setIsDismissed(false) }}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => { setIsFocused(true); setIsDismissed(false) }}
      onBlur={() => setIsFocused(false)}
      onKeyDown={event => { if (event.key === 'Escape') setIsDismissed(true) }}
      className="theme-toggle inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-500/25 bg-slate-900/90 text-blue-400 transition hover:border-blue-400/60 hover:bg-blue-500/10">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
    <AnimatePresence>
      {showTooltip && (
        <motion.div id={tooltipId} role="tooltip"
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          className="theme-helper pointer-events-none absolute left-1/2 top-full z-[100] mt-3 w-56 -translate-x-1/2 rounded-2xl border border-blue-500/25 bg-slate-900 p-4">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-blue-500/25 bg-slate-900" aria-hidden="true" />
          <div className="relative flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400" aria-hidden="true">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </span>
            <span className="text-sm font-semibold leading-5 text-slate-200">{label}</span>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            {isFrench ? 'Changez l’ambiance en un clic.' : 'Change the mood with one click.'}
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-blue-500/15 pt-3">
            <span className="text-[11px] text-slate-500">{isFrench ? 'Choix mémorisé' : 'Preference saved'}</span>
            <span className="flex gap-1.5" aria-hidden="true">
              <span className={`h-3 w-3 rounded-full border border-blue-400/40 bg-[#080d14] ${theme === 'dark' ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900' : ''}`} />
              <span className={`h-3 w-3 rounded-full border border-blue-400/40 bg-[#f8fafc] ${theme === 'light' ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900' : ''}`} />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}
