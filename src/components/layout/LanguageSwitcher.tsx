
import { motion, AnimatePresence } from 'motion/react'
import { Globe2, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({
  className = '',
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const currentLanguage =
    i18n.resolvedLanguage === 'fr' ? 'fr' : 'en'

  const nextLanguage =
    currentLanguage === 'en' ? 'fr' : 'en'

  const tooltipTitle =
    currentLanguage === 'en'
      ? 'Switch to French'
      : 'Passer en anglais'

  const tooltipDescription =
    currentLanguage === 'en'
      ? 'Click to change language'
      : 'Cliquez pour changer de langue'

  const toggleLanguage = () => {
    void i18n.changeLanguage(nextLanguage)
    setIsHovered(false)
  }

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <motion.button
        type="button"
        onClick={toggleLanguage}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.2 }}
        aria-label={tooltipTitle}
        className="
          group relative inline-flex items-center
          justify-center gap-2 rounded-full
          border border-blue-500/25
          bg-slate-900/90 px-3.5 py-2
          text-sm font-semibold text-slate-200
          shadow-sm shadow-blue-950/30
          transition-colors duration-300
          hover:border-blue-400/60
          hover:bg-blue-500/10
          hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-slate-950
        "
      >
        <Globe2
          size={17}
          className="
            text-blue-400
            transition-transform duration-300
            group-hover:rotate-12
          "
        />

        <span className="min-w-5 text-center tracking-wider">
          {currentLanguage.toUpperCase()}
        </span>

        <Languages
          size={14}
          className="
            text-slate-500
            transition-colors group-hover:text-blue-400
          "
        />
      </motion.button>

      <AnimatePresence>
        {(isHovered || isFocused) && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="
              pointer-events-none absolute
              left-1/2 top-full z-[100]
              mt-3 w-max max-w-56
              -translate-x-1/2
              rounded-xl border border-blue-500/25
              bg-slate-900 px-4 py-3
              text-center shadow-xl shadow-black/40
            "
          >
            {/* Tooltip arrow */}
            <div
              className="
                absolute -top-1.5 left-1/2
                h-3 w-3 -translate-x-1/2
                rotate-45 border-l border-t
                border-blue-500/25 bg-slate-900
              "
            />

            <div className="flex items-center gap-2">
              <Languages
                size={15}
                className="shrink-0 text-blue-400"
              />

              <span className="text-xs font-semibold text-white">
                {tooltipTitle}
              </span>
            </div>

            <p className="mt-1 text-[11px] text-slate-400">
              {tooltipDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
