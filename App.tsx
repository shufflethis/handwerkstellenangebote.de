import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { Home } from './pages/Home';
import { Impressum } from './pages/Impressum';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'impressum':
        return <Impressum />;
      // In a real app, other cases (trades, candidates, etc.) would have their own components.
      // For this demo, we route them to Home or Impressum as placeholders.
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <GeminiAdvisor />
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;