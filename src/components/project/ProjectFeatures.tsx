import { ProjectFeature } from '../../types/portfolio';
import { useTheme } from '../../context/ThemeContext';

interface ProjectFeaturesProps {
  features: ProjectFeature[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  const { currentTheme } = useTheme();

  return (
    <div className="p-8">
      <h2 className={`text-3xl font-bold mb-8 text-${currentTheme.colors.text}`}>
        Key Features
      </h2>
      
      <div className="space-y-6">
        {features.map((section) => (
          <div 
            key={section.title} 
            className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-lg transform hover:scale-105 transition-all duration-300"
          >
            <h3 className={`text-xl font-semibold mb-4 text-${currentTheme.colors.text}`}>
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.features.map((feature) => (
                <li 
                  key={feature} 
                  className={`flex items-center text-${currentTheme.colors.text} opacity-90`}
                >
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.colors.primary} mr-3`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}