import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ThemeSwitcher from '../ThemeSwitcher';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ThemeSwitcher />
    </>
  );
}