import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../utils/themes';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-4 mb-4 grid grid-cols-1 gap-2 min-w-[200px]">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                setTheme(theme);
                setIsOpen(false);
              }}
              className={`px-4 py-3 rounded-xl text-left hover:bg-${theme.colors.background} transition-all duration-300 flex items-center space-x-3 group hover:scale-105`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${theme.colors.primary} group-hover:shadow-lg transition-all duration-300`} />
              <span className="font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <Palette className="h-6 w-6 text-violet-600 group-hover:text-indigo-600 transition-colors duration-300" />
      </button>
    </div>
  );
}