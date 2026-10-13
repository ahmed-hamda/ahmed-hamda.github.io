
export type ProjectCategory =
  | 'Academic Project'
  | 'Academic Research'
  | 'Internship Project'

export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt: string
  poster?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: ProjectCategory
  year: string
  featured: boolean
  description: string
  contributions: string[]
  technologies: string[]
  github?: string
  linkedin?: string
  media: ProjectMedia[]
}

export const projects: Project[] = [
  {
    id: 'visiontouch',
    title: 'VisionTouch',
    subtitle: 'Real-Time Object Detection for Accessibility',
    category: 'Academic Project',
    year: '2025',
    featured: true,
    description:
      'An AI-powered mobile accessibility solution that uses computer vision to detect objects in real time. The project combines a fine-tuned YOLOv8 model, a Flask inference API, and a Flutter mobile application.',
    contributions: [
      'Prepared and annotated a custom image dataset containing 28 object classes.',
      'Fine-tuned YOLOv8 for real-time object detection.',
      'Developed a Flask REST API to serve model predictions.',
      'Contributed to integrating the computer vision pipeline with the mobile application.',
    ],
    technologies: [
      'Computer Vision',
      'YOLOv8',
      'Deep Learning',
      'Python',
      'Flask',
      'Roboflow',
      'Flutter',
    ],
    github: 'https://github.com/ahmed-hamda/VisionTouchP',
    media: [
      {
        type: 'image',
        src: '/images/projects/visiontouch/logo.png',
        alt: 'VisionTouch project logo',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/architecture.png',
        alt: 'VisionTouch YOLOv8 training pipeline and system architecture',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/01-home.jpeg',
        alt: 'VisionTouch mobile application home screen',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/02-camera.jpeg',
        alt: 'VisionTouch real-time camera scanning interface',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/03-watch-detection.jpeg',
        alt: 'YOLOv8 detecting a watch with 77 percent confidence',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/04-watch-found.jpeg',
        alt: 'VisionTouch successfully locating a watch',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/05-bottle-detection.jpeg',
        alt: 'VisionTouch detecting a water bottle',
      },
      {
        type: 'image',
        src: '/images/projects/visiontouch/06-wallet-detection.jpeg',
        alt: 'VisionTouch detecting a wallet',
      },
    ],
  },
  {
    id: 'ecg-biometric-identification',
    title: 'ECG Biometric Identification',
    subtitle: 'Biometric Recognition Using ECG Signals',
    category: 'Academic Research',
    year: '2024',
    featured: true,
    description:
      'A biometric identification system based on electrocardiogram signals, combining signal processing, handcrafted feature extraction, machine learning, and deep learning. The project evaluates SVM and 1D-CNN approaches on the ECG-ID dataset.',
    contributions: [
      'Preprocessed ECG signals through filtering, R-peak detection, normalization, and segmentation.',
      'Extracted cepstral coefficients, entropy, and zero-crossing features.',
      'Trained and evaluated SVM and 1D-CNN models.',
      'Integrated the trained model with a Flask API and React interface.',
    ],
    technologies: [
      'Python',
      'Signal Processing',
      'SVM',
      '1D-CNN',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Flask',
      'React',
    ],
    media: [
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/01-dashboard.png',
        alt: 'Tableau de bord des performances du modèle ECG',
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/02-ecg-signal-upload.png',
        alt: 'Interface de chargement des signaux ECG',
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/03-identification-result.png',
        alt: "Résultat d'identification biométrique ECG",
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/04-system-architecture.png',
        alt: 'Architecture globale du système de reconnaissance biométrique ECG',
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/05-ecg-preprocessing-workflow.png',
        alt: 'Workflow de prétraitement des signaux ECG',
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/06-cnn-rr-architecture.png',
        alt: 'Architecture CNN pour les segments R-R',
      },
      {
        type: 'image',
        src: '/images/projects/ecg-biometric-identification/07-cnn-r-centered-architecture.png',
        alt: 'Architecture CNN pour les segments R-centrés',
      },
      
    ],
  },
  {
    id: 'consultdiag',
    title: 'ConsultDiag',
    subtitle: 'AI-Powered Business Diagnostic Platform',
    category: 'Internship Project',
    year: '2026',
    featured: true,
    description:
      'A full-stack consultation and business diagnostic platform developed during an internship at NovaSkills. It provides versioned questionnaires, diagnostic scoring, consultation workflows, and AI-assisted analysis using Gemini.',
    contributions: [
      'Developed the Angular frontend and FastAPI backend.',
      'Implemented questionnaire management, response tracking, and scoring.',
      'Integrated Gemini for AI-assisted diagnostic analysis.',
      'Implemented authentication, role-based permissions, PostgreSQL persistence, and file storage.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/consultdiag/Architecture globale de ConsultDiag.png',
        alt: 'Architecture globale et flux de fonctionnement de ConsultDiag : Angular, FastAPI, PostgreSQL et MinIO',
      },
    ],
  },
  {
    id: 'iot-smart-environment',
    title: 'IoT Smart Environment',
    subtitle: 'Connected Environmental Monitoring and Prediction',
    category: 'Academic Project',
    year: '',
    featured: false,
    description:
    'An intelligent IoT environmental monitoring system combining ESP32-based sensor acquisition, cloud data storage, backend APIs, and machine learning. The platform collects environmental measurements, integrates weather information, and uses predictive models to estimate rainfall conditions. A Flutter mobile application provides access to monitoring features and notifications.',
    contributions: [
    'Configured ESP32 hardware and environmental sensors for temperature, humidity, rainfall, and air-quality measurements.',
    'Developed backend services for processing sensor readings and integrating external weather data.',
    'Implemented a machine learning pipeline for rainfall prediction using Scikit-learn and hyperparameter optimization with GridSearchCV.',
    'Integrated Supabase and PostgreSQL for environmental data storage and retrieval.',
    ],

    technologies: [
      'ESP32',
      'IoT',
      'Python',
      'Machine Learning',
      'Scikit-learn',
      'Supabase',
      'PostgreSQL',
      'Flutter',
    ],
    github: 'https://github.com/ahmed-hamda/iot-smart-environment',
    media: [
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/Architecture IoT EN.png',
        alt: 'IoT Smart Environment system architecture, data lifecycle and machine learning workflow',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/Architecture IoT FR.png',
        alt: 'Architecture IoT Smart Environment, cycle de vie des données et flux de fonctionnement',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/01-weather-dashboard.jpeg',
        alt: 'Real-time weather dashboard with sensor measurements and AI prediction',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/02-sensor-history.jpeg',
        alt: 'Historical temperature and humidity sensor measurements',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/03-alerts.jpeg',
        alt: 'Gas and environmental anomaly alerts',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/04-ai-predictions-no-rain.jpeg',
        alt: 'AI weather prediction showing no rain',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/05-ai-predictions-rain.jpeg',
        alt: 'AI weather prediction showing a high probability of rain',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/06-rain-notification.jpeg',
        alt: 'Real-time rain detection notification',
      },
      {
        type: 'image',
        src: '/images/projects/iot-smart-environment/07-gas-notification.jpeg',
        alt: 'Real-time gas detection notification',
      },
    ],
  },
  {
    id: 'ai-educational-platform',
    title: 'AI Educational Platform',
    subtitle: 'Generative AI for Educational Content',
    category: 'Internship Project',
    year: '2025',
    featured: false,
    description:
      'A full-stack educational platform developed during an internship at MEGA PIXEL. It uses Gemini to process uploaded PDF documents and images and automatically generate educational summaries and quizzes.',
    contributions: [
      'Developed the application using Flask and Angular.',
      'Integrated Gemini API for educational content processing.',
      'Implemented automatic summary and quiz generation.',
      'Developed REST APIs, JWT authentication, and database and file-storage integration.',
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
    github: 'https://github.com/ahmed-hamda/resume',
    media: [
      {
        type: 'image',
        src: '/images/projects/ai-educational-platform/Architecture Resume EN.png',
        alt: 'Resume App — Global architecture and AI content generation workflow',
      },
      {
        type: 'image',
        src: '/images/projects/ai-educational-platform/Architecture Resume FR.png',
        alt: 'Resume App — Architecture globale et flux de génération de contenu par IA',
      },
      {
        type: 'image',
        src: '/images/projects/ai-educational-platform/demo.gif',
        alt: 'Resume App — Educational course management interface demonstration',
      },
    ],
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    subtitle: 'Predictive Analytics Using Machine Learning',
    category: 'Academic Project',
    year: '2025',
    featured: false,
    
    description:
    'An end-to-end machine learning solution designed to identify customers at risk of churn using behavioral and subscription data. The project covers exploratory data analysis, data cleaning, feature engineering, supervised classification, and model evaluation. The predictive functionality is integrated into a web application through a Flask REST API and an Angular frontend.',
    contributions: [
    'Explored customer behavior and subscription attributes to identify potential churn indicators.',
    'Prepared the dataset through data cleaning, preprocessing, and feature engineering.',
    'Trained and compared supervised classification models, including Logistic Regression, Random Forest, and XGBoost.',
    'Evaluated predictive performance and integrated the machine learning workflow into a Flask-based API.',
    'Connected the prediction service to an Angular frontend for interactive use.',
    ],

    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'Random Forest',
      'Machine Learning',
    ],
    github: 'https://github.com/ahmed-hamda/Churn',
    media: [
      {
        type: 'image',
        src: '/images/projects/customer-churn-prediction/Flux de prédiction EN.png',
        alt: 'Customer Churn Prediction — Machine Learning workflow and system architecture',
      },
      {
        type: 'image',
        src: '/images/projects/customer-churn-prediction/Flux de prédiction FR.png',
        alt: 'Prédiction du départ des clients — Pipeline Machine Learning et architecture globale',
      },
      {
        type: 'video',
        src: '/images/projects/customer-churn-prediction/demo churn vf.mp4',
        alt: 'Customer Churn Prediction — Application demonstration',
      },
    ],
  },
  
{
  id: 'edusmart',
  title: 'EduSmart',
  subtitle: 'Smart Learning Platform with Android & Flask',
  category: 'Academic Project',
  year: '',
  featured: false,

  description:
    'EduSmart is a smart learning platform combining a native Android application with a Flask REST API. It enables users to create and organize courses and chapters, automatically generate educational summaries and quizzes, track learning progress, and share educational content. The platform features JWT-based authentication, role-based access control, and PostgreSQL-backed data management.',

  contributions: [
    'Developed a smart learning platform connecting an Android mobile application to a Flask REST API.',
    'Implemented course and chapter management with structured educational content.',
    'Integrated automatic summary and quiz generation for personalized learning and self-assessment.',
    'Implemented user authentication and role-based access control using JWT.',
    'Integrated PostgreSQL, SQLAlchemy, and Supabase storage into the backend architecture.',
    'Connected the Android application to backend services using Retrofit.',
  ],

  technologies: [
    'Android',
    'Python',
    'Flask',
    'REST API',
    'Retrofit',
    'JWT',
    'SQLAlchemy',
    'PostgreSQL',
    'Supabase',
    'Gradle',
  ],

  github: 'https://github.com/ahmed-hamda/EduSmart',

  media: [
  {
    type: 'image',
    src: '/images/projects/edusmart/03-courses.png',
    alt: 'EduSmart — Course management dashboard',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/04-create-course.png',
    alt: 'EduSmart — Create a new course',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/05-chapters.png',
    alt: 'EduSmart — Chapter management and document upload',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/06-chapter-summary.png',
    alt: 'EduSmart — Chapter summary viewer',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/07-quiz.png',
    alt: 'EduSmart — Interactive quiz',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/08-shared-content.png',
    alt: 'EduSmart — Shared educational resources',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/09-profile.png',
    alt: 'EduSmart — User profile management',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/01-login.png',
    alt: 'EduSmart — User login',
  },
  {
    type: 'image',
    src: '/images/projects/edusmart/02-register.png',
    alt: 'EduSmart — Account registration',
  },
],
},
]
