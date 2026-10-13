
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import fr from './locales/fr.json'

export const supportedLanguages = ['en', 'fr'] as const

export type SupportedLanguage =
  (typeof supportedLanguages)[number]

const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): SupportedLanguage {
  try {
    const savedLanguage = localStorage.getItem(STORAGE_KEY)

    if (savedLanguage === 'en' || savedLanguage === 'fr') {
      return savedLanguage
    }
  } catch {
    // Use the default language if storage is unavailable.
  }

  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },

  lng: getInitialLanguage(),
  fallbackLng: 'en',

  supportedLngs: [...supportedLanguages],

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },

  returnNull: false,
})

i18n.on('languageChanged', (language) => {
  if (language !== 'en' && language !== 'fr') {
    return
  }

  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Translation still works without persistent storage.
  }

  document.documentElement.lang = language
})

document.documentElement.lang = i18n.language

export default i18n
