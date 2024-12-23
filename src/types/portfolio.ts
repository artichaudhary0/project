
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: 'android' | 'flutter' | 'web';
  features: ProjectFeature[];
}

export interface ProjectFeature {
  title: string;
  features: string[];
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