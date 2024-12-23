import { Theme } from '../types/theme';

export const themes: Theme[] = [

  {
    name: 'Black Ocean',
    colors: {
      primary: 'bg-gradient-to-r from-zinc-900 to-black',
      secondary: 'cyan-700',
      accent: 'teal-600',
      background: 'slate-900',
      text: 'slate-100'
    }
  },
 

  {
    name: 'Midnight Galaxy',
    colors: {
      primary: 'bg-gradient-to-r from-[#734b6d] to-[#42275a]',
      secondary: 'violet-700',
      accent: 'indigo-600',
      background: 'slate-900',
      text: 'slate-100'
    }
  },
 
  {
    name: 'Stormy Gray',
    colors: {
      primary: 'bg-gradient-to-r from-gray-600 to-zinc-700',
      secondary: 'emerald-700',
      accent: 'green-600',
      background: 'slate-900',
      text: 'slate-100'
    }
  },



  {
    name: 'Deep Amber',
    colors: {
      primary: 'bg-gradient-to-r from-amber-900 to-amber-800',
      secondary: 'rose-700',
      accent: 'pink-600',
      background: 'slate-900',
      text: 'slate-100'
    }
  },

  {
    name: 'Dark Matter',
    colors: {
      primary: 'from-zinc-900 via-slate-800 to-gray-900',
      secondary: 'zinc-700',
      accent: 'slate-600',
      background: 'slate-900',
      text: 'slate-100'
    }
  },
];