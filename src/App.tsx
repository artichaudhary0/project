import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

function AppContent() {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`min-h-screen bg-${currentTheme.colors.background}`}>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;