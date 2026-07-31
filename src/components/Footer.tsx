import React from 'react';

interface FooterProps {
  onNavigateToConvenios?: () => void;
  activePage?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToConvenios, activePage }) => {
  return (
    <footer className="bottom-navbar">
      <div className="bottom-nav-container">
        <nav className="nav-links">
          <a href="#redes-sociales">Redes Sociales</a>
          <a 
            onClick={onNavigateToConvenios} 
            style={{ cursor: 'pointer', color: activePage === '/convenios' ? 'var(--primary-red)' : 'inherit' }}
          >
            Convenios
          </a>
        </nav>

        <div className="nav-copy">
          Tercera Compañía de Bomberos • San Vicente de Tagua Tagua
        </div>
      </div>
    </footer>
  );
};
