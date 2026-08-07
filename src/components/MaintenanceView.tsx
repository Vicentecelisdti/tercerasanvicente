import React from 'react';

export const MaintenanceView: React.FC = () => {
  return (
    <main className="hero-split">
      <div className="hero-left">
        <img 
          src="/logo.webp" 
          alt="Tercera Compañía de Bomberos" 
          className="company-logo"
        />
        
        <h1 className="hero-title">En Mantenimiento</h1>
        
        <div className="accent-line"></div>
        
        <p className="hero-desc">
          Estamos trabajando para mejorar nuestra web.
        </p>
      </div>

      <div className="hero-right">
        <img 
          src="/maintenance_photo.webp" 
          alt="Bomberos San Vicente" 
          className="hero-image"
        />
      </div>
    </main>
  );
};
