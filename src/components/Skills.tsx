import { skills } from '../data/portfolio';
import SkillCard from './skills/SkillCard';
import SectionTitle from './common/SectionTitle';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { currentTheme } = useTheme();
  
  return (
    <section className={`py-20 text-${currentTheme.colors.text} bg-${currentTheme.colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="My technical expertise spans across mobile and web development, with a focus on creating seamless user experiences."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(skills).map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}