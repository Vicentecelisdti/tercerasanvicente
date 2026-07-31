import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import type { ConvenioItem } from '../types';

interface ConvenioDetailModalProps {
  convenio: ConvenioItem | null;
  onClose: () => void;
  onEnroll: () => void;
}

export const ConvenioDetailModal: React.FC<ConvenioDetailModalProps> = ({
  convenio,
  onClose,
  onEnroll
}) => {
  if (!convenio) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
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
            <h3>Requisitos</h3>
            <ul>
              {convenio.requirements.map((req, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} color="var(--primary-red)" /> {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-block">
            <h3>Condiciones</h3>
            <p>{convenio.conditions}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onEnroll} className="btn-primary-full">
            Quiero ser Socio Cooperador
          </button>
        </div>
      </div>
    </div>
  );
};
