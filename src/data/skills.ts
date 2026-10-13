
export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Languages used across software, AI and embedded projects.',
    icon: 'code',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'C',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile Development',
    description: 'Building interactive web and mobile applications.',
    icon: 'monitor-smartphone',
    skills: [
      'Angular',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Development',
    description: 'Developing secure services and application backends.',
    icon: 'server',
    skills: [
      'Flask',
      'FastAPI',
      'Spring Boot',
      'REST APIs',
      'JWT Authentication',
      'API Integration',
    ],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Training, evaluating and integrating intelligent models.',
    icon: 'brain-circuit',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'CNN',
      'SVM',
      'Grid Search',
      'NLP',
      'ECG Signal Processing',
      'Feature Extraction',
      'Feature Engineering',
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Signal Processing',
    description: 'Extracting information from images and physiological signals.',
    icon: 'scan-eye',
    skills: [
      'YOLOv8',
      'Object Detection',
      'Roboflow',
      'Image Processing',
      'Data Augmentation',
      'SciPy',
    ],
  },
  {
    id: 'data',
    title: 'Data Science & Databases',
    description: 'Preparing, analyzing, visualizing and storing data.',
    icon: 'database',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'ApexCharts',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'MinIO', 
    ],
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    description: 'Connecting hardware, sensors and intelligent applications.',
    icon: 'cpu',
    skills: [
      'ESP32',
      'Arduino',
      'Sensor Integration',
      'Real-Time Monitoring',
      'OpenWeatherMap API',
      'Firebase Cloud Messaging',
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools & Practices',
    description: 'Tools and practices used throughout development.',
    icon: 'wrench',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'Swagger',
      'VS Code',
      'Google Colab',
      'MATLAB',
      'Agile & Scrum',
    ],
  },
]
