import { experiences } from '../data/portfolio';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { currentTheme } = useTheme();

  return (
    <section className={`py-20 bg-${currentTheme.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-12 text-${currentTheme.colors.text}`}>Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className={`bg-gradient-to-r ${currentTheme.colors.primary} p-4 rounded-xl`}>
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className={`text-xl font-bold text-black`}>{exp.position}</h3>
                  <p className={`text-${currentTheme.colors.secondary} mb-2`}>{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}