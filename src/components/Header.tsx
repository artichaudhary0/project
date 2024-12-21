import React from 'react';
import { Code, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { currentTheme } = useTheme();

  return (
    <header className={`bg-gradient-to-r ${currentTheme.colors.primary} text-white sticky top-0 z-50 backdrop-blur-lg bg-opacity-80`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-lg">
              <Code className="h-8 w-8" />
            </div>
            <span className="ml-3 text-xl font-bold">Arti Chaudhary</span>
          </div>
          <div className="flex space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/artichaudhary0' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/artichaudhary0/' },
              { Icon: Mail, href: 'mailto:chaudhary.aarti1998@gmail.com' },
              {Icon: Download, href: './portfolio.pdf',download: true}
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                className="bg-white/20 p-2 rounded-lg backdrop-blur-lg hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}