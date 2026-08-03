import React, { useState, useEffect } from 'react';
import { HomeView } from './views/HomeView';
import { ConveniosView } from './views/ConveniosView';

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
    <HomeView onNavigateToConvenios={() => navigateTo('/convenios')} />
  );
};

export default App;
