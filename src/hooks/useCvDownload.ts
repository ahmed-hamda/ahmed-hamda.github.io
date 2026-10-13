import { useTranslation } from 'react-i18next'

export function useCvDownload() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language
  const locale = language.toLowerCase().startsWith('fr') ? 'FR' : 'EN'

  return {
    cvUrl: `/documents/Ahmed_Hamda_CV_${locale}.pdf`,
    cvFilename: `Ahmed_Hamda_CV_${locale}.pdf`,
  }
}
