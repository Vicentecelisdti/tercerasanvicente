import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="maintenance-wrapper">
      <main className="hero-split">
        <div className="hero-left">
          <img
            src="/logo.png"
            alt="Tercera Compañía de Bomberos"
            className="company-logo"
          />

          <h1 className="hero-title">En Mantenimiento</h1>

          <div className="accent-line"></div>

          <p className="hero-desc">
            Estamos trabajando para mejorar nuestra web. Gracias por tu paciencia ♥.
          </p>
        </div>

        <div className="hero-right">
          <img
            src="/maintenance_photo.jpg"
            alt="Bomberos San Vicente"
            className="hero-image"
          />
        </div>
      </main>

      <footer className="bottom-navbar">
        <div className="bottom-nav-container">
          <nav className="nav-links">
            <a href="https://www.instagram.com/tercerasanvicente">Redes Sociales</a>
            <a href="/convenios">Convenios</a>
          </nav>

          <div className="nav-copy">
            Tercera Compañía de Bomberos • San Vicente de Tagua Tagua
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
