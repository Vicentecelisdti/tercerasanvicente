import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import type { ConvenioItem } from '../types';

interface ConvenioDetailModalProps {
  convenio: ConvenioItem | null;
  onClose: () => void;
}

export const ConvenioDetailModal: React.FC<ConvenioDetailModalProps> = ({
  convenio,
  onClose
}) => {
  React.useEffect(() => {
    if (convenio) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [convenio]);

  if (!convenio) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <span className="modal-kicker">Detalle del Convenio</span>
          <h2>{convenio.title}</h2>
        </div>

        <div className="modal-body-scroll">
          <div className="detail-block">
            <h3>Beneficio</h3>
            <p>{convenio.benefit}</p>
          </div>

          <div className="detail-block">
            <h3>Condiciones y Requisitos</h3>
            <ul>
              {convenio.requirements.map((req, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} color="var(--primary-red)" /> {req}
                </li>
              ))}
              <li>
                <CheckCircle2 size={16} color="var(--primary-red)" /> {convenio.conditions}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
