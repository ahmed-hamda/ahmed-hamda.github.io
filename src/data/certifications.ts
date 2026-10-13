
export type CredentialType =
  | 'certification'
  | 'course'
  | 'language'
  | 'participation'

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  type: CredentialType
  featured: boolean
  image: string
  credentialUrl?: string
  description?: string
}

export const certifications: Certification[] = [
  {
    id: 'microsoft-ai-900',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'June 2026',
    type: 'certification',
    featured: true,
    image: '/images/certifications/certificate-01.png',
    description:
      'Foundational knowledge of artificial intelligence and Azure AI services.',
  },
  {
    id: 'nvidia-genai',
    title: 'AI for All: From Basics to GenAI Practice',
    issuer: 'NVIDIA',
    date: 'June 2025',
    type: 'course',
    featured: true,
    image: '/images/certifications/certificate-02.png',
    description:
      'Training covering artificial intelligence fundamentals and generative AI.',
  },
  {
    id: 'datacamp-ai-agents',
    title: 'AI Agent Fundamentals',
    issuer: 'DataCamp',
    date: 'June 2026',
    type: 'course',
    featured: true,
    image: '/images/certifications/certificate-08.png',
    description:
      'Introduction to AI agents and their applications.',
  },
  {
    id: 'datacamp-ai-software',
    title: 'AI for Software Engineering',
    issuer: 'DataCamp',
    date: 'June 2026',
    type: 'course',
    featured: true,
    image: '/images/certifications/certificate-09.png',
    description:
      'Using AI concepts and tools in software engineering workflows.',
  },
  {
    id: 'ef-set-c1',
    title: 'EF SET English Certificate — C1 Advanced',
    issuer: 'EF SET',
    date: 'December 2025',
    type: 'language',
    featured: true,
    image: '/images/certifications/certificate-10.png',
    credentialUrl: 'https://cert.efset.org/byviHc',
    description:
      'English proficiency assessment — C1 Advanced (66/100).',
  },
  {
    id: 'international-english-test',
    title: 'C1 Advanced English Level',
    issuer: 'International English Test',
    date: 'December 2025',
    type: 'language',
    featured: false,
    image: '/images/certifications/certificate-11.png',
  },
  {
    id: 'spectrum-ai',
    title: 'Artificial Intelligence',
    issuer: 'Spectrum',
    date: 'Not specified',
    type: 'participation',
    featured: false,
    image: '/images/certifications/certificate-05.png',
    description:
      'Certificate of achievement for participation in an Artificial Intelligence course.',
  },
  {
    id: 'spectrum-big-data',
    title: 'Big Data',
    issuer: 'Spectrum',
    date: 'Not specified',
    type: 'participation',
    featured: false,
    image: '/images/certifications/certificate-06.png',
    description:
      'Certificate of achievement for participation in a Big Data course.',
  },
  {
    id: 'web-4',
    title: 'Web 4.0: Blockchain, Generative AI, Social Media & VR',
    issuer: 'The AREA / ISIMS',
    date: 'December 2023',
    type: 'participation',
    featured: false,
    image: '/images/certifications/certificate-03.png',
  },
  {
    id: 'digital-marketing-ml-iot',
    title: 'Digital Marketing, Machine Learning & IoT',
    issuer: 'Pragma / ESGITECH',
    date: 'March 2023',
    type: 'participation',
    featured: false,
    image: '/images/certifications/certificate-04.png',
  },
  {
    id: 'scrum-agile',
    title: 'Scrum & Agile Methodology',
    issuer: 'AI ISIMS Club',
    date: 'December 2021',
    type: 'participation',
    featured: false,
    image: '/images/certifications/certificate-07.png',
  },
]

// Certificates displayed by default
export const featuredCertifications = certifications.filter(
  (certification) => certification.featured
)

// Certificates displayed after clicking "View All"
export const additionalCertifications = certifications.filter(
  (certification) => !certification.featured
)
