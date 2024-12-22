import { type Project } from '../types/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { currentTheme } = useTheme();

  return (
    <div className="animate-slide-in group bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-slate-700/50">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold text-slate-100 group-hover:text-${currentTheme.colors.accent} transition-colors duration-300 text-shadow`}>
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.projectUrl && (
              <a 
                href={project.projectUrl} 
                className="text-slate-300 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                className="text-slate-300 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`animate-pulse-glow px-3 py-1 bg-${currentTheme.colors.primary} text-slate-100 rounded-full text-sm font-medium backdrop-blur-lg transition-colors duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}