export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: 'android' | 'flutter' | 'web';
}

export interface Skill {
  name: string;
  level: number;
  category: 'android' | 'flutter' | 'web' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}