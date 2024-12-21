import React from 'react';
import { Theme } from '../../types/theme';

interface SkillProgressProps {
  level: number;
  theme: Theme;
}

export default function SkillProgress({ level, theme }: SkillProgressProps) {
  return (
    <div className="skill-progress-container bg-slate-700/50">
      <div 
        className={`skill-progress-inner bg-gradient-to-r ${theme.colors.primary}`}
        style={{ '--progress-width': `${level}%` } as React.CSSProperties}
      />
    </div>
  );
}