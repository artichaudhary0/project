import { Project, Skill, Experience } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'A full-featured e-commerce application built with Flutter, featuring real-time updates, payment integration, and a clean UI.',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
    category: 'flutter'
  },
  {
    id: '2',
    title: 'Fitness Tracking App',
    description: 'Android native app for tracking workouts, nutrition, and progress with material design principles.',
    technologies: ['Kotlin', 'Room DB', 'WorkManager'],
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop',
    category: 'android'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with React and TailwindCSS, featuring responsive design and smooth animations.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'web'
  },
  {
    id: '4',
    title: 'Task Management Dashboard',
    description: 'A comprehensive web application for team task management with real-time updates and analytics.',
    technologies: ['React', 'Redux', 'Firebase', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    category: 'web'
  },
  {
    id: '5',
    title: 'Food Delivery App',
    description: 'Flutter-based food delivery application with real-time order tracking and payment integration.',
    technologies: ['Flutter', 'GetX', 'Google Maps', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop',
    category: 'flutter'
  },
  {
    id: '6',
    title: 'Smart Home Control',
    description: 'IoT-enabled Android app for controlling smart home devices with voice commands and automation.',
    technologies: ['Kotlin', 'MQTT', 'Room DB', 'ML Kit'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop',
    category: 'android'
  },
  {
    id: '7',
    title: 'Travel Companion App',
    description: 'Flutter app for travelers with offline maps, trip planning, and local recommendations.',
    technologies: ['Flutter', 'MapBox', 'Hive', 'Provider'],
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    category: 'flutter'
  },
  {
    id: '8',
    title: 'Social Media Dashboard',
    description: 'Modern web dashboard for managing multiple social media accounts with analytics.',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Social APIs'],
    imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop',
    category: 'web'
  },
  {
    id: '9',
    title: 'Health Monitoring App',
    description: 'Android application for monitoring health metrics with wearable device integration.',
    technologies: ['Kotlin', 'HealthKit', 'Bluetooth LE', 'MPAndroidChart'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    category: 'android'
  }
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