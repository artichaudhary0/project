import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ProjectNavBar() {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  return (
    <nav className={`bg-gradient-to-r ${currentTheme.colors.primary} backdrop-blur-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300 group"
          >
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-lg group-hover:bg-white/30 transition-all duration-300">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Projects</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-lg">
              <Code size={20} className="text-white" />
            </div>
            <span className="text-white font-medium">Project Details</span>
          </div>
        </div>
      </div>
    </nav>
  );
}