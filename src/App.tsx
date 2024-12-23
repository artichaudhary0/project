import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layouts/MainLayout';
import ProjectLayout from './components/layouts/ProjectLayout';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/project/:id" element={<ProjectLayout><ProjectDetails /></ProjectLayout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;