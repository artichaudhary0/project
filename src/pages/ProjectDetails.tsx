import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import ProjectFeatures from '../components/project/ProjectFeatures';
import ProjectNavBar from '../components/project/ProjectNavBar';


export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-${currentTheme.colors.background}`}>
      <ProjectNavBar />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-800/30 rounded-2xl overflow-hidden backdrop-blur-lg border border-slate-700/50">
          {/* Left Section - Project Overview */}
          <div className="p-8">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[400px] object-cover object-center rounded-xl mb-8"
            />
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 className={`text-4xl font-bold text-${currentTheme.colors.text}`}>
                  {project.title}
                </h1>
                <div className="flex gap-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-${currentTheme.colors.text} hover:text-${currentTheme.colors.accent} transition-colors duration-300`}
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-${currentTheme.colors.text} hover:text-${currentTheme.colors.accent} transition-colors duration-300`}
                    >
                      <Github size={24} />
                    </a>
                  ) : (
                    <span className="text-slate-400">No GitHub link available</span>
                  )}


                </div>
              </div>

              <p className={`text-${currentTheme.colors.text} opacity-90 text-lg`}>
                {project.description}
              </p>

              <div>
                <h2 className={`text-2xl font-semibold mb-4 text-${currentTheme.colors.text}`}>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} text-white text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="lg:border-l border-slate-700/50">
            <ProjectFeatures features={project.features} />
          </div>
        </div>
      </div>
    </div>
  );
}