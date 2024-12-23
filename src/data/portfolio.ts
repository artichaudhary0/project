import { Project, Skill, Experience } from '../types/portfolio';

export const projects: Project[] = [

  {
    id: '1',
    title: 'Maidify: Your Premier Maid Booking Solution',
    description: 'Welcome to Maidify! Your go-to platform for seamless maid booking services, designed to simplify your life and ensure a clean, comfortable living space. Discover trusted maids, schedule appointments, and manage your cleaning needs effortlessly with our intuitive mobile app.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider','Figma'],
    imageUrl: 'https://images.unsplash.com/photo-1546552696-7d5f4e89b0e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/wear_work'
  },

  {
    id: '2',
    title: 'Project Pathway : Basic to Advanced JavaScript Projects',
    description: 'A collection of 35 JavaScript projects ranging from basic to advanced levels. This project collection is perfect for beginners and intermediate developers looking to deepen their JavaScript skills. Each project covers key JavaScript concepts, from DOM manipulation and event handling to working with APIs and asynchronous programming.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Project-Pathway-Js'
  },
  
  {
    id: '3',
    title: 'Digital Card Application',
    description: 'The Digital Card Application is a versatile mobile tool designed to streamline personal and professional networking. With a user-friendly interface, it allows individuals to create and share digital business cards containing essential contact details, professional information, and personal branding elements. Users can customize their profiles, including adding profile pictures and brief descriptions.',
    technologies: ['Java', 'Glide', 'Piccaso'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1729036163578-f80877183448?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'android',
    githubUrl: 'https://github.com/artichaudhary0/DigitalCardApplication'
  },
 
  {
    id: '4',
    title: 'JavaScript : Comprehensive Learning and Practical Implementation',
    description: 'Created a comprehensive repository demonstrating in-depth understanding of JavaScript concepts and practices. Showcased practical implementations learned throughout the module.',
    technologies: ['Html', 'Css', 'Javascript'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'web',
    githubUrl: 'https://github.com/artichaudhary0/Js-Code'
  },
  {
    id: '5',
    title: 'Crypto Currencies Tracking',
    description: 'Developed a Crypto-Currencies Tracking App for real-time monitoring of cryptocurrency prices and market trends. The app integrates APIs to fetch live price updates, historical data, and provides advanced filtering options for users. Focused on delivering an intuitive UI/UX to ensure a seamless experience and efficient data visualization.',
    technologies: ['Flutter', 'Povider', 'Shared Preferences'],
    imageUrl: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'flutter',
    githubUrl: 'https://github.com/artichaudhary0/Crypto-Currency-Tracking-App'
  },
  {
    id: '6',
    title: 'Master Calculator App',
    description: 'The Master Calculator Android App is a versatile and user-friendly mobile application designed to provide a comprehensive set of essential calculators and tools to assist users with various financial, educational, and mathematical calculations.',
    technologies: ['Kotlin', 'Java', 'State Management'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677822252733-1e1aa38e90df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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