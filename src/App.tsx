import React, { useState, useEffect } from 'react';
import { MaintenanceView } from './components/MaintenanceView';
import { ConveniosView } from './views/ConveniosView';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  if (currentPath === '/convenios') {
    return <ConveniosView onBackToHome={() => navigateTo('/')} />;
  }

  return (
    <div className="maintenance-wrapper">
      <MaintenanceView />
      <Footer onNavigateToConvenios={() => navigateTo('/convenios')} />
    </div>
  );
};

export default App;
