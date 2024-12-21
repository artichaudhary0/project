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
    company: 'Tech Innovators Ltd',
    position: 'Senior Mobile Developer',
    duration: '2022 - Present',
    description: [
      'Led development of multiple Flutter applications with 100k+ downloads',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines for automated testing and deployment'
    ]
  },
  {
    company: 'Digital Solutions Inc',
    position: 'Android Developer',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained multiple Android applications',
      'Improved app performance by 40% through optimization',
      'Collaborated with design team to implement material design guidelines'
    ]
  }
];