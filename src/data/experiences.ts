
export interface Experience {
  id: string
  organization: string
  role: string
  period: string
  type: 'Internship' | 'Academic Research'
  project: string
  description: string
  highlights: string[]
  technologies: string[]
  projectId: string
}

export const experiences: Experience[] = [
  {
    id: 'novaskills',
    organization: 'NovaSkills',
    role: 'AI & Full-Stack Development Intern',
    period: 'July – August 2026',
    type: 'Internship',
    project: 'ConsultDiag',
    description:
      'Developed ConsultDiag, an AI-powered business diagnostic and consultation platform for companies, consultants, and administrators.',
    highlights: [
      'Built REST APIs and a full-stack architecture using Angular and FastAPI.',
      'Developed versioned questionnaires, response tracking, and diagnostic scoring.',
      'Integrated Gemini to generate and store AI-assisted diagnostic analyses.',
      'Implemented JWT authentication, role-based access control, PostgreSQL persistence, and MinIO file storage.',
    ],
    technologies: [
      'Angular',
      'FastAPI',
      'Python',
      'Gemini',
      'PostgreSQL',
      'SQLAlchemy',
      'JWT',
      'MinIO',
      'Docker',
    ],
    projectId: 'consultdiag',
  },
  {
    id: 'mega-pixel',
    organization: 'MEGA PIXEL',
    role: 'Full-Stack AI Development Intern',
    period: 'July – August 2025',
    type: 'Internship',
    project: 'AI Educational Platform',
    description:
      'Developed an AI-powered educational platform that processes PDF documents and images to generate learning materials.',
    highlights: [
      'Developed a full-stack application using Flask and Angular.',
      'Integrated Gemini API for AI-powered educational content processing.',
      'Implemented automatic summary and quiz generation.',
      'Built REST APIs, JWT authentication, and PostgreSQL and Supabase integrations.',
    ],
    technologies: [
      'Flask',
      'Angular',
      'Python',
      'Gemini API',
      'NLP',
      'PostgreSQL',
      'Supabase',
      'JWT',
    ],
    projectId: 'ai-educational-platform',
  },
  {
    id: 'ecg-pfe',
    organization: 'ISIMS — University of Sfax',
    role: "Bachelor's Final-Year Research Project",
    period: '2024',
    type: 'Academic Research',
    project: 'ECG Biometric Identification',
    description:
      'Designed a biometric identification system using ECG signals, machine learning, and deep learning techniques.',
    highlights: [
      'Preprocessed ECG signals using filtering, R-peak detection, normalization, and segmentation.',
      'Extracted cepstral, entropy, and zero-crossing features.',
      'Trained and evaluated SVM and 1D-CNN models on the ECG-ID dataset.',
      'Integrated the trained model into a Flask API and React interface.',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'SVM',
      '1D-CNN',
      'Flask',
      'React',
    ],
    projectId: 'ecg-biometric-identification',
  },
]
