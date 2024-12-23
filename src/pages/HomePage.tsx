import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { useTheme } from '../context/ThemeContext';

export default function HomePage() {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`min-h-screen bg-${currentTheme.colors.background}`}>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}