import { Project, Skill, Experience } from '../types/portfolio';

export const projects: Project[] = [

  {
    id: '1',
    title: 'Maidify: Your Premier Maid Booking Solution',
    description: 'Welcome to Maidify! Your go-to platform for seamless maid booking services, designed to simplify your life and ensure a clean, comfortable living space. Discover trusted maids, schedule appointments, and manage your cleaning needs effortlessly with our intuitive mobile app.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider','Figma'],
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/wear_work'
  },

  {
    id: '2',
    title: 'Project Pathway : Basic to Advanced JavaScript Projects',
    description: 'A collection of 35 JavaScript projects ranging from basic to advanced levels. This project collection is perfect for beginners and intermediate developers looking to deepen their JavaScript skills. Each project covers key JavaScript concepts, from DOM manipulation and event handling to working with APIs and asynchronous programming.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Project-Pathway-Js'
  },
  
  {
    id: '3',
    title: 'Digital Card Application',
    description: 'The Digital Card Application is a versatile mobile tool designed to streamline personal and professional networking. With a user-friendly interface, it allows individuals to create and share digital business cards containing essential contact details, professional information, and personal branding elements. Users can customize their profiles, including adding profile pictures and brief descriptions.',
    technologies: ['Java', 'Glide', 'Piccaso'],
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop',
    category: 'android',
    githubUrl: 'https://github.com/artichaudhary0/DigitalCardApplication'
  },
 
  {
    id: '4',
    title: 'JavaScript : Comprehensive Learning and Practical Implementation',
    description: 'Created a comprehensive repository demonstrating in-depth understanding of JavaScript concepts and practices. Showcased practical implementations learned throughout the module.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Js-Code'
  },
  {
    id: '5',
    title: 'Crypto Currencies Tracking',
    description: 'Developed a Crypto-Currencies Tracking App for real-time monitoring of cryptocurrency prices and market trends. The app integrates APIs to fetch live price updates, historical data, and provides advanced filtering options for users. Focused on delivering an intuitive UI/UX to ensure a seamless experience and efficient data visualization.',
    technologies: ['Flutter', 'Povider', 'Shared Preferences'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/Crypto-Currency-Tracking-App'
  },
  {
    id: '6',
    title: 'Master Calculator App',
    description: 'The Master Calculator Android App is a versatile and user-friendly mobile application designed to provide a comprehensive set of essential calculators and tools to assist users with various financial, educational, and mathematical calculations.',
    technologies: ['Kotlin', 'Java', 'State Management'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop',
    category: 'android',
    githubUrl: 'https://github.com/artichaudhary0/MasterCalculatorAndroid'
  },
];

export const skills: Skill[] = [
  { name: 'Flutter', level: 90, category: 'flutter' },
  { name: 'Dart', level: 85, category: 'flutter' },
  { name: 'Android', level: 88, category: 'android' },
  { name: 'Kotlin', level: 85, category: 'android' },
  { name: 'Java', level: 80, category: 'android' },
  { name: 'React', level: 82, category: 'web' },
  { name: 'TypeScript', level: 78, category: 'web' },
  { name: 'Firebase', level: 85, category: 'other' },
  { name: 'Git', level: 88, category: 'other' }
];

export const experiences: Experience[] = [
  {
    company: 'Red & White Multimedia Education Official ',
    position: 'Android / Flutter Faculty',
    duration: 'July-2023 - Present',
    description: [
      'Trained over +50 students in Flutter, Android, and associated technologies, fostering expertise in modern mobile app development.',
      'Developed comprehensive curricula covering Dart, Kotlin, API Integration, and state management using Provider, Getx, and Bloc.',
      'Guided students in building real-world projects with Firebase and Hive for robust backend integration and data persistence.'
    ]
  },
  {
    company: 'iCreditSpace',
    position: 'Flutter Developer',
    duration: 'Feb 2023 - May 2023',
    description: [
      'Implemented robust user authentication and security measures, including features like password recovery, profile upload, and document upload.',
      'Integrated and managed multiple APIs simultaneously, enabling functionalities such as report downloads, document search, and data synchronization.',
      'Developed applications using the MVVM architecture, leveraging Getx and Bloc for efficient state management and seamless user experience.'
    ]
  },
  {
    company: 'Across The Globe (ATG)',
    position: 'Developer Intern',
    duration: 'Sep 2022 - May 2023',
    description: [
      'Built mobile applications leveraging Firebase services, including real-time database, cloud storage, authentication, and push notifications via FCM.',
      'Developed shopping apps with API integration for product information, search functionality, and cart management, enhancing user experience.',
      'Collaborated with cross-functional teams to implement server-side tasks using Firebase Cloud Functions and update websites with new features.'
    ]
  }
];