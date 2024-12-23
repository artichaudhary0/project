import { useEffect, useRef } from 'react';
import { type Skill } from '../../types/portfolio';
import SkillProgress from './SkillProgress';
import { getSkillIcon } from '../../utils/skillIcons';
import { useTheme } from '../../context/ThemeContext';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const Icon = getSkillIcon(skill.name);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressElement = entry.target.querySelector('.skill-progress-inner');
            if (progressElement) {
              progressElement.classList.add('skill-progress-filled');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="group bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-700/50">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${currentTheme.colors.primary}`}>
          <Icon className="h-6 w-6 text-slate-100" />
        </div>
        <div className="ml-4">
          <h3 className={`font-semibold text-${currentTheme.colors.text}`}>{skill.name}</h3>
          <span className={`text-${currentTheme.colors.accent} font-medium`}>{skill.level}%</span>
        </div>
      </div>
      <div ref={progressRef} className="relative">
        <SkillProgress level={skill.level} theme={currentTheme} />
      </div>
    </div>
  );
}
