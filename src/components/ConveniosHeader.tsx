import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ConveniosHeaderProps {
  onBackToHome: () => void;
}

export const ConveniosHeader: React.FC<ConveniosHeaderProps> = ({ onBackToHome }) => {
  return (
    <header className="convenios-header">
      <div className="convenios-header-container">
        <div className="brand-group" onClick={onBackToHome} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Tercera Compañía de Bomberos" className="company-logo-sm" />
          <div>
            <h1 className="brand-title">Tercera Compañía</h1>
            <span className="brand-subtitle">San Vicente de Tagua Tagua</span>
          </div>
        </div>
        
        <button onClick={onBackToHome} className="btn-back">
          <ArrowLeft size={16} /> Volver al Inicio
        </button>
      </div>
    </header>
  );
};
