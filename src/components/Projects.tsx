import { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { currentTheme } = useTheme();

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={`py-20 bg-${currentTheme.colors.background} scroll-mt-20`} id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 text-${currentTheme.colors.text}`}>My Projects</h2>
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'android', 'flutter', 'web'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full backdrop-blur-lg transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${currentTheme.colors.primary} text-white`
                  : `bg-white/80 text-black hover:bg-white`
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}