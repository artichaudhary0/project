import { Theme } from '../../types/theme';

interface SkillProgressProps {
  level: number;
  theme: Theme;
}

export default function SkillProgress({ level, theme }: SkillProgressProps) {
  return (
    <div className="skill-progress-container bg-slate-700/50 w-full h-3 rounded-lg overflow-hidden">
      <div
        className={`skill-progress-inner bg-gradient-to-r ${theme.colors.primary}`}
        style={{
          width: `${level}%`,
        }}
      />
    </div>
  );
}