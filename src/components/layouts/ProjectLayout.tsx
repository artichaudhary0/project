import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      {children}
      <ThemeSwitcher />
    </>
  );
}