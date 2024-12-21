import { ArrowDown, Code, Terminal, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { currentTheme } = useTheme();

  return (
    <div className={`relative min-h-screen bg-gradient-to-br ${currentTheme.colors.primary}`}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />
      <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.colors.primary}/95`} />
      <div className="floating-shapes" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="animate-float-1 bg-white/20 backdrop-blur-lg p-4 rounded-lg">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="animate-float-2 bg-white/20 backdrop-blur-lg p-4 rounded-lg">
              <Terminal className="h-8 w-8 text-white" />
            </div>
            <div className="animate-float-3 bg-white/20 backdrop-blur-lg p-4 rounded-lg">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="animate-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm Arti Chaudhary
          </h1>
          
          <p className="animate-fade-in-up text-2xl sm:text-3xl mb-8 text-white/90 font-light">
            Full-Stack Mobile & Web Developer
          </p>
          
          <p className="animate-fade-in-up-delay text-lg max-w-2xl mx-auto mb-12 text-white/80">
            Crafting beautiful, functional, and user-friendly applications with
            expertise in Android, Flutter, and Web Development.
          </p>
          
          <button 
           onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-fade-in-up-delay-2 group bg-white/20 backdrop-blur-lg text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold flex items-center mx-auto hover:bg-white/30 transition-all duration-300">
            View My Work 
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}