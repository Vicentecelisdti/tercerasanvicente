import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ConvenioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export const ConvenioDetailModal: React.FC<ConvenioDetailModalProps> = ({
  isOpen,
  onClose,
  onEnroll
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <span className="modal-kicker">Detalle del Convenio</span>
          <h2>Óptica CosmoVisión</h2>
        </div>

        <div className="modal-body-scroll">
          <div className="detail-block">
            <h3>Beneficio</h3>
            <p>
              Los Socios Cooperadores vigentes de la Tercera Compañía de Bomberos pueden acceder a un 10% de descuento en productos y servicios seleccionados de Óptica CosmoVisión.
            </p>
          </div>

          <div className="detail-block">
            <h3>Requisitos</h3>
            <ul>
              <li><CheckCircle2 size={16} color="var(--primary-red)" /> Ser Socio Cooperador vigente.</li>
              <li><CheckCircle2 size={16} color="var(--primary-red)" /> Mantener las cuotas al día.</li>
              <li><CheckCircle2 size={16} color="var(--primary-red)" /> Presentar la identificación correspondiente al momento de solicitar el beneficio.</li>
            </ul>
          </div>

          <div className="detail-block">
            <h3>Condiciones</h3>
            <p>
              El beneficio es personal e intransferible. Algunas promociones o servicios específicos podrían no ser acumulables con otros descuentos vigentes del establecimiento.
            </p>
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
