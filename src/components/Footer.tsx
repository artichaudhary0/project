import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { currentTheme } = useTheme();

  return (
    <footer className={`bg-gradient-to-r ${currentTheme.colors.primary} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {[
              { Icon: Github, href: 'https://github.com/artichaudhary0' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/artichaudhary0/' },
              { Icon: Mail, href: 'mailto:chaudhary.aarti1998@gmail.com' }
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                className="bg-white/20 p-3 rounded-lg backdrop-blur-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-6 w-6 text-white" />
              </a>
            ))}
          </div>
          <p className="text-white/80">
            © {new Date().getFullYear()} Arti Chaudhary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}